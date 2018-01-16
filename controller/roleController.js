/**
 * Created by e431 on 2017/10/25.
 */
/*角色管理表业务人员*/
"use strict";
const roleModal=require("../modal/roleModal.js");
module .exports={
    list(req,res){
        roleModal.list(function(err,data){
            if(err){
                console.log(err);
                res.send("请联系管理员");
            }else{
                console.log(data);
                res.send(data);
            }
        })
    },
    add(req,res){
            roleModal.add(req.body.name,req.body.des,req.body.remark,function(err,data){
            console.log(req.body.name);
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

        roleModal.delete(id,function(err,data){
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
        roleModal.update(req.body.name,req.body.des,req.body.remark,req.body.id,function(err,data){
            console.log(req.body.name);
            if(err){
                console.log(err);
                res.send("数据错误");
            }else{
                if(data.affectedRows>0){
                    res.send("修改");
                }else{
                    res.send("修改失败");
                }
            }
        });
    }
};