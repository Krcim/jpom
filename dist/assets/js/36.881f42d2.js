(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{532:function(s,e,a){"use strict";a.r(e);var t=a(31),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[s._v("#")]),s._v(" 安装Docker")]),s._v(" "),a("h3",{attrs:{id:"方式一-在线安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式一-在线安装"}},[s._v("#")]),s._v(" 方式一：在线安装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 下载并安装Docker所需要的软件包\nsudo yum install -y yum-utils\n# 添加Docker官方的yum仓库地址\nsudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n# 设置阿里云镜像的yum仓库地址\nsudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n# 更新yum缓存\nsudo yum makecache fast\n# 安装新版Docker\nsudo yum install -y docker-ce docker-ce-cli containerd.io\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"方式二-离线安装-如果无法在线安装可尝试此方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式二-离线安装-如果无法在线安装可尝试此方式"}},[s._v("#")]),s._v(" 方式二：离线安装（如果无法在线安装可尝试此方式）")]),s._v(" "),a("h4",{attrs:{id:"下载docker安装包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载docker安装包"}},[s._v("#")]),s._v(" 下载Docker安装包")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://download.docker.com/linux/static/stable/x86_64/docker-20.10.12.tgz",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://download.docker.com/linux/static/stable/x86_64/docker-20.10.12.tgz"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("如需要安装指定版本可到 "),a("a",{attrs:{href:"https://download.docker.com/linux/static/stable/x86_64/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://download.docker.com/linux/static/stable/x86_64/"),a("OutboundLink")],1),s._v(" 下载")])]),s._v(" "),a("h4",{attrs:{id:"下载安装脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载安装脚本"}},[s._v("#")]),s._v(" 下载安装脚本")]),s._v(" "),a("blockquote",[a("p",[s._v("到 "),a("a",{attrs:{href:"https://github.com/Jrohy/docker-install",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/Jrohy/docker-install"),a("OutboundLink")],1),s._v(" 下载"),a("code",[s._v("docker.bash")]),s._v("和"),a("code",[s._v("install.sh")]),s._v("两个文件")])]),s._v(" "),a("h4",{attrs:{id:"上传文件-正式安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传文件-正式安装"}},[s._v("#")]),s._v(" 上传文件，正式安装")]),s._v(" "),a("blockquote",[a("p",[s._v("把 "),a("code",[s._v("docker-20.10.12.tgz")]),s._v("、"),a("code",[s._v("docker.bash")]),s._v("、"),a("code",[s._v("install.sh")]),s._v(" 三个文件上传到服务器，上传完成后执行安装命令")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("./install.sh -f docker-20.10.12.tgz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("下载完成后看到"),a("code",[s._v("Created symlink from /etc/systemd/system/multi-user.target.wants/docker.service to /usr/lib/systemd/system/docker.service.docker 20.10.12 install success!")]),s._v("说明安装成功")])]),s._v(" "),a("h2",{attrs:{id:"设置docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置docker"}},[s._v("#")]),s._v(" 设置Docker")]),s._v(" "),a("h3",{attrs:{id:"启动docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动docker"}},[s._v("#")]),s._v(" 启动Docker")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 启动Docker服务\nsystemctl start docker\n# 查看Docker是否启动正常, 看到绿色的active（running）则说明启动正常\nsystemctl status docker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"设置docker开机自启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置docker开机自启"}},[s._v("#")]),s._v(" 设置Docker开机自启")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl enable docker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"下载docker镜像时加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载docker镜像时加速"}},[s._v("#")]),s._v(" 下载Docker镜像时加速")]),s._v(" "),a("blockquote",[a("p",[s._v("直接使用官方镜像的地址比较慢，可配置国内加速镜像。")]),s._v(" "),a("p",[s._v("使用下面命令直接生成配置文件，或者手动修改"),a("code",[s._v("/etc/docker/daemon.json")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('cat <<EOF > /etc/docker/daemon.json\n{\n  "registry-mirrors": [\n    "https://docker.mirrors.ustc.edu.cn",\n    "http://hub-mirror.c.163.com"\n  ],\n  "max-concurrent-downloads": 10,\n  "log-driver": "json-file",\n  "log-level": "warn",\n  "log-opts": {\n    "max-size": "10m",\n    "max-file": "3"\n    },\n  "data-root": "/var/lib/docker"\n}\nEOF\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"重启docker服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启docker服务"}},[s._v("#")]),s._v(" 重启Docker服务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl restart docker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"查看docker启动状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看docker启动状态"}},[s._v("#")]),s._v(" 查看Docker启动状态")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl status docker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("至此，你已完成Docker的安装和设置，现在你可以使用"),a("code",[s._v("docker")]),s._v("命令了。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);