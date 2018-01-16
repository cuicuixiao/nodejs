/**
 * Created by e431 on 2017/10/25.
 */
/*人员管理相关数据*/
"use strict";
const express=require("express");
const staffRoute=express.Router();
const staffController=require("../controller/staffController.js");

staffRoute.route("/list.do").get(staffController.list);
staffRoute.route("/add.do").post(staffController.add);
staffRoute.route("/delete.do").post(staffController.delete);
staffRoute.route("/update.do").post(staffController.update);
staffRoute.route("/search.do").post(staffController.search);
staffRoute.route("/listPage.do").get(staffController.listPage);

module.exports=staffRoute;