/**
 * Created by e431 on 2017/10/25.
 */
/*人员管理相关数据*/
"use strict";
const db=require("./sqlPool.js");
module.exports={
    list(pageSize,currentPage,fn){
        let sql="select * from t_staff limit ?,? ";
        let start=(currentPage-1)* pageSize;
        db.dbOpertion(sql,[start,parseInt(pageSize)],fn);
        //console.log(start);
    },
    add(name,userid,password,phone,qq,email,roleid,deptid,fn){
        let sql="insert into t_staff values(null,?,?,?,?,?,?,?,?)";
        db.dbOpertion(sql,[name,userid,password,phone,qq,email,roleid,deptid],fn);
    },
    delete(id,fn){
        let sql="delete from t_staff where staff_id = ?";
        db.dbOpertion(sql,[id],fn);
    },
    update(id,name,userid,password,phone,qq,email,roleid,deptid,fn){
        let sql="update t_role set role_name=?,role_describe=?,role_rmks where role_id=?";
        db.dbOpertion(sql,[name,userid,password,phone,qq,email,roleid,deptid,id],fn);
    },
    search(name,phone,qq,fn){
        let sql="select * from t_staff where 1=1 ";
        var arr=[];
        if(name.length>0){
            name='%'+name+'%';
            sql+="and staff_name like ?";
            arr.push(name);
        }
        if(phone.length>0){
            phone='%'+phone+'%';
            sql+="and staff_phone like ?";
            arr.push(phone);
        }
        if(qq.length>0){
            qq='%'+qq+'%';
            sql+= "and staff_qq like ?";
            arr.push(qq);
        }
        db.dbOpertion(sql,arr,fn);
    },
    listPage(fn){
        let sql="select count(1) as sum from t_staff";
        db.dbOpertion(sql,[],fn);
    }
};