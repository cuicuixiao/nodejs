/**
 * Created by Administrator on 2017/10/4.
 */
/* ==================显示角色管理数据列表===========================*/
function list(){
    "use strict";
    var httpRequest;
    if(window.XMLHttpRequest){
        httpRequest=new XMLHttpRequest();
    }else{
        httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
    }
    httpRequest.open("get","/role/list.do");
    httpRequest.onreadystatechange=function(){
        if(httpRequest.readyState==4&&httpRequest.status==200){
            console.log(httpRequest.responseText);
            var jsonObj=JSON.parse(httpRequest.responseText);
            $("#roleList").html('');
            var str="";
            for(var i in jsonObj){
                str+="<tr>" +
                    "<td>"+jsonObj[i].role_id+"</td>" +
                    "<td>"+jsonObj[i].role_name+"</td>" +
                    "<td>"+jsonObj[i].role_describe+"</td>" +
                    "<td>"+jsonObj[i].role_rmks+"</td>" +
                    "<td><span sid='"+jsonObj[i].role_id+"' class='del'>删除</span>" +
                    "<span sid='"+jsonObj[i].role_id+"' class='update'>修改</span></td>" +
                    "</tr>";
                //console.log(str);
                $("#roleList").html(str);
            }
        }
    };
    httpRequest.send(null);
}
$(document).ready(function(){
    "use strict";
    list();
});
/* ==================给动态生成的删除添加事件===========================*/
$("#roleList").on("click",".del",function(){
    "use strict";
    alert($(this).attr("sid"));
    var id=$(this).attr("sid");
    var httpRequest;
    if(window.XMLHttpRequest){
        httpRequest=new XMLHttpRequest();
    }else{
        httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
    }
    httpRequest.open("post","/role/delete.do");
    httpRequest.onreadystatechange=function(){
        if(httpRequest.readyState==4&&httpRequest.status==200){
                //alert(httpRequest.responseText);
            if(httpRequest.responseText=="删除成功"){
                list();
            }
            }
        };
    //表头
    httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var param="id="+id;
    httpRequest.send(param);
});

/*======================添加角色的请求=============================*/
$("#mybtn").click(function(){
    var name=$(".roleName").text();
    var des=$(".roleDscptn").text();
    var remark=$(".remark").text();

    "use strict";
    var httpRequest;
    if(window.XMLHttpRequest){
        httpRequest=new XMLHttpRequest();
    }else{
        httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
    }
    httpRequest.open("post","/role/add.do");
    httpRequest.onreadystatechange=function(){
        if(httpRequest.readyState==4&&httpRequest.status==200){
            alert(httpRequest.responseText);
            if(httpRequest.responseText=="添加成功"){
                list();
                location.href="/pages/stuList.html";
            }
        }
    };
    httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var param="name="+name+"&des="+des+"&remark="+remark;
    console.log(param);
    httpRequest.send(param);
});
/*======================修改角色的请求=============================*/
$("#roleList").on("click",".update",function(){
    "use strict";
    alert(1111);
});
