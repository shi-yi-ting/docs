## 编写代码时遇到的问题[(参考链接)](https://blog.csdn.net/qq_20553613/article/details/105496828)

1.本地编辑好工工整整的代码push到GitHub上后，发现缩进变得异常难看；

2.带中文注释的代码，在不同平台下阅读会出现乱码；

3.Windowos下写的代码通过git提交的Linux服务器，出现换行符不兼容的警告；

4.Windows下写的shell脚本在Linux下执行出错。

引入.editorconfig文件后，将能够避免诸如此类问题。

### 什么是editorconfig

1.editorconfig是用于跨不同的编辑器和IDE为多个开发人员维护一致的编码风格的配置文件。

2.editorconfig项目由定义编码样式的文件格式和一组文本编辑器插件组成，编辑器插件通过读取文件并以已定义的样式格式化指定文件。

3.editorconfig文件具有友好的阅读性，且能与版本控制系统配合良好的特点。

### 为什么要用editorconfig

一句话，editorconfig就是为了统一编程风格，提高代码阅读质量。一个大型软件项目，往往是团队模块化开发，
不同的开发人员使用的编辑器可能不一样，甚至编辑的系统平台都不一样。
一部分人喜欢在Linux 下使用Vim编写代码，另外一部分可能倾向于Windows下用VS开发。
另外，还存在一些编程风格的不同，典型的就是缩进问题，使用空格缩进还是Tab键缩进，Tab键表示2个空格缩进还是4个空格缩进。
即使是开发团队统一编程风格、编辑器，仍不能保证历史遗留代码、第三方开源库等等的风格不一致问题。
此外，还可能涉及一些文字编码问题，如UTF-8、UTF-16、GB2312等

editorconfig文件就解决诸如此类的问题，使用editorconfig就可以将不同格式的文件统一风格。

### 怎么使用editorconfig

#### 4.1 editorconfig属性

【1】顶级配置文件 root 是否是顶级配置文件，设置为true表示停止搜索.editorconfig文件 。
【2】缩进风格 indent_style 空格space Tab键tab
【3】缩进大小 indent_size 常用为2字节或者4字节。
【4】换行符类型 end_of_line 换行lf 回车cr 回车换行crlf
小知识：
Dos和Windows采用回车+换行（cr+lf）来表示换行
UNIX和Linux采用换行符（lf）来表示换行
MAC OS采用回车符（cr）来表示换行

不同系统平台下编辑可能导致警告或者错误，比如 在Windows 下编写的shell脚本，直接放到linux/unix下执行会出错，因为行结束符不一样。

【5】编码格式 charset

常用编码格式 utf-8 utf-8-bom utf-16be utf-16le
通常我们设为utf-8，可以避免一些编码不一致引发的异常问题

【6】是否删除行末尾空格 trim_trailing_whitespace 一般设为true，即删除行末尾空格。
【7】文件末尾是否插入空行 insert_final_newline 一般设为true，即文件末尾插入空行
【8】最大行宽 max_line_length 很少使用。

注：一些编译器要求代码文件最后一行需以空行结束，否则编译器提示警告

6 注意事项
【1】Windows文件命名不支持特殊字符开头的，在Windows下创建.editorconfig时，可以输入.editorconfig.名称，按回车后系统会自动生成.editorconfig文件。
【2】.editorconfig的匹配规则是从上往下，先定义的规则优先级比后定义的优先级要高。

#### 使用

```
[*.{js,jsx,ts,tsx,vue}]
indent_style = space
indent_size = 2
trim_trailing_whitespace = true
insert_final_newline = true
```

#### 使用模板

```
【1】所有文件生效  [*] 如下：
# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true
【2】指定类型文件生效
[*.xx]
[*.{xx,yy}]
# Matches multiple files with brace expansion notation
# Set default charset
[*.{js,py}]
charset = utf-8
# 4 space indentation
[*.py]
indent_style = space
indent_size = 4
【3】指定文件名称   [file_name]
# Tab indentation (no size specified)
[Makefile]
indent_style = tab
【4】指定路径
# Indentation override for all JS under lib directory
[lib/**.js]
indent_style = space
indent_size = 2
【5】混合使用
# Matches the exact files either package.json or .travis.yml
[{package.json,.travis.yml}]
indent_style = space
indent_size = 2
4.4 常用例子
# top-most EditorConfig file
root = true
# all files
[*]
indent_style = tab
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
# .md file
[*.md]
trim_trailing_whitespace = false
```
