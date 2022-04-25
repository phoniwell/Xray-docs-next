import{_ as r,r as o,o as c,c as u,a as n,b as a,w as t,F as i,e as s,d as b}from"./app.faea82e6.js";const k={},m=n("h1",{id:"\u900F\u660E\u4EE3\u7406-tproxy-\u914D\u7F6E\u6559\u7A0B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u900F\u660E\u4EE3\u7406-tproxy-\u914D\u7F6E\u6559\u7A0B","aria-hidden":"true"},"#"),s(" \u900F\u660E\u4EE3\u7406\uFF08TProxy\uFF09\u914D\u7F6E\u6559\u7A0B")],-1),d=s("\u672C\u914D\u7F6E\u57FA\u4E8E"),q={href:"https://guide.v2fly.org/app/tproxy.html",target:"_blank",rel:"noopener noreferrer"},g=s("TProxy \u900F\u660E\u4EE3\u7406\u7684\u65B0 V2Ray \u767D\u8BDD\u6587\u6559\u7A0B"),y=s("\uFF0C\u52A0\u5165\u4E86 Xray \u7684\u65B0\u7279\u6027\uFF0C\u4F7F\u7528 VLESS + XTLS Splice \u65B9\u6848\uFF0C\u5E76\u5C06\u65E7\u6559\u7A0B\u4E2D\u9ED8\u8BA4\u51FA\u7AD9\u4EE3\u7406\u7684\u5206\u6D41\u65B9\u5F0F\u6539\u4E3A\u9ED8\u8BA4\u51FA\u7AD9\u76F4\u8FDE\uFF0C\u4F7F\u7528\u8005\u8BF7\u6309\u7167\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\u3002"),h=n("p",null,"\u672C\u6587\u4E2D\u6240\u6709\u914D\u7F6E\u5DF2\u5728 Raspberry Pi 2B\u3001Ubuntu 20.04 \u73AF\u5883\u4E0B\u6D4B\u8BD5\u6210\u529F\uFF0C\u5982\u5728\u5176\u5B83\u73AF\u5883\u4E2D\u4F7F\u7528\u8BF7\u81EA\u884C\u8C03\u6574\u914D\u7F6E\u3002",-1),_=n("h2",{id:"\u5F00\u59CB\u4E4B\u524D",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5F00\u59CB\u4E4B\u524D","aria-hidden":"true"},"#"),s(" \u5F00\u59CB\u4E4B\u524D")],-1),v=n("p",null,"\u8BF7\u68C0\u67E5\u60A8\u7684\u8BBE\u5907\u662F\u5426\u6709\u53EF\u7528\u7684\u7F51\u7EDC\u8FDE\u63A5\uFF0C\u4E14\u670D\u52A1\u7AEF\u5DF2\u7ECF\u914D\u7F6E\u6210\u529F\uFF0C\u5BA2\u6237\u7AEF\u5DF2\u7ECF\u5B89\u88C5\u5B8C\u6BD5\u3002",-1),f=s("\u9700\u6CE8\u610F\u7684\u662F\uFF0C\u76EE\u524D\u5F88\u591A\u900F\u660E\u4EE3\u7406\u6559\u7A0B\u90FD\u4F1A\u5C06 Linux \u7CFB\u7EDF\u7684 IP \u8F6C\u53D1\u6253\u5F00\uFF0C\u4F46\u8FD9\u6837\u4F1A\u5BFC\u81F4 Splice \u6027\u80FD\u4E0B\u964D\u3002\u8BE6\u60C5\u8BF7\u53C2\u8003"),R={href:"https://github.com/XTLS/Xray-core/discussions/59",target:"_blank",rel:"noopener noreferrer"},A=s("\u5927\u6848\u724D\u672F\u7834\u6848\u7EAA\u5B9E\u7B2C\u4E09\u7BC7--\u6211\u4EEC\u662F\u5982\u4F55\u7834\u89E3 Splice \u6027\u80FD\u4E0B\u964D\u751A\u81F3\u4F4E\u4E8E Direct \u4E4B\u8C1C\u7684"),x=s("\u3002"),E=n("p",null,"\u8FD9\u91CC\u6211\u60F3\u8981\u8865\u5145\u7684\u662F\uFF0C\u5F88\u591A\u900F\u660E\u4EE3\u7406\u6559\u7A0B\u4F1A\u4F7F\u7528 Netfilter \u8FDB\u884C\u5206\u6D41\uFF0C\u4F7F\u76F4\u8FDE\u6D41\u91CF\u76F4\u63A5\u53D1\u51FA\u800C\u4E0D\u7ECF\u8FC7 Xray\uFF0C\u8FD9\u65F6\u5FC5\u987B\u5F00\u542F IP \u8F6C\u53D1\uFF1B\u4E5F\u6709\u7684\u6559\u7A0B\uFF0C\u5982\u672C\u6587\uFF0C\u4F1A\u5C06\u6240\u6709\u6D41\u91CF\u5BFC\u5165 Xray \u4E4B\u4E2D\uFF0C\u7531 Xray \u7684\u8DEF\u7531\u6A21\u5757\u8FDB\u884C\u5206\u6D41\uFF0C\u8FD9\u65F6\u65E0\u9700\u5F00\u542F IP \u8F6C\u53D1\u3002",-1),T=n("h2",{id:"xray-\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#xray-\u914D\u7F6E","aria-hidden":"true"},"#"),s(" Xray \u914D\u7F6E")],-1),S=s("\u4E3A\u4E86\u66F4\u597D\u7684\u5206\u6D41\u4F53\u9A8C\uFF0C\u8BF7\u66FF\u6362\u9ED8\u8BA4\u8DEF\u7531\u89C4\u5219\u6587\u4EF6\u4E3A "),X={href:"https://github.com/Loyalsoldier/v2ray-rules-dat",target:"_blank",rel:"noopener noreferrer"},N=s("Loyalsoldier/v2ray-rules-dat"),Y=s("\uFF0C\u5426\u5219 Xray-core \u5C06\u65E0\u6CD5\u52A0\u8F7D\u672C\u914D\u7F6E\u3002"),j=b(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> -oL /usr/local/share/xray/geoip.dat https://github.com/Loyalsoldier/v2ray-rules-dat/releases/latest/download/geoip.dat
<span class="token function">sudo</span> <span class="token function">curl</span> -oL /usr/local/share/xray/geosite.dat https://github.com/Loyalsoldier/v2ray-rules-dat/releases/latest/download/geosite.dat
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;loglevel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;error&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/var/log/xray/error.log&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;access&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/var/log/xray/access.log&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all-in&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dokodemo-door&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp,udp&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;followRedirect&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sniffing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;destOverride&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tls&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;sockopt&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;tproxy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tproxy&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UseIPv4&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;sockopt&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;mark&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vless&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u670D\u52A1\u7AEF\u57DF\u540D&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span><span class="token punctuation">,</span>
            <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UUID&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-splice&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;encryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sockopt&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;mark&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;block&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blackhole&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dns-out&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dns&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8.8.8.8&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;proxySettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;sockopt&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;mark&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;hosts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;\u670D\u52A1\u7AEF\u57DF\u540D&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u670D\u52A1\u7AEF IP&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;119.29.29.29&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">53</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expectIPs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geoip:cn&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;223.5.5.5&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">53</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expectIPs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geoip:cn&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string">&quot;8.8.8.8&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;1.1.1.1&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;https+local://doh.dns.sb/dns-query&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IPIfNonMatch&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;all-in&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">53</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dns-out&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;8.8.8.8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1.1.1.1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:category-ads-all&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;block&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:geolocation-!cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geoip:telegram&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u672C\u914D\u7F6E\u4F1A\u52AB\u6301\u6240\u6709\u53D1\u5F80 53 \u7AEF\u53E3\u7684\u6D41\u91CF\u4EE5\u89E3\u51B3 DNS \u6C61\u67D3\u95EE\u9898\uFF0C\u6240\u4EE5\u5BA2\u6237\u7AEF\u548C\u672C\u673A\u7684 DNS \u670D\u52A1\u5668\u7684\u5730\u5740\u53EF\u4EE5\u968F\u610F\u914D\u7F6E\u3002</p></div><h2 id="\u7B56\u7565\u8DEF\u7531\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7B56\u7565\u8DEF\u7531\u914D\u7F6E" aria-hidden="true">#</a> \u7B56\u7565\u8DEF\u7531\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo ip route add local default dev lo table 100 # \u6DFB\u52A0\u8DEF\u7531\u8868 100
sudo ip rule add fwmark 1 table 100 # \u4E3A\u8DEF\u7531\u8868 100 \u8BBE\u5B9A\u89C4\u5219
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="netfilter-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#netfilter-\u914D\u7F6E" aria-hidden="true">#</a> Netfilter \u914D\u7F6E</h2><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>nftables \u914D\u7F6E\u4E0E iptables \u914D\u7F6E\u4E8C\u9009\u4E00\uFF0C\u4E0D\u53EF\u540C\u65F6\u4F7F\u7528\u3002</p></div>`,7),U=n("div",{class:"language-nftables ext-nftables line-numbers-mode"},[n("pre",{class:"language-nftables"},[n("code",null,`#!/usr/sbin/nft -f

flush ruleset

define RESERVED_IP = {
    10.0.0.0/8,
    100.64.0.0/10,
    127.0.0.0/8,
    169.254.0.0/16,
    172.16.0.0/12,
    192.0.0.0/24,
    224.0.0.0/4,
    240.0.0.0/4,
    255.255.255.255/32
}

table ip xray {
        chain prerouting {
                type filter hook prerouting priority mangle; policy accept;
                ip daddr $RESERVED_IP return
                ip daddr 192.168.0.0/16 tcp dport != 53 return
                ip daddr 192.168.0.0/16 udp dport != 53 return
                ip protocol tcp tproxy to 127.0.0.1:12345 meta mark set 1
                ip protocol udp tproxy to 127.0.0.1:12345 meta mark set 1
        }
        chain output {
                type route hook output priority mangle; policy accept;
                ip daddr $RESERVED_IP return
                ip daddr 192.168.0.0/16 tcp dport != 53 return
                ip daddr 192.168.0.0/16 udp dport != 53 return
                meta mark 2 return
                ip protocol tcp meta mark set 1
                ip protocol udp meta mark set 1
        }
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br")])],-1),L=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u4F7F\u7528\u65B9\u6CD5"),n("p",null,[s("\u5C06\u4E0A\u8FF0\u914D\u7F6E\u5199\u5165\u4E00\u4E2A\u6587\u4EF6\uFF08\u5982 "),n("code",null,"nft.conf"),s("\uFF09\uFF0C\u4E4B\u540E\u5C06\u8BE5\u6587\u4EF6\u8D4B\u4E88\u53EF\u6267\u884C\u6743\u9650\uFF0C\u6700\u540E\u4F7F\u7528 root \u6743\u9650\u6267\u884C\u8BE5\u6587\u4EF6\u5373\u53EF\uFF08"),n("code",null,"# ./nft.conf"),s("\uFF09\u3002")])],-1),w=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[s(`iptables -t mangle -N XRAY
iptables -t mangle -A XRAY -d `),n("span",{class:"token number"},"10.0"),s(`.0.0/8 -j RETURN
iptables -t mangle -A XRAY -d `),n("span",{class:"token number"},"100.64"),s(`.0.0/10 -j RETURN
iptables -t mangle -A XRAY -d `),n("span",{class:"token number"},"127.0"),s(`.0.0/8 -j RETURN
iptables -t mangle -A XRAY -d `),n("span",{class:"token number"},"169.254"),s(`.0.0/16 -j RETURN
iptables -t mangle -A XRAY -d `),n("span",{class:"token number"},"172.16"),s(`.0.0/12 -j RETURN
iptables -t mangle -A XRAY -d `),n("span",{class:"token number"},"192.0"),s(`.0.0/24 -j RETURN
iptables -t mangle -A XRAY -d `),n("span",{class:"token number"},"224.0"),s(`.0.0/4 -j RETURN
iptables -t mangle -A XRAY -d `),n("span",{class:"token number"},"240.0"),s(`.0.0/4 -j RETURN
iptables -t mangle -A XRAY -d `),n("span",{class:"token number"},"255.255"),s(`.255.255/32 -j RETURN
iptables -t mangle -A XRAY -d `),n("span",{class:"token number"},"192.168"),s(".0.0/16 -p tcp "),n("span",{class:"token operator"},"!"),s(" --dport "),n("span",{class:"token number"},"53"),s(` -j RETURN
iptables -t mangle -A XRAY -d `),n("span",{class:"token number"},"192.168"),s(".0.0/16 -p udp "),n("span",{class:"token operator"},"!"),s(" --dport "),n("span",{class:"token number"},"53"),s(` -j RETURN
iptables -t mangle -A XRAY -p tcp -j TPROXY --on-port `),n("span",{class:"token number"},"12345"),s(" --tproxy-mark "),n("span",{class:"token number"},"1"),s(`
iptables -t mangle -A XRAY -p udp -j TPROXY --on-port `),n("span",{class:"token number"},"12345"),s(" --tproxy-mark "),n("span",{class:"token number"},"1"),s(`
iptables -t mangle -A PREROUTING -j XRAY

iptables -t mangle -N XRAY_SELF
iptables -t mangle -A XRAY_SELF -d `),n("span",{class:"token number"},"10.0"),s(`.0.0/8 -j RETURN
iptables -t mangle -A XRAY_SELF -d `),n("span",{class:"token number"},"100.64"),s(`.0.0/10 -j RETURN
iptables -t mangle -A XRAY_SELF -d `),n("span",{class:"token number"},"127.0"),s(`.0.0/8 -j RETURN
iptables -t mangle -A XRAY_SELF -d `),n("span",{class:"token number"},"169.254"),s(`.0.0/16 -j RETURN
iptables -t mangle -A XRAY_SELF -d `),n("span",{class:"token number"},"172.16"),s(`.0.0/12 -j RETURN
iptables -t mangle -A XRAY_SELF -d `),n("span",{class:"token number"},"192.0"),s(`.0.0/24 -j RETURN
iptables -t mangle -A XRAY_SELF -d `),n("span",{class:"token number"},"224.0"),s(`.0.0/4 -j RETURN
iptables -t mangle -A XRAY_SELF -d `),n("span",{class:"token number"},"240.0"),s(`.0.0/4 -j RETURN
iptables -t mangle -A XRAY_SELF -d `),n("span",{class:"token number"},"255.255"),s(`.255.255/32 -j RETURN
iptables -t mangle -A XRAY_SELF -d `),n("span",{class:"token number"},"192.168"),s(".0.0/16 -p tcp "),n("span",{class:"token operator"},"!"),s(" --dport "),n("span",{class:"token number"},"53"),s(` -j RETURN
iptables -t mangle -A XRAY_SELF -d `),n("span",{class:"token number"},"192.168"),s(".0.0/16 -p udp "),n("span",{class:"token operator"},"!"),s(" --dport "),n("span",{class:"token number"},"53"),s(` -j RETURN
iptables -t mangle -A XRAY_SELF -m mark --mark `),n("span",{class:"token number"},"2"),s(` -j RETURN
iptables -t mangle -A XRAY_SELF -p tcp -j MARK --set-mark `),n("span",{class:"token number"},"1"),s(`
iptables -t mangle -A XRAY_SELF -p udp -j MARK --set-mark `),n("span",{class:"token number"},"1"),s(`
iptables -t mangle -A OUTPUT -j XRAY_SELF
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br")])],-1),P=n("p",null,"\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u5C06\u5C40\u57DF\u7F51\u5185\u5176\u5B83\u8BBE\u5907\u7684\u9ED8\u8BA4\u7F51\u5173\u6539\u4E3A\u8BE5\u8BBE\u5907 IP\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u7FFB\u5899\u4E86\u3002\u5728\u5176\u5B83\u4E3B\u673A\u548C\u672C\u673A\u7686\u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u53EF\u8FDB\u884C\u4E0B\u4E00\u6B65\u914D\u7F6E\u3002",-1),I=n("h2",{id:"\u914D\u7F6E\u6C38\u4E45\u5316\u4E0E\u5F00\u673A\u81EA\u542F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u914D\u7F6E\u6C38\u4E45\u5316\u4E0E\u5F00\u673A\u81EA\u542F","aria-hidden":"true"},"#"),s(" \u914D\u7F6E\u6C38\u4E45\u5316\u4E0E\u5F00\u673A\u81EA\u542F")],-1),F=n("br",null,null,-1),D=n("p",null,[s("\u9996\u5148\u5C06\u5DF2\u7ECF\u7F16\u8F91\u597D\u7684 nftables \u914D\u7F6E\u6587\u4EF6\u79FB\u52A8\u5230 "),n("code",null,"/etc"),s(" \u76EE\u5F55\u4E0B\uFF0C\u5E76\u91CD\u547D\u540D\u4E3A "),n("code",null,"nftables.conf"),s("\u3002\u7136\u540E\u7F16\u8F91 "),n("code",null,"/lib/systemd/system/nftables.service"),s("\u3002")],-1),V=n("div",{class:"language-ini ext-ini line-numbers-mode"},[n("pre",{class:"language-ini"},[n("code",null,[n("span",{class:"token section"},[n("span",{class:"token punctuation"},"["),n("span",{class:"token section-name selector"},"Unit"),n("span",{class:"token punctuation"},"]")]),s(`
`),n("span",{class:"token key attr-name"},"Description"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"nftables"),s(`
`),n("span",{class:"token key attr-name"},"Documentation"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"man:nft(8) http://wiki.nftables.org"),s(`
`),n("span",{class:"token key attr-name"},"Wants"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"network-pre.target"),s(`
`),n("span",{class:"token key attr-name"},"Before"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"network-pre.target shutdown.target"),s(`
`),n("span",{class:"token key attr-name"},"Conflicts"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"shutdown.target"),s(`
`),n("span",{class:"token key attr-name"},"DefaultDependencies"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"no"),s(`

`),n("span",{class:"token section"},[n("span",{class:"token punctuation"},"["),n("span",{class:"token section-name selector"},"Service"),n("span",{class:"token punctuation"},"]")]),s(`
`),n("span",{class:"token key attr-name"},"Type"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"oneshot"),s(`
`),n("span",{class:"token key attr-name"},"RemainAfterExit"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"yes"),s(`
`),n("span",{class:"token key attr-name"},"StandardInput"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"null"),s(`
`),n("span",{class:"token key attr-name"},"ProtectSystem"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"full"),s(`
`),n("span",{class:"token key attr-name"},"ProtectHome"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"true"),s(`
`),n("span",{class:"token key attr-name"},"ExecStart"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"/usr/sbin/nft -f /etc/nftables.conf ; /usr/sbin/ip route add local default dev lo table 100 ; /usr/sbin/ip rule add fwmark 1 table 100"),s(`
`),n("span",{class:"token key attr-name"},"ExecReload"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"/usr/sbin/nft -f /etc/nftables.conf"),s(`
`),n("span",{class:"token key attr-name"},"ExecStop"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"/usr/sbin/nft flush ruleset ; /usr/sbin/ip route del local default dev lo table 100 ; /usr/sbin/ip rule del table 100"),s(`

`),n("span",{class:"token section"},[n("span",{class:"token punctuation"},"["),n("span",{class:"token section-name selector"},"Install"),n("span",{class:"token punctuation"},"]")]),s(`
`),n("span",{class:"token key attr-name"},"WantedBy"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"sysinit.target"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br")])],-1),B=n("p",null,"\u6700\u540E enable \u5373\u53EF\u3002",-1),O=n("p",null,[s("\u5173\u4E8E iptables \u7684\u6C38\u4E45\u5316\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u5B89\u88C5 "),n("code",null,"iptables-persistent"),s("\u3002")],-1),C=n("p",null,[s("\u5B89\u88C5\u8FC7\u7A0B\u4E2D\u4F1A\u63D0\u793A\u4F60\u9009\u62E9\u201C\u662F\u5426\u4FDD\u5B58\u914D\u7F6E\u201D\uFF0C\u5982\u679C\u5DF2\u7ECF\u5C06 iptables \u914D\u7F6E\u5199\u5165\u7CFB\u7EDF\uFF0C\u90A3\u4E48\u6B64\u65F6\u9009\u62E9\u201C\u662F\u201D\u5373\u53EF\uFF1B\u5982\u679C\u5C1A\u672A\u5199\u5165\u4E5F\u6CA1\u6709\u5173\u7CFB\uFF0C\u5B89\u88C5\u5B8C\u6BD5\u540E\u5C06\u914D\u7F6E\u5199\u5165\uFF0C\u7136\u540E\u6267\u884C "),n("code",null,"netfilter-persistent save"),s(" \u5373\u53EF\uFF08\u9700\u8981 root \u6743\u9650\uFF09\u3002")],-1),W=n("p",null,[s("\u4E4B\u540E\u7F16\u8F91 "),n("code",null,"/lib/systemd/system/netfilter-persistent.service"),s("\u3002")],-1),M=n("div",{class:"language-ini ext-ini line-numbers-mode"},[n("pre",{class:"language-ini"},[n("code",null,[n("span",{class:"token section"},[n("span",{class:"token punctuation"},"["),n("span",{class:"token section-name selector"},"Unit"),n("span",{class:"token punctuation"},"]")]),s(`
`),n("span",{class:"token key attr-name"},"Description"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"netfilter persistent configuration"),s(`
`),n("span",{class:"token key attr-name"},"DefaultDependencies"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"no"),s(`
`),n("span",{class:"token key attr-name"},"Wants"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"network-pre.target systemd-modules-load.service local-fs.target"),s(`
`),n("span",{class:"token key attr-name"},"Before"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"network-pre.target shutdown.target"),s(`
`),n("span",{class:"token key attr-name"},"After"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"systemd-modules-load.service local-fs.target"),s(`
`),n("span",{class:"token key attr-name"},"Conflicts"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"shutdown.target"),s(`
`),n("span",{class:"token key attr-name"},"Documentation"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"man:netfilter-persistent(8)"),s(`

`),n("span",{class:"token section"},[n("span",{class:"token punctuation"},"["),n("span",{class:"token section-name selector"},"Service"),n("span",{class:"token punctuation"},"]")]),s(`
`),n("span",{class:"token key attr-name"},"Type"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"oneshot"),s(`
`),n("span",{class:"token key attr-name"},"RemainAfterExit"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"yes"),s(`
`),n("span",{class:"token key attr-name"},"ExecStart"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"/usr/sbin/netfilter-persistent start ; /usr/sbin/ip route add local default dev lo table 100 ; /usr/sbin/ip rule add fwmark 1 table 100"),s(`
`),n("span",{class:"token key attr-name"},"ExecStop"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"/usr/sbin/netfilter-persistent stop ; /usr/sbin/ip route del local default dev lo table 100 ; /usr/sbin/ip rule del table 100"),s(`

`),n("span",{class:"token section"},[n("span",{class:"token punctuation"},"["),n("span",{class:"token section-name selector"},"Install"),n("span",{class:"token punctuation"},"]")]),s(`
`),n("span",{class:"token key attr-name"},"WantedBy"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"multi-user.target"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br")])],-1);function K($,G){const p=o("ExternalLinkIcon"),e=o("Tab"),l=o("Tabs");return c(),u(i,null,[m,n("p",null,[d,n("a",q,[g,a(p)]),y]),h,_,v,n("p",null,[f,n("a",R,[A,a(p)]),x]),E,T,n("p",null,[S,n("a",X,[N,a(p)]),Y]),j,a(l,{title:"netfilter"},{default:t(()=>[a(e,{title:"nftables1"},{default:t(()=>[U,L]),_:1}),a(e,{title:"iptables1"},{default:t(()=>[w]),_:1})]),_:1}),P,I,F,a(l,{title:"netfilter2"},{default:t(()=>[a(e,{title:"nftables2"},{default:t(()=>[D,V,B]),_:1}),a(e,{title:"iptables2"},{default:t(()=>[O,C,W,M]),_:1})]),_:1})],64)}var z=r(k,[["render",K],["__file","tproxy.html.vue"]]);export{z as default};
