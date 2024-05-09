## Nginx

**Nginx学习**[(参考链接)](https://www.cnblogs.com/zhuminghui/p/11416672.html)

**下载nginx包、解压、进入**[(参考链接)](https://nginx.org/download/nginx-1.10.1.tar.gz())

**nginx常用命令**[(参考链接)](https://www.cnblogs.com/ouyy/p/9106527.html)

### Nginx的使用

#### 压缩备份

1. cd 到目标文件夹
2. zip 打包后的名称 文件夹(源)
   如：zip tagServe /usr/local/nginx/html/tagServe
3. ll (显示当前路径的文件)
4. pwd(查看当前处于哪个文件夹)

### 解压

1. cd 到文件所在的文件夹
2. unzip 路径/文件名.zip

### 移动单个文件

1. cd 到文件所在位置
2. mv * ../tagServeBackup (按Tab键可自动补全，星号表示当前文件夹的所有文件)
3. 使用移动进行备份的时候在存放项目文件夹的同级文件处新建一个备份文件夹，备份文件夹存放项目文件夹，备份的项目文件夹最好带上日期

### 删除文件

1. rm tagServe.zip
2. rm *
3. 删除的时候会有一个提示 remove regular file 'tagServe.zip'? yes然后回车

### 两种启动Nginx的方式

1. 左边文件夹找到并定位到 /usr/loacal/nginx/sbin/
   右边 cd 复制上面定位到的文件夹粘贴
   执行 ./nginx -s reload 重新加载nginx(重启)
2. 直接右边执行 whereis nginx 回车
   回车之后将直接会显示 nginx: /usr/local/nginx 复制
   cd /usr/local/nginx
   cd sbin
   ./nginx -s reload 回车

### 查看nginx错误日志

ps -ef|grep nginx (停用)
vim /usr/local/nginx/conf/nginx.conf (重启)
cd /data/logs 或者 cd /usr/local/nginx/logs/
ll
/tailf error.log

### nginx配置文件的位置

/usr/local/nginx/conf/文件夹中的 nginx.conf
在配置文件当中可以查看错误日志在那个文件夹中

### linux命令

1. ipConfig // 查看ip
2. ping 域名 // 查看域名有没有通
3. pwd // 查看文件夹
4. scp -r agent 10.243.189.86:/data01/software // 复制data01/software文件夹中的agent复制到10.243.189.86 ip中的/data01/software文件夹中
5. shift + inSert // 粘贴
6. chown -R nginx: agent 或者 chown nginx:nginx -R agent
