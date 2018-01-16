/**
 * Created by e431 on 2017/10/25.
 */
/*部门管理业务人员*/
"use strict";
const db=require("../modal/sqlPool.js");
const deptModal=require("../modal/deptModal.js");
module.exports={
    list(req,res){
        deptModal.list(function(err,data){
            if(err){
                console.log(err);
                res.send("数据错误");
            }else{
                res.send("data");
            }
        })
    }
};