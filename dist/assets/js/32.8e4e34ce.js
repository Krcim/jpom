(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{529:function(e,v,_){"use strict";_.r(v);var t=_(31),r=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"下载安装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[e._v("#")]),e._v(" 下载安装")]),e._v(" "),_("blockquote",[_("p",[e._v("此方式为我们会在发布每个版本时打包一份为对应版本的安装包提供方便用户快速安装使用的方式")])]),e._v(" "),_("ol",[_("li",[e._v("下载安装包 "),_("a",{attrs:{href:"https://gitee.com/dromara/Jpom/attach_files",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://gitee.com/dromara/Jpom/attach_files"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("解压文件")]),e._v(" "),_("li",[e._v("安装插件端（ "),_("a",{attrs:{href:"https://jpom-docs.keepbx.cn/docs/#/%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8/%E5%BC%80%E5%A7%8B%E5%AE%89%E8%A3%85?id=%E5%AE%89%E8%A3%85%E6%8F%92%E4%BB%B6%E7%AB%AF",target:"_blank",rel:"noopener noreferrer"}},[e._v("流程说明"),_("OutboundLink")],1),e._v(" ）\n"),_("ol",[_("li",[e._v("agent-x.x.x-release 目录为插件端的全部安装文件")]),e._v(" "),_("li",[e._v("上传到对应服务器")]),e._v(" "),_("li",[e._v("命令运行（Agent.sh、Agent.bat）"),_("code",[e._v("出现乱码或者无法正常执行,请优先检查编码格式、换行符是否匹配")])]),e._v(" "),_("li",[e._v("默认运行端口："),_("code",[e._v("2123")])])])]),e._v(" "),_("li",[e._v("安装服务端（ "),_("a",{attrs:{href:"https://jpom-docs.keepbx.cn/docs/#/%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8/%E5%BC%80%E5%A7%8B%E5%AE%89%E8%A3%85?id=%E5%AE%89%E8%A3%85%E6%9C%8D%E5%8A%A1%E7%AB%AF",target:"_blank",rel:"noopener noreferrer"}},[e._v("流程说明"),_("OutboundLink")],1),e._v(" ）\n"),_("ol",[_("li",[e._v("server-x.x.x-release 目录为服务端的全部安装文件")]),e._v(" "),_("li",[e._v("上传到对应服务器")]),e._v(" "),_("li",[e._v("命令运行（Server.sh、Server.bat）"),_("code",[e._v("出现乱码或者无法正常执行,请优先检查编码格式、换行符是否匹配")])]),e._v(" "),_("li",[e._v("默认运行端口："),_("code",[e._v("2122")]),e._v(" 访问管理页面 例如"),_("code",[e._v("http://127.0.0.1:2122/")])])])])]),e._v(" "),_("blockquote",[_("p",[e._v("安装详细步骤请查阅:"),_("RouterLink",{attrs:{to:"/安装使用/开始安装.html"}},[e._v("开始安装")])],1)]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"安装插件端-本案例以liunx服务器为例-windows结构类似"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装插件端-本案例以liunx服务器为例-windows结构类似"}},[e._v("#")]),e._v(" 安装插件端（本案例以liunx服务器为例，windows结构类似）")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("服务器自定义安装目录,如:"),_("code",[e._v("/home/Jpom/Agent")])])]),e._v(" "),_("li",[_("p",[e._v("上传插件端安装包(agent-x.x.x-release.zip)到指定目录，如上:"),_("code",[e._v("/home/Jpom/Agent/agent-x.x.x-release.zip")])])]),e._v(" "),_("li",[_("p",[e._v("解压到当前目录，解压后移除安装包后，目录结构如下图："),_("br")]),e._v(" "),_("p",[_("img",{attrs:{src:"/images/install/agent_jieyajiegou.png",alt:"agent_jieyajiegou",title:"agent_jieyajiegou.png"}})]),e._v(" "),_("ol",[_("li",[_("code",[e._v("Agent.bat/Agent.sh")]),e._v(": 分别是Windows/Liunx系统下插件端管理程序命令文件")]),e._v(" "),_("li",[_("code",[e._v("extConfig.yml")]),e._v(": 为插件端外部配置文件")]),e._v(" "),_("li",[_("code",[e._v("lib")]),e._v(": 为插件端主程序jar包存放目录")])])]),e._v(" "),_("li",[_("p",[e._v("根据自己的需求配置插件端外部配置文件"),_("code",[e._v("extConfig.yml")]),e._v("，如下图:"),_("br")]),e._v(" "),_("p",[_("img",{attrs:{src:"/images/install/agent_extxmlmoren.png",alt:"agent_extxmlmoren",title:"agent_extxmlmoren.png"}})]),e._v(" "),_("ol",[_("li",[e._v("jpom数据存储路径(非必填，默认Jar包父级目录)")]),e._v(" "),_("li",[e._v("agent端管理账号，建议自定义")]),e._v(" "),_("li",[e._v("agent端管理密码，建议自定义")]),e._v(" "),_("li",[e._v("其他配置项按需配置")])]),e._v(" "),_("p",[e._v("【注意：配置项遵守"),_("code",[e._v("yml")]),e._v("文件格式和语法，注意"),_("code",[e._v(":")]),e._v("后有"),_("code",[e._v("空格")]),e._v("】")])]),e._v(" "),_("li",[_("p",[e._v("确定插件端运行端口"),_("code",[e._v("Agent.sh/Agent.bat")]),e._v("文件中的配置，默认为：2123"),_("br"),e._v("\n其他参数修改请参考: "),_("RouterLink",{attrs:{to:"/安装使用/启动参数.html"}},[e._v("启动参数")])],1)]),e._v(" "),_("li",[_("p",[_("code",[e._v("Agent.sh")]),e._v("赋执行权限[sudo chmod +x Agent.sh]")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("./Agent.sh start")]),e._v(" 启动（运行）插件端"),_("br"),e._v("\n管理命令详情请参考: "),_("RouterLink",{attrs:{to:"/安装使用/管理命令.html"}},[e._v("管理命令")])],1)]),e._v(" "),_("li",[_("p",[e._v("如果已经配置授权账号，那么此插件端的授权账号及为配置的")])]),e._v(" "),_("li",[_("p",[e._v("如果没有配置授权账号或者密码，请注意插件端的启动日志中输出默认的授权账号信息")]),e._v(" "),_("ol",[_("li",[e._v("默认生成的账号信息规则")]),e._v(" "),_("li",[e._v("默认账号为："),_("code",[e._v("jpomAgent")])]),e._v(" "),_("li",[e._v("默认密码为：随机生成的10个字符串")]),e._v(" "),_("li",[e._v("自动生成的授权账号要写入文件中方便后期查看")]),e._v(" "),_("li",[e._v("文件具体位置请注意控制台日志")])]),e._v(" "),_("p",[e._v("【注意请牢记插件端的授权账号，如果拥有授权端账号信息将可以越过Server用户权限操作节点数据】")])]),e._v(" "),_("li",[_("p",[e._v("如果顺利启动那么Jpom的插件端（agent）算安装成功"),_("br"),e._v("\n安装失败请参考:"),_("RouterLink",{attrs:{to:"/安装使用/启动失败.html"}},[e._v("启动失败")])],1)])]),e._v(" "),_("blockquote",[_("p",[e._v("建议插件端仅提供内网访问，不提供外网访问的方式。 一是安全为主，二是减少请求耗时")])]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"安装服务端-本案例以liunx服务器为例-windows结构类似"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装服务端-本案例以liunx服务器为例-windows结构类似"}},[e._v("#")]),e._v(" 安装服务端（本案例以liunx服务器为例，windows结构类似）")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("服务器自定义安装目录,如:"),_("code",[e._v("/home/Jpom/Server")])])]),e._v(" "),_("li",[_("p",[e._v("上传服务端安装包(server-x.x.x-release.zip)到指定目录，如上:"),_("code",[e._v("/home/Jpom/Server/server-x.x.x-release.zip")])])]),e._v(" "),_("li",[_("p",[e._v("解压到当前目录，解压后移除安装包后，目录结构如下图："),_("br")]),e._v(" "),_("p",[_("img",{attrs:{src:"/images/install/server_jieyajiegou.png",alt:"server_jieyajiegou",title:"server_jieyajiegou.png"}})]),e._v(" "),_("ol",[_("li",[_("code",[e._v("Server.bat/Server.sh")]),e._v(": 分别是Windows/Liunx系统下服务端管理程序命令文件")]),e._v(" "),_("li",[_("code",[e._v("extConfig.yml")]),e._v(": 为服务端外部配置文件")]),e._v(" "),_("li",[_("code",[e._v("lib")]),e._v(": 为服务端主程序jar包存放目录")])])]),e._v(" "),_("li",[_("p",[e._v("根据自己的需求配置服务端外部配置文件"),_("code",[e._v("extConfig.yml")]),e._v("，如下图:"),_("br")]),e._v(" "),_("p",[_("img",{attrs:{src:"/images/install/server_extxmlmoren.png",alt:"server_extxmlmoren",title:"server_extxmlmoren.png"}})]),e._v(" "),_("ol",[_("li",[e._v("jpom数据存储路径(非必填，默认Jar包父级目录)")]),e._v(" "),_("li",[_("code",[e._v("usr")]),e._v("相关参数配置（账号锁定规则）")]),e._v(" "),_("li",[e._v("其他配置项按需配置\n【注意：配置项遵守"),_("code",[e._v("yml")]),e._v("文件格式和语法，注意"),_("code",[e._v(":")]),e._v("后有"),_("code",[e._v("空格")]),e._v("】")])])]),e._v(" "),_("li",[_("p",[e._v("确定服务端运行端口"),_("code",[e._v("Server.sh/Server.bat")]),e._v("文件中的配置，默认为：2122"),_("br"),e._v("\n其他参数修改请参考: "),_("RouterLink",{attrs:{to:"/安装使用/启动参数.html"}},[e._v("启动参数")])],1)]),e._v(" "),_("li",[_("p",[_("code",[e._v("Server.sh")]),e._v("赋执行权限[sudo chmod +x Server.sh]")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("./Server.sh start")]),e._v(" 启动（运行）服务端"),_("br"),e._v("\n管理命令详情请参考: "),_("RouterLink",{attrs:{to:"/安装使用/管理命令.html"}},[e._v("管理命令")])],1)]),e._v(" "),_("li",[_("p",[e._v("如果顺利启动那么Jpom的服务端（server）算安装成功"),_("br"),e._v("\n安装失败请参考:"),_("RouterLink",{attrs:{to:"/安装使用/启动失败.html"}},[e._v("启动失败")])],1)]),e._v(" "),_("li",[_("p",[e._v("启动成功后访问"),_("code",[e._v("ip+server端port")]),e._v("，按照提示初始化系统（设置系统管理员账号信息，请牢记系统管理员信息）")]),e._v(" "),_("ol",[_("li",[e._v("注意此处填写账号密码是设置Jpom系统的系统管理员的账号密码")]),e._v(" "),_("li",[e._v("系统管理员密码的强度有要求数字+字母+符号")]),e._v(" "),_("li",[e._v("注意不要把此处账号密码和节点的账号密码混淆")])])])])])}),[],!1,null,null,null);v.default=r.exports}}]);