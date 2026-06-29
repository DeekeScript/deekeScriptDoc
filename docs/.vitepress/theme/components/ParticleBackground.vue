<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationId = null
let running = true
let resizeObserver = null
let cssW = 0
let cssH = 0

const COLORS = [
  { r: 0, g: 106, b: 101 },   // #006A65
  { r: 0, g: 140, b: 133 },
  { r: 0, g: 80, b: 76 },
  { r: 0, g: 170, b: 162 },
  { r: 0, g: 60, b: 57 },
]

function colorToString(c, alpha) {
  return `rgba(${c.r},${c.g},${c.b},${alpha})`
}

function randomRange(min, max) {
  return min + Math.random() * (max - min)
}

// ===== Single Hurricane System =====

const PARTICLE_COUNT = 12500
const particles = []

// Hurricane state
let hx = 0, hy = 0           // center
let hvx = 0, hvy = 0         // drift velocity
const MAX_RADIUS_RATIO = 1.6 // hurricane influence extends well beyond screen

let mouse = { x: -500, y: -500, active: false }

function initParticles() {
  particles.length = 0
  const maxR = Math.max(cssW, cssH) * MAX_RADIUS_RATIO * 0.5

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    // Density: more particles near center (power distribution)
    const distNorm = Math.pow(Math.random(), 1.6)

    const dist = distNorm * maxR
    const angle = Math.random() * Math.PI * 2

    // Size: larger near center, but edges still have visible particles
    const size = randomRange(0.3, 2.5) * (1 - distNorm * 0.5)

    // Opacity: bright near center, gently fading outward
    const opacity = randomRange(0.2, 0.85) * (1 - distNorm * 0.55)

    const color = COLORS[Math.floor(Math.random() * COLORS.length)]

    particles.push({
      dist,
      angle,
      size,
      opacity,
      color,
      speedMod: randomRange(0.6, 1.5)
    })
  }

  // Sort by opacity for depth
  particles.sort((a, b) => a.opacity - b.opacity)
}

// ===== Animation =====

const BASE_ANGULAR_SPEED = 0.025
const DRIFT_SPEED = 0.3       // center random walk speed
const DRIFT_CHANGE = 0.015    // how often drift direction changes

function update(timestamp) {
  // Random walk for hurricane center
  hvx += (Math.random() - 0.5) * DRIFT_CHANGE
  hvy += (Math.random() - 0.5) * DRIFT_CHANGE

  // Clamp drift speed
  const driftSpeed = Math.sqrt(hvx * hvx + hvy * hvy)
  if (driftSpeed > DRIFT_SPEED) {
    hvx = (hvx / driftSpeed) * DRIFT_SPEED
    hvy = (hvy / driftSpeed) * DRIFT_SPEED
  }

  hx += hvx
  hy += hvy

  // Constrain center Y to top portion of viewport
  const topArea = cssH * 0.5
  const margin = 120
  let minY = -margin
  let maxY = topArea + margin

  // Bounce off screen edges (horizontal full width, vertical constrained)
  if (hx < -margin) { hx = -margin; hvx *= -1 }
  if (hx > cssW + margin) { hx = cssW + margin; hvx *= -1 }
  if (hy < minY) { hy = minY; hvy *= -1 }
  if (hy > maxY) { hy = maxY; hvy *= -1 }

  // Mouse: gentle pull
  if (mouse.active) {
    const dx = hx - mouse.x
    const dy = hy - mouse.y
    const d = Math.sqrt(dx * dx + dy * dy)
    if (d > 1) {
      hvx -= (dx / d) * 0.04
      hvy -= (dy / d) * 0.04
    }
  }

  // Update particles
  for (const p of particles) {
    const effectiveDist = Math.max(p.dist, 3)
    // Speed: faster near center (inverse relationship)
    const angularSpeed = BASE_ANGULAR_SPEED * p.speedMod * (80 / (effectiveDist + 8))
    p.angle += angularSpeed
    if (p.angle > Math.PI * 200) p.angle -= Math.PI * 200
  }
}

function draw(ctx) {
  const maxR = Math.max(cssW, cssH) * MAX_RADIUS_RATIO * 0.5

  // Faint overall glow
  const glow = ctx.createRadialGradient(hx, hy, 0, hx, hy, maxR * 0.8)
  glow.addColorStop(0, 'rgba(0,106,101,0.04)')
  glow.addColorStop(0.3, 'rgba(0,106,101,0.02)')
  glow.addColorStop(1, 'rgba(0,106,101,0)')
  ctx.fillStyle = glow
  ctx.beginPath()
  ctx.arc(hx, hy, maxR * 0.8, 0, Math.PI * 2)
  ctx.fill()

  // Draw particles
  for (const p of particles) {
    const x = hx + Math.cos(p.angle) * p.dist
    const y = hy + Math.sin(p.angle) * p.dist

    if (x < -30 || x > cssW + 30 || y < -30 || y > cssH + 30) continue

    // Opacity falloff with distance from center
    const distNorm = p.dist / maxR
    const falloff = distNorm < 0.5 ? 1 : Math.max(0.05, 1 - (distNorm - 0.5) / 0.5)
    const alpha = p.opacity * falloff

    if (alpha < 0.02) continue

    ctx.beginPath()
    ctx.arc(x, y, p.size * (0.7 + falloff * 0.3), 0, Math.PI * 2)
    ctx.fillStyle = colorToString(p.color, alpha)
    ctx.fill()
  }
}

function resize() {
  const canvas = canvasRef.value
  if (!canvas) return
  const dpr = window.devicePixelRatio || 1
  cssW = window.innerWidth
  cssH = window.innerHeight
  canvas.width = cssW * dpr
  canvas.height = cssH * dpr
  canvas.style.width = cssW + 'px'
  canvas.style.height = cssH + 'px'

  // Center hurricane in middle initially
  hx = cssW / 2
  hy = cssH * 0.35
  hvx = 0
  hvy = 0

  initParticles()
}

function animate(ts) {
  if (!running) return
  const canvas = canvasRef.value
  if (!canvas) {
    animationId = requestAnimationFrame(animate)
    return
  }
  const ctx = canvas.getContext('2d')
  const dpr = window.devicePixelRatio || 1

  ctx.save()
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, cssW, cssH)

  update(ts)
  draw(ctx)

  ctx.restore()
  animationId = requestAnimationFrame(animate)
}

function onMouseMove(e) {
  mouse.x = e.clientX
  mouse.y = e.clientY
  mouse.active = true
}

function onMouseLeave() {
  mouse.active = false
}

function onVisibilityChange() {
  if (document.hidden) {
    running = false
    if (animationId) { cancelAnimationFrame(animationId); animationId = null }
  } else {
    running = true
    animationId = requestAnimationFrame(animate)
  }
}

onMounted(() => {
  resize()
  resizeObserver = new ResizeObserver(() => resize())
  resizeObserver.observe(document.body)
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  window.addEventListener('mouseleave', onMouseLeave)
  document.addEventListener('visibilitychange', onVisibilityChange)
  animationId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  running = false
  if (animationId) { cancelAnimationFrame(animationId); animationId = null }
  if (resizeObserver) resizeObserver.disconnect()
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseleave', onMouseLeave)
  document.removeEventListener('visibilitychange', onVisibilityChange)
})
</script>

<template>
  <canvas ref="canvasRef" class="particle-canvas" />
</template>

<style scoped>
.particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
</style>
