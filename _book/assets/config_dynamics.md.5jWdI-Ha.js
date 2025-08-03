import{_ as p,c as e,o as l,ag as n,j as s}from"./chunks/framework.S-Qvb3wi.js";const m=JSON.parse('{"title":"动态配置","description":"DeekeScript - 动态配置","frontmatter":{"title":"动态配置","description":"DeekeScript - 动态配置"},"headers":[],"relativePath":"config/dynamics.md","filePath":"config/dynamics.md"}'),t={name:"config/dynamics.md"};function i(r,a,u,o,c,b){return l(),e("div",null,a[0]||(a[0]=[n('<h1 id="动态配置" tabindex="-1">动态配置 <a class="header-anchor" href="#动态配置" aria-label="Permalink to &quot;动态配置&quot;">​</a></h1><p>很多时候，开发者需要控制app主页的功能模块，比如年会员展示所有功能图标，试用会员只展示部分图标等；同时，有时候还需要根据不同等级的用户来设置不同的功能配置参数。这样更加细化盈利策略。</p><h2 id="deekescriptjson" tabindex="-1">DeekeScriptJson <a class="header-anchor" href="#deekescriptjson" aria-label="Permalink to &quot;DeekeScriptJson&quot;">​</a></h2><p>DeekeScript给开发者提供了DeekeScriptJson对象，可以使用此对象来进行主界面功能模块设置、功能参数设置、设置页面的动态配置等</p><h3 id="setdeekescriptjsongroup-str" tabindex="-1">setDeekeScriptJsonGroup(str) <a class="header-anchor" href="#setdeekescriptjsongroup-str" aria-label="Permalink to &quot;setDeekeScriptJsonGroup(str)&quot;">​</a></h3>',5),s("blockquote",null,[s("p",{string:""},"str"),s("p",null,"返回 {boolean} 如果出错，会抛出异常")],-1),n(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//这里可以调用远程接口来获取数据</span></span>
<span class="line"><span>let obj = {</span></span>
<span class="line"><span>    &quot;groups&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;title&quot;: &quot;DY·万能引流&quot;,</span></span>
<span class="line"><span>            &quot;titleHidden&quot;: false,</span></span>
<span class="line"><span>            &quot;hidden&quot;: false,</span></span>
<span class="line"><span>            &quot;methods&quot;: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;title&quot;: &quot;点赞功能&quot;,</span></span>
<span class="line"><span>                    &quot;icon&quot;: &quot;img/finger.png&quot;,</span></span>
<span class="line"><span>                    &quot;jsFile&quot;: &quot;tasks/task_dy_toker.js&quot;,</span></span>
<span class="line"><span>                    &quot;settingPage&quot;: {</span></span>
<span class="line"><span>                        &quot;params&quot;: [</span></span>
<span class="line"><span>                            {</span></span>
<span class="line"><span>                                &quot;type&quot;: &quot;numberRange&quot;,</span></span>
<span class="line"><span>                                &quot;label&quot;: &quot;观看时长（秒）&quot;,</span></span>
<span class="line"><span>                                &quot;name&quot;: &quot;toker_view_video_second&quot;,</span></span>
<span class="line"><span>                                &quot;max&quot;: 60,</span></span>
<span class="line"><span>                                &quot;min&quot;: 5,</span></span>
<span class="line"><span>                                &quot;value&quot;: 12,</span></span>
<span class="line"><span>                                &quot;step&quot;: 1</span></span>
<span class="line"><span>                            },</span></span>
<span class="line"><span>                            {</span></span>
<span class="line"><span>                                &quot;type&quot;: &quot;textArea&quot;,</span></span>
<span class="line"><span>                                &quot;label&quot;: &quot;关键词筛选（多个使用逗号隔开）&quot;,</span></span>
<span class="line"><span>                                &quot;name&quot;: &quot;toker_view_video_keywords&quot;,</span></span>
<span class="line"><span>                                &quot;value&quot;: &quot;&quot;,</span></span>
<span class="line"><span>                                &quot;notice&quot;: &quot;* 关键词不填则操作所有&quot;</span></span>
<span class="line"><span>                            },</span></span>
<span class="line"><span>                            {</span></span>
<span class="line"><span>                                &quot;type&quot;: &quot;numberRange&quot;,</span></span>
<span class="line"><span>                                &quot;label&quot;: &quot;点赞频率（%）&quot;,</span></span>
<span class="line"><span>                                &quot;name&quot;: &quot;toker_zan_rate&quot;,</span></span>
<span class="line"><span>                                &quot;max&quot;: 100,</span></span>
<span class="line"><span>                                &quot;min&quot;: 0,</span></span>
<span class="line"><span>                                &quot;step&quot;: 1,</span></span>
<span class="line"><span>                                &quot;value&quot;: 100</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        ]</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str = JSON.stringify(obj);</span></span>
<span class="line"><span>DeekeScriptJson.setDeekeScriptJsonGroup(str);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h3 id="setsettinglists-str" tabindex="-1">setSettingLists(str) <a class="header-anchor" href="#setsettinglists-str" aria-label="Permalink to &quot;setSettingLists(str)&quot;">​</a></h3>`,2),s("blockquote",null,[s("p",null,"设置“系统设置”界面功能模块"),s("p",{string:""},"str"),s("p",null,"返回 {boolean} 如果出错，会抛出异常")],-1),n(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//这里可以调用远程接口来获取数据</span></span>
<span class="line"><span>let obj = {</span></span>
<span class="line"><span>    &quot;settingLists&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>        &quot;title&quot;: &quot;联系客服&quot;,</span></span>
<span class="line"><span>        &quot;icon&quot;: &quot;img/kefu.png&quot;,</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;customerService&quot;,</span></span>
<span class="line"><span>        &quot;description&quot;: &quot;客服微信：DeekeScript&quot;,</span></span>
<span class="line"><span>        &quot;hidden&quot;: false</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>        &quot;title&quot;: &quot;功能说明&quot;,</span></span>
<span class="line"><span>        &quot;icon&quot;: &quot;img/manual.png&quot;,</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;notice&quot;,</span></span>
<span class="line"><span>        &quot;file&quot;: &quot;task.html&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str = JSON.stringify(obj);</span></span>
<span class="line"><span>DeekeScriptJson.setSettingLists(str);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="tojson" tabindex="-1">toJson() <a class="header-anchor" href="#tojson" aria-label="Permalink to &quot;toJson()&quot;">​</a></h3>`,2),s("blockquote",null,[s("p",null,"获取最新的deekeScript.json文件内容"),s("p",{json对象:""},"返回")],-1)]))}const d=p(t,[["render",i]]);export{m as __pageData,d as default};
