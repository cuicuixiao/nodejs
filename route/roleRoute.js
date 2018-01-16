/**
 * Created by e431 on 2017/10/25.
 */
/*角色管理表相关数据*/
"use strict";
const express=require("express");
const roleRoute=express.Router();
const roleController=require("../controller/roleController.js");
roleRoute.route("/list.do").get(roleController.list);
roleRoute.route("/add.do").post(roleController.add);
roleRoute.route("/delete.do").post(roleController.delete);
roleRoute.route("/update.do").post(roleController.update);

module.exports=roleRoute;