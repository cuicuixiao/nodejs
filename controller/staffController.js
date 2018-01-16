/**
 * Created by e431 on 2017/10/25.
 */
/*人员管理业务人员*/
"use strict";
const staffModal=require("../modal/staffModal.js");
module .exports={
    list(req,res){
        let pageSize=req.query.pageSize;
        let currentPage=req.query.currentPage;
        staffModal.list(pageSize,currentPage,function(err,data){
            if(err){
                console.log(err);
                res.send("请联系管理员");
            }else{
                res.send(data);
            }
        })
    },
    add(req,res){
        staffModal.add(req.body.name,req.body.userid,req.body.password,req.body.phone,req.body.qq,req.body.email,req.body.roleid,req.body.deptid,function(err,data){
            if(err){
                console.log(err);
                res.send("数据错误");
            }else{
                if(data.affectedRows>0){
                    res.send("添加成功");
                }else{
                    res.send("添加失败");
                }
            }
        });
    },
    delete(req,res){
        let id=parseInt(req.body.id);

        staffModal.delete(id,function(err,data){
            if(err){
                console.log(err);
                res.send("数据出错");
            }else{
                if(data.affectedRows>0){
                    res.send("删除成功");
                }else{
                    res.send("删除失败");
                }
            }
        })
    },
    update(req,res){

    },
    search(req,res){
        let name=req.body.name;
        let phone=req.body.phone;
        let qq=req.body.qq;
        staffModal.search(name,phone,qq,function(err,data){
            if(err){
                console.log(err);
                res.send("错误");
            }else{
                res.send(data);
            }
        })
    },
    listPage(req,res){
        staffModal.listPage(function(err,data){
            if(err){
                console.log(err);
                res.send("出错");
            }else{
                console.log(data);
                res.send(data);
            }
        })
    }
};