const http=require("http");

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    res.setHeader("Content-type","text/html");
    res.write("<html>");
    
});
server.listen(3000);


