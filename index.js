const appp = require("./app");
console.log(appp .x)

// filter is the function which filters the value of the array
const arr = [2, 4, 5, 3, 3, 76, 7];
arr.filter((item) => {
  console.log(item);
});

// filter is also used to filters the particular value based on the condition.

let result = arr.filter((item) => {
  return item === 3;
});
console.warn(result);

// core modules are the Bydefault featured modules in vscode
// Global and Non-global module

// Global module is the module which is predefined and no need to impport them
// Non-Global Module is the Module which is not defined and they are need to be imported. They have to defined before it's use

// fs is the FileSysytem which is a non-global module and it is used to create files.
const fs=require('fs');
fs.writeFileSync("hello.txt","code step by step")

// used to check directory name and filename
console.log("->>", __dirname);
console.log("->>", __filename);

const http =require('http');

http.createServer((req,resp)=>{
 resp.write("Hello,This is jassu");
 resp.end();
}).listen(4500);

const colors =require('colors');
console.log("hello".bgBlue);

console.log(100+20);

// creating a simple api...................

const http = require("http");
const data =require ('./data')
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify(data));
resp.end();
}).listen(5000);

// creating a filesystem.............

const fs = require('fs');

const input =process.argv;
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}else{
    console.log('invalid input');
}

// show file list
const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'files');
const filePath =`${dirpath}/hello0.text`;
for(i=0;i<5;i++){
    fs.writeFileSync(dirpath+`/hello${i}.text`,"a simple text file");
}
fs.readdir(dirpath,(err,files)=>{
   files.forEach((items)=>{
    console.log(items)
   })
})

// CURD operation with file system

fs.readFile(filePath,'utf8',(err,item)=>{
    console.log(item)
})

fs.appendFile(filePath ,'and file name is jassu saini',(err)=>{
    if(!err) console.log("file is updated")
})

fs.rename(filePath,`${dirpath}/jassu.text`,(err)=>{
       if(!err) console.log("filename is updated")

})
fs.unlinkSync(`${dirpath}/hello0.text`)

// Asynchronus programing

let a= 20;
let b= 20;

let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})
waitingData.then((data)=>{
    console.log(a+data);
})

const express = require('express');

app.get('',(req,res)=>{
    console.log("data sent by Browser",req.query.name)
    res.send('welcome, This is the Home page '+req.query.name);
});
app.get('/about',(req,res)=>{
    res.send('welcome, This is the About page')
});
app.get('/contact',(req,res)=>{
    res.send('welcome, This is the Contact page')
});
app.listen(5000);

// request.query can be used to send data thorugh Browser..................

const express = require('express');
// path module is used to access the folder path...
const path = require('path');

const publicpath = path.join(__dirname,'Public')

// static is basically a function which is used to call the static function of the express...
// use this function we can easily acces the file we made in the public directory
// static is used to  load the static pages...
app.use(express.static(publicpath));

app.listen(5000);

// removing the extension in the url

const express = require('express');
const path =require('path');


app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicpath}/about.html`)
})
app.get('*',(_,resp)=>{
    resp.sendFile(`${publicpath}/nopage.html`)
})
app.listen(5000);

// Tempalte engine :-- which are used to make the dynamic packages..
// ejs is used to install as a template engine..
// when we want dynamic data then only we can use view engime .......

const express = require("express");
const path = require("path");

const app = express();
const PublicPath = path.join(__dirname,"Public")

app.set('view engine','ejs');
app.get('/about',(_,resp)=>{
        resp.sendFile(`${publicpath}/about.html`)
    })
app.get('/profile',(_,resp)=>{
    const user={
       name:"Jaspreet kaur",
       email:"jk860241@gmail.com",
       city:"santokhgarh",
       skill:["html","css","js","react.js"]
    }
        resp.render("Profile",{user});
        })
        app.get("/login",(_,resp)=>{
            resp.render('login');
        })
app.listen(5000);

// middleware can we used with routes
// By using middleware we can access , use and moditify the request and response....

const express = require("express");

const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Please provide your age");
  } else if (req.query.age < 18) {
    resp.send("you can't access this page");
  } else {
    next();
  }
};
app.use(reqFilter);
console.log("reqFilter");
app.get("/", (req, resp) => {
  resp.send("Welcom to home page");
});

app.get("/users", (req, resp) => {
  resp.send("Welcom to users page");
});

app.listen(5000);


// Types of middleware.

// 1. Application-level middleware.
// 2. Router-level middleware.
// 3. Error-handling middleware.
// 4. Built-in middleware.
// 5. Third-party middleware.

// Route-level middleware

const express = require("express");
const reqFilter = require('./Middleware')
const route =express.Router();

route.use(reqFilter);

console.log("reqFilter");
app.get("/", (req, resp) => {
  resp.send("Welcom to home page");
});

route.get("/users", (req, resp) => {
  resp.send("Welcom to users page");
});
app.use('/',route);
app.listen(5000);

