/**
 * Created by e431 on 2017/10/25.
 */
/*���Ź���ҵ����Ա*/
"use strict";
const db=require("../modal/sqlPool.js");
const deptModal=require("../modal/deptModal.js");
module.exports={
    list(req,res){
        deptModal.list(function(err,data){
            if(err){
                console.log(err);
                res.send("���ݴ���");
            }else{
                res.send("data");
            }
        })
    }
};