const fs = require("fs");

// const infor = fs.readFile("./infor.json", function(error,data){
//     if(data!==undefined) console.log(JSON.parse(data));
//     if (error && console.log(error));
// });




const data = JSON.parse(fs.readFileSync(`./infor.json`));

console.log(data);


const http = require('http');

 const server = http.createServer((req, res)=>{
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.writeHead(200);
    if(req.url === '/index') {
        res.end(`<b>Đây là trang chủ</b>`);
    }else if (req.url === "/about") {
        res.end(`
        <b>
        Tên:${data.name}<br/>
        Tuổi:${data.age}<br/>
        Nghề nghiệp:${data.work}<br/>
        Giới tính:${data.gender}
        <b>`);
    } else {
        res.end(`<b>Đường dẫn không tồn tại</b>`);
    }
});
server.listen(5000);