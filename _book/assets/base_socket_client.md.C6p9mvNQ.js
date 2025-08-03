import{_ as e,c as t,o as l,ah as s,j as n}from"./chunks/framework.BJ6Xb1OP.js";const d=JSON.parse('{"title":"Socket.IO-客户端","description":"DeekeScript - Socket.IO-客户端","frontmatter":{"title":"Socket.IO-客户端","description":"DeekeScript - Socket.IO-客户端"},"headers":[],"relativePath":"base/socket/client.md","filePath":"base/socket/client.md"}'),i={name:"base/socket/client.md"};function p(o,a,c,r,k,u){return l(),t("div",null,a[0]||(a[0]=[s(`<h1 id="socket-io-客户端" tabindex="-1">Socket.IO-客户端 <a class="header-anchor" href="#socket-io-客户端" aria-label="Permalink to “Socket.IO-客户端”">​</a></h1><p><code>注意：在使用socket.io客户端的时候，需要手动使用disconnect()方法关闭连接。尤其在设置断开后重连的情况。如果没有手动关闭，当使用Engines.closeAll()的时候，会关闭当前线程和子线程的socket.io客户端</code></p><blockquote><p>创建socket.io客户端</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>//创建socket.io客户端   自动重连   超时重连延时为5000毫秒</span></span>
<span class="line"><span>let socketIOClient = SocketIOClient.getInstance(&quot;http://192.168.1.106:3000&quot;, true, 5000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>socketIOClient.on(&quot;connect_error&quot;, (error) =&gt; {</span></span>
<span class="line"><span>    console.error(&quot;连接错误:&quot;, error);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>socketIOClient.on(&quot;error&quot;, (error) =&gt; {</span></span>
<span class="line"><span>    console.error(&quot;通用错误:&quot;, error);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>socketIOClient.on(&quot;connect_timeout&quot;, () =&gt; {</span></span>
<span class="line"><span>    console.error(&quot;连接超时&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>socketIOClient.on(&quot;connect&quot;, function(){</span></span>
<span class="line"><span>    console.log(&#39;是否连接成功：&#39;, socketIOClient.isConnected());</span></span>
<span class="line"><span>    socketIOClient.on(&quot;message&quot;, function(data) {</span></span>
<span class="line"><span>        console.log(data);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //向服务器发送事件和数据</span></span>
<span class="line"><span>    socketIOClient.emit(&quot;message&quot;, {</span></span>
<span class="line"><span>        name: &quot;DeekeScript&quot;,</span></span>
<span class="line"><span>        age: 3,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>socketIOClient.connect();//放在事件定义之前</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let i = 0;</span></span>
<span class="line"><span>//防止当前脚本关闭，否则当前主线程会立马关闭，导致WebSocket也立即关闭</span></span>
<span class="line"><span>setInterval(function () {</span></span>
<span class="line"><span>  console.log(&#39;当前线程不关闭&#39;);</span></span>
<span class="line"><span>}, 1000);</span></span></code></pre></div><h2 id="getinstance-url-reconnect-timeout" tabindex="-1">getInstance(url, reconnect, timeout) <a class="header-anchor" href="#getinstance-url-reconnect-timeout" aria-label="Permalink to “getInstance(url, reconnect, timeout)”">​</a></h2><blockquote><p>url {string} 服务器地址</p><p>reconnect {boolean} 是否自动重连</p><p>timeout {number} 连接超时时间</p><p>创建socket.io客户端实例</p></blockquote><h2 id="connect" tabindex="-1">connect() <a class="header-anchor" href="#connect" aria-label="Permalink to “connect()”">​</a></h2>`,7),n("blockquote",null,[n("p",{void:""},"返回")],-1),s('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>socketIOClient.connect();//连接服务端</span></span></code></pre></div><h2 id="isconnected" tabindex="-1">isConnected() <a class="header-anchor" href="#isconnected" aria-label="Permalink to “isConnected()”">​</a></h2>',2),n("blockquote",null,[n("p",{boolean:""},"返回"),n("p",null,"描述：判断是否连接成功")],-1),s('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let bool = socketIOClient.isConnected();</span></span></code></pre></div><h2 id="setreconnect-reconnect" tabindex="-1">setReconnect(reconnect) <a class="header-anchor" href="#setreconnect-reconnect" aria-label="Permalink to “setReconnect(reconnect)”">​</a></h2><blockquote><p>reconnect {boolean} 是否自动重连 设置是否自动重连</p></blockquote><h2 id="disconnect" tabindex="-1">disconnect() <a class="header-anchor" href="#disconnect" aria-label="Permalink to “disconnect()”">​</a></h2>',4),n("blockquote",null,[n("p",{void:""},"返回")],-1),s('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>socketIOClient.disconnect();//关闭连接</span></span></code></pre></div><h2 id="on-eventname-callback-function" tabindex="-1">on(eventName, callback:function) <a class="header-anchor" href="#on-eventname-callback-function" aria-label="Permalink to “on(eventName, callback:function)”">​</a></h2>',2),n("blockquote",null,[n("p",{string:""},"eventName"),n("p",{function:""},"callback"),n("p",null,"描述：监听服务端发送的消息")],-1),s(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>socketIOClient.on(&quot;connect&quot;, () =&gt; {</span></span>
<span class="line"><span>    console.error(&quot;连接成功&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>socketIOClient.on(&quot;connect_error&quot;, (error) =&gt; {</span></span>
<span class="line"><span>    console.error(&quot;连接错误:&quot;, error);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>socketIOClient.on(&quot;error&quot;, (error) =&gt; {</span></span>
<span class="line"><span>    console.error(&quot;通用错误:&quot;, error);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>socketIOClient.on(&quot;connect_timeout&quot;, () =&gt; {</span></span>
<span class="line"><span>    console.error(&quot;连接超时&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//消息监听</span></span>
<span class="line"><span>socketIOClient.on(&quot;message&quot;, function(data) {</span></span>
<span class="line"><span>    console.log(data);</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="emit-eventname-msg" tabindex="-1">emit(eventName, msg) <a class="header-anchor" href="#emit-eventname-msg" aria-label="Permalink to “emit(eventName, msg)”">​</a></h2>`,2),n("blockquote",null,[n("p",null,"eventName {string} 事件名称"),n("p",null,"msg {object} 消息内容"),n("p",{void:""},"返回"),n("p",null,"向服务器发送事件和数据")],-1),s(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>socketIOClient.emit(&quot;message&quot;, {</span></span>
<span class="line"><span>    name: &quot;DeekeScript&quot;,</span></span>
<span class="line"><span>    age: 3,</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="emit-eventname-msg-callback" tabindex="-1">emit(eventName, msg, callback) <a class="header-anchor" href="#emit-eventname-msg-callback" aria-label="Permalink to “emit(eventName, msg, callback)”">​</a></h2>`,2),n("blockquote",null,[n("p",null,"eventName {string} 事件名称"),n("p",null,"msg {object} 消息内容"),n("p",null,"callback {function} 服务器确认后的回调函数"),n("p",{void:""},"返回"),n("p",null,"向服务器发送事件和数据")],-1),s(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>socketIOClient.emit(&quot;message&quot;, {</span></span>
<span class="line"><span>    name: &quot;DeekeScript&quot;,</span></span>
<span class="line"><span>    age: 3,</span></span>
<span class="line"><span>}, function(response) {</span></span>
<span class="line"><span>   console.log(&quot;收到 ack: &quot; + response);</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="off-eventname" tabindex="-1">off(eventName) <a class="header-anchor" href="#off-eventname" aria-label="Permalink to “off(eventName)”">​</a></h2><blockquote><p>eventName {string} 事件名称</p><p>移除指定事件监听</p></blockquote><h2 id="off-eventname-callback" tabindex="-1">off(eventName, callback) <a class="header-anchor" href="#off-eventname-callback" aria-label="Permalink to “off(eventName, callback)”">​</a></h2><blockquote><p>eventName {string} 事件名称</p><p>callback {function} 监听函数</p><p>移除指定事件监听</p></blockquote><h2 id="off" tabindex="-1">off() <a class="header-anchor" href="#off" aria-label="Permalink to “off()”">​</a></h2><blockquote><p>移除所有事件监听</p></blockquote>`,7)]))}const b=e(i,[["render",p]]);export{d as __pageData,b as default};
