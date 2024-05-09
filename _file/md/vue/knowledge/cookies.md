## cookies[参考链接](https://juejin.cn/post/6844903516826255373)

### 什么是Cookie

1. Cookie意为“甜饼”，是由W3C组织提出，最早由Netscape社区发展的一种机制。目前Cookie已经成为标准，所有的主流浏览
   器如IE、Netscape、Firefox、Opera等都支持Cookie。由于HTTP是一种无状态的协议，服务器单从网络连接上无从知道客户身份。
   怎么办呢？就给客户端们颁发一个通行证吧，每人一个，无论谁访问都必须携带自己通行证。这样服务器就能从通行证上确认客户身份了。这就是Cookie的工作原理。
2. Cookie实际上是一小段的文本信息。客户端请求服务器，如果服务器需要记录该用户状态，就使用response向客户端浏览器颁发一个Cookie。
   客户端浏览器会把Cookie保存起来。当浏览器再请求该网站时，浏览器把请求的网址连同该Cookie一同提交给服务器。
   服务器检查该Cookie，以此来辨认用户状态。服务器还可以根据需要修改Cookie的内容
3. 注意：Cookie功能需要浏览器的支持。如果浏览器不支持Cookie（如大部分手机中的浏览器）或者把Cookie禁用了，Cookie功能就会失效。
   不同的浏览器采用不同的方式保存Cookie。IE浏览器会在“C:\Documents and Settings\你的用户名\Cookies”文件夹下以文本文件形式保存，一个文本文件保存一个Cookie。

### 退出时使用cookies过期达到退出功能

```
`document.cookie = 'login_uid=;domain=.huawei.com;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'`
```

1. login_uid：为cookies的key值
2. domain=.huawei.com：为域名
3. expires=Thu, 01 Jan 1970 00:00:00 GMT：设置什么时候过期
4. path=/：设置哪个页面的cookies值国企, / 表示所有页面cookies值过期

### 关于cookie[(参考链接)](https://blog.csdn.net/playboyanta123/article/details/79464684)

1.首先必须明确一点，存储cookie是浏览器提供的功能。cookie 其实是存储在浏览器中的纯文本，
浏览器的安装目录下会专门有一个 cookie 文件夹来存放各个域下设置的cookie。
2.当网页要发http请求时，浏览器会先检查是否有相应的cookie，有则自动添加在request header中的cookie字段中。这些是
浏览器自动帮我们做的，而且每一次http请求浏览器都会自动帮我们做。这个特点很重要，因为这关系到“什么样的数据适合存储在cookie中”
3.存储在cookie中的数据，每次都会被浏览器自动放在http请求中，如果这些数据并不是每个请求都需要发给服务端的数据，浏
览器这设置自动处理无疑增加了网络开销；但如果这些数据是每个请求都需要发给服务端的数据（比如身份认证信
息），浏览器这设置自动处理就大大免去了重复添加操作。所以对于那设置“每次请求都要携带的信息（最典型的就是
身份认证信息）”就特别适合放在cookie中，其他类型的数据就不适合了。
4.但在 localStorage 出现之前，cookie被滥用当做了存储工具。什么数据都放在cookie中，即使这些数据只在页面中使用而
不需要随请求传送到服务端。当然cookie标准还是做了一些限制的：每个域名下的cookie 的大小最大为4KB，每个
域名下的cookie数量最多为20个（但很多浏览器厂商在具体实现时支持大于20个）。
5.JS 原生的 API提供了获取cookie的方法：document.cookie（注意，这个方法只能获取非 HttpOnly 类型的cookie）。在 console 中执行这段代码可以看到结果如下图：
打印出的结果是一个字符串类型，因为cookie本身就是存储在浏览器中的字符串。但这个字符串是有格式的，由键值对
key=value构成，键值对之间由一个分号和一个空格隔开。

#### 1.cookie 的属性选项

每个cookie都有一定的属性，如什么时候失效，要发送到哪个域名，哪个路径等等。这些属性是通过cookie选项来设置的，
cookie选项包括：expires、domain、path、secure、HttpOnly。
在设置任一个cookie时都可以设置相关的这些属性，当然也可以不设置，这时会使用这些属性的默认值。在设置这些属性时，属
性之间由一个分号和一个空格隔开。代码示例如下：

```
`"key=name; expires=Thu, 25 Feb 2016 04:18:00 GMT; domain=ppsc.sankuai.com; path=/; secure; HttpOnly"`
```

#### 2.expires

expires选项用来设置“cookie 什么时间内有效”。expires其实是cookie失效日期，
expires必须是 GMT 格式的时间（可以通过new Date().toGMTString()或者 new Date().toUTCString() 来获得）。
如expires=Thu, 25 Feb 2016 04:18:00 GMT表示cookie讲在2016年2月25日4:18分之后失效，对于失效的cookie浏览器会清空。
如果没有设置该选项，则默认有效期为session，
即会话cookie。这种cookie在浏览器关闭后就没有了。

#### 3.domain 和 path

domain是域名，path是路径，两者加起来就构成了 URL，domain和path一起来限制 cookie 能被哪些 URL 访问。

#### 4.secure

`document.cookie = "name=huang; secure";`
如果想在客户端即网页中通过 js 去设置secure类型的 cookie，必须保证网页是https协议的。在http协议的网页中是无法设置secure类型cookie的。

#### 5.httpOnly

这个选项用来设置cookie是否能通过js去访问。默认情况下，cookie不会带httpOnly选项(即为空)，所以默认情况下，
客户端是可以通过js代码去访问（包括读取、修改、删除等）这个cookie的。
当cookie带httpOnly选项时，客户端则无法通过js代码去访问（包括读取、修改、删除等）这个cookie。
在客户端是不能通过js代码去设置一个httpOnly类型的cookie的，这种类型的cookie只能通过服务端来设置。

### 如何设置 cookie?

知道了cookie的格式，cookie的属性选项，接下来我们就可以设置cookie了。首先得明确一点：cookie既可以由服务端来设
置，也可以由客户端来设置。客户端可以设置cookie 的下列选项：expires、domain、path、secure
（有条件：只有在https协议的网页中，客户端设置secure类型的 cookie 才能成功），但无法设置HttpOnly选项。
但你会发现这样写只是添加了第一个cookie“name=John”，后面的所有cookie都没有添加成功。所以最简单的设置多个cookie的
方法就在重复执行document.cookie = "key=name"，如下：

```
document.cookie = "name=Jonh";
document.cookie = "age=12";
document.cookie = "class=111";
```

### 如何修改、删除

1. 要想修改一个cookie，只需要重新赋值就行，旧的值会被新的值覆盖。但要注意一点，在设置新cookie时，path/domain这几个选项一定要旧cookie 保持一样。
   否则不会修改旧值，而是添加了一个新的 cookie。
2. 删除 cookie
   删除一个cookie 也挺简单，也是重新赋值，只要将这个新cookie的expires 选项设置为一个过去的时间点就行了。
   但同样要注意，path/domain/这几个选项一定要旧cookie 保持一样。

### cookie 编码：

cookie其实是个字符串，但这个字符串中逗号、分号、空格被当做了特殊符号。所以当cookie的 key 和 value 中含有这3个特殊字符时，需要对其进行额外编码，
一般会用escape进行编码，读取时用unescape进行解码；
当然也可以用encodeURIComponent/decodeURIComponent或者encodeURI/decodeURI（三者的区别可以参考这篇文章）。

```
var key = escape("name;value");
var value = escape("this is a value contain , and ;");
document.cookie= key + "=" + value + "; expires=Thu, 26 Feb 2116 11:50:25 GMT; domain=sankuai.com; path=/";
```
