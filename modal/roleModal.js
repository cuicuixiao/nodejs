/**
 * Created by e431 on 2017/10/25.
 */
/*角色管理表相关数据*/
"use strict";
const db=require("./sqlPool.js");
module.exports={
    list(fn){
       let sql="select * from t_role";
        db.dbOpertion(sql,[],fn);
    },
    add(name,des,remark,fn){
        let sql="insert into t_role values(null,?,?,?)";
        db.dbOpertion(sql,[name,des,remark],fn);
    },
    delete(id,fn){
        let sql="delete from t_role where role_id = ?";
        db.dbOpertion(sql,[id],fn);
    },
    update(id,name,descript,remark){
        let sql="update t_role set role_name=?,role_describe=?,role_rmks where role_id=?";
        db.dbOpertion(sql,[name,descript,remark,id],fn);
    }
};