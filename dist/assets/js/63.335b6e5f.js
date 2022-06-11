(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{560:function(_,v,s){"use strict";s.r(v);var r=s(31),t=Object(r.a)({},(function(){var _=this,v=_.$createElement,s=_._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"ssh管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh管理"}},[_._v("#")]),_._v(" SSH管理")]),_._v(" "),s("h4",{attrs:{id:"功能介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[_._v("#")]),_._v(" 功能介绍")]),_._v(" "),s("p",[_._v("配置和管理通过SSH渠道远程控制访问的服务器列表和文件管理功能入口，SSH管理模块所有功能不依赖于插件端")]),_._v(" "),s("h4",{attrs:{id:"添加ssh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加ssh"}},[_._v("#")]),_._v(" 添加SSH")]),_._v(" "),s("p",[_._v("编辑ssh配置信息"),s("br"),s("br")]),_._v(" "),s("p",[s("img",{attrs:{src:"docs/images/node/server_sshedit.png",alt:"sshedite"}}),s("br"),s("br")]),_._v(" "),s("p",[s("code",[_._v("SSH名称:")]),_._v("当前SSH连接名称，建议使用IP/域名/hostname命名"),s("br"),s("br"),_._v(" "),s("code",[_._v("Hostname:")]),_._v("当前SSH连接服务器的IP "),s("code",[_._v("Port:")]),_._v("当前SSH端口，默认22，请填22"),s("br"),s("br"),_._v(" "),s("code",[_._v("Username:")]),_._v("当前服务器登陆账户"),s("br"),s("br"),_._v(" "),s("code",[_._v("Password:")]),_._v("服务器登陆密码，或者证书密钥"),s("br"),s("br"),_._v(" "),s("code",[_._v("认证方式:")]),_._v("可选择 PASS 或者 PUBKEY"),s("br"),s("br"),_._v(" "),s("code",[_._v("编码方式:")]),_._v("可选择SSH控制台字符集编码，编码请您根据服务器编码设置"),s("br"),s("br"),_._v(" "),s("code",[_._v("文件目录:")]),_._v("授权可直接访问的目录，多目录回车换行即可"),s("br"),s("br")]),_._v(" "),s("h4",{attrs:{id:"ssh列表展示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh列表展示"}},[_._v("#")]),_._v(" SSH列表展示")]),_._v(" "),s("p",[_._v("展示当前已配置正确的SSH列表信息"),s("br"),s("br"),_._v(" "),s("img",{attrs:{src:"docs/images/node/server_sshlist.png",alt:"sshlist"}}),s("br"),s("br"),_._v(" "),s("code",[_._v("名称:")]),_._v("SSH的名称 "),s("code",[_._v("host:")]),_._v("SSH的IP"),s("code",[_._v("user:")]),_._v("登陆用户"),s("code",[_._v("port")]),_._v("SSH端口"),s("br"),s("br"),_._v("\n*"),s("code",[_._v("关联节点:")]),_._v("若已当前SSH对应管理的服务器上已安装插件端，可在添加节点配置时候关联SSH，成功关联后，当前SSH列表\n信息的"),s("code",[_._v("关联节点")]),_._v("字段展示的将会是被关联节点的名称，可通过该名称快速跳转管理节点功能相关页面"),s("br"),s("br"),_._v(" "),s("img",{attrs:{src:"docs/images/node/server_sshlistinstall.png",alt:"sshlistinstall"}}),s("br"),s("br")]),_._v(" "),s("p",[_._v("若当前SSH对应管理的服务器上未安装插件端，即节点列表尚未配置相关服务器节点信息时。"),s("code",[_._v("关联节点")]),_._v("字段展示的将会是\n"),s("code",[_._v("安装")]),_._v("按钮控件，可通过此按钮快速安装当前服务器插件端和配置当前服务器的节点信息，详情请查阅下文**【SSH快捷安装配置插件端】**"),s("br"),s("br"),_._v(" "),s("img",{attrs:{src:"docs/images/node/server_sshlistnoinstall.png",alt:"sshlistnoinstall"}}),s("br"),s("br")]),_._v(" "),s("p",[s("code",[_._v("操作:")]),_._v("提供当前SSH支持的三种功能入口"),s("br"),s("br"),_._v("\n1. "),s("code",[_._v("编辑:")]),_._v("编辑SSH配置信息"),s("br"),s("br"),_._v("\n2. "),s("code",[_._v("终端:")]),_._v("打开当前SSH渠道的远程访问控制台"),s("br"),s("br"),_._v(" "),s("img",{attrs:{src:"docs/images/node/server_sshterm.png",alt:"sshterm"}}),s("br"),s("br"),_._v("\n3. "),s("code",[_._v("文件管理:")]),_._v("基于JSCH的文件管理工具，详情请查阅下文**【SSH文件管理】**")]),_._v(" "),s("h4",{attrs:{id:"ssh快捷安装配置插件端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh快捷安装配置插件端"}},[_._v("#")]),_._v(" SSH快捷安装配置插件端")]),_._v(" "),s("p",[_._v("快速安装SSH对应服务器的插件端并快速配置节点信息"),s("br"),s("br")]),_._v(" "),s("p",[_._v("点击"),s("code",[_._v("安装")]),_._v("控件，打开安装插件端"),s("br"),s("br"),_._v(" "),s("img",{attrs:{src:"docs/images/node/server_sshinstalledit.png",alt:"sshinstalledit"}}),s("br"),s("br")]),_._v(" "),s("p",[s("code",[_._v("节点ID:")]),_._v("遵守唯一性约束,首次创建成功后"),s("code",[_._v("不可再次修改")]),s("br"),s("br"),_._v(" "),s("code",[_._v("节点名称:")]),_._v("当前节点名称描述,不限定 建议以服务器"),s("code",[_._v("域名/IP/hostname")]),_._v("命名"),s("br"),s("br"),_._v(" "),s("code",[_._v("节点协议:")]),_._v("支持http/https"),s("code",[_._v("节点地址:")]),_._v("插件端服务的ip+port(或者域名),非url"),s("code",[_._v("不带协议")]),s("br")]),_._v(" "),s("blockquote",[s("p",[_._v("注意：如上即为"),s("RouterLink",{attrs:{to:"/节点管理/添加节点.html"}},[_._v("创建节点配置参数")]),_._v("的简化配置信息，安装成功后将按照如上所配置快速创建\n默认分组、默认启用节点和默认不开启监控的节点**【节点管理列表可见可二次修改】**")],1)]),_._v(" "),s("p",[s("code",[_._v("安装路径:")]),_._v("远程安装插件端的安装目录**【目录必须在授权目录层级之下，目录不存在会自动创建，注意对存在目录的覆盖情况】**"),s("br"),s("br"),_._v(" "),s("code",[_._v("上传zip包:")]),_._v("上传插件端安装包（agent-x.x.x-release.zip）")]),_._v(" "),s("blockquote",[s("p",[_._v("注意：安装包"),s("strong",[_._v("必须")]),_._v("是Jpom官方发布结构类型的插件包"),s("code",[_._v("agent-x.x.x-release.zip")]),s("br"),_._v("\n可自行解压修改相关启动参数，请参阅"),s("RouterLink",{attrs:{to:"/安装使用/启动参数.html"}},[_._v("启动参数")]),s("br"),_._v("\n修改完请"),s("strong",[_._v("必须")]),_._v("按照Jpom官方发布的结构类型压缩回插件包"),s("br"),_._v("\n若不自定义修改官方发布的Jpom插件包（agent-x.x.x-release.zip），则将以默认参数方式安装，详情请查阅"),s("RouterLink",{attrs:{to:"/安装使用/开始安装.html"}},[_._v("开始安装-简易安装流程")])],1)]),_._v(" "),s("h4",{attrs:{id:"ssh文件管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh文件管理"}},[_._v("#")]),_._v(" SSH文件管理")]),_._v(" "),s("p",[_._v("使用JSCH不依赖于插件端的文件管理系统，点击"),s("code",[_._v("文件")]),_._v("进入SSH授权目录起的文件目录"),s("br"),s("br"),_._v(" "),s("img",{attrs:{src:"docs/images/node/wjgl_list.png",alt:"wjgllist"}}),s("br"),s("br")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("点击文件路径下子目录可快速跳转到对应目录")])]),_._v(" "),s("li",[s("p",[_._v("点击表格中文件类型的行即可进入该目录下")])]),_._v(" "),s("li",[s("p",[_._v("上传的文件会采用SFTP协议并自动保存到与文件路径对应的目录中")])]),_._v(" "),s("li",[s("p",[s("code",[_._v("文件夹")]),_._v("显示文件类型为文件夹，可进行"),s("strong",[_._v("删除")]),_._v("操作")])]),_._v(" "),s("li",[s("p",[s("code",[_._v("压缩包")]),_._v("可进行"),s("strong",[_._v("删除")]),_._v("、"),s("strong",[_._v("解压")]),_._v("和"),s("strong",[_._v("下载")]),_._v("操作")])]),_._v(" "),s("li",[s("p",[s("code",[_._v("普通文件")]),_._v("可进行"),s("strong",[_._v("删除")]),_._v("、"),s("strong",[_._v("终端（查看）"),s("strong",[_._v("和")]),_._v("下载")]),_._v("操作")])])])])}),[],!1,null,null,null);v.default=t.exports}}]);