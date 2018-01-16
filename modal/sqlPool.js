/**
 * Created by yang on 2017/10/23.
 */
    "use strict";
const mysql = require("mysql");

module.exports={
    config:{
        host:"localhost",
        user:"root",
        password:"123123",
        port:3306,
        database:"xiangmu"
    },
    dbOpertion:function(sql,arr,fn){
        //创建连接池,传入一个config配置对象，返回一个connection 对象
       var pool = mysql.createPool(this.config); //创建连接池
        //获取连接对象，回调函数
        pool.getConnection(function(err,connection){
             if(err){ // null : false , 其它：true
                 console.log(err); //获取失败
             }
            connection.query(sql,arr,fn); //执行query
            connection.release(); //连接进行释放
        })
    }
};