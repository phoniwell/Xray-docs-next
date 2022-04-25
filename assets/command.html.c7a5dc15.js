import{_ as s,r,o as i,c as t,a as e,b as l,w as c,F as d,d as o,e as n}from"./app.9843a57b.js";const u={},p=o(`<h1 id="\u547D\u4EE4\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u53C2\u6570" aria-hidden="true">#</a> \u547D\u4EE4\u53C2\u6570</h1><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>Xray \u4F7F\u7528 Go \u98CE\u683C\u7684\u547D\u4EE4\u53CA\u53C2\u6570</p></div><h2 id="\u83B7\u53D6\u57FA\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a> \u83B7\u53D6\u57FA\u672C\u547D\u4EE4</h2><p>\u60A8\u53EF\u4EE5\u8FD0\u884C <code>xray help</code> \u6765\u83B7\u5F97\u6240\u6709 xray \u6700\u57FA\u7840\u7684\u7528\u6CD5, \u4EE5\u53CA\u53EF\u7528\u7684\u547D\u4EE4\u53CA\u8BF4\u660E.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Xray is a platform for building proxies.

Usage:

        xray &lt;command&gt; [arguments]

The commands are:

        run          Run Xray with config, the default command
        version      Show current version of Xray
        api          Call an API in an Xray process
        tls          TLS tools
        uuid         Generate new UUIDs

Use &quot;xray help &lt;command&gt;&quot; for more information about a command.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="xray-run" tabindex="-1"><a class="header-anchor" href="#xray-run" aria-hidden="true">#</a> xray run</h3><p>\u6307\u5B9A\u4E00\u4E2A\u6216\u591A\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u5E76\u8FD0\u884C\u3002</p><p>\u4F7F\u7528\u65B9\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> xray run [-c config.json] [-confdir dir]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Run Xray with config, the default command.

The -config=file, -c=file flags set the config files for
Xray. Multiple assign is accepted.

The -confdir=dir flag sets a dir with multiple json config

The -format=json flag sets the format of config files.
Default &quot;json&quot;.

The -test flag tells Xray to test config files only,
without launching the server
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="xray-version" tabindex="-1"><a class="header-anchor" href="#xray-version" aria-hidden="true">#</a> xray version</h3><p>\u8F93\u51FA Xray \u7248\u672C\u3001 Golang \u7248\u672C\u7B49\u4FE1\u606F\u3002</p><p>\u4F7F\u7528\u65B9\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> xray version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="xray-api" tabindex="-1"><a class="header-anchor" href="#xray-api" aria-hidden="true">#</a> xray api</h3><p>\u8C03\u7528 Xray \u7684 gRPC API\uFF0C\u9700\u8981\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5F00\u542F\u3002</p><p>\u4F7F\u7528\u65B9\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xray api &lt;command&gt; [arguments]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        restartlogger Restart the logger
        stats         Get statistics
        statsquery    Query statistics
        statssys      Get system statistics
        adi           Add inbounds
        ado           Add outbounds
        rmi           Remove inbounds
        rmo           Remove outbounds
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="xray-tls" tabindex="-1"><a class="header-anchor" href="#xray-tls" aria-hidden="true">#</a> xray tls</h3><p>\u4E00\u4E9B\u4E0E TLS \u76F8\u5173\u7684\u5DE5\u5177\u3002</p><p>\u4F7F\u7528\u65B9\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xray tls &lt;command&gt; [arguments]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        cert         Generate TLS certificates
        ping         Ping the domain with TLS handshake
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="xray-uuid" tabindex="-1"><a class="header-anchor" href="#xray-uuid" aria-hidden="true">#</a> xray uuid</h3><p>\u751F\u6210 UUID\u3002</p><p>\u4F7F\u7528\u65B9\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xray uuid
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,28),m={class:"custom-container tip"},b=e("p",{class:"custom-container-title"},"\u63D0\u793A",-1),h=e("p",null,[n("\u5F53"),e("code",null,"-config"),n("\u6CA1\u6709\u6307\u5B9A\u65F6\uFF0CXray \u5C06\u5148\u540E\u5C1D\u8BD5\u4ECE\u4EE5\u4E0B\u8DEF\u5F84\u52A0\u8F7D"),e("code",null,"config.json"),n(":")],-1),x=e("li",null,"\u5DE5\u4F5C\u76EE\u5F55\uFF08Working Directory\uFF09",-1),g=n("\u73AF\u5883\u53D8\u91CF"),v=n("\u4E2D"),f=e("code",null,"Xray.location.asset",-1),y=n("\u6240\u6307\u5B9A\u7684\u8DEF\u5F84");function _(X,B){const a=r("RouterLink");return i(),t(d,null,[p,e("div",m,[b,h,e("ul",null,[x,e("li",null,[l(a,{to:"/config/features/env.html#%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84"},{default:c(()=>[g]),_:1}),v,f,y])])])],64)}var w=s(u,[["render",_],["__file","command.html.vue"]]);export{w as default};
