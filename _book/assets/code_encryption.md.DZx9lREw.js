import{_ as a,c as s,o as n,ah as t}from"./chunks/framework.DqceGHDO.js";const b=JSON.parse('{"title":"混淆加密","description":"DeekeScript - 混淆加密","frontmatter":{"title":"混淆加密","description":"DeekeScript - 混淆加密"},"headers":[],"relativePath":"code/encryption.md","filePath":"code/encryption.md"}'),p={name:"code/encryption.md"};function o(i,e,l,r,c,u){return n(),s("div",null,e[0]||(e[0]=[t(`<h1 id="混淆加密" tabindex="-1">混淆加密 <a class="header-anchor" href="#混淆加密" aria-label="Permalink to “混淆加密”">​</a></h1><p>JavaScript代码混淆，一定程度上达到了保护原代码的目的。DeekeScript默认采用了UglifyJS插件进行代码混淆。</p><blockquote><p>注意：开发模式下不建议使用混淆，生产环境可以使用混淆。同时还需要了解到混淆之后，给生产bug排查带来了一定阻碍。</p></blockquote><h2 id="uglifyjs" tabindex="-1">UglifyJS <a class="header-anchor" href="#uglifyjs" aria-label="Permalink to “UglifyJS”">​</a></h2><blockquote><p>UglifyJS 是一个 JavaScript 压缩与混淆工具，专注于减少代码体积、优化逻辑结构，并提供基础的变量名混淆功能。它是前端工程化中常用的代码优化工具。</p></blockquote><h3 id="核心功能" tabindex="-1">核心功能 <a class="header-anchor" href="#核心功能" aria-label="Permalink to “核心功能”">​</a></h3><blockquote><p>代码压缩</p></blockquote><pre><code>删除空格、换行、注释。

缩短变量名（如 myVariable → a）。

合并表达式（如 a=1; b=2; → a=1,b=2;）。
</code></pre><blockquote><p>语法优化</p></blockquote><pre><code>移除未使用的代码（Dead Code Elimination）。

简化逻辑（如 if (true) { ... } 直接执行内部代码）。

数学表达式优化（如 2 * 3 → 6）。
</code></pre><blockquote><p>变量混淆</p></blockquote><pre><code>重命名局部变量（全局变量默认不混淆）。

可选混淆属性名（需手动配置）。
</code></pre><h3 id="执行步骤" tabindex="-1">执行步骤： <a class="header-anchor" href="#执行步骤" aria-label="Permalink to “执行步骤：”">​</a></h3><blockquote><p>打开项目根目录下面的package.json文件，可以看到如下配置：</p></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>  &quot;build&quot;: &quot;cpx \\&quot;src/**/*\\&quot; script&quot;,</span></span>
<span class="line"><span>  &quot;build-zip&quot;: &quot;cpx \\&quot;src/**/*\\&quot; script &amp;&amp; ts-node --esm ./deekeScriptZipBuild&quot;,</span></span>
<span class="line"><span>  &quot;build-obfuscator&quot;: &quot;cpx \\&quot;src/**/*\\&quot; script &amp;&amp; ts-node --esm ./gulpfile&quot;,</span></span>
<span class="line"><span>  &quot;build-obfuscator-zip&quot;: &quot;cpx \\&quot;src/**/*\\&quot; script &amp;&amp; ts-node --esm ./gulpfile &amp;&amp; ts-node --esm ./deekeScriptZipBuild&quot;,</span></span>
<span class="line"><span>  &quot;postinstall&quot;: &quot;ts-node --esm init&quot;</span></span>
<span class="line"><span>},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>build命令是将源码复制到script文件夹；build-zip命令是将源码复制到script文件夹并打包成zip；包含“obfuscator”相关的命令则是在原有命令基础上增加代码混淆。</p><p>混淆执行命令：npm run build-obfuscator</p></blockquote>`,16)]))}const q=a(p,[["render",o]]);export{b as __pageData,q as default};
