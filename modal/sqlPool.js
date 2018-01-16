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
        //�������ӳ�,����һ��config���ö��󣬷���һ��connection ����
       var pool = mysql.createPool(this.config); //�������ӳ�
        //��ȡ���Ӷ��󣬻ص�����
        pool.getConnection(function(err,connection){
             if(err){ // null : false , ������true
                 console.log(err); //��ȡʧ��
             }
            connection.query(sql,arr,fn); //ִ��query
            connection.release(); //���ӽ����ͷ�
        })
    }
};