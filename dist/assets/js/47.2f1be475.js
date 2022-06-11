(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{545:function(s,a,e){"use strict";e.r(a);var t=e(31),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("blockquote",[e("p",[s._v("本文主要介绍：\n如何从零开始使用 Jpom 中的容器构建 java 项目并发布到节点中")]),s._v(" "),e("p",[s._v("文中使用到的依赖环境版本仅供参考，实际使用中请根据业务情况来安装对应的版本")])]),s._v(" "),e("blockquote",[e("p",[s._v("注意：本文采用一键安装同时基于 2.8.8 版本讲解,系统为 ubuntu")])]),s._v(" "),e("h2",{attrs:{id:"需要准备的环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需要准备的环境"}},[s._v("#")]),s._v(" 需要准备的环境")]),s._v(" "),e("ol",[e("li",[s._v("Jpom 服务端、Jpom 插件端（安装 jpom 需要 java 环境）")]),s._v(" "),e("li",[s._v("一个安装了 docker 的服务器（可以和安装 Jpom 服务端在同一个服务器）")])]),s._v(" "),e("h2",{attrs:{id:"安装服务端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装服务端"}},[s._v("#")]),s._v(" 安装服务端")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 提前创建好文件夹 并且切换到对应到文件夹执行命令\nmkdir -p /home/jpom/server/\napt install -y wget && wget -O install.sh https://dromara.gitee.io/jpom/docs/install.sh && bash install.sh Server jdk\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/tutorial/project_dsl_java/install1.png",alt:"install1"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/tutorial/project_dsl_java/install2.png",alt:"install2"}})]),s._v(" "),e("h3",{attrs:{id:"初始化服务端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化服务端"}},[s._v("#")]),s._v(" 初始化服务端")]),s._v(" "),e("h4",{attrs:{id:"添加超级管理账号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加超级管理账号"}},[s._v("#")]),s._v(" 添加超级管理账号")]),s._v(" "),e("blockquote",[e("p",[s._v("添加一个超级管理员账号，请妥善保管此账号同时请设置安全度较强的密码")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/tutorial/project_dsl_java/inits1.png",alt:"install1"}})]),s._v(" "),e("h4",{attrs:{id:"开启账号-mfa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启账号-mfa"}},[s._v("#")]),s._v(" 开启账号 MFA")]),s._v(" "),e("blockquote",[e("p",[s._v("为了系统安全，强烈建议超级管理员账号开启 MFA 两步验证")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/tutorial/project_dsl_java/inits2.png",alt:"install2"}})]),s._v(" "),e("h2",{attrs:{id:"安装-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker"}},[s._v("#")]),s._v(" 安装 docker")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 这里使用了阿里云镜像，可以更新自己业务选择\ncurl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"状态管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态管理"}},[s._v("#")]),s._v(" 状态管理")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 查看状态\nsystemctl status docker\n# 停止\nsystemctl stop docker\n# 启动\nsystemctl start docker\n# 重启\nsystemctl daemon-reload && systemctl restart docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"docker-tls-证书-非必须"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-tls-证书-非必须"}},[s._v("#")]),s._v(" Docker TLS 证书   （非必须）")]),s._v(" "),e("blockquote",[e("p",[s._v("如果服务端所在端服务器已经安装 docker 在 2.8.15+ 版本会自动加载本地 docker 到 Jpom 中，这样就可以不用修改任何配置即可使用 jpom 管理本地 docker。即可忽略该步骤")])]),s._v(" "),e("p",[s._v("Jpom 使用 docker http 接口是实现和 docker 通讯和管理，但是默认没有开启任何认证这样使得 docker 极不安全，如果端口暴露到公网还容易出现挖矿情况")]),s._v(" "),e("p",[s._v("所以这里 我们强烈建议您使用 TLS 证书来连接 docker 提升安全性")]),s._v(" "),e("p",[s._v("这里提供一个快速生成证书到脚本示例：（使用中请一定修改脚本内的 IP 或者可能无法使用的情况奥）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('#!/bin/bash\n#\n# -------------------------------------------------------------\n# 自动创建 Docker TLS 证书\n# -------------------------------------------------------------\n# 以下是配置信息\n# --[BEGIN]------------------------------\n# 请修改为您连接到 IP\nIP="172.19.106.253"\n# 证书目录请更新自己需求修改\nPASSWORD="172.19.106.253"\nCOUNTRY="CN"\nSTATE="$IP"\nCITY="$IP"\nORGANIZATION="$IP"\nORGANIZATIONAL_UNIT="Dev"\nCOMMON_NAME="$IP"\nEMAIL="$IP@docker-tls.com"\n# --[END]--\n# Generate CA key\nopenssl genrsa -aes256 -passout "pass:$PASSWORD" -out "ca-key.pem" 4096\n# Generate CA\nopenssl req -new -x509 -days 365 -key "ca-key.pem" -sha256 -out "ca.pem" -passin "pass:$PASSWORD" -subj "/C=$COUNTRY/ST=$STATE/L=$CITY/O=$ORGANIZATION/OU=$ORGANIZATIONAL_UNIT/CN=$COMMON_NAME/emailAddress=$EMAIL"\n# Generate Server key\nopenssl genrsa -out "server-key.pem" 4096\n# Generate Server Certs.\nopenssl req -subj "/CN=$COMMON_NAME" -sha256 -new -key "server-key.pem" -out server.csr\necho "subjectAltName = IP:$IP,IP:127.0.0.1" >> extfile.cnf\necho "extendedKeyUsage = serverAuth" >> extfile.cnf\nopenssl x509 -req -days 365 -sha256 -in server.csr -passin "pass:$PASSWORD" -CA "ca.pem" -CAkey "ca-key.pem" -CAcreateserial -out "server-cert.pem" -extfile extfile.cnf\n# Generate Client Certs.\nrm -f extfile.cnf\nopenssl genrsa -out "key.pem" 4096\nopenssl req -subj \'/CN=client\' -new -key "key.pem" -out client.csr\necho extendedKeyUsage = clientAuth >> extfile.cnf\nopenssl x509 -req -days 365 -sha256 -in client.csr -passin "pass:$PASSWORD" -CA "ca.pem" -CAkey "ca-key.pem" -CAcreateserial -out "cert.pem" -extfile extfile.cnf\nrm -vf client.csr server.csr ca.srl extfile.cnf\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br")])]),e("p",[s._v("同时将生成到证书下载到本地 保存使用")]),s._v(" "),e("p",[s._v("证书示例：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/tutorial/docker-cli/tls1.png",alt:"install1"}})]),s._v(" "),e("h2",{attrs:{id:"配置-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-docker"}},[s._v("#")]),s._v(" 配置 docker")]),s._v(" "),e("h3",{attrs:{id:"查看-docker-service-路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看-docker-service-路径"}},[s._v("#")]),s._v(" 查看 docker.service 路径")]),s._v(" "),e("p",[s._v("systemctl status docker")]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/tutorial/docker-cli/service1.png",alt:"install1"}})]),s._v(" "),e("h3",{attrs:{id:"配置-tcp-tls-非必须"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-tcp-tls-非必须"}},[s._v("#")]),s._v(" 配置 tcp + tls   （非必须）")]),s._v(" "),e("blockquote",[e("p",[s._v("如果服务端所在端服务器已经安装 docker 在 2.8.15+ 版本会自动加载本地 docker 到 Jpom 中，这样就可以不用修改任何配置即可使用 jpom 管理本地 docker。即可忽略该步骤")])]),s._v(" "),e("p",[e("code",[s._v("vim /lib/systemd/system/docker.service")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/tutorial/docker-cli/service2.png",alt:"install1"}})]),s._v(" "),e("p",[s._v("ExecStart 需要添加内容")]),s._v(" "),e("p",[e("code",[s._v("--tlsverify --tlscacert=/home/docker/tls-ca/ca.pem --tlscert=/home/docker/tls-ca/server-cert.pem --tlskey=/home/docker/tls-ca/server-key.pem -H tcp://0.0.0.0:2375")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 配置示例\nExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock --tlsverify --tlscacert=/home/docker/tls-ca/ca.pem --tlscert=/home/docker/tls-ca/server-cert.pem --tlskey=/home/docker/tls-ca/server-key.pem -H tcp://0.0.0.0:2375\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/tutorial/docker-cli/service3.png",alt:"install1"}})]),s._v(" "),e("h2",{attrs:{id:"添加-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加-docker"}},[s._v("#")]),s._v(" 添加 docker")]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/tutorial/docker-cli/add-docker1.png",alt:"install1"}})]),s._v(" "),e("p",[s._v("注意这里 host 为："),e("code",[s._v("tcp://127.0.0.1:2375")]),s._v(" 这里因为连接本地 docker 所有使用 127.0.0.1 实际中请更换")]),s._v(" "),e("p",[s._v("证书为压缩文件，压缩文件需要包含生成证书文件："),e("code",[s._v("key.pem")]),s._v(" "),e("code",[s._v("ca.pem")]),s._v(" "),e("code",[s._v("cert.pem")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/tutorial/docker-cli/ca1.png",alt:"install1"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/tutorial/docker-cli/add-docker2.png",alt:"install1"}})]),s._v(" "),e("h2",{attrs:{id:"安装插件端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装插件端"}},[s._v("#")]),s._v(" 安装插件端")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 提前创建好文件夹 并且切换到对应到文件夹执行命令\nmkdir -p /home/jpom/agent/\napt install -y wget && wget -O install.sh https://dromara.gitee.io/jpom/docs/install.sh && bash install.sh Agent jdk\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/tutorial/project_dsl_java/install-agent1.png",alt:"install1"}}),s._v(" "),e("img",{attrs:{src:"/images/tutorial/project_dsl_java/install-agent2.png",alt:"install2"}})]),s._v(" "),e("h3",{attrs:{id:"添加节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加节点"}},[s._v("#")]),s._v(" 添加节点")]),s._v(" "),e("p",[s._v("注意要填写端口号哟")]),s._v(" "),e("p",[s._v("这里的节点账号密码和超级管理员账号密码是两个都行哟")]),s._v(" "),e("p",[s._v("节点账号密码在安装启动成功后会输出到控制台，请根据输出到内容填写。如果自己修改了账号密码则填写修改后到")]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/tutorial/project_dsl_java/inita1.png",alt:"install1"}})]),s._v(" "),e("h3",{attrs:{id:"配置白名单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置白名单"}},[s._v("#")]),s._v(" 配置白名单")]),s._v(" "),e("p",[s._v("项目白名单是为了防止随意配置目录，同时也为了保护系统目录")]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/tutorial/project_dsl_java/inita2.png",alt:"install1"}})]),s._v(" "),e("h3",{attrs:{id:"创建项目-jar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建项目-jar"}},[s._v("#")]),s._v(" 创建项目（jar）")]),s._v(" "),e("h2",{attrs:{id:"添加构建仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加构建仓库"}},[s._v("#")]),s._v(" 添加构建仓库")]),s._v(" "),e("p",[s._v("这里使用 jpom 演示的仓库中的 python")]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/tutorial/project_dsl_python/repo1.png",alt:"install1"}}),s._v(" "),e("img",{attrs:{src:"/images/tutorial/project_dsl_python/repo2.png",alt:"install1"}})]),s._v(" "),e("h2",{attrs:{id:"添加容器构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加容器构建"}},[s._v("#")]),s._v(" 添加容器构建")]),s._v(" "),e("p",[s._v("这里需要注意构建产物目录：是指仓库下面的相对路径")]),s._v(" "),e("p",[s._v("发布项目需要选择节点再选择项目")]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/tutorial/build_docker_java_node_release/edit-build1.png",alt:"install1"}})]),s._v(" "),e("p",[s._v("DSL 示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 基础镜像 目前仅支持 ubuntu-latest\nrunsOn: ubuntu-latest\n# 使用哪个 docker 构建,填写 docker 标签 默认查询可用的第一个,如果 tag 查询出多个也选择第一个结果\nfromTag: loacl\nsteps:\n  - uses: java\n    version: 8\n  - uses: maven\n    version: 3.8.5\n# 将容器中的文件缓存到 docker 卷中\n  - uses: cache\n    path: /root/.m2\n  - run: cd ${JPOM_WORKING_DIR} && mvn package -s settings.xml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("完整示例："),e("RouterLink",{attrs:{to:"/FQA/DOCKER_DSL.html"}},[s._v("✈️进入>>")])],1),s._v(" "),e("p",[s._v("目前支持都插件有（更多插件尽情期待）：")]),s._v(" "),e("ol",[e("li",[s._v("java\n"),e("ol",[e("li",[s._v("sdk 镜像使用：https://mirrors.tuna.tsinghua.edu.cn/")]),s._v(" "),e("li",[s._v("支持版本有：8, 9, 10, 11, 12, 13, 14, 15, 16, 17")])])]),s._v(" "),e("li",[s._v("maven\n"),e("ol",[e("li",[s._v("sdk 镜像使用：https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/")])])]),s._v(" "),e("li",[s._v("node\n"),e("ol",[e("li",[s._v("sdk 镜像使用：https://registry.npmmirror.com/-/binary/node")])])])]),s._v(" "),e("p",[s._v("执行构建")]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/tutorial/build_docker_java_node_release/build1.png",alt:"install1"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/tutorial/build_docker_java_node_release/build2.png",alt:"install1"}})]),s._v(" "),e("p",[s._v("第一次构建需要较长时间，请耐心等待\n如果构建中发生非预期错误，请根据错误信息检查或者看看相关环境是否匹配")]),s._v(" "),e("h2",{attrs:{id:"查看项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看项目"}},[s._v("#")]),s._v(" 查看项目")]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/tutorial/build_docker_java_node_release/project-list.png",alt:"install1"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);