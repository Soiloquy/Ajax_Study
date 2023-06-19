# ajax学习笔记

==[课程地址]( https://www.bilibili.com/video/BV1WC4y1b78y)==

## 第一章： 原生Ajax

### 1.1 Ajax简介

- Ajax全称为Asynchronous Javascript And XML，即异步JS和XML
- 通过Ajax可以在浏览器中向服务器发送异步请求，最大的优势：**无刷新获取数据**
- AJAX不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式

### 1.2 XML简介

- XML：可扩展标记语言
- XML：被设计用来传输和存储数据
- XML和HTML类似，不同点：**HTML中都是预定义标签，XML中没有预定义标签，全是自定义标签**，用来表示一些数据

```xml
//用XML表示一个学生数据
<student>
	<name>abc</name>
    <age>18</age>
    <gender>男</gender>
</student>
```

- 现在已被JSON取代

```json
{"name":"abc","age":"18","gender":"男"}
```

### 1.3 AJAX 的特点

#### 1.3.1 AJAX的优点

1. 可以无刷新页面与服务端进行通信
2. 允许你根据用户事件来更新部分页面内容

#### 1.3.2 AJAX 的缺点

1. 没有浏览历史，不能回退
2. 存在跨域问题（同源）
3. SEO不友好（爬虫获取不到信息）

### 1.4 HTTP协议[超文本传输协议]

#### 1.4.1 HTTP请求报文

请求由以下元素组成：（摘自MDN）

- 一个 HTTP 的请求[方法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods)，经常是由一个动词像 [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET)、[`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST) 或者一个名词像 [`OPTIONS`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS)、[`HEAD`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD) 来定义客户端的动作行为。通常客户端的操作都是获取资源（GET 方法）或者发送 [HTML 表单](https://developer.mozilla.org/zh-CN/docs/Learn/Forms)（POST 方法），虽然在一些情况下也会有其他操作。
- 要获取的资源的路径，通常是上下文中就很明显的元素资源的 URL，它没有 [protocol](https://developer.mozilla.org/zh-CN/docs/Glossary/Protocol)（`http://`），[domain](https://developer.mozilla.org/zh-CN/docs/Glossary/Domain)（`developer.mozilla.org`），或是 TCP 的 [port (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Port)（HTTP 一般在 80 端口）。
- HTTP 协议版本号。
- 为服务端表达其他信息的可选[标头](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)。
- 对于一些像 POST 这样的方法，报文的主体（body）就包含了发送的资源，这与响应报文的主体类似。

#### 1.4.1HTTP响应报文

响应报文包含了下面的元素：（摘自MDN）

- HTTP 协议版本号。
- 一个状态码（[状态码（status code）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)），来告知对应请求执行成功或失败，以及失败的原因。
- 一个状态信息，这个信息是非权威的状态码描述信息，可以由服务端自行设定。
- HTTP [标头](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)，与请求标头类似。
- 可选项，比起请求报文，响应报文中更常见地包含获取资源的主体。

### express基本使用

Express：高度包容、快速而极简的 [Node.js](http://nodejs.org/) Web 框架

```js
// 1.引入express
const { request, response } = require('express');
const express = require('express');

// 2.创建引用对象
const app = express();

//3.创建路由规则
//request是对请求报文的封装
//response 是对响应报文的封装
app.get('/', (request, response) => {
    //设置响应
    response.send('HELLO AJAX');
});

//4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已启动，8000端口监听中。。。");
})
```



## 第二章 jQuery中的AJAX

### 2.1 get请求

```
$.get(url, [data], [callback], [type])
url: 请求的URL地址
data: 请求携带的参数
callbac: 载入成功时回调函数
type：设置返回内容格式，xml、html、script、json、text、_default
```



## 第三章： 跨域

### 3.1 同源策略

同源策略（Same-Origin Policy）最早由 Netscape 公司提出，是浏览器的一种安全策略。

 同源：协议、域名、端口号 必须完全相同

违背同源策略就是跨域

### 3.2 如何解决跨域

#### 3.2.1 JSONP

1. JSONP是什么

   JSONP (JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来，只支持get请求

2. JSONP 怎么工作的？

   在网页有一些标签天生具有跨域能力，比如：img, link, iframe, script

   JSONP就是利用**script**标签的跨域能力来发送请求的

3. JSONP的使用

   - 动态的创建一个script标签

   ```js
   var script = document.createElement("script");
   ```

   - 设置script的src，设置回调函数

   ~~~js
   script.src = "http://locallhost:3000/textAJAX?callback=abc"
   ~~~

   

### 3.2.2 CORS

推荐阅读：

- http://www.ruanyifeng.com/blog/2016/04/cors.html
- https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS

1. CORS是什么？

   CORS (Cross-Origin Resource Sharing), 跨域资源共享。CORS 是官方的跨域解决方案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持 get 和 post 等请求。跨域资源共享标准新增了一组 HTTP  首部字段（响应头），允许服务器声明哪些源站通过浏览器有权限访问哪些资源

2. CORS怎么工作的？

   CORS 是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应以后就会对响应放行。

3. CORS 的使用

   主要是服务端的设置：

   ```js
   rounter.get("/testAJAX",function(req, res){
   
   })
   ```

   
