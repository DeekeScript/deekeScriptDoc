<script setup>
import DefaultTheme from 'vitepress/theme'
import ParticleBackground from './components/ParticleBackground.vue'
import HomeHero from './components/HomeHero.vue'
import HomeStats from './components/HomeStats.vue'
import HomeCapabilities from './components/HomeCapabilities.vue'
import HomeVideo from './components/HomeVideo.vue'
import HomeCTA from './components/HomeCTA.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <ParticleBackground />
    </template>
    <template #home-hero-info>
      <HomeHero />
    </template>
    <template #home-hero-after>
      <HomeStats />
    </template>
    <template #home-features-before>
      <HomeCapabilities />
    </template>
    <template #home-features-after>
      <HomeVideo />
      <HomeCTA />
    </template>
  </Layout>
</template>
