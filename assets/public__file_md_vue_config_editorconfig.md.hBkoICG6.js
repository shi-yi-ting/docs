import{_ as n,c as s,o as a,U as e}from"./chunks/framework.zpeVKxWT.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/_file/md/vue/config/editorconfig.md","filePath":"public/_file/md/vue/config/editorconfig.md"}'),i={name:"public/_file/md/vue/config/editorconfig.md"},p=e(`<h2 id="编写代码时遇到的问题-参考链接" tabindex="-1">编写代码时遇到的问题<a href="https://blog.csdn.net/qq_20553613/article/details/105496828" target="_blank" rel="noreferrer">(参考链接)</a> <a class="header-anchor" href="#编写代码时遇到的问题-参考链接" aria-label="Permalink to &quot;编写代码时遇到的问题[(参考链接)](https://blog.csdn.net/qq_20553613/article/details/105496828)&quot;">​</a></h2><p>1.本地编辑好工工整整的代码push到GitHub上后，发现缩进变得异常难看；</p><p>2.带中文注释的代码，在不同平台下阅读会出现乱码；</p><p>3.Windowos下写的代码通过git提交的Linux服务器，出现换行符不兼容的警告；</p><p>4.Windows下写的shell脚本在Linux下执行出错。</p><p>引入.editorconfig文件后，将能够避免诸如此类问题。</p><h3 id="什么是editorconfig" tabindex="-1">什么是editorconfig <a class="header-anchor" href="#什么是editorconfig" aria-label="Permalink to &quot;什么是editorconfig&quot;">​</a></h3><p>1.editorconfig是用于跨不同的编辑器和IDE为多个开发人员维护一致的编码风格的配置文件。</p><p>2.editorconfig项目由定义编码样式的文件格式和一组文本编辑器插件组成，编辑器插件通过读取文件并以已定义的样式格式化指定文件。</p><p>3.editorconfig文件具有友好的阅读性，且能与版本控制系统配合良好的特点。</p><h3 id="为什么要用editorconfig" tabindex="-1">为什么要用editorconfig <a class="header-anchor" href="#为什么要用editorconfig" aria-label="Permalink to &quot;为什么要用editorconfig&quot;">​</a></h3><p>一句话，editorconfig就是为了统一编程风格，提高代码阅读质量。一个大型软件项目，往往是团队模块化开发， 不同的开发人员使用的编辑器可能不一样，甚至编辑的系统平台都不一样。 一部分人喜欢在Linux 下使用Vim编写代码，另外一部分可能倾向于Windows下用VS开发。 另外，还存在一些编程风格的不同，典型的就是缩进问题，使用空格缩进还是Tab键缩进，Tab键表示2个空格缩进还是4个空格缩进。 即使是开发团队统一编程风格、编辑器，仍不能保证历史遗留代码、第三方开源库等等的风格不一致问题。 此外，还可能涉及一些文字编码问题，如UTF-8、UTF-16、GB2312等</p><p>editorconfig文件就解决诸如此类的问题，使用editorconfig就可以将不同格式的文件统一风格。</p><h3 id="怎么使用editorconfig" tabindex="-1">怎么使用editorconfig <a class="header-anchor" href="#怎么使用editorconfig" aria-label="Permalink to &quot;怎么使用editorconfig&quot;">​</a></h3><h4 id="_4-1-editorconfig属性" tabindex="-1">4.1 editorconfig属性 <a class="header-anchor" href="#_4-1-editorconfig属性" aria-label="Permalink to &quot;4.1 editorconfig属性&quot;">​</a></h4><p>【1】顶级配置文件 root 是否是顶级配置文件，设置为true表示停止搜索.editorconfig文件 。 【2】缩进风格 indent_style 空格space Tab键tab 【3】缩进大小 indent_size 常用为2字节或者4字节。 【4】换行符类型 end_of_line 换行lf 回车cr 回车换行crlf 小知识： Dos和Windows采用回车+换行（cr+lf）来表示换行 UNIX和Linux采用换行符（lf）来表示换行 MAC OS采用回车符（cr）来表示换行</p><p>不同系统平台下编辑可能导致警告或者错误，比如 在Windows 下编写的shell脚本，直接放到linux/unix下执行会出错，因为行结束符不一样。</p><p>【5】编码格式 charset</p><p>常用编码格式 utf-8 utf-8-bom utf-16be utf-16le 通常我们设为utf-8，可以避免一些编码不一致引发的异常问题</p><p>【6】是否删除行末尾空格 trim_trailing_whitespace 一般设为true，即删除行末尾空格。 【7】文件末尾是否插入空行 insert_final_newline 一般设为true，即文件末尾插入空行 【8】最大行宽 max_line_length 很少使用。</p><p>注：一些编译器要求代码文件最后一行需以空行结束，否则编译器提示警告</p><p>6 注意事项 【1】Windows文件命名不支持特殊字符开头的，在Windows下创建.editorconfig时，可以输入.editorconfig.名称，按回车后系统会自动生成.editorconfig文件。 【2】.editorconfig的匹配规则是从上往下，先定义的规则优先级比后定义的优先级要高。</p><h4 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[*.{js,jsx,ts,tsx,vue}]</span></span>
<span class="line"><span>indent_style = space</span></span>
<span class="line"><span>indent_size = 2</span></span>
<span class="line"><span>trim_trailing_whitespace = true</span></span>
<span class="line"><span>insert_final_newline = true</span></span></code></pre></div><h4 id="使用模板" tabindex="-1">使用模板 <a class="header-anchor" href="#使用模板" aria-label="Permalink to &quot;使用模板&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>【1】所有文件生效  [*] 如下：</span></span>
<span class="line"><span># Unix-style newlines with a newline ending every file</span></span>
<span class="line"><span>[*]</span></span>
<span class="line"><span>end_of_line = lf</span></span>
<span class="line"><span>insert_final_newline = true</span></span>
<span class="line"><span>【2】指定类型文件生效</span></span>
<span class="line"><span>[*.xx]</span></span>
<span class="line"><span>[*.{xx,yy}]</span></span>
<span class="line"><span># Matches multiple files with brace expansion notation</span></span>
<span class="line"><span># Set default charset</span></span>
<span class="line"><span>[*.{js,py}]</span></span>
<span class="line"><span>charset = utf-8</span></span>
<span class="line"><span># 4 space indentation</span></span>
<span class="line"><span>[*.py]</span></span>
<span class="line"><span>indent_style = space</span></span>
<span class="line"><span>indent_size = 4</span></span>
<span class="line"><span>【3】指定文件名称   [file_name]</span></span>
<span class="line"><span># Tab indentation (no size specified)</span></span>
<span class="line"><span>[Makefile]</span></span>
<span class="line"><span>indent_style = tab</span></span>
<span class="line"><span>【4】指定路径</span></span>
<span class="line"><span># Indentation override for all JS under lib directory</span></span>
<span class="line"><span>[lib/**.js]</span></span>
<span class="line"><span>indent_style = space</span></span>
<span class="line"><span>indent_size = 2</span></span>
<span class="line"><span>【5】混合使用</span></span>
<span class="line"><span># Matches the exact files either package.json or .travis.yml</span></span>
<span class="line"><span>[{package.json,.travis.yml}]</span></span>
<span class="line"><span>indent_style = space</span></span>
<span class="line"><span>indent_size = 2</span></span>
<span class="line"><span>4.4 常用例子</span></span>
<span class="line"><span># top-most EditorConfig file</span></span>
<span class="line"><span>root = true</span></span>
<span class="line"><span># all files</span></span>
<span class="line"><span>[*]</span></span>
<span class="line"><span>indent_style = tab</span></span>
<span class="line"><span>indent_size = 4</span></span>
<span class="line"><span>end_of_line = lf</span></span>
<span class="line"><span>charset = utf-8</span></span>
<span class="line"><span>trim_trailing_whitespace = true</span></span>
<span class="line"><span>insert_final_newline = true</span></span>
<span class="line"><span># .md file</span></span>
<span class="line"><span>[*.md]</span></span>
<span class="line"><span>trim_trailing_whitespace = false</span></span></code></pre></div>`,26),l=[p];function t(o,c,r,d,f,h){return a(),s("div",null,l)}const g=n(i,[["render",t]]);export{u as __pageData,g as default};
