import{_ as a,c as s,o as n,U as p}from"./chunks/framework.zpeVKxWT.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/_file/md/vue/config/gitignore.md","filePath":"public/_file/md/vue/config/gitignore.md"}'),e={name:"public/_file/md/vue/config/gitignore.md"},i=p(`<h2 id="gitignore的作用-参考链接" tabindex="-1">gitignore的作用<a href="https://www.jianshu.com/p/699ed86028c2" target="_blank" rel="noreferrer">(参考链接)</a> <a class="header-anchor" href="#gitignore的作用-参考链接" aria-label="Permalink to &quot;gitignore的作用[(参考链接)](https://www.jianshu.com/p/699ed86028c2)&quot;">​</a></h2><p>一般来说每个Git项目中都需要一个“.gitignore”文件，这个文件的作用就是告诉Git哪些文件不需要添加到版本管理中。 这个文件的内容是一些规则，Git会根据这些规则来判断是否将文件添加到版本控制中。 .gitignore这个文件是创建项目的时候自动生成的也可手动创建</p><h3 id="下面我们看看常用的规则" tabindex="-1">下面我们看看常用的规则： <a class="header-anchor" href="#下面我们看看常用的规则" aria-label="Permalink to &quot;下面我们看看常用的规则：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/mtk/ // 过滤整个文件夹</span></span>
<span class="line"><span>*.zip // 过滤所有.zip文件</span></span>
<span class="line"><span>/mtk/do.c // 过滤某个具体文件</span></span>
<span class="line"><span>// 被过滤掉的文件就不会出现在你的GitHub库中了，当然本地库中还有，只是push的时候不会上传</span></span>
<span class="line"><span>// gitignore还可以指定要将哪些文件添加到版本管理中：</span></span>
<span class="line"><span>!*.zip</span></span>
<span class="line"><span>!/mtk/one.txt</span></span>
<span class="line"><span>// 唯一的区别就是规则开头多了一个感叹号，Git会将满足这类规则的文件添加到版本管理中。</span></span></code></pre></div><h3 id="为什么要有两种规则呢" tabindex="-1">为什么要有两种规则呢？ <a class="header-anchor" href="#为什么要有两种规则呢" aria-label="Permalink to &quot;为什么要有两种规则呢？&quot;">​</a></h3><p>想象一个场景：我们只需要管理/mtk/目录中的one.txt文件，这个目录中的其他文件都不需要管理。那么我们就需要使用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/mtk/</span></span>
<span class="line"><span>!/mtk/one.txt</span></span></code></pre></div><p>假设我们只有过滤规则没有添加规则，那么我们就需要把/mtk/目录下除了one.txt以外的所有文件都写出来！ 最后需要强调的一点是，如果你不慎在创建.gitignore文件之前就push了项目， 那么即使你在.gitignore文件中写入新的过滤规则，这些规则也不会起作用，Git仍然会对所有文件进行版本管理。 简单来说，出现这种问题的原因就是Git已经开始管理这些文件了，所以你无法再通过过滤规则过滤它们。 所以大家一定要养成在项目开始就创建.gitignore文件的习惯，否则一旦push，处理起来会非常麻烦。</p><h3 id="常用的规" tabindex="-1">常用的规 <a class="header-anchor" href="#常用的规" aria-label="Permalink to &quot;常用的规&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#此为注释 – 将被 Git 忽略</span></span>
<span class="line"><span>.a # 忽略所有 .a 结尾的文件</span></span>
<span class="line"><span>!lib.a # 但 lib.a 除外</span></span>
<span class="line"><span>/TODO # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO</span></span>
<span class="line"><span>build/ # 忽略 build/ 目录下的所有文件</span></span>
<span class="line"><span>doc/.txt # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt</span></span>
<span class="line"><span>/mtk/ #过滤整个文件夹</span></span>
<span class="line"><span>*.zip #过滤所有.zip文件</span></span>
<span class="line"><span>/mtk/do.c #过滤某个具体文件</span></span>
<span class="line"><span>#以上规则意思是:被过滤掉的文件就不会出现在你的 GitHub库中了,当然本地库中还有,只是push的时候不会上传。</span></span>
<span class="line"><span>#除了以上规则,它还可以指定要将哪些文件添加到版本管理中。</span></span>
<span class="line"><span>!src/ #不过滤该文件夹</span></span>
<span class="line"><span>!*.zip #不过滤所有.zip文件</span></span>
<span class="line"><span>!/mtk/do.c #不过滤该文件</span></span></code></pre></div><h4 id="_1、配置语法" tabindex="-1">1、配置语法 <a class="header-anchor" href="#_1、配置语法" aria-label="Permalink to &quot;1、配置语法&quot;">​</a></h4><p>以斜杠/开头表示目录; 以星号*通配多个字符; 以问号?通配单个字符 以方括号[]包含单个字符的匹配列表 以叹号表示不忽略(跟踪)匹配到的文件或目录 此外,git对于.ignore配置文件是按行从上倒下进行规则匹配的,意味着如果前面的规则匹配的范围更大, 则后面的规则将不会生效</p><h4 id="_2、示例说明" tabindex="-1">2、示例说明 <a class="header-anchor" href="#_2、示例说明" aria-label="Permalink to &quot;2、示例说明&quot;">​</a></h4><p>a、规则:fd1/* 说明:忽略目录fd1下的全部内客;注意不管是根目录下的/fd1/目录，还是某个子目录/child/fd1/目录，都会被忽略 b、规则:/fd1/* 说明:忽略根目录下的/fd1/目录的全部内 c、规则: /* !.gitignore !/fw/bin/ !/fw/sf/</p><p>说明:忽略全部内容,但是不忽略 gitignore文件、根目录下的/fw/bin/和/fw/sf/目录</p><p><strong>注意点</strong><a href="https://blog.csdn.net/u010566681/article/details/53183146" target="_blank" rel="noreferrer">(参考链接)</a></p><p>大家一定要养成在项目开始就创建 .gitignore文件的习惯,否则一旦push,处理起来会非常麻烦 当然如果已经push了怎么办?当然也有解决方法,如下：</p><p>有时候在项目开发过程中,突然心血来潮想把某些目录或文件加入忽略规则,按照上述方法定义后发现并未生效,原因是 .gitignore只能忽略那些原来没有被track的文件,如果某些文件已经被纳入了版本管理中,则修改 .gitignore是无效的。 那么解决方法就是先把本地缓存删除(改变成未 track状态),然后再提交</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git rm -r --cached .</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span>git commit -m &#39;update .gitignore&#39;</span></span></code></pre></div><p>在版本管理的根目录下(与.git文件夹同级) 创建一个 .gitignore( gitignore是隐藏文件所以前面有个点) 创建命令: gitignore- Specifies intentionally untracked files to ignore 首先要强调一点,这个文件的完整文件名就是 .gitignore&quot;,注意最前面有个“。 这样没有扩展名的文件在 Windows下不太好创建 这里给出win7的创建方法:创建一个文件件名为:“ .gitignore&quot;,注意前后都有点。保存之后系统会自动重命名为.gitignore 一般来说每个Git项目中都需要一个.gitignore&quot;文件,这个文件的作用就是告诉Git哪些文件不需要添加到版本管理中。 实际项目中,很多文件都是不需要版本管理的,比如 Python的.pyc文件和一些包含密码的配置文件等 配置完 .gitignore文件后,执行 git status命令,会发现那三个文件不再是 Untracked files 也就完成了忽略指定文件的功能。 清除已经上传的多余文件 如果你添加 .gitignore的时候,git里面已经上传了很多不需要的文件,则使用下面两个命令干掉他们 如果是文件夹:git rm -r cached 文件夹名 如果是文件:git rm -r cached 文件名 添加到 .gitignore的文件/文件夹会变成灰色，这样你就很容易的看出哪些文件会被git忽略</p><h3 id="本项目配置" tabindex="-1">本项目配置： <a class="header-anchor" href="#本项目配置" aria-label="Permalink to &quot;本项目配置：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.DS_Store</span></span>
<span class="line"><span>node_modules</span></span>
<span class="line"><span>/dist</span></span>
<span class="line"><span># local env files</span></span>
<span class="line"><span>.env.local</span></span>
<span class="line"><span>.env.*.local</span></span>
<span class="line"><span># Log files</span></span>
<span class="line"><span>npm-debug.log*</span></span>
<span class="line"><span>yarn-debug.log*</span></span>
<span class="line"><span>yarn-error.log*</span></span>
<span class="line"><span>pnpm-debug.log*</span></span>
<span class="line"><span># Editor directories and files</span></span>
<span class="line"><span>.idea</span></span>
<span class="line"><span>.vscode</span></span>
<span class="line"><span>*.suo</span></span>
<span class="line"><span>*.ntvs*</span></span>
<span class="line"><span>*.njsproj</span></span>
<span class="line"><span>*.sln</span></span>
<span class="line"><span>*.sw?</span></span></code></pre></div><p><a href="https://stackoverflow.com/questions/9550437/how-to-make-git-ignore-idea-files-created-by-rubyming" target="_blank" rel="noreferrer">(参考链接)</a></p>`,23),t=[i];function l(o,c,r,g,d,h){return n(),s("div",null,t)}const m=a(e,[["render",l]]);export{b as __pageData,m as default};
