import{_ as e,c as l,o as p,ah as a,j as s}from"./chunks/framework.BJ6Xb1OP.js";const b=JSON.parse('{"title":"webSocket","description":"DeekeScript - webSocket","frontmatter":{"title":"webSocket","description":"DeekeScript - webSocket"},"headers":[],"relativePath":"base/webSocket/webSocket.md","filePath":"base/webSocket/webSocket.md"}'),i={name:"base/webSocket/webSocket.md"};function t(c,n,o,r,d,h){return p(),l("div",null,n[0]||(n[0]=[a(`<h1 id="websocket" tabindex="-1">webSocket <a class="header-anchor" href="#websocket" aria-label="Permalink to “webSocket”">​</a></h1><h2 id="创建websocket" tabindex="-1">创建WebSocket <a class="header-anchor" href="#创建websocket" aria-label="Permalink to “创建WebSocket”">​</a></h2><p><code>使用WebSocket的时候，请在不使用的时候手动关闭；如果没有手动关闭，当使用Engines.closeAll()的时候，会关闭当前线程和子线程的WebSocket。</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let client = new WebSocket(&quot;ws://192.168.0.100:8080&quot;);</span></span>
<span class="line"><span>client.onMessage = function (msg){</span></span>
<span class="line"><span> 	console.log(&#39;消息来了&#39; + msg); </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//连接完成后</span></span>
<span class="line"><span>client.onOpen = function (){</span></span>
<span class="line"><span>  client.send(&quot;测试&quot;);//发送消息</span></span>
<span class="line"><span>  setTimeout(() =&gt; {</span></span>
<span class="line"><span>    client.close();</span></span>
<span class="line"><span>  }, 1000);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//连接关闭执行</span></span>
<span class="line"><span>client.onClose = function (code, reason){</span></span>
<span class="line"><span>    console.log(&#39;关闭了&#39;,code, reason);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//出现错误时执行</span></span>
<span class="line"><span>client.onError = function (errorMsg){</span></span>
<span class="line"><span>    console.log(&#39;出错了：&#39; + errorMsg);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//保持当前线程不关闭，否则当前主线程会立马关闭，导致WebSocket也立即关闭</span></span>
<span class="line"><span>setInterval(function () {</span></span>
<span class="line"><span>  console.log(&#39;当前线程不关闭&#39;);</span></span>
<span class="line"><span>}, 1000);</span></span></code></pre></div><h2 id="send-msg" tabindex="-1">send(msg) <a class="header-anchor" href="#send-msg" aria-label="Permalink to “send(msg)”">​</a></h2>`,5),s("blockquote",null,[s("p",{string:""},"msg"),s("p",{void:""},"返回")],-1),a(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let client = new WebSocket(&quot;ws://192.168.0.100:8080&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//连接完成后</span></span>
<span class="line"><span>client.onOpen = function (){</span></span>
<span class="line"><span>  client.send(&quot;测试&quot;);//发送消息</span></span>
<span class="line"><span>  setTimeout(() =&gt; {</span></span>
<span class="line"><span>    client.close();</span></span>
<span class="line"><span>  }, 1000);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="close" tabindex="-1">close() <a class="header-anchor" href="#close" aria-label="Permalink to “close()”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let client = new WebSocket(&quot;ws://192.168.0.100:8080&quot;);</span></span>
<span class="line"><span>client.close();//关闭当前连接</span></span></code></pre></div><h2 id="websocket-closeall" tabindex="-1">WebSocket.closeAll() <a class="header-anchor" href="#websocket-closeall" aria-label="Permalink to “WebSocket.closeAll()”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>WebSocket.closeAll();//关闭所有的客户端</span></span></code></pre></div>`,5)]))}const g=e(i,[["render",t]]);export{b as __pageData,g as default};
