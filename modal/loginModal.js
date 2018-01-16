/**
 * Created by e431 on 2017/10/25.
 */
/*登录*/
"use strict";
const db=require("./sqlPool.js");
module.exports={
    login(name,pwd,fn){
        var sql="select staff_userid,staff_password from t_staff where staff_userid=? and staff_password=?";
        db.dbOpertion(sql,[name,pwd],fn);
    }
};