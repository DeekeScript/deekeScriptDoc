import{_ as n,c as s,o as e,ah as p}from"./chunks/framework.BLqDW2Hv.js";const h=JSON.parse('{"title":"多线程-Thread","description":"DeekeScript - 多线程-Thread","frontmatter":{"title":"多线程-Thread","description":"DeekeScript - 多线程-Thread"},"headers":[],"relativePath":"advance/thread.md","filePath":"advance/thread.md"}'),l={name:"advance/thread.md"};function r(i,a,t,c,b,d){return e(),s("div",null,a[0]||(a[0]=[p(`<h1 id="多线程thread" tabindex="-1">多线程-Thread <a class="header-anchor" href="#多线程thread" aria-label="Permalink to “多线程-Thread”">​</a></h1><p>相信富有经验的开发者，会发现很多工具都有提供多线程支持；因为很多时候，我们需要同时执行两个操作（比如，采集直播间弹幕的时候，又要实时获取在线人数）；这个时候使用多线程的方式可以更好地满足我们的需求。DeekeScript本身也是支持多线程的；</p><p><code>我们推荐使用setTimeout或者setInterval等方式来代替多线程的方式实现相关功能，或者使用Engines来实现多线程；当前这种方式可能会出现未知的问题，请谨慎使用</code></p><blockquote><p>使用<a href="./engines/engines.html">Engines</a>来实现多线程效果</p><p>使用<a href="./../base/timer/timer.html">setInterval</a>定时器，通过异步的方式来实现系统的效果</p></blockquote><h2 id="多线程使用" tabindex="-1">多线程使用 <a class="header-anchor" href="#多线程使用" aria-label="Permalink to “多线程使用”">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>  run: function () {</span></span>
<span class="line"><span>    console.log(&#39;线程&#39;);</span></span>
<span class="line"><span>  } </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let thread = new java.lang.Thread(new java.lang.Runnable(obj))</span></span>
<span class="line"><span>thread.start();</span></span>
<span class="line"><span>thread.join();//这句会阻塞当前线程，直到线程结束，当前线程才会结束</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//如果你不使用join()方法，那么当前会立马结束，那么线程就会结束</span></span>
<span class="line"><span>//当然你也可以使用setInterval方法让当前线程保持活跃</span></span>
<span class="line"><span>//使用setInterval方法之后，也可以不使用thread.join()方法</span></span>
<span class="line"><span>setInterval(function () {</span></span>
<span class="line"><span>  console.log(&#39;线程保持活跃&#39;);</span></span>
<span class="line"><span>}, 1000);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="其他使用多线程的方法" tabindex="-1">其他使用多线程的方法 <a class="header-anchor" href="#其他使用多线程的方法" aria-label="Permalink to “其他使用多线程的方法”">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>  run: function () {</span></span>
<span class="line"><span>    console.log(&#39;线程&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//注意java.lang.Thread和java.lang.Runnable外层不需要引号</span></span>
<span class="line"><span>let javaImporterTest = JavaImporter(java.lang.Thread, java.lang.Runnable);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>with(javaImporterTest){</span></span>
<span class="line"><span>  new Thread(new Runnable(obj)).start();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,8)]))}const u=n(l,[["render",r]]);export{h as __pageData,u as default};
