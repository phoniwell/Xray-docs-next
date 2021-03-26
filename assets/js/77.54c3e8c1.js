(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{427:function(a,e,r){"use strict";r.r(e);var t=r(20),n=function(a){a.options.__data__block__={mermaid_1a962853:"graph LR;\nA(PC) -.- B(防火墙);\nB -.-> C(墙外网站);\nA --\x3e D(Xray/VPS);\nD --\x3e C;\nA --\x3e E(墙内网站);\n",mermaid_382ee14e:"graph LR;\nA(PC) -.-> B(防火墙);\nB -.-> C(墙外网站);\nA --\x3e D(墙内 VPS);\nD --\x3e E(墙外 VPS);\nE --\x3e C;\nD --\x3e F(墙内网站);\n",mermaid_382ee16a:"graph LR;\nA1(inbound) --\x3e D(Dispatcher / Router / DNS);\nA2(inbound) --\x3e D;\nA3(inbound) --\x3e D;\nA4(inbound) --\x3e D;\nD --\x3e B1(outbound);\nD --\x3e B2(outbound);\nD --\x3e B3(outbound);\nD --\x3e B4(outbound);\n"}},i=Object(t.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"xray-的工作模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#xray-的工作模式"}},[a._v("#")]),a._v(" Xray 的工作模式")]),a._v(" "),r("h2",{attrs:{id:"单服务器模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单服务器模式"}},[a._v("#")]),a._v(" 单服务器模式")]),a._v(" "),r("p",[a._v("与其它的网络代理工具一样，你需要一台配置了 Xray 的服务器，然后在自己的设备上安装并配置 Xray 客户端，然后即可流畅地访问互联网。")]),a._v(" "),r("Mermaid",{attrs:{id:"mermaid_1a962853",graph:a.$dataBlock.mermaid_1a962853}}),r("p",[a._v("一个 Xray 服务器可同时支持多台设备使用不同的代理协议访问。同时，经过合理的配置，Xray 可以识别并区分需要代理以及不需要代理的流量，直连的流量不需要绕路。")]),a._v(" "),r("h2",{attrs:{id:"桥接模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#桥接模式"}},[a._v("#")]),a._v(" 桥接模式")]),a._v(" "),r("p",[a._v("如果你不想在每一台设备上都配置路由，你也可以设置一台中转服务器，用于接收客户端发来的所有流量，然后在服务器中进行转发判断。")]),a._v(" "),r("Mermaid",{attrs:{id:"mermaid_382ee14e",graph:a.$dataBlock.mermaid_382ee14e}}),r("h2",{attrs:{id:"工作原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[a._v("#")]),a._v(" 工作原理")]),a._v(" "),r("p",[a._v("在配置 Xray 之前，不妨先来看一下 Xray 的工作原理，以下是单个 Xray 进程的内部结构示意图。多个 Xray 之间相互独立，互不影响。")]),a._v(" "),r("Mermaid",{attrs:{id:"mermaid_382ee16a",graph:a.$dataBlock.mermaid_382ee16a}}),r("ul",[r("li",[a._v("需要配置至少一个入站连接（Inbound）和一个出站连接（Outbound）才可以正常工作。\n"),r("ul",[r("li",[a._v("入站连接负责与客户端（如浏览器）通信：\n"),r("ul",[r("li",[a._v("入站连接通常可以配置用户认证，如 ID 和密码等；")]),a._v(" "),r("li",[a._v("入站连接收到数据之后，会交给分发器（Dispatcher）进行分发；")])])]),a._v(" "),r("li",[a._v("出站连接负责将数据发给服务器，如另一台主机上的 Xray。")])])]),a._v(" "),r("li",[a._v("当有多个出站连接时，可以配置路由（Routing）来指定某一类流量由某一个出站连接发出。\n"),r("ul",[r("li",[a._v("路由会在必要时查询 DNS 以获取更多信息来进行判断。")])])])])],1)}),[],!1,null,null,null);"function"==typeof n&&n(i);e.default=i.exports}}]);