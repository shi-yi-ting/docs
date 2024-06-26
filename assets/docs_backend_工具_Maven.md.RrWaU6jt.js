import{_ as l,c as r,m as t,a as e,I as i,w as o,U as a,D as s,o as c,ay as g,az as p,aA as d,aB as h,aC as m,aD as _}from"./chunks/framework.FpOEJISx.js";const P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/backend/工具/Maven.md","filePath":"docs/backend/工具/Maven.md"}'),v={name:"docs/backend/工具/Maven.md"},u=a('<h2 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h2><p>mvn官网：<a href="http://maven.apache.org/" target="_blank" rel="noreferrer">http://maven.apache.org/</a> <a href="https://mvnrepository.com" target="_blank" rel="noreferrer">https://mvnrepository.com</a></p><p>下载地址：<a href="https://maven.apache.org/download.cgi" target="_blank" rel="noreferrer">https://maven.apache.org/download.cgi</a> <a href="https://blog.csdn.net/qq_44866828/article/details/117571921" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_44866828/article/details/117571921</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>maven属于绿色版软件，解压及安装</p><h2 id="maven环境变量的配置" tabindex="-1">Maven环境变量的配置 <a class="header-anchor" href="#maven环境变量的配置" aria-label="Permalink to &quot;Maven环境变量的配置&quot;">​</a></h2><ul><li>Maven依赖Java，需要配置JAVA_HOME</li><li>设置MAVEN自身的运行环境，需要配置MAVEN_HOME</li><li>JAVA_HOME：参照jdk安装</li><li>MAVEN_HOME：找到Maven的安装目录复制 &gt; 右键桌面计算机/此电脑图标 &gt; 属性 &gt; 高级系统设置 &gt; 环境变量 &gt; 新建系统变量 &gt; 变量名设置为 MAVEN_HOME &gt; 变量值为复制的maven路径 &gt; path &gt; 点击打开弹框（win10）&gt; 新建 &gt; %MAVEN_HOME%\\bin &gt; 确定（cmd打开命令窗口 输入 mvn 回车，有指令出行即表示成功，报错不用管）</li></ul><h2 id="本地仓库配置" tabindex="-1">本地仓库配置 <a class="header-anchor" href="#本地仓库配置" aria-label="Permalink to &quot;本地仓库配置&quot;">​</a></h2>',8),f=t("li",null,"C盘 > 用户名文件夹 > 打开命令行窗口执行 mvn > 回车 > 执行完成之后将会生成一个 .m2 的文件夹（这就是你的本地仓库）这个文件夹放在 C盘不是很好，",-1),b=a('<p><img src="'+g+'" alt="Alt Text"></p><h2 id="远程仓库的配置" tabindex="-1">远程仓库的配置 <a class="header-anchor" href="#远程仓库的配置" aria-label="Permalink to &quot;远程仓库的配置&quot;">​</a></h2><p>查看默认远程仓库：maven安装路径 &gt; lib &gt; 随便找一个 jar 文件右键点击选择使用 RAR 打开 &gt; 打开之后往上点一层回到根下 &gt; 选择上方的查找 &gt; 查找文件名为 pom*.*（也就是搜索所有以pom开头的文件） &gt; 找到 pom-4.0.0.xml 的文件 &gt; 点一下定位将定位到该文件的位置 &gt; 打开文件文件当中的 repository 标签里面的内容就是指定资源默认从哪里下载</p><ul><li>id：说明这个仓库叫 central（中央仓库）</li><li>name：可有可无</li><li>url：指定资源下载的来源</li></ul><p><img src="'+p+'" alt="Alt Text"></p><h2 id="镜像仓库的配置" tabindex="-1">镜像仓库的配置 <a class="header-anchor" href="#镜像仓库的配置" aria-label="Permalink to &quot;镜像仓库的配置&quot;">​</a></h2><p>maven安装路径 &gt; conf &gt; settings &gt; 找到 mirrors 标签所在的位置 &gt; mirrorOf 标签指定你要镜像谁 写central</p><p><img src="'+d+'" alt="Alt Text"></p><h2 id="全局settings-和-用户settings的区别" tabindex="-1">全局settings 和 用户settings的区别 <a class="header-anchor" href="#全局settings-和-用户settings的区别" aria-label="Permalink to &quot;全局settings 和 用户settings的区别&quot;">​</a></h2><ul><li>全局settings定义了当前计算机中Maven的公共配置</li><li>用户settings定义了当前用户的配置，个人用户settings配置是放在 .m2文件中的同 repository文件夹同级的位置，尽量保证全局settings 和用户 settings 一样，如果不一样，局部settings会覆盖全局settings</li></ul><h2 id="idea上配置-maven" tabindex="-1">idea上配置 Maven <a class="header-anchor" href="#idea上配置-maven" aria-label="Permalink to &quot;idea上配置 Maven&quot;">​</a></h2><p>注意：Maven 和 Idea 是不同的两家公司开发的，所以两者之间存在兼容性问题</p><ul><li>如何下载低版本的maven：<a href="https://maven.apache.org/download.cgi" target="_blank" rel="noreferrer">https://maven.apache.org/download.cgi</a> &gt; 选择一个版本右键复制链接 &gt; 粘贴到地址栏然后修改版本号</li><li>file &gt; settings &gt; Build,Execution,Deployment &gt; Build Tools &gt; Maven（点击它） &gt; Maven home path（本地Maven安装目录）</li><li>file &gt; settings &gt; Build,Execution,Deployment &gt; Build Tools &gt; Maven（点击它） &gt; User Settings file（选择maven目录下的conf文件夹中的settings这是全局设置，当然也可以使用 .m2 目录中的自己创建的 settings,这是局部配置，会覆盖全局配置）</li><li>指定文件夹的类型：选中文件夹 &gt; Mark Directory as &gt; 然后进行指定</li><li>dependences配置好之后右边的maven没有对应的 dependences 文件夹这个时候要刷新一下</li></ul><p><img src="'+h+'" alt="Alt Text"></p><p><img src="'+m+'" alt="Alt Text"></p><p><img src="'+_+'" alt="Alt Text"></p>',16);function M(x,A,T,k,q,E){const n=s("localRepository");return c(),r("div",null,[u,t("ul",null,[f,t("li",null,[e("那么如何修改位置呢？ 在D盘上创建一个文件夹maven > 在文件夹里面创建一个 repository 文件夹 > 进入到maven的安装目录下 > conf > settings.xml > 找到 localRepository 的位置 > 将 "),i(n,null,{default:o(()=>[e("/path/to/local/report")]),_:1}),e(" 复制出来，将 /path/to/local/report 换成我们在 D盘新创建的目录")])]),b])}const y=l(v,[["render",M]]);export{P as __pageData,y as default};
