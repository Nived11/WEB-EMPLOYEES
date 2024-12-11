const http=require("http")
const fs=require("fs")
const url=require("url")
const PORT=3000
const path=require("path")
const queryString=require("querystring")
const {MongoClient, ObjectId}=require("mongodb")
const { error } = require("console")
const client=new MongoClient("mongodb://127.0.0.1:27017/")


const app=http.createServer(async(req,res)=>{
    const db=client.db("projects");
    const collection=db.collection("employees");


const {pathname}=url.parse(req.url);
console.log(pathname);

if(pathname=="/"){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fs.readFileSync("../Front-end/index.html"))
}
else if(pathname=="/CSS/index.css"){
    res.writeHead(200,{"Content-Type":"text/css"});
    res.end(fs.readFileSync("../Front-end/CSS/index.css"))
}
else if(pathname=="/JS/index.js"){
    res.writeHead(200,{"Content-Type":"text/js"});
    res.end(fs.readFileSync("../Front-end/JS/index.js"))
}
else if(pathname=="/Assets/bg.jpg"){
    res.writeHead(200,{"Content-Type":"text/assets"});
    res.end(fs.readFileSync("../Front-end/Assets/bg.jpg"))
}
else if(pathname=="/Pages/reg.html"){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fs.readFileSync("../Front-end/Pages/reg.html"))
}
else if(pathname=="/CSS/reg.css"){
    res.writeHead(200,{"Content-Type":"text/css"});
    res.end(fs.readFileSync("../Front-end/CSS/reg.css"))
}
else if(pathname=="/JS/reg.js"){
    res.writeHead(200,{"Content-Type":"text/js"});
    res.end(fs.readFileSync("../Front-end/JS/reg.js"))
}
else if(pathname=="/Pages/edit.html"){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fs.readFileSync("../Front-end/Pages/edit.html"))
}
else if(pathname=="/CSS/edit.css"){
    res.writeHead(200,{"Content-Type":"text/css"});
    res.end(fs.readFileSync("../Front-end/CSS/edit.css"))
}
else if(pathname=="/JS/edit.js"){
    res.writeHead(200,{"Content-Type":"text/js"});
    res.end(fs.readFileSync("../Front-end/JS/edit.js"))
}


})

client.connect().then((msg)=>{
    console.log("database connected!");

    app.listen(PORT,()=>{
        console.log("server created....");
        
    })
    
}).catch((error)=>{
    console.log(error);
    
})