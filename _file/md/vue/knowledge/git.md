## Git[(参考链接)](https://juejin.cn/post/69261773318410731661)

### 常用命令

1. git config -l 命令,查看所有的配置,
2. git config --system --list 命令查看一下系统配置
3. git config --globa --list 命令查看 user.name以及email等自定义配置
4. git branch 查看本地所处分支
   git branch -v 查看本地分支信息
5. git remote 查看远程所处分支
   git remote -v 查看远程分支信息
6. git status 查看当前分支是否干净
7. git add . 将所有文件保存到暂存区
   git add 文件名.后缀 将单个文件保存到暂存区
8. git reset 撤销之前的 git add操作
9. git commit -m ‘xxx’ 将代码提交到本地仓库中，xxx为提交的备注信息
10. git checkout master 切换分支
11. git merge login 合并分支
12. git push -u origin login/git push 将代码推送到远端
13. git branch -d 分支名称 删除分支
14. git branch -D 分支名称 强制删除分支
15. git stash 存储临时改动
16. git stash pop 恢复改动
17. git remote add 别名 远程仓库地址 为远程仓取别名
18. git init 初始化一个git管理

### 编写代码前

开发新功能前建议新创建一个分支,在新分支上开发新功能
执行 git status查看当前分支是否干净
在 master分支状态基础下,执行 git checkout-b 分支名称 创建一个新分支
执行 git branch 查看所有分支,查看目前所处分支是否在我们新建的分支上,打星号的表示我们目前所处的分支,
在所处新分支上进行代码的编写

### 代码完成后

1. 新分支上的新功能完成之后将代码提交到本地仓库中

执行 git status查看目前项目中源代码的状态修改的和新添加的呈红色
在login新建分支状态下执行 git add . 将代码保存到暂存区
保存到暂存区之后执行 git status产看状态可以看到都变成绿色了,表示都添加到了暂存区
执行 git commit -m 'xxx' 将代码提交到本地仓库中(也就是新的分支上(login),
提交前可以执行 git branch查看是不是处于新建分支上

2. 将新建的分支合并到 master分支上

执行 git checkout master 将分支切换到 master分支上
执行 git branch产看是否切换成功在主分支状态下
执行 git merge login 表示基于主分支主动的合并新建分支(login分支)上的所有代码
在master分支状态下执行 git push将本地仓库的代码上传到码云(远端仓库)

3.将本地新建的分支保存到码云(远端仓库)

执行 git checkout login 切换到新建分支(login)分支上
执行 git branch产看是否切换成功
执行 git push -u origin login上传到码云(远端仓库),
第一次提交后面建议加上u origin,再次提交时直接执行 git push即可 origin为远端仓库地址的别名

### 删除分支

git branch -d 分支名称 删除分支前 如果该分支未合并默认是不允许删除的
git branch -D 分支名称 强制删除分支即使未合并
注意:删除分支需要切换到其他分支上才能删除目标分支

### 暂时保存更改

存储临时改动: git stash
恢复改动: git stash pop
注意:是哪个分支执行的临时保存就在哪个分支恢复

### gitignore文件

1. 该文件需手动创建
2. 该文件的作用是排除掉一些特定的文件，使其在 git add . 时不会被添加到暂存区
3. 使用IDEA集成的Git：一般来说我们使用IDEA创建项目都会生成各种各样的文件,其中就有 .gitignore,这个文件的作用是排除掉一些特定的文件，
   使其在 git add . 时不会被添加到暂存区,而我们使用IDEA打开刚刚的git项目则不会生成这个文件;需要我们手动的书写
   在IDEA的git项目中如果创建或添加新文件,应该会弹出一个窗口它的意思是"是否将如下文件添加到git中";
   一般都勾选不再询问,并点击 cancel;这是个挺烦人的功能
4. 使用IDEA打开该git项目后无疑会生成.idea目录,这个目录我们不能将其删除;但我们可以将其写进 .gitignore文件内;

### Gitee

#### 为远程仓的地址取一个别名：

git remote add 别名 远程仓库地址如：
git remote add origin git@gitee.com:shi_yi_ting/demo.git

#### 本地仓代码推送到远程仓

(-u的作用是记住推送地址及分支,下次推送的时候直接执行 git push即可)
git push -u 别名 分支名称(要推送的分支名称)
git push-u origin master 默认情况下降将本地master分支推送到远程仓的master分支
git push origin dev:master dev本地仓库分支名 : master远程仓库分支名(将本地仓的dev分支推送到远程仓的master分支)

#### 拉取远端代码

1. 复制远端地址然后右键执行Git Clone
   git clone git@github.com:xxx.git (默认克隆远端master分支中的代码)
   git clone git@github.com:xxx.git --branch 分支名 (克隆指定分支的代码)(git@github.com:xxx.git 是你远程仓库的仓库地址)
2. 使用git 命令拉取远端指定分支的代码
   git fetch/pull origin 远程仓分支名称
   git fetch origin wuliu
   git pull origin wuliu
3. fetch和pull的区别
   fetch这个命令会访问远程仓库，从中拉取所有你还没有的数据。 执行完成后，你将会拥有那个远程仓库中所有分支的引用,
   但是注意的是 git fetch 并不会自动合并或修改你当前的工作。 当准备好时你必须手动将其合并入你的工作。

### 遇到的问题

从远端拉取代码执行npm i 失败可尝试使用淘宝镜像进行安装：cnpm install

远程push推送出现error: failed to push some refs to 'git@gitee.com:shi_yi_ting/demo.git

执行git pull --rebase origin master
再执行 git push origin master

#### 远程push推送的时候出现refusing to merge unrelated

解决：$git pull origin master –allow-unrelated-histories
$ git push 远程主机名 本地分支名:远程分支名
也就是 $git push origin master:master
出现这个问题的最主要原因还是在于本地仓库和远程仓库实际上是独立的两个仓库。假如我之前是直接clone的方式在本地
建立起远程github仓库的克隆本地仓库就不会有这问题了。

#### 当执行git中的“git pull origin master –allow-unrelated-histories”命令时，会出现“ couldn’t find remote ref –allow-unrelated-histories”的错误，

输入如下命令即可解决：
git pull --rebase origin master
git push origin master

### 理论

#### Git

##### 1. git有四个工作区域

工作目录( Working Directory):

工作目录就是我们项目的存放位置除了使用IDE来生成,我们手动创建的文件夹也是一个工作目录

暂存区(tage/ndex):

暂存区在物理上并不存在它只是一个文件,用于保存一些提交列表信息,类似于清单,记录哪些內容会被提交到本地仓库。
本地仓库( Repository或 Git Directory)用于存放暂存区提交过来的版本数据,它是一个目录;
该目录我们可以使用 git init命令生成也可以使用 git clone从远程拉取一个仓库作为

本地仓库:

这个目录里面所有的文件都可以被Git管理起来,每个文件的修改,删除等操作Git都可以跟踪到

远程仓库(Remote Directory):

就是所谓的 GithubGitee等代码托管平台;我们可以通过与这些远程仓库取得连接的方式将本地仓库中的代码推送到远程仓库。
同样的我们也可以将远程仓库存放的代码拉取到我们的本地仓库中
这四个工作区域我们需要管理的仅有工作目录及远程仓库,另外的两个工作区域并不需要太多的管理

##### 2. 创建工作区域

工作目录:

除了使用IDE来生成,我们手动创建的文件夹也是一个工作目录

暂存区及本地仓库:

仅有工作目录是不能够满足我们使用git的条件,此时我们如果想使用git来管理我们的代码,我们需要在此文件夹内
右击并点击GitBash here在弹出的 Git Bash中输入 git init进行初始化操作,
初始化完成后会在该目录内生成git文件夹,
该文件夹为隐藏文件夹需要勾选"隐藏的项目"才可见,该文件夹生成后,该工作目录就已经被git托管，是一个git项目,
暂存区和本地仓库都已生成。我们也可以使用 git init目录名的方式指定目录内生成.git文件夹，二者都可

创建远程仓:

使用 GitHub或Gtee我们都需要先注册一个平台账号,注册完毕点击头像左侧的"+"可以看到有New repository选项
点击该选项后会让我们填写仓库信息,填写完毕即可完成仓库的创建
完成创建后,我们的本地仓库和远程仓库都准备妥当了;我们要做的就是让二者对接,但在这之前我们需要准备一下
ssh公钥,使用ssh安全连接,可以让我们在操作远程仓库时跳过用户信息的验证。

### Git配置

如果你是第一次下载git的话应该自定义配置是空的,那你需要先进行用户信息的配置。可以使用命令的形式,也可以直接
找到配置文件进行修改。自定义配置的配置文件极大概率在你c盘下的对应用户文件夹内 gitconfig一般只
需要配置用户名和emal,这些用户配置会在你进行代码提交时起作用除自定义配置外,系统的配置则存放在
git安装目录下的etc文件夹内; gitconfig个人建议初学者不动系统配置。

### SSH公钥

#### 获取公钥：

1.进入c盘,找到自己对应的用户目录;在该目录下寻找ssh文件夹,在该文件夹下打开 Git bash
输入ssh-keygen命令可以创建ssh公钥文件,为了安全起见我们需要追加t选项,
将该公钥进行加密ssh-keygen -t rsa
rsa加密算法是gt官方推荐的加密算法

2.使用该命令后会让你输入一些公钥信息,不知道怎么填可以全部按回车使用默认的信息
命令执行完毕会在ssh文件夹下生成两个文件,我们需要用到的是以pub为后缀的文件,即公钥文件。
公钥文件有了,我们回到GitHub点击头像下的settings选项,找到 SSH and GPG keys,在这里完成ssh安全连接

3.操作成功后,我们还不能直接将本地仓库中的文件push到 GitHub远程仓库中;我们还需要进行一个远程仓库的绑定,
毕竟仓库可以有多个 GitHub怎么能够知道你要将本地仓库中的文件提交到哪
绑定远程仓库我们可以使用 git remote add origin远程仓库的url命令,绑定完我们就可以将我们本地仓库的文件推送到远
程仓库了。除了这种推送方式外,我们还可以通过仓库的克隆拿到已经对接好的本地仓库。这可以让我们偷很多懒,省却了初始化和远程仓库的绑定过程。

### SSH免登录

1.Htps协议的远程仓库需进行身份验证,在正常情况下每一次向远程仓库推送代码都需要进行身份验证 (也就是每次需要登录账户密码)
只不过是我们使用 windows10系统,在第一次登录之后操作系统帮助我们记住了用户名和密码

2.SSH协议:这种协议在实现身份验证时不需要使用用户名密码可实现免登录操作,该协议的身份认证通过密钥实现的 (rsa:非对称的加密方式)

3.生成密钥:ssh- keygen(直接默认回车即可) 生成的密钥在系统的用户目录下的.ssh文件夹中

4.登录GitHub进入网页 点击头像 选择settings 选择SSH and GPG keys 点击 New SSH key把复制的公钥粘贴到key方框中 点击 Add SSH key即可
登录 GitHub进入网页 点击头像 选择Yourrepositories(你的仓库) 选择目标仓库 点击 clone ordownload 点击 use SSH(会发现地址有所改变)

5.未使用SSH也可以免密登录的原因：
window10系统在登录 GitHub之后会帮助我们记住用户名和密码,打开控制面板打开凭据管理器
windows凭据可产看记住的信息

为仓库添加详细说明: 在项目的根目录下创建一个 README.md文件,该文件会展示在仓库文件列表的下方

## GitHub

### 团队多人合作

1.A程序员在本地创建本地仓库 登录Github账号创建远程仓库将本地仓库推送到远程仓库
2.B程序员不需要创建仓库,只需要将A创建的远程仓库克隆到本地即可,然后进行本地开发, 开发完成之后将代码提交到本地仓库,然后推送到远程仓库

#### A程序员的初始化工作

1.本地创建文件夹在该文件夹中执行git init 初始化一个本地仓库(会生成一个git文件),然后创建项目
执行 git add . 将项目提交到暂存区
执行 git commit -m 'xxx' 将暂存区内容提交到本地仓库

2.创建远程仓库
进入GitHub个人中心页面点击 start a project按钮创建创建仓库:填写仓库名称填写 owner(表示仓库的所有者)

3.将本地仓库推送到远程仓库
为远程仓库起一个别名: git remote add 别名 远程仓库地址 git remote add origin 地址
向远程仓库推送: git push -u 别名 分支名称(要推送的分支名称) git push-u origin master
(使用u之后下次推送直接执行 git push即可)
推送的其他方式和区别
git push 远程仓库地址 分支名称
git push 远程仓库地址 别名分支名称
git push -u 远程仓库地址别名 分支名称
u的作用是记住推送地址及分支,下次推送的时候直接执行 git push即可

#### B程序员的操作

1.克隆A程序员推送到远程仓库中的项目
创建一个文件夹在文件夹中打开 Git Bash Here执行git clone 远程仓库地址
(登录打开 GitHub浏览器网页,在远程仓库中有一个 clone or download点开可看到仓库地址,复制使用)

2.B程序员推送代码到远程仓库
B程序员完成代码开发 将代码添加到暂存区 提交代码到本地仓库(也就是克隆的那个仓库)然后推送到远程仓库

### push推送注意事项

程序员B是不能直接向远程仓库提交代码的应为没有权限,此时需要A程序员邀请B程序员成为当前程序开发者,具体步骤如下：
A程序员登录的自己的GitHub账号在页面当中点击settings选择 Collaborators填写程序员B的 GitHub账号进行激活
点击 Copy invite link复制邀请链接将链接发送给程序员B程序员B登录自己的 Github账号访问这个邀请链接并接受邀请

### pull拉取代码注意事项

B程序员拉取远程仓库中的代码
git pull 远程仓库的地址 分支名称
注意:如果远程仓库中的版本高于本地仓库的版本,此时本地仓库是不能向远程仓库中进行提交的,本地仓库必须要先拉取一下
代码然后再进行推送 push失败则可尝试拉取一下代码再push conflict(冲中突)

### 冲突解决

如果两个人修改了同一个文件的同一个地方就会发生冲突,需要人为解决冲突
冲突解决之后需要Git Sync ->pull->resolved一下(表示冲突已解决)这样就不会有感叹号了

### 非团队合作

1.GitHub除了支持团队协作之外还支持非团队协作,也就是说即使你不是团队成员,也有方法向其他人的GitHub仓库中提交代 码。只不过提交的代码需要对方通过审核

2.如何向其他人的远程仓库中提交代码?
C程序员登录 GitHub并访问A程序员创建的仓库C程序员首先要**fork一下**这个仓库(实际上就是将程序员A创建的仓库复制一份 并且放到自己(程序员C)的GHub账号当中)

3.fork之后这个复制的仓库就完全属于自己(程序员C)的了，然后克隆代码 完善代码 添加到暂存区 提交到本地仓库 推送到自己的(C程序员)远端仓库(Github)中

4.点击pull request 点击New pull request 点击createpull request 填写标题以及说明填写之后
点击create pull request发送给原作者原作者在自己的GHub账号中的 pull request可查看到别人发送过来的信息,也可进行回复

5.原作者点击 commits可查看C程序员写的代码了Files changed可查看文件做了哪些修改,如果确认修改没有问题
点击 Merge pull request合并代码 点击之后可填写信息(一般不做处理)

### Git和TortoiseGit的安装[(参考链接)](https://wenku.baidu.com/view/8c9b6e38f9d6195f312b3169a45177232f60e4c0.html)

git 和 TortoiseGit 安装到指定文件夹默认安装即可，然后需要在TortoiseGit的设置中的网络中设置
D:\soft\soft\Git\Git\usr\bin\ssh.exe（也就是git安装位置的相关内容）

#### 常见报错解决[(参考链接)](https://www.cnblogs.com/grootbaby/p/13827915.html)

tortoisegit(小乌龟)常见报错 No supported authentication methods available(server sent: publickey)

Git uses the concept of a hierarchical configuration the authenticity of host 'gitee.com' can not be established
直接点击是即可，将会在.ssh文件夹中生成known_host文件
