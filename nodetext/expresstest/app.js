let express = require('express');

let app = express();
app.get('/',function (req,res) {
    res.send('home');
})
app.get('/list',function (req,res) {
    res.sendFile(__dirname+'/view/index.html');//这个地方必须填写绝对路径，要不然会报错
})
app.get('*',function (req,res) {
    res.send('404页面不存在');
})
app.listen(3000);