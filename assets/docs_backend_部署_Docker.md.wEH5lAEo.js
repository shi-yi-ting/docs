import{_ as s,c as a,o as n,U as p,bB as e,bC as l,bD as i,bE as t,bF as o,bG as c,bH as r,bI as d,bJ as h,bK as u,bL as m,bM as g,bN as k,bO as b,bP as v,bQ as x,bR as _,bS as y,bT as q,bU as f,bV as C}from"./chunks/framework.FpOEJISx.js";const I=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/backend/部署/Docker.md","filePath":"docs/backend/部署/Docker.md"}'),D={name:"docs/backend/部署/Docker.md"},P=p(`<h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ul><li>Docker可以运行在MAC、Windows、CentOS、UBUNTU等操作系统上，本课程基于CentOS 7 安装Docker。</li><li><a href="https://www.docker.com" target="_blank" rel="noreferrer">官网</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 1、yum 包更新到最新</span></span>
<span class="line"><span>yum update</span></span>
<span class="line"><span># 2、安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的</span></span>
<span class="line"><span>yum install -y yum-utils device-mapper-persistent-data lvm2</span></span>
<span class="line"><span># 3、 设置yum源</span></span>
<span class="line"><span>yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo</span></span>
<span class="line"><span># 4、 安装docker，出现输入的界面都按 y</span></span>
<span class="line"><span>yum install -y docker-ce</span></span>
<span class="line"><span># 5、 查看docker版本，验证是否验证成功</span></span>
<span class="line"><span>docker -v</span></span></code></pre></div><h2 id="配置镜像加速器" tabindex="-1">配置镜像加速器 <a class="header-anchor" href="#配置镜像加速器" aria-label="Permalink to &quot;配置镜像加速器&quot;">​</a></h2><p>登录阿里云---点击右上角控制台---左商检的面包屑展开---选择产品与服务---搜索栏搜索镜像---选择容器镜像服务---选择镜像加速器</p><p><img src="`+e+'" alt="Alt Text"></p><p><img src="'+l+`" alt="Alt Text"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo mkdir -p /etc/docker</span></span>
<span class="line"><span>sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;registry-mirrors&quot;: [&quot;https://p0u69d4c.mirror.aliyuncs.com&quot;],</span></span>
<span class="line"><span>  &quot;insecure-registries&quot;: [&quot;192.10.51.84:8080&quot;], // 可加这个</span></span>
<span class="line"><span>  &quot;live-restore&quot;: true // 可加这个docker</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>sudo systemctl daemon-reload</span></span>
<span class="line"><span>sudo systemctl restart docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查看：cat /etc/docker/daemon.json</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://hub.docker.com // hub.docker网站</span></span>
<span class="line"><span>https://p0u69d4c.mirror.aliyuncs.com // 个人的阿里云</span></span></code></pre></div><h2 id="修改镜像加速器" tabindex="-1">修改镜像加速器 <a class="header-anchor" href="#修改镜像加速器" aria-label="Permalink to &quot;修改镜像加速器&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cat /etc/docker/daemon.json  // 这个看你安装的路径</span></span>
<span class="line"><span>vi daemon.json</span></span>
<span class="line"><span>i</span></span>
<span class="line"><span>编辑完之后执行传递</span></span>
<span class="line"><span>Esc</span></span>
<span class="line"><span>:wq!</span></span>
<span class="line"><span>more daemon.json</span></span>
<span class="line"><span>sudo systemctl restart docker</span></span></code></pre></div><h2 id="docker进程命令" tabindex="-1">Docker进程命令 <a class="header-anchor" href="#docker进程命令" aria-label="Permalink to &quot;Docker进程命令&quot;">​</a></h2><ul><li>docker启动命令,docker重启命令,docker关闭命令</li><li>启动 sudo systemctl start docker</li><li>守护进程重启 sudo systemctl daemon-reload</li><li>重启docker服务 sudo systemctl restart docker</li><li>重启docker服务 sudo service docker restart</li><li>关闭docker sudo service docker stop</li><li>关闭docker sudo systemctl stop docker</li></ul><h2 id="镜像相关命令" tabindex="-1">镜像相关命令 <a class="header-anchor" href="#镜像相关命令" aria-label="Permalink to &quot;镜像相关命令&quot;">​</a></h2><ul><li>查看镜像有没有：<a href="https://hub.docker.com/" target="_blank" rel="noreferrer">https://hub.docker.com/</a></li><li>查看镜像：docker images</li><li>搜索镜像：docker search 镜像名称</li><li>从远程仓库拉镜像：docker pull 镜像名：版本 如：docker pull redis:5.0（版本号如果不写则拉取的是最新版本）</li><li>删除镜像：docker rmi 镜像id（或者名字）</li><li>删除所有镜像：首先 docker images -q 查看所有镜像id ，然后执行：docker rmi &#39;docker images -q&#39;</li></ul><h2 id="容器相关命令" tabindex="-1">容器相关命令 <a class="header-anchor" href="#容器相关命令" aria-label="Permalink to &quot;容器相关命令&quot;">​</a></h2><p>查看正在运行的容器：docker ps 查看关闭和关闭的容器：docker ps -a 创建容器： 通过 -it创建的容器只要执行 exit 容器将自动关闭</p><p><img src="`+i+'" alt="Alt Text"></p><p><img src="'+t+'" alt="Alt Text"></p><p>退出容器：exit 进入容器：docker exec -it 容器名字 /bin/bash 如：docker exec -it c2 /bin/bash</p><h2 id="数据卷" tabindex="-1">数据卷 <a class="header-anchor" href="#数据卷" aria-label="Permalink to &quot;数据卷&quot;">​</a></h2><h3 id="数据卷概念" tabindex="-1">数据卷概念 <a class="header-anchor" href="#数据卷概念" aria-label="Permalink to &quot;数据卷概念&quot;">​</a></h3><p><img src="'+o+'" alt="Alt Text"></p><h3 id="配置数据卷" tabindex="-1">配置数据卷 <a class="header-anchor" href="#配置数据卷" aria-label="Permalink to &quot;配置数据卷&quot;">​</a></h3><p><img src="'+c+'" alt="Alt Text"></p><h3 id="数据卷容器" tabindex="-1">数据卷容器 <a class="header-anchor" href="#数据卷容器" aria-label="Permalink to &quot;数据卷容器&quot;">​</a></h3><p><img src="'+r+'" alt="Alt Text"></p><h3 id="配置数据卷容器" tabindex="-1">配置数据卷容器 <a class="header-anchor" href="#配置数据卷容器" aria-label="Permalink to &quot;配置数据卷容器&quot;">​</a></h3><p><img src="'+d+'" alt="Alt Text"></p><h3 id="数据卷小结" tabindex="-1">数据卷小结 <a class="header-anchor" href="#数据卷小结" aria-label="Permalink to &quot;数据卷小结&quot;">​</a></h3><p><img src="'+h+'" alt="Alt Text"></p><h2 id="应用部署" tabindex="-1">应用部署 <a class="header-anchor" href="#应用部署" aria-label="Permalink to &quot;应用部署&quot;">​</a></h2><h3 id="mysql部署" tabindex="-1">MySQL部署 <a class="header-anchor" href="#mysql部署" aria-label="Permalink to &quot;MySQL部署&quot;">​</a></h3><p>需求：在Docker容器中部署MySQL，并通过外部mysgl客户端操作MySQL Server。</p><p>实现步骤：</p><ol><li>搜索mysql镜像</li><li>拉取mysql镜像</li><li>创建容器</li><li>操作容器中的mysql</li></ol><p><img src="'+u+`" alt="Alt Text"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 搜素镜像</span></span>
<span class="line"><span>docker search mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 拉取镜像</span></span>
<span class="line"><span>docker pull mysql:5.6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建容器，设置端口映射，目录映射(在/root目录下创建mysg1目录用于存储mysq1数据信息)</span></span>
<span class="line"><span>mkdir ~/mysql</span></span>
<span class="line"><span>cd ~/mysq1</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 创建容器</span></span>
<span class="line"><span>docker run -id \\</span></span>
<span class="line"><span>-p 3306:3306 \\</span></span>
<span class="line"><span>--name=mysql \\</span></span>
<span class="line"><span>-v $PWD/conf:/etc/mysql/conf.d \\</span></span>
<span class="line"><span>-v $PwD/logs:/1ogs \\</span></span>
<span class="line"><span>-v $PwD/data:/var/lib/mysql \\</span></span>
<span class="line"><span>-e MYSQL_ROOT_PASSWORD=123456 \\</span></span>
<span class="line"><span>mysql:5.6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数说明:</span></span>
<span class="line"><span>-p 3306:3306: 将容器的 3306端口映射到宿主机的 3306 端口。</span></span>
<span class="line"><span>-v $PWD/conf:/etc/mysql/conf.d \\: 将主机当前目录下的 /conf挂载到容器的 :/etc/mysql/conf.d。配置目录</span></span>
<span class="line"><span>-v $PwD/logs:/1ogs: 将主机当前目录下的 logs 目录挂载到容器的 1ogs。日志目录</span></span>
<span class="line"><span>-v $PwD/data:/var/lib/mysql \\：主机当前目录下的 data 目录挂载到容器的 /var/lib/mysql 目录</span></span>
<span class="line"><span>-e MYSQL_ROOT_PASSWORD=123456：设置环境变量</span></span>
<span class="line"><span>使用外部机器访问nginx: 直接使用IP 宿主机的ip：端口</span></span></code></pre></div><p><strong>进去mysql容器内部</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker exec -it 容器名字 /bin/bash</span></span>
<span class="line"><span>docker exec -it mysql /bin/bash // 进入容器需要容器先启动  进入容器之后会变成  root@容器的id</span></span></code></pre></div><p><strong>登录mysql</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mysql -uroot -p123456 // 登录</span></span>
<span class="line"><span>exit // 退出</span></span></code></pre></div><h3 id="tomcat部署" tabindex="-1">Tomcat部署 <a class="header-anchor" href="#tomcat部署" aria-label="Permalink to &quot;Tomcat部署&quot;">​</a></h3><p>在Docker容器中部署Tomcat，并通过外部机器访问Tomcat部署的项目</p><ol><li>搜索tomcat镜像</li><li>拉取tomcat镜像</li><li>创建容器</li><li>部署项目</li><li>测试访问</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 搜索tomcat镜像</span></span>
<span class="line"><span>docker search tomcat // 搜素</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 拉取镜像</span></span>
<span class="line"><span>docker pull tomcat // 拉取</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建容器，设置端口映射，目录映射</span></span>
<span class="line"><span>mkdir ~/tomcat</span></span>
<span class="line"><span>cd ~/tomcat</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 创建容器</span></span>
<span class="line"><span>docker run -id --name=c_tomcat \\</span></span>
<span class="line"><span>-p 8080:8080 \\</span></span>
<span class="line"><span>-v $PWD:/usr/local/tomcat/webapps \\</span></span>
<span class="line"><span>tomcat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数说明:</span></span>
<span class="line"><span>-p 8080:8080: 将容器的 8080端口映射到宿主机的 8080 端口。（左边的是宿主机端口，右边的是容器端口）</span></span>
<span class="line"><span>-v $PWD:/usr/local/tomcat/webapps：将主机中当前目录挂载到容器的webapps</span></span></code></pre></div><p>访问：ip:端口l；因为tomcat目录上什么都没有所以会报这个</p><p><img src="`+m+'" alt="Alt Text"></p><p><strong>创建一个测试文件</strong></p><p><img src="'+g+`" alt="Alt Text"></p><p>index.html里面的内容：<h1>hello tomcat docker</h1>；下面则是访问tomcat的展示的内容了 正式开发时候直接将开发好的项目扔进tomcat的目录即可</p><h3 id="nginx部署" tabindex="-1">nginx部署 <a class="header-anchor" href="#nginx部署" aria-label="Permalink to &quot;nginx部署&quot;">​</a></h3><p>在Docker容器中部署Nginx，并通过外部机器访问Nginx。</p><ol><li>搜索Nginx镜像</li><li>拉取Nginx镜像</li><li>创建容器</li><li>测试访问</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker search nginx // 搜素</span></span>
<span class="line"><span>docker pull nginx // 拉取</span></span>
<span class="line"><span>mkdir nginx // 在/root目录下创建nginx目录用于存储nginx数据信息</span></span>
<span class="line"><span>cd nginx/</span></span>
<span class="line"><span>mkdir conf</span></span>
<span class="line"><span>cd conf/</span></span>
<span class="line"><span>vi nginx.conf // 在~/nginx/conf/下创建nginx.conf文件，粘贴下面内容</span></span></code></pre></div><p><strong>nginx简单配置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 未做任何代理的配置</span></span>
<span class="line"><span>user nginx;</span></span>
<span class="line"><span># 默认为 1，表示开启一个业务进程</span></span>
<span class="line"><span>worker_processes 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>error_log /var/log/nginx/error.log warn;</span></span>
<span class="line"><span>pid       /var/run/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    # 单个业务进程可接受连接数</span></span>
<span class="line"><span>    worker_connections 1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    # 引入 http mime 类型</span></span>
<span class="line"><span>    include           /etc/nginx/mime.types;</span></span>
<span class="line"><span>    # 如果 mime 类型没匹配上，默认使用二进制流的方式传输。</span></span>
<span class="line"><span>    default_type      application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    log_format main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot;&#39;</span></span>
<span class="line"><span>                     &#39;$status $body_bytes_sent &quot;$http_referer&quot;&#39;</span></span>
<span class="line"><span>                     &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    access_log      /var/log/nginx/access.log main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 高效网络传输，也就是数据 0 拷贝。</span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    #tcp_nopush     on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    keepalive_timeout 65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #gzip on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    include /etc/nginx/conf.d/*.conf;</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 指定了 Nginx 运行的用户或用户组。在这里，它将 Nginx 服务器的运行权限设置为 nginx 用户。</span></span>
<span class="line"><span>user nginx;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置Nginx服务器的工作进程数量。在这里，worker_processes 1;指定了Nginx服务器只使用一个工作进程来处理请求。</span></span>
<span class="line"><span>worker_processes 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定Nginx服务器的错误日志文件路径为/var/log/nginx/error.log，并设置日志级别为warn。</span></span>
<span class="line"><span># 这意味着Nginx会将错误日志记录到指定的文件中，并只记录warn级别及以上的错误信息。</span></span>
<span class="line"><span>error_log /var/log/nginx/error.log warn;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定了Nginx服务器的进程ID文件的路径为/var/run/nginx.pid。 N</span></span>
<span class="line"><span># ginx会将其进程ID写入这个文件，以便其他程序可以通过读取这个文件来获取Nginx的进程ID。</span></span>
<span class="line"><span>pid       /var/run/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    # 设置了Nginx服务器的最大并发连接数为1024。</span></span>
<span class="line"><span>    worker_connections 1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    # 用于在Nginx服务器中指定文件类型。</span></span>
<span class="line"><span>    include           /etc/nginx/mime.types;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 设置了Nginx服务器在缺少文件类型信息时默认使用的文件类型为application/octet-stream。</span></span>
<span class="line"><span>    default_type      application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 用来定义Nginx日志的格式。它包括了一系列变量，如请求的远程地址、用户、时间、请求内容、状态码、传输的字节数、引用来源、用户代理和转发地址。</span></span>
<span class="line"><span>    # 这个格式会被用于记录Nginx服务器的访问日志。</span></span>
<span class="line"><span>    log_format main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot;&#39;</span></span>
<span class="line"><span>                     &#39;$status $body_bytes_sent &quot;$http_referer&quot;&#39;</span></span>
<span class="line"><span>                     &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 指定Nginx服务器的访问日志文件路径为/var/log/nginx/access.log，并且使用名为main的日志格式来记录访问日志。</span></span>
<span class="line"><span>    access_log      /var/log/nginx/access.log main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 启用Nginx服务器的文件传输优化功能，即将文件传输交给操作系统的sendfile系统调用来处理，以提高文件传输的效率和性能。</span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 启用Nginx服务器的TCP_NOPUSH功能，该功能可以提高文件传输的效率和性能</span></span>
<span class="line"><span>    #tcp_nopush     on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 设置了Nginx服务器的keepalive超时时间为65秒。这指定了在客户端和服务器之间的持久连接中，如果在65秒内没有活动，则连接将被关闭。</span></span>
<span class="line"><span>    keepalive_timeout 65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        # 监听端口号</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 指定Nginx服务器的虚拟主机名为192.168.175.131(可以写成localhost)。</span></span>
<span class="line"><span>        # 当收到针对该主机名的请求时，Nginx将会使用这个server块中定义的配置来处理这些请求。</span></span>
<span class="line"><span>        server_name  192.168.175.131;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 匹配路径</span></span>
<span class="line"><span>        # 当访问的是 192.168.175.131/的时候将访问/usr/share/nginx/html目录下的index.html资源</span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            # 指定Nginx服务器的根目录为/usr/share/nginx/html，这意味着当访问服务器时，Nginx将会从这个目录中提供文件。</span></span>
<span class="line"><span>            root   /usr/share/nginx/html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            # 尝试按顺序查找当前请求的文件（$uri）、当前请求的目录（$uri/）以及/index.html文件，并返回找到的第一个存在的文件或目录。</span></span>
<span class="line"><span>            try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            # 指定在访问特定路径时服务器应该返回的默认文件名。</span></span>
<span class="line"><span>            # 在这种情况下，当访问的路径是 / 时，服务器将首先尝试返回 index.html 文件，如果该文件不存在，则尝试返回 index.htm 文件。</span></span>
<span class="line"><span>            index  index.html index.htm;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 当访问的是 192.168.175.131/test 的时候将访问 http://192.168.175.131 ip下 8080端口中 test文件夹中的index.html文件</span></span>
<span class="line"><span>        location /test/ {</span></span>
<span class="line"><span>            # 设置代理请求的头部信息中的&quot;Host&quot;字段为客户端请求中的&quot;Host&quot;字段的值。</span></span>
<span class="line"><span>            proxy_set_header Host $http_host;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            # 设置代理请求的头部信息中的&quot;X-Real-IP&quot;字段为客户端请求的远程地址。</span></span>
<span class="line"><span>            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            # 设置代理请求的头部信息中的&quot;REMOTE-HOST&quot;字段为客户端请求的远程地址。</span></span>
<span class="line"><span>            proxy_set_header REMOTE-HOST $remote_addr;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            # 设置代理请求的头部信息中的&quot;X-Forwarded-For&quot;字段为客户端请求的远程地址以及之前的&quot;X-Forwarded-For&quot;字段的值。</span></span>
<span class="line"><span>            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            # 将收到的请求代理到指定的地址和端口号上。在这种情况下，它将请求代理到 http://192.168.175.131:8080。</span></span>
<span class="line"><span>            # 注意这里的 http://192.168.175.131:8080;可以改为 其他ip + 其他端口</span></span>
<span class="line"><span>            proxy_pass http://192.168.175.131:8080;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 错误码对应页面</span></span>
<span class="line"><span>        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>        location = /50x.html {</span></span>
<span class="line"><span>            root   html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>编辑nginx.conf配置文件的时候报错</strong></p><p><img src="`+k+`" alt="Alt Text"></p><p>解决链接：<a href="https://blog.csdn.net/ybb_ymm/article/details/128759393" target="_blank" rel="noreferrer">https://blog.csdn.net/ybb_ymm/article/details/128759393</a></p><p>在nginx的配置目录下执行 ls -a 然后执行删除命令 rm -rf 文件名</p><p><strong>vim编译完无法返回到命令模式</strong> 我在写程序时，写完后准备返回保存测试，突然发现之前的Esc键无法退回到一般命令模式，在此我查了一下百度，测试成功在此推荐给大家.</p><p>(1) i：进入编辑模式</p><p>(2) ESC：进入一般命令模式</p><p>当我发现无法退出时，我找到了另外两个快捷键，大家可以尝试一下。</p><ul><li>ctrl+[ （左大括号）</li><li>ctrl+c</li></ul><p><strong>创建nginx容器</strong></p><p>注意在nginx目录下执行下面代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker run -id --name=nginx \\</span></span>
<span class="line"><span>-p 80:80 \\</span></span>
<span class="line"><span>-v $PWD/conf/nginx.conf:/etc/nginx/nginx.conf \\</span></span>
<span class="line"><span>-v $PWD/logs:/var/1og/nginx \\</span></span>
<span class="line"><span>-v $PWD/html:/usr/share/nginx/html \\</span></span>
<span class="line"><span>nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数说明:</span></span>
<span class="line"><span>-p 80:80: 将容器的 80端口映射到宿主机的 80 端口。</span></span>
<span class="line"><span>-v $PWD/conf/nginx.conf:/etc/nginx/nginx.conf: 将主机当前目录下的 /conf/nginx.conf挂载到容器的 :/etc/nginx/nginx.conf。配置目录</span></span>
<span class="line"><span>-v $PWD/logs:/var/log/nginx: 将主机当前目录下的 logs 目录挂载到容器的 var/log/nginx。日志目录</span></span>
<span class="line"><span>-v $PWD/html:/usr/share/nginx/html \\：主机当前目录下的 html 目录挂载到容器的 /usr/share/nginx/html 页面日志</span></span>
<span class="line"><span>使用外部机器访问nginx: 直接使用IP 宿主机的ip</span></span></code></pre></div><p>使用ip 访问的时候会报：这是因为html目录里没有内容可做如下操作</p><p>cd html</p><p>vi index.html</p><p>然后编写一个<h1>hello nginx docker</h1></p><h3 id="redis部署" tabindex="-1">Redis部署 <a class="header-anchor" href="#redis部署" aria-label="Permalink to &quot;Redis部署&quot;">​</a></h3><p>在Docker容器中部署Redis，并通过外部机器访问Redis</p><ol><li>搜索Redis镜像</li><li>拉取Redis镜像</li><li>创建容器</li><li>测试访问</li></ol><p>参考文档：<a href="https://blog.csdn.net/BThinker/article/details/123374236" target="_blank" rel="noreferrer">https://blog.csdn.net/BThinker/article/details/123374236</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir redis</span></span>
<span class="line"><span>cd redis</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker run --name redis -p 6379:6379 \\</span></span>
<span class="line"><span>-v $PWDredis/data:/data \\</span></span>
<span class="line"><span>-v $PWD/redis/conf/redis.conf:/etc/redis/redis.conf \\</span></span>
<span class="line"><span>-d redis:bullseye redis-server /etc/redis/redis.conf</span></span></code></pre></div><h2 id="镜像制作" tabindex="-1">镜像制作 <a class="header-anchor" href="#镜像制作" aria-label="Permalink to &quot;镜像制作&quot;">​</a></h2><p>docker commit 容器id 镜像名称:版本号 // 将容器转为镜像，commit的时候对于数据卷中目录挂载的内容是不会成为镜像中的内容的 docker save -o 压缩文件名称 镜像名称:版本号 // 镜像是不能直接传输的，需要转为压缩包 docker load -i 压缩文件名称 // 解压</p><p><img src="`+b+`" alt="Alt Text"></p><h3 id="镜像打包下载下来" tabindex="-1">镜像打包下载下来 <a class="header-anchor" href="#镜像打包下载下来" aria-label="Permalink to &quot;镜像打包下载下来&quot;">​</a></h3><p>要将 Docker 镜像打包成文件以供下载，你可以使用 docker save 命令将镜像保存到一个 tar 归档文件中。以下是一些步骤：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 使用 docker images 查看你的镜像列表：</span></span>
<span class="line"><span>docker images</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用 docker save 命令将镜像保存为 tar 归档文件：</span></span>
<span class="line"><span>docker save -o 文件名.tar 镜像名:标签</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 将 &quot;文件名.tar&quot; 替换为你想要保存的 tar 文件的名称，&quot;镜像名:标签&quot; 替换为你要保存的镜像的名称和标签。例如：</span></span>
<span class="line"><span>docker save -o my_image.tar ubuntu:latest</span></span>
<span class="line"><span>docker save -o /path/to/saved_images/my_image.tar ubuntu:latest // 保存到特定的目录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 等待保存过程完成。（在哪个环境中执行就会保存在哪个环境中）</span></span>
<span class="line"><span>// 当你需要在另一台机器上重新加载镜像时，可以使用 docker load 命令。例如：</span></span>
<span class="line"><span>docker load -i 文件名.tar</span></span></code></pre></div><h3 id="虚拟机中的内容复制到windows" tabindex="-1">虚拟机中的内容复制到windows <a class="header-anchor" href="#虚拟机中的内容复制到windows" aria-label="Permalink to &quot;虚拟机中的内容复制到windows&quot;">​</a></h3><ul><li>查看用户名：whoami</li><li>查看主机：homename</li></ul><p>如果你在 SecureCRT 中连接到运行 Linux 的虚拟机，并希望将文件从 Linux 虚拟机下载到 Windows系统，有几种方法可以实现：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>scp username@linux-vm:/path/to/my_image.tar C:\\path\\to\\download  具体如下：</span></span>
<span class="line"><span>scp root@192.168.175.129:/root/onlyoffice.tar &quot;G:\\swx\\web&quot; // 在windows中执行</span></span></code></pre></div><p>请将username 替换为你的 Linux 用户名，linux-vm 替换为你的 Linux 虚拟机的 IP 地址或主机名，/path/to/my_image.tar 替换为 Linux 虚拟机上保存文件的路径，以及</p><p>C:\\path\\to\\download 替换为你希望在 Windows 11 系统上保存文件的本地路径。</p><h2 id="镜像推送到私服" tabindex="-1">镜像推送到私服 <a class="header-anchor" href="#镜像推送到私服" aria-label="Permalink to &quot;镜像推送到私服&quot;">​</a></h2><p><strong>为镜像添加标签（可选）</strong> 在推送之前，你可能希望为镜像添加标签，以确保它与你的远程仓库关联。标签通常包括你的 Docker 仓库地址和所需的版本信息。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker tag image_name your_registry_address/image_name:tag  如：</span></span>
<span class="line"><span>docker tag my_image localhost:5000/my_image:latest</span></span></code></pre></div><p>这里 localhost:5000 是你的 Docker 仓库地址，my_image 是你的镜像名称，latest 是标签。</p><p><strong>登录到 Docker 仓库：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker login -u your_username -p your_password your_registry_address   如下</span></span>
<span class="line"><span>docker login --username=jiliang 192.10.51.84:8080</span></span></code></pre></div><p>替换 your_username、your_password 和 your_registry_address 为你的 Docker 仓库的用户名、密码和地址。</p><p><strong>推送镜像到 Docker 仓库：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker push your_registry_address/image_name:tag   如下：</span></span>
<span class="line"><span>docker push 192.10.51.84:8080/jiliang/onlyoffice/documentserver:latest</span></span></code></pre></div><p>这会将你的镜像上传到 Docker 仓库。确保你的服务器上已经运行 Docker 仓库，并且可以从你的本地机器访问。</p><h2 id="dockerfile-概念" tabindex="-1">Dockerfile 概念 <a class="header-anchor" href="#dockerfile-概念" aria-label="Permalink to &quot;Dockerfile 概念&quot;">​</a></h2><p>dockerfile是用来制作镜像的文件 Dochub网址：<a href="https://hub.docker.com" target="_blank" rel="noreferrer">https://hub.docker.com</a> Dockerfile 关键字：查看 文档目录中的《dockerfile.md》</p><p><img src="`+v+'" alt="Alt Text"></p><table><thead><tr><th>关键字</th><th>作用</th><th>备注</th></tr></thead><tbody><tr><td>FROM</td><td>指定父镜像</td><td>指定dockerfile基于那个image构建</td></tr><tr><td>MAINTAINER</td><td>作者信息</td><td>用来标明这个dockerfile谁写的</td></tr><tr><td>LABEL</td><td>标签</td><td>用来标明dockerfile的标签 可以使用Label代替Maintainer 最终都是在docker image基本信息中可以查看</td></tr><tr><td>RUN</td><td>执行命令</td><td>执行一段命令 默认是/bin/sh 格式: RUN command 或者 RUN [&quot;command&quot; , &quot;param1&quot;,&quot;param2&quot;]</td></tr><tr><td>CMD</td><td>容器启动命令</td><td>提供启动容器时候的默认命令 和ENTRYPOINT配合使用.格式 CMD command param1 param2 或者 CMD [&quot;command&quot; , &quot;param1&quot;,&quot;param2&quot;]</td></tr><tr><td>ENTRYPOINT</td><td>入口</td><td>一般在制作一些执行就关闭的容器中会使用</td></tr><tr><td>COPY</td><td>复制文件</td><td>build的时候复制文件到image中</td></tr><tr><td>ADD</td><td>添加文件</td><td>build的时候添加文件到image中 不仅仅局限于当前build上下文 可以来源于远程服务</td></tr><tr><td>ENV</td><td>环境变量</td><td>指定build时候的环境变量 可以在启动的容器的时候 通过-e覆盖 格式ENV name=value</td></tr><tr><td>ARG</td><td>构建参数</td><td>构建参数 只在构建的时候使用的参数 如果有ENV 那么ENV的相同名字的值始终覆盖arg的参数</td></tr><tr><td>VOLUME</td><td>定义外部可以挂载的数据卷</td><td>指定build的image那些目录可以启动的时候挂载到文件系统中 启动容器的时候使用 -v 绑定 格式 VOLUME [&quot;目录&quot;]</td></tr><tr><td>EXPOSE</td><td>暴露端口</td><td>定义容器运行的时候监听的端口 启动容器的使用-p来绑定暴露端口 格式: EXPOSE 8080 或者 EXPOSE 8080/udp</td></tr><tr><td>WORKDIR</td><td>工作目录</td><td>指定容器内部的工作目录 如果没有创建则自动创建 如果指定/ 使用的是绝对地址 如果不是/开头那么是在上一条workdir的路径的相对路径</td></tr><tr><td>USER</td><td>指定执行用户</td><td>指定build或者启动的时候 用户 在RUN CMD ENTRYPONT执行的时候的用户</td></tr><tr><td>HEALTHCHECK</td><td>健康检查</td><td>指定监测当前容器的健康监测的命令 基本上没用 因为很多时候 应用本身有健康监测机制</td></tr><tr><td>ONBUILD</td><td>触发器</td><td>当存在ONBUILD关键字的镜像作为基础镜像的时候 当执行FROM完成之后 会执行 ONBUILD的命令 但是不影响当前镜像 用处也不怎么大</td></tr><tr><td>STOPSIGNAL</td><td>发送信号量到宿主机</td><td>该STOPSIGNAL指令设置将发送到容器的系统调用信号以退出。</td></tr><tr><td>SHELL</td><td>指定执行脚本的shell</td><td>指定RUN CMD ENTRYPOINT 执行命令的时候 使用的shell</td></tr></tbody></table><h2 id="dockerfile-案例" tabindex="-1">Dockerfile 案例 <a class="header-anchor" href="#dockerfile-案例" aria-label="Permalink to &quot;Dockerfile 案例&quot;">​</a></h2><p>自定义centos7镜像。要求: 1.默认登录路径为 /usr 2.可以使用vim</p><ol><li>定义父镜像: FROM centos:7</li><li>定义作者信息: MAINTAINER itheima <a href="mailto:itheima@itcast.cn" target="_blank" rel="noreferrer">itheima@itcast.cn</a></li><li>执行安装vim命令: RUN yum install -y vim</li><li>定义默认的工作目录: WORKDIR /usr</li><li>定义容器启动执行的命今: CMD /bin/bash</li><li>通过dockerfile构建镜像: docker bulid -f dockerfile文件路径-t 镜像名称:版本</li></ol><p><img src="'+x+'" alt="Alt Text"></p><p><img src="'+_+`" alt="Alt Text"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 引入基础镜像</span></span>
<span class="line"><span>FROM centos:7</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 作者信息，尖括号表示邮箱</span></span>
<span class="line"><span>MAINTAINER stone &lt;1032731503@qq.com&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 执行安装命令</span></span>
<span class="line"><span>RUN yum install -y vim</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定文件目录</span></span>
<span class="line"><span>WORKDIR /usr</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动容器</span></span>
<span class="line"><span>cmd /bin/bash</span></span></code></pre></div><p><img src="`+y+'" alt="Alt Text"></p><p><img src="'+q+'" alt="Alt Text"></p><p><img src="'+f+'" alt="Alt Text"></p><h2 id="docker-compose" tabindex="-1">Docker Compose <a class="header-anchor" href="#docker-compose" aria-label="Permalink to &quot;Docker Compose&quot;">​</a></h2><h3 id="服务编排" tabindex="-1">服务编排 <a class="header-anchor" href="#服务编排" aria-label="Permalink to &quot;服务编排&quot;">​</a></h3><p>微服务架构的应用系统中一般包含若干个微服务，每个微服务一般都会部署多个实例，如果每个微服务都要手动启停，维护的工作量会很大。</p><p>• 要从Dockerfile build image 或者去dockerhub拉取image • 要创建多个container • 要管理这些container（启动停止删除）</p><p>服务编排： 按照一定的业务规则批量管理容器</p><p><img src="'+C+`" alt="Alt Text"></p><h3 id="安装-1" tabindex="-1">安装 <a class="header-anchor" href="#安装-1" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p>Compose目前已经完全支持Linux、Mac OS和Windows，在我们安装Compose之前，需要先安装Docker。下面我 们以编译好的二进制包方式安装在Linux系统中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 下载安装</span></span>
<span class="line"><span>curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-\`uname -s\`-\`uname -m\` -o /usr/local/bin/docker-compose</span></span>
<span class="line"><span># 设置文件可执行权限</span></span>
<span class="line"><span>chmod +x /usr/local/bin/docker-compose</span></span>
<span class="line"><span># 查看版本信息</span></span>
<span class="line"><span>docker-compose -version</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如题,装了docker-compose后无法启动</span></span>
<span class="line"><span># 删除原来不能执行的/usr/local/bin/docker-compose</span></span>
<span class="line"><span>sudo rm /usr/local/bin/docker-compose</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 下载安装docker-compose</span></span>
<span class="line"><span>sudo curl -L &quot;https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)&quot; -o /usr/local/bin/docker-compose</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 添加权限</span></span>
<span class="line"><span>sudo chmod +x /usr/local/bin/docker-compose</span></span></code></pre></div><h3 id="卸载" tabindex="-1">卸载 <a class="header-anchor" href="#卸载" aria-label="Permalink to &quot;卸载&quot;">​</a></h3><p>二进制包方式安装的，删除二进制文件即可</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>rm /usr/local/bin/docker-compose</span></span></code></pre></div><h3 id="编排nginx-springboot项目" tabindex="-1">编排nginx+springboot项目 <a class="header-anchor" href="#编排nginx-springboot项目" aria-label="Permalink to &quot;编排nginx+springboot项目&quot;">​</a></h3><p><a href="https://note.youdao.com/web/#/file/WEB95199869da4e3b6ef61e4a3e4657f47a/note/WEBbde995bb34dc4395d7de1d08b7a524ae/" target="_blank" rel="noreferrer">参考</a></p><h2 id="登录-退出私有仓库" tabindex="-1">登录/退出私有仓库 <a class="header-anchor" href="#登录-退出私有仓库" aria-label="Permalink to &quot;登录/退出私有仓库&quot;">​</a></h2><h3 id="登入仓库" tabindex="-1">登入仓库 <a class="header-anchor" href="#登入仓库" aria-label="Permalink to &quot;登入仓库&quot;">​</a></h3><p>docker login : 登陆到一个Docker镜像仓库，如果未指定镜像仓库地址，默认为官方仓库 Docker Hub</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>语法: docker login [OPTIONS] [SERVER]</span></span>
<span class="line"><span>docker login -u 用户名 -p 密码 仓库名称   如下</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker login --username=jiliang 192.10.51.84:8080</span></span></code></pre></div><h3 id="退出仓库" tabindex="-1">退出仓库 <a class="header-anchor" href="#退出仓库" aria-label="Permalink to &quot;退出仓库&quot;">​</a></h3><p>docker logout : 登出一个Docker镜像仓库，如果未指定镜像仓库地址，默认为官方仓库 Docker Hub</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>语法: docker logout [SERVER]# 退出默认官方仓库</span></span>
<span class="line"><span>[root@wangzy ~]# docker logout</span></span>
<span class="line"><span>Removing login credentials for https://index.docker.io/v1/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 退出私有仓库[root@wangzy ~]# docker logout registry.cn-hangzhou.aliyuncs.com</span></span>
<span class="line"><span>Removing login credentials for registry.cn-hangzhou.aliyuncs.com</span></span></code></pre></div><h2 id="portainer的使用" tabindex="-1">portainer的使用 <a class="header-anchor" href="#portainer的使用" aria-label="Permalink to &quot;portainer的使用&quot;">​</a></h2><p>参考文档：<a href="https://zhuanlan.zhihu.com/p/403285855" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/403285855</a> <a href="https://zhuanlan.zhihu.com/p/371592044" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/371592044</a> 参考文档：<a href="https://blog.csdn.net/weixin_44649780/article/details/128401975" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_44649780/article/details/128401975</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1. 搜索portainer镜像</span></span>
<span class="line"><span>docker search portainer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 拉取portainer镜像</span></span>
<span class="line"><span>docker pull portainer/portainer-ce</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 启动portainer容器</span></span>
<span class="line"><span># 启动镜像</span></span>
<span class="line"><span>docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v /dockerData/portainer:/data --restart=always --name portainer portainer/portainer-ce:latest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- p: 指定宿主机端口和容器端口 portainer默认端口是9000</span></span>
<span class="line"><span>- v: 目录映射，将/var/run/docker.sock映射到容器中，用于访问Docker的守护进程，控制Docker。/dockerData/portainer保存Portainer的配置信息。</span></span>
<span class="line"><span>–restart=always: 代表在容器退出时总是重启容器，还有其他几种重启策略：no、on-failure、on-failuer:n、unless-stopped</span></span>
<span class="line"><span>- -p 1126:9000 端口映射默认为9000，映射为1126</span></span>
<span class="line"><span>- portainer 镜像名字</span></span></code></pre></div><h2 id="部署项目" tabindex="-1">部署项目 <a class="header-anchor" href="#部署项目" aria-label="Permalink to &quot;部署项目&quot;">​</a></h2><p><a href="https://note.youdao.com/web/#/file/WEB95199869da4e3b6ef61e4a3e4657f47a/note/WEBbde995bb34dc4395d7de1d08b7a524ae/" target="_blank" rel="noreferrer">参考</a></p>`,143),N=[P];function w(T,R,$,E,O,A){return n(),a("div",null,N)}const L=s(D,[["render",w]]);export{I as __pageData,L as default};
