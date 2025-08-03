import{_ as a,c as e,o as n,ah as p}from"./chunks/framework.BJ6Xb1OP.js";const k=JSON.parse('{"title":"DeekeScript异步","description":"DeekeScript - DeekeScript异步","frontmatter":{"title":"DeekeScript异步","description":"DeekeScript - DeekeScript异步"},"headers":[],"relativePath":"promise/awa.md","filePath":"promise/awa.md"}'),i={name:"promise/awa.md"};function l(t,s,r,o,c,h){return n(),e("div",null,s[0]||(s[0]=[p(`<h1 id="deekescript异步" tabindex="-1">DeekeScript异步 <a class="header-anchor" href="#deekescript异步" aria-label="Permalink to “DeekeScript异步”">​</a></h1><h3 id="promise" tabindex="-1">Promise <a class="header-anchor" href="#promise" aria-label="Permalink to “Promise”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let promise = new Promise(function (resolve, reject) {</span></span>
<span class="line"><span>    System.sleep(1000);</span></span>
<span class="line"><span>    console.log(234);</span></span>
<span class="line"><span>    resolve(&#39;成功&#39;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>promise.then(resolve =&gt; {</span></span>
<span class="line"><span>    console.log(resolve);//成功</span></span>
<span class="line"><span>}, reject =&gt; {</span></span>
<span class="line"><span>    console.log(reject);</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="promise-定时器" tabindex="-1">Promise + 定时器 <a class="header-anchor" href="#promise-定时器" aria-label="Permalink to “Promise + 定时器”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let promise = new Promise(function (resolve, reject) {</span></span>
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
<span class="line"><span>});</span></span></code></pre></div>`,5)]))}const m=a(i,[["render",l]]);export{k as __pageData,m as default};
