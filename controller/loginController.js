/**
 * Created by e431 on 2017/10/25.
 */
/*登录*/
"use strict";
const loginModal=require("../modal/loginModal.js");
module .exports={
    login(req,res){
        let name = req.query.name;
        let pwd = req.query.pwd;
        loginModal.login(name,pwd,function(err,data) {
            if(err==null){
                if(data.length>0){
                    res.send("登录成功");
                }else{
                    res.send("用户名或密码错误");
                }
            }else{
                res.send("操作出错，请联系管理员");
            }
            console.log(data);
        });
    }
};