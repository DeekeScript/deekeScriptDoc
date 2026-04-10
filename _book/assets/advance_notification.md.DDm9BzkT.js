import{_ as p,c as i,o as l,j as s,ag as n,a as e}from"./chunks/framework.S-Qvb3wi.js";const h=JSON.parse('{"title":"系统通知","description":"DeekeScript - 系统通知","frontmatter":{"title":"系统通知","description":"DeekeScript - 系统通知"},"headers":[],"relativePath":"advance/notification.md","filePath":"advance/notification.md"}'),t={name:"advance/notification.md"};function c(r,a,o,b,d,u){return l(),i("div",null,a[0]||(a[0]=[s("h1",{id:"系统通知",tabindex:"-1"},[e("系统通知 "),s("a",{class:"header-anchor",href:"#系统通知","aria-label":'Permalink to "系统通知"'},"​")],-1),s("p",null,"主要接收系统内其他App发出的通知",-1),s("h2",{id:"startservice",tabindex:"-1"},[e("startService() "),s("a",{class:"header-anchor",href:"#startservice","aria-label":'Permalink to "startService()"'},"​")],-1),s("blockquote",null,[s("p",{void:""},"返回")],-1),n(`<p>启动服务</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>let hasAccess = Access.hasNotificationAccess();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(&#39;是否有通知读取权限&#39;, hasAccess);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (!hasAccess) {</span></span>
<span class="line"><span>    Access.requestNotificationAccess();</span></span>
<span class="line"><span>    System.exit();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NotificationBridge.startService();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="startlisteninglistenerlistenerclosed" tabindex="-1">startListening(listener, listenerClosed) <a class="header-anchor" href="#startlisteninglistenerlistenerclosed" aria-label="Permalink to &quot;startListening(listener, listenerClosed)&quot;">​</a></h2>`,3),s("blockquote",null,[s("p",null,"listener {Function} 收到通知执行的方法"),s("p",null,"listenerClosed {Function} 通知关闭执行的方法"),s("p",{void:""},"返回")],-1),n(`<p>监听通知</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>let hasAccess = Access.hasNotificationAccess();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(&#39;是否有通知读取权限&#39;, hasAccess);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (!hasAccess) {</span></span>
<span class="line"><span>    Access.requestNotificationAccess();</span></span>
<span class="line"><span>    System.exit();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NotificationBridge.startService();</span></span>
<span class="line"><span>NotificationBridge.startListening((packageName, title, text) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;收到通知&#39;, packageName, title, text);</span></span>
<span class="line"><span>}, (packageName, title, text) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;通知已关闭&#39;, packageName, title, text);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NotificationBridge.startService();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setInterval(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;正在监听中...&#39;);</span></span>
<span class="line"><span>}, 10000);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="stopservice" tabindex="-1">stopService() <a class="header-anchor" href="#stopservice" aria-label="Permalink to &quot;stopService()&quot;">​</a></h2>`,3),s("blockquote",null,[s("p",{void:""},"返回")],-1),n('<p>停止服务</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NotificationBridge.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stopService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',2)]))}const g=p(t,[["render",c]]);export{h as __pageData,g as default};
