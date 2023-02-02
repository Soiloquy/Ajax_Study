const { response } = require('express');
const express = require('express');
const app = express();
app.get('/home', (requset, response) => {
    response.sendFile(__dirname + '/index.html');
});
app.get('/data', (requset, response) => {
    // response.sendFile(__dirname + '/index.html');
    response.send('HELLO');
});
app.listen(9000, () => {
    console.log('服务已启动。。。');
})