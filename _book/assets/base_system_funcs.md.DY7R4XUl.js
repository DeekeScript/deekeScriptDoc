import{_ as i,c as t,o as p,ah as n,j as s,a}from"./chunks/framework.BJ6Xb1OP.js";const g=JSON.parse('{"title":"系统函数 - System","description":"DeekeScript - 系统函数 - System","frontmatter":{"title":"系统函数 - System","description":"DeekeScript - 系统函数 - System"},"headers":[],"relativePath":"base/system/funcs.md","filePath":"base/system/funcs.md"}'),l={name:"base/system/funcs.md"};function o(r,e,c,h,k,d){return p(),t("div",null,e[0]||(e[0]=[n(`<h1 id="系统函数-system" tabindex="-1">系统函数 - System <a class="header-anchor" href="#系统函数-system" aria-label="Permalink to “系统函数 - System”">​</a></h1><p>System对象，提供一些常用的方法。</p><h2 id="sleep-millisecond" tabindex="-1">sleep(millisecond) <a class="header-anchor" href="#sleep-millisecond" aria-label="Permalink to “sleep(millisecond)”">​</a></h2><blockquote><p>millisecond {number} 毫秒</p></blockquote><p>休眠millisecond毫秒</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;立即输出&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sleep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1秒钟后输出&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="time" tabindex="-1">time() <a class="header-anchor" href="#time" aria-label="Permalink to “time()”">​</a></h2>`,7),s("blockquote",null,[s("p",{string:""},"返回")],-1),n('<p>返回当前系统时间</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(System.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//输出：2024-03-07 12:12:12</span></span></code></pre></div><h2 id="currentactivity" tabindex="-1">currentActivity() <a class="header-anchor" href="#currentactivity" aria-label="Permalink to “currentActivity()”">​</a></h2>',3),s("blockquote",null,[s("p",{string:""},"返回")],-1),n('<p>返回最近一次监测到的正在运行的Activity名称，一般可以认为就是当前正在运行的Activity的名称。 此函数依赖于无障碍服务，如果服务未启动，则抛出异常并提示用户启动。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(System.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">currentActivity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//输出：top.deeke.script</span></span></code></pre></div><h2 id="currentpackage" tabindex="-1">currentPackage() <a class="header-anchor" href="#currentpackage" aria-label="Permalink to “currentPackage()”">​</a></h2>',3),s("blockquote",null,[s("p",{string:""},"返回")],-1),n('<p>返回最近一次监测到的正在运行的Package的名称，一般可以认为就是当前正在运行的Package的名称。 此函数依赖于无障碍服务，如果服务未启动，则抛出异常并提示用户启动。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(System.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">currentPackage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//输出：top.deeke.script</span></span></code></pre></div><h2 id="setclip-content" tabindex="-1">setClip(content) <a class="header-anchor" href="#setclip-content" aria-label="Permalink to “setClip(content)”">​</a></h2><blockquote><p>2.0版本即将上线</p></blockquote>',4),s("blockquote",null,[s("p",{string:""},"content"),s("p",{void:""},"返回")],-1),s("p",null,"将内容写入到剪切板中",-1),s("h2",{id:"getclip",tabindex:"-1"},[a("getClip() "),s("a",{class:"header-anchor",href:"#getclip","aria-label":"Permalink to “getClip()”"},"​")],-1),s("blockquote",null,[s("p",null,"2.0版本即将上线")],-1),s("blockquote",null,[s("p",{"string|null":""},"返回")],-1),s("p",null,"返回剪切板内容",-1),s("h2",{id:"toast-message",tabindex:"-1"},[a("toast(message) "),s("a",{class:"header-anchor",href:"#toast-message","aria-label":"Permalink to “toast(message)”"},"​")],-1),s("blockquote",null,[s("p",null,"msg {string} 要显示的信息"),s("p",{void:""},"返回")],-1),s("p",null,"以气泡显示信息message几秒。(具体时间取决于安卓系统，一般都是2秒)",-1),s("p",null,'注意，信息的显示是"异步"执行的，并且，不会等待信息消失程序才继续执行。',-1),s("h2",{id:"toastlong-message",tabindex:"-1"},[a("toastLong(message) "),s("a",{class:"header-anchor",href:"#toastlong-message","aria-label":"Permalink to “toastLong(message)”"},"​")],-1),s("blockquote",null,[s("p",null,"msg {string} 要显示的信息"),s("p",{void:""},"返回")],-1),s("p",null,"比toast(message)显示的更久一些，具体时长以开发机为准",-1),s("p",null,'注意，信息的显示是"异步"执行的，并且，不会等待信息消失程序才继续执行。',-1),s("h2",{id:"waitforactivity-activity-period-timeout",tabindex:"-1"},[a("waitForActivity(activity, period, timeout) "),s("a",{class:"header-anchor",href:"#waitforactivity-activity-period-timeout","aria-label":"Permalink to “waitForActivity(activity, period, timeout)”"},"​")],-1),s("blockquote",null,[s("p",null,"activity {string} 等待的Activity名称"),s("p",null,"period {number} 等待的毫秒数"),s("p",null,"timeout {number} 等待的总毫秒数"),s("p",{void:""},"返回")],-1),s("p",null,"等待Activity出现，period为检查Activity的间隔。如果timeout毫秒后未出现，则停止等待。",-1),s("h2",{id:"waitforpackage-package-period-timeout",tabindex:"-1"},[a("waitForPackage(package, period, timeout) "),s("a",{class:"header-anchor",href:"#waitforpackage-package-period-timeout","aria-label":"Permalink to “waitForPackage(package, period, timeout)”"},"​")],-1),s("blockquote",null,[s("p",null,"package {string} 等待的Package名称"),s("p",null,"period {number} 等待的毫秒数"),s("p",null,"timeout {number} 等待的总毫秒数"),s("p",{void:""},"返回")],-1),s("p",null,"等待Package出现，period为检查Package的间隔。如果timeout毫秒后未出现，则停止等待。",-1),s("h2",{id:"exit",tabindex:"-1"},[a("exit() "),s("a",{class:"header-anchor",href:"#exit","aria-label":"Permalink to “exit()”"},"​")],-1),s("blockquote",null,[s("p",{void:""},"返回")],-1),s("p",null,"关闭脚本引擎",-1),s("h2",{id:"aispeechtoken-key-secret",tabindex:"-1"},[a("AiSpeechToken(key, secret) "),s("a",{class:"header-anchor",href:"#aispeechtoken-key-secret","aria-label":"Permalink to “AiSpeechToken(key, secret)”"},"​")],-1),s("blockquote",null,[s("p",{string:""},"key"),s("p",{string:""},"secret"),s("p",{string:""},"返回")],-1),n(`<p>获取远程AI智能话术的token，通过此token再去调用对应的接口；下面是完整的JavaScript代码。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let baiduWenxin = {</span></span>
<span class="line"><span>    key: &#39;setting_baidu_wenxin_role&#39;,</span></span>
<span class="line"><span>    dataFrom: &#39;role&#39;,</span></span>
<span class="line"><span>    getToken(key, secret) {</span></span>
<span class="line"><span>        key = key || storage.get(&#39;setting_baidu_wenxin_key&#39;);</span></span>
<span class="line"><span>        secret = secret || storage.get(&#39;setting_baidu_wenxin_secret&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //查看是否激活了</span></span>
<span class="line"><span>        let body = System.AiSpeechToken(key, secret);</span></span>
<span class="line"><span>        Log.log(&#39;body&#39;, body);</span></span>
<span class="line"><span>        let aiRes = JSON.parse(body);</span></span>
<span class="line"><span>        Log.log(&#39;aiRes[\\&#39;data\\&#39;]&#39;, aiRes[&#39;data&#39;]);</span></span>
<span class="line"><span>        if (aiRes[&#39;code&#39;] === 0) {</span></span>
<span class="line"><span>            //开始激活</span></span>
<span class="line"><span>            return aiRes[&#39;data&#39;];</span></span>
<span class="line"><span>        } else if (aiRes[&#39;code&#39;] === 1) {</span></span>
<span class="line"><span>            FloatDialogs.show(&#39;提示&#39;, aiRes.msg);</span></span>
<span class="line"><span>            System.sleep(360000 * 1000);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            Log.log(&#39;网络异常了&#39;);</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    getComment(title) {</span></span>
<span class="line"><span>        let res = this.getToken();</span></span>
<span class="line"><span>        let access_token = res[&#39;access_token&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        let len = 20 + Math.round(30 * Math.random());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        let tmp = &#39;&#39;;</span></span>
<span class="line"><span>        if (title) {</span></span>
<span class="line"><span>            tmp = &#39;请你根据短视频标题生成一个有趣的评论内容，标题是：&#39; + title;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        let params = {</span></span>
<span class="line"><span>            &quot;messages&quot;: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>                    &quot;content&quot;: &quot;接下来，请你随机帮我生成一条评论，可以是夸别人的视频拍的好、也开始是写一条祝福语、也可以你最想告诉大众的想法&quot;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>            &quot;max_output_tokens&quot;: 60,//最大输出长度60</span></span>
<span class="line"><span>            &quot;system&quot;: System.getDataFrom(this.key, this.dataFrom, &#39;content&#39;),</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (title) {</span></span>
<span class="line"><span>            params = {</span></span>
<span class="line"><span>                &quot;messages&quot;: [</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>                        &quot;content&quot;: &quot;接下来，我会给你一条视频标题，请你帮我生成一条评论，评论内容一定要精简，尽可能能让人看了想和我互动，并且尽可能不要激怒别人；内容字数不要超过&quot; + len + &quot;字，这个很重要&quot;</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        &quot;role&quot;: &quot;assistant&quot;,</span></span>
<span class="line"><span>                        &quot;content&quot;: &#39;好的，我会尽我所能，请给我一条视频标题吧！&#39;</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>                        &quot;content&quot;: title</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>                &quot;max_output_tokens&quot;: 60,//最大输出长度60</span></span>
<span class="line"><span>                &quot;system&quot;: System.getDataFrom(this.key, this.dataFrom, &#39;content&#39;),</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //console.log(System.getDataFrom(this.key, this.dataFrom, &#39;content&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        res = Http.post(&#39;https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions?access_token=&#39; + access_token, params);</span></span>
<span class="line"><span>        if (res == null) {</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        let result = JSON.parse(res);</span></span>
<span class="line"><span>        Log.log(&#39;百度文心返回话术-1&#39;, title ? &#39;视频的标题是“&#39; + title + &#39;”，请结合你的角色，写一条少于&#39; + len + &#39;字的吸引人的评论内容&#39; : &#39;请你写一条字数小于&#39; + len + &#39;字的吸引人的评论视频内容&#39;, result);</span></span>
<span class="line"><span>        if (result &amp;&amp; result[&#39;result&#39;]) {</span></span>
<span class="line"><span>            if (result[&#39;result&#39;].substring(0, 1) === &#39;&quot;&#39; &amp;&amp; result[&#39;result&#39;].substring(result[&#39;result&#39;].length - 1) === &#39;&quot;&#39;) {</span></span>
<span class="line"><span>                result[&#39;result&#39;] = result[&#39;result&#39;].substring(1, result[&#39;result&#39;].length - 1);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return result[&#39;result&#39;] || false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="generatewindowelements" tabindex="-1">generateWindowElements() <a class="header-anchor" href="#generatewindowelements" aria-label="Permalink to “generateWindowElements()”">​</a></h2>`,3),s("blockquote",null,[s("p",{void:""},"返回")],-1),s("p",null,"该函数会将当前界面的所有控件记录到日志文件（APP上传日志后，即可拿到界面的控件的信息，一般用于bug定位使用）。",-1),s("h2",{id:"getdatafrom",tabindex:"-1"},[a("getDataFrom() "),s("a",{class:"header-anchor",href:"#getdatafrom","aria-label":"Permalink to “getDataFrom()”"},"​")],-1),s("blockquote",null,[s("p",{string:""},"key"),s("p",{string:""},"dataForm"),s("p",{string:""},"content"),s("p",{void:""},"返回")],-1),n(`<p>dataForm类型的表单数据获取</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let key = &#39;setting_baidu_wenxin_role&#39;;//deekeScript.json中设置的角色表单的name</span></span>
<span class="line"><span>//”role“是配置接口（api地址：/dkee/config）中返回的内容</span></span>
<span class="line"><span>System.getDataFrom(key, &#39;role&#39;, &#39;content&#39;);//获取当前设置的角色的内容</span></span></code></pre></div><h2 id="settimewindowshow-show" tabindex="-1">setTimeWindowShow(show) <a class="header-anchor" href="#settimewindowshow-show" aria-label="Permalink to “setTimeWindowShow(show)”">​</a></h2>`,3),s("blockquote",null,[s("p",{boolean:""},"show"),s("p",{void:""},"返回")],-1),n('<p>设置时间窗的显示状态</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>System.setTimeWindowShow(false);//关闭运行时间悬浮窗</span></span></code></pre></div>',2)]))}const m=i(l,[["render",o]]);export{g as __pageData,m as default};
