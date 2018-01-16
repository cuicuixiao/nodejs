/**
 * Created by e431 on 2017/10/25.
 */
/*登录*/
"use strict";
const express=require("express");
const loginRoute=express.Router();
const loginController=require("../controller/loginController.js");

loginRoute.route("/login.do").get(loginController.login);

module.exports=loginRoute;
