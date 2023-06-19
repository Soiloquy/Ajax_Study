// 1.引入express
const { request, response } = require('express');
const express = require('express');
const app = express();
//json 响应
app.all('/json-server', (request, response) => {
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
    // console.log(data);
    let str = JSON.stringify(data);
    //设置响应体 只能传字符串
    response.send(str);
});
//4.监听端口启动服务
app.listen(5000, () => {
    console.log("服务已启动，8000端口监听中。。。");
})