/**
 * Created by e431 on 2017/10/25.
 */
/*部门管理相关数据*/
"use strict";
const db=require("./sqlPool.js");
module.exports={
    list(fn){
        let sql="select * from t_dept";
        db.dbOpertion(sql,[],fn);
    }
};