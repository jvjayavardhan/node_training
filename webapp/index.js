const http = require('http')

const app = http.createServer((req,res)=>{
    if(req=="/"){
        res.write("<h1>Hello World</h1>");
        res.end;
    }
    if(req=="/contact"){
        res.write("<h1>This is contact page</h1>");
        res.end;
    }
})

app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server is running at port 3000");
    }
})