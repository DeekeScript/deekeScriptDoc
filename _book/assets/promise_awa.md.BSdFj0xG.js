import{_ as n,c as a,o as e,ag as p}from"./chunks/framework.S-Qvb3wi.js";const u=JSON.parse('{"title":"DeekeScript异步","description":"DeekeScript - DeekeScript异步","frontmatter":{"title":"DeekeScript异步","description":"DeekeScript - DeekeScript异步"},"headers":[],"relativePath":"promise/awa.md","filePath":"promise/awa.md"}'),l={name:"promise/awa.md"};function r(i,s,c,t,o,b){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="deekescript异步" tabindex="-1">DeekeScript异步 <a class="header-anchor" href="#deekescript异步" aria-label="Permalink to &quot;DeekeScript异步&quot;">​</a></h1><h3 id="promise" tabindex="-1">Promise <a class="header-anchor" href="#promise" aria-label="Permalink to &quot;Promise&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let promise = new Promise(function (resolve, reject) {</span></span>
<span class="line"><span>    System.sleep(1000);</span></span>
<span class="line"><span>    console.log(234);</span></span>
<span class="line"><span>    resolve(&#39;成功&#39;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>promise.then(resolve =&gt; {</span></span>
<span class="line"><span>    console.log(resolve);//成功</span></span>
<span class="line"><span>}, reject =&gt; {</span></span>
<span class="line"><span>    console.log(reject);</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="promise-定时器" tabindex="-1">Promise + 定时器 <a class="header-anchor" href="#promise-定时器" aria-label="Permalink to &quot;Promise + 定时器&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let promise = new Promise(function (resolve, reject) {</span></span>
<span class="line"><span>    setTimeout(function () {</span></span>
<span class="line"><span>        console.log(234);</span></span>
<span class="line"><span>        resolve(&#39;成功&#39;);</span></span>
<span class="line"><span>    }, 1000);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>promise.then(resolve =&gt; {</span></span>
<span class="line"><span>    console.log(resolve);//成功</span></span>
<span class="line"><span>}, reject =&gt; {</span></span>
<span class="line"><span>    console.log(reject);</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,5)]))}const d=n(l,[["render",r]]);export{u as __pageData,d as default};
