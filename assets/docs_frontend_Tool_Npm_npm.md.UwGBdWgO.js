import{_ as a,c as s,o as n,U as p}from"./chunks/framework.FpOEJISx.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/Tool/Npm/npm.md","filePath":"docs/frontend/Tool/Npm/npm.md"}'),e={name:"docs/frontend/Tool/Npm/npm.md"},l=p(`<h2 id="基础命令" tabindex="-1">基础命令 <a class="header-anchor" href="#基础命令" aria-label="Permalink to &quot;基础命令&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm -v # 查看npm版本</span></span>
<span class="line"><span>npm init [-y] # 初始化项目；-y 跳过提示，直接生成默认的package.json</span></span>
<span class="line"><span>npm install # 安装依赖</span></span>
<span class="line"><span>npm install &lt;package&gt;  # 本地安装</span></span>
<span class="line"><span>npm install &lt;package&gt; -g  # 全局安装</span></span>
<span class="line"><span>npm install --save &lt;package&gt;  # 安装并保存至dependencies</span></span>
<span class="line"><span>npm install --save-dev &lt;package&gt;  # 安装并保存至devDependencies</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm uninstall &lt;package&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm update &lt;package&gt;</span></span>
<span class="line"><span>npm update --save</span></span>
<span class="line"><span>npm update --save-dev</span></span>
<span class="line"><span>npm update -g &lt;package&gt;  # 更新全局包</span></span></code></pre></div><h2 id="脚本运行" tabindex="-1">脚本运行 <a class="header-anchor" href="#脚本运行" aria-label="Permalink to &quot;脚本运行&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm run # 查看脚本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm run &lt;script-name&gt;  # 运行package.json中定义的脚本</span></span>
<span class="line"><span>npm start  # 默认运行&quot;start&quot;脚本</span></span>
<span class="line"><span>npm test  # 默认运行&quot;test&quot;脚本</span></span>
<span class="line"><span>npm stop  # 如果有定义&quot;stop&quot;脚本，则运行</span></span></code></pre></div><h2 id="项目管理" tabindex="-1">项目管理 <a class="header-anchor" href="#项目管理" aria-label="Permalink to &quot;项目管理&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm list  # 查看当前项目的所有依赖</span></span>
<span class="line"><span>npm ls -g  # 查看全局安装的包</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm view &lt;package&gt;  # 查看包详情</span></span>
<span class="line"><span>npm view &lt;package&gt; version  # 查看包版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm login  # 登录NPM账户</span></span>
<span class="line"><span>npm publish  # 发布包到NPM仓库</span></span></code></pre></div><h2 id="高级与配置" tabindex="-1">高级与配置 <a class="header-anchor" href="#高级与配置" aria-label="Permalink to &quot;高级与配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm config set &lt;key&gt; &lt;value&gt;  # 设置NPM配置</span></span>
<span class="line"><span>npm config get &lt;key&gt;  # 获取配置值</span></span>
<span class="line"><span>npm config delete &lt;key&gt;  # 删除配置项</span></span>
<span class="line"><span>npm config list  # 列出所有配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm config set registry &lt;registry-url&gt;  # 设置镜像源</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm cache clean --force  # 清除缓存</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm help  # 显示帮助信息</span></span>
<span class="line"><span>npm help &lt;command&gt;  # 查看特定命令的帮助</span></span></code></pre></div><h2 id="实用命令" tabindex="-1">实用命令 <a class="header-anchor" href="#实用命令" aria-label="Permalink to &quot;实用命令&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm link &lt;package&gt;  # 在全局和本地项目间创建软链接</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm outdated  # 查看过期的依赖</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npx &lt;package&gt;[@version] [args]  # 无需安装即可直接运行包</span></span></code></pre></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm audit  # 检查项目依赖中的安全漏洞</span></span>
<span class="line"><span>npm fund  # 查看并资助当前项目依赖的软件作者</span></span>
<span class="line"><span>npm pack  # 打包当前目录下的模块为.tgz文件，用于发布或分发</span></span></code></pre></div>`,12),t=[l];function i(c,o,d,r,g,h){return n(),s("div",null,t)}const v=a(e,[["render",i]]);export{u as __pageData,v as default};
