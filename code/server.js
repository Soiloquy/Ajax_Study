// 1.引入express
const { request, response } = require('express');
const express = require('express');

// 2.创建引用对象
const app = express();

//3.创建路由规则
//request是对请求报文的封装
//response 是对响应报文的封装

//get请求
app.get('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    response.send('HELLO AJAX');
});

//post请求  all可接收任何类型的请求
app.post('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    response.send('HELLO AJAX');
});

//json 响应
app.get('/json-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个数据
    const data = {
        name: 'nooooon',
        age: '18',
        sex: '男'
    }
    let str = JSON.stringify(data);
    //设置响应体 只能传字符串
    response.send(str);
});

//IE缓存问题
app.get('/ie-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO AJAX-IE3');
});

//请求超时与网路异常
app.all('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置延迟
    setTimeout(() => {
        var datas = { name: 'Andy' };
        response.send(JSON.stringify(datas));
    }, 1000);
});

//jQuery服务
app.all('/jq-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    // response.send('HELLO AJAX-jQ');
    const student = { name: 'Tom', age: 18 };
    response.send(JSON.stringify(student));
});

//4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已启动，8000端口监听中。。。");
})