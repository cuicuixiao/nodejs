
var pageSize=6;
var currentPage=1;
var totalPage;
var total;

function listPage(obj){
    "use strict";
    currentPage=$(obj).text();
    list();
}
/* ==================显示角色管理数据列表===========================*/
function outHtml(jsonObj) {
    $("#staffList").html('');
    var str = "";
    for (var i in jsonObj) {
        str += "<tr>" +
            "<td>" + jsonObj[i].staff_id + "</td>" +
            "<td>" + jsonObj[i].staff_name + "</td>" +
            "<td>" + jsonObj[i].staff_userid + "</td>" +
            "<td>" + jsonObj[i].staff_password + "</td>" +
            "<td>" + jsonObj[i].staff_phone + "</td>" +
            "<td><span sid='" + jsonObj[i].staff_id + "' class='del'>删除</span>" +
            "<span sid='" + jsonObj[i].staff_id + "' class='update'>修改</span></td>" +
            "</tr>";
        $("#staffList").html(str);
    }
}
function list(){
    "use strict";
    var httpRequest;
    if(window.XMLHttpRequest){
        httpRequest=new XMLHttpRequest();
    }else{
        httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
    }
    var param="pageSize="+pageSize+"&currentPage="+currentPage;
    httpRequest.open("get","/staff/list.do?"+param);
    httpRequest.onreadystatechange=function(){
        if(httpRequest.readyState==4&&httpRequest.status==200){
            console.log(httpRequest.responseText);
            var jsonObj=JSON.parse(httpRequest.responseText);
            outHtml(jsonObj)
        }
    };
    httpRequest.send(null);
}
$(document).ready(function(){
    "use strict";
    list();
});
/* ==================分页===========================*/
//请求数据的总页数
$(function(){
    "use strict";
    var httpRequest;
    if(window.XMLHttpRequest){
        httpRequest=new XMLHttpRequest();
    }else{
        httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
    }
    //var param="pageSize="+pageSize+"currentPage="+currentPage;
    httpRequest.open("get","/staff/listPage.do");
    httpRequest.onreadystatechange=function(){
        if(httpRequest.readyState==4&&httpRequest.status==200){
            console.log(httpRequest.responseText);
            var jsonObj=JSON.parse(httpRequest.responseText);
            total=parseInt(jsonObj[0].sum);
            totalPage=Math.ceil(total/pageSize);
            $("#numPage").html('');
            for(var i=1;i<=totalPage;i++){
                $("#numPage").append("<a onclick='listPage(this)'>"+i+"</a>");
            }
        }
    };
    httpRequest.send(null);
});
$("#staffNext").click(function(){
    "use strict";
    currentPage++;
    list();
});
$("#staffPrev").click(function(){
    "use strict";
    currentPage--;
    if(currentPage==0){
        currentPage=1;
    }
    list();
});
/* ==================给动态生成的删除添加事件===========================*/
$("#staffList").on("click",".del",function(){
    "use strict";
    alert($(this).attr("sid"));
    var id=$(this).attr("sid");
    var httpRequest;
    if(window.XMLHttpRequest){
        httpRequest=new XMLHttpRequest();
    }else{
        httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
    }
    httpRequest.open("post","/staff/delete.do");
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

/*==================添加人员的请求======================*/
$("#staffbtn").click(function(){
    var name=$("#per").val();
    var userid=$(".userid1").val();
    var password=$(".password1").val();
    var phone=$(".phone1").val();
    var qq=$(".qq1").val();
    var email=$(".email1").val();
    var roleid=$(".roleid1").val();
    var deptid=$(".deptid1").val();

    "use strict";
    var httpRequest;
    if(window.XMLHttpRequest){
        httpRequest=new XMLHttpRequest();
    }else{
        httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
    }
    httpRequest.open("post","/staff/add.do");
    httpRequest.onreadystatechange=function(){
        if(httpRequest.readyState==4&&httpRequest.status==200){
            alert(httpRequest.responseText);
            if(httpRequest.responseText=="添加成功"){
                list();
                location.href="/pages/perHtml.html";
            }
        }
    };
    httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var param="name="+name+"&userid="+userid+"&password="+password+"&phone="+phone+"&qq="+qq+"&email="+email+"&roleid="+roleid+"&deptid="+deptid;
    console.log(param);
    httpRequest.send(param);
});
/*==================查询======================*/
$("#staffSearch").click(function(){
    "use strict";
    var httpRequest;
    if(window.XMLHttpRequest){
        httpRequest=new XMLHttpRequest();
    }else{
        httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
    }
    httpRequest.open("post","/staff/search.do");
    httpRequest.onreadystatechange=function() {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            console.log(httpRequest.responseText);
            var jsonObj=JSON.parse(httpRequest.responseText);
                outHtml(jsonObj);
        }
    };
        httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        var param="name="+$("#perName").val()+"&phone="+$("#perTel").val()+"&qq="+$("#perQQ").val();
        httpRequest.send(param);
        console.log(param);
});




$(".per_sure,.cou_sure").hover(function(){
    $(".per_sure,.cou_sure").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
    $(".per_close,.cou_close").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
});
$(".per_close,.cou_close").hover(function(){
    $(".per_sure,.cou_sure").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
    $(".per_close,.cou_close").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
});

$(".planClick11").click(function(){
    $(this).parent().prev().prev().html("项目经理");
    $(".planC11").css({"visibility":"hidden","animation":""});
});
$(".planClick21").click(function(){
    $(this).parent().prev().prev().html("人事经理");
    $(".planC11").css({"visibility":"hidden","animation":""});
});
$(".planClick31").click(function(){
    $(this).parent().prev().prev().html("管理员");
    $(".planC11").css({"visibility":"hidden","animation":""});
});
$(".planClick41").click(function(){
    $(this).parent().prev().prev().html("游客");
    $(".planC11").css({"visibility":"hidden","animation":""});
});
$(".planBmNc1").click(function(){
    $(this).next().css({"visibility":"visible","animation":"bs .3s linear"});
    console.log($(this).next())
//                $(".planT1").css({"visibility":"visible","animation":"bs .3s linear"});
});
$(".planClick12").click(function(){
    $(this).parent().prev().prev().html("web前端");
    $(".planC12").css({"visibility":"hidden","animation":""});
});
$(".planClick22").click(function(){
    $(this).parent().prev().prev().html("UI");
    $(".planC12").css({"visibility":"hidden","animation":""});
});
$(".planClick32").click(function(){
    $(this).parent().prev().prev().html("人事");
    $(".planC12").css({"visibility":"hidden","animation":""});
});
$(".planBmNc2").click(function(){
    $(this).next().css({"visibility":"visible","animation":"bs .3s linear"});
    console.log($(this).next())
//                $(".planT1").css({"visibility":"visible","animation":"bs .3s linear"});
});
$(".xiugai").click(function () {
    console.log(22)
})

$(".myOk").hover(function(){
    $(".myOk").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
    $(".myNo").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
});
$(".myNo").hover(function(){
    $(".myOk").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
    $(".myNo").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
});
$(".xiugai").click(function(){
    $(".pos").css("top","-300px");
    $(".pos").css("display","block");
    $(".pos").animate({top:"0"})
});
$(".bian").click(function () {
    $(this).parent().parent().parent().css("display","none");
});