/**
 * Created by e431 on 2017/10/25.
 */
"use strict";
const express=require("express");
const bodyparser=require("body-parser");
const path=require("path");
const roleRoute=require("./route/roleRoute.js");
const staffRoute=require("./route/staffRoute.js");
const loginRoute=require("./route/loginRoute.js");
const app =express();

//读取post数据的配置
app.use(bodyparser.urlencoded({extended:false}));

//配置关于静态网页的参数
app.use(express.static(path.join(__dirname,"public")));

//引用路由模块
app.use("/role",roleRoute);
app.use("/staff",staffRoute);
app.use("/login",loginRoute);


app.listen(8888,function(){
   console.log("服务启动")
});



