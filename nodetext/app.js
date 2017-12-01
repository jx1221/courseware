let http = require('http');
let fs = require('fs');

let app = http.createServer(function (req,res) {
    // console.log('有人访问了');
    //res.write('tired');
    // res.end('tired');
    fs.readFile('./view/index.html',function (err,data) {
        if(err){
            console.log(err);
        }
        res.end(data.toString());
    })
});
app.listen(3000);