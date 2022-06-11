(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{509:function(s,t,e){"use strict";e.r(t);var a=e(31),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("在 Java 中很多时候都需要配置 maven 私服来构建项目")]),s._v(" "),e("h3",{attrs:{id:"本地安装服务端-本地构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地安装服务端-本地构建"}},[s._v("#")]),s._v(" 本地安装服务端 + 本地构建")]),s._v(" "),e("blockquote",[e("p",[s._v("将 Jpom 服务端直接安装到服务器中并且使用"),e("code",[s._v("本地构建")]),s._v("场景说明")])]),s._v(" "),e("ol",[e("li",[s._v("推荐使用全局 maven 配置来实现，安装 maven 插件后默认都会使用 "),e("code",[s._v("{user.home}/.m2/settings.xml")]),s._v(" 一般使用 "),e("code",[s._v("root")]),s._v(" 用户文件示例："),e("code",[s._v("/root/.m2/settings.xml")])]),s._v(" "),e("li",[s._v("使用构建命令来指定 "),e("code",[s._v("settings.xml")]),s._v(" 文件位置，如：mvn -s xxx/settings.xml clean package")])]),s._v(" "),e("h3",{attrs:{id:"容器安装服务端-本地构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器安装服务端-本地构建"}},[s._v("#")]),s._v(" 容器安装服务端 + 本地构建")]),s._v(" "),e("blockquote",[e("p",[s._v("将 Jpom 服务端直接安装到 docker 中并且使用"),e("code",[s._v("本地构建")]),s._v("场景说明")])]),s._v(" "),e("ol",[e("li",[s._v("使用构建命令来指定 "),e("code",[s._v("settings.xml")]),s._v(" 文件位置，如：mvn -s xxx/settings.xml clean package")])]),s._v(" "),e("h3",{attrs:{id:"本地安装服务端-容器构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地安装服务端-容器构建"}},[s._v("#")]),s._v(" 本地安装服务端 + 容器构建")]),s._v(" "),e("blockquote",[e("p",[s._v("将 Jpom 服务端直接安装到服务器中并且使用"),e("code",[s._v("容器构建")]),s._v("场景说明")])]),s._v(" "),e("ol",[e("li",[s._v("推荐使用构建命令来指定 "),e("code",[s._v("settings.xml")]),s._v(" 文件位置，如：mvn -s xxx/settings.xml clean package")]),s._v(" "),e("li",[s._v("使用 "),e("code",[s._v("binds")]),s._v(" 来配置指定 maven "),e("code",[s._v(".m2 目录")]),s._v("或者"),e("code",[s._v("settings.xml")]),s._v("【注意容器构建必须使用宿主机对应的 docker 容器构建否则 binds 将不生效】")])]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定 .m2 目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("binds")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /Users/user/.m2/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/root/.m2/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定 settings.xml 文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("binds")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /Users/user/.m2/settings.xml"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/root/.m2/settings.xml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"容器安装服务端-容器构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器安装服务端-容器构建"}},[s._v("#")]),s._v(" 容器安装服务端 + 容器构建")]),s._v(" "),e("blockquote",[e("p",[s._v("将 Jpom 服务端直接安装到 docker 中并且使用"),e("code",[s._v("容器构建")]),s._v("场景说明")])]),s._v(" "),e("ol",[e("li",[s._v("使用构建命令来指定 "),e("code",[s._v("settings.xml")]),s._v(" 文件位置，如：mvn -s xxx/settings.xml clean package")])])])}),[],!1,null,null,null);t.default=n.exports}}]);