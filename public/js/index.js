/**
 * Created by Administrator on 2017/9/27.
 */
//弹出皮肤
$(".mainSkin").click(function(){
    $(".mainSkinCge").css("margin-top","100px");
    $(".mainHide").css("z-index",99);
});
//关闭皮肤
$(".mainClose").click(function(){
    closeSkin();
});
//更换皮肤
$(".skin").click(function(){
    var img = $(this).css("background-image");
    closeSkin();
    $(".mainBg").css("background-image",img);
});
//关闭皮肤函数
function closeSkin(){
    $(".mainSkinCge").css("margin-top","-300px");
    $(".mainHide").css("z-index",-1);
}
//时间设置
setInterval(function(){
    clock();
},1000);
function clock(){
    var date=new Date();
    var hours=date.getHours();//小时
    var minute=date.getMinutes();//分
    var second=date.getSeconds();//秒
    var time=hours+":"+minute+":"+second;
    $(".mainClock").html(time);
}
//窗口变换
$(window).resize(function(){
    var w = parseInt($(".mainBoss").css("width"));
    if(w<1111){
        $(".mainNav").css("left","-300px");
        $(".mainPages iframe").css({"width":"90%","margin-left":"5%"});
    }else{
        $(".mainNav").css("left","0px");
        $(".mainPages iframe").css({"width":"75%","margin-left":"20%"});
    }
});

$(".mainMe").click(function(){
    if(parseInt($(".mainZZ").css("height"))==0){
        $(".mainZZ").css("height","255px");
        $(".mainZC").css("height","0px");
    }else{
        $(".mainZZ").css("height","0px");
    }
});
$(".mainUpd").click(function(){
    if(parseInt($(".mainZC").css("height"))==0){
        $(".mainZC").css("height","255px");
        $(".mainZZ").css("height","0px");
    }else{
        $(".mainZC").css("height","0px");
    }
});
//变化控制
$(".mainMenu").click(function(){
    var l = parseInt($(".mainNav").css("left"));
    var w = parseInt($(".mainBoss").css("width"));
    if(l==-300){
        $(".mainNav").css("left","0px");
        if(w<1111&&w>=920){
            $(".mainPages iframe").css({"width":"70%","margin-left":"25%"});
        }else if(w<920&&w>700){
            $(".mainPages iframe").css({"width":"60%","margin-left":"33%"});
        }else if(w<700){
            $(".mainPages iframe").css({"width":"50%","margin-left":"50%"});
        }else{
            $(".mainPages iframe").css({"width":"75%","margin-left":"20%"});
        }
    }else{
        $(".mainNav").css("left","-300px");
        $(".mainPages iframe").css({"width":"90%","margin-left":"5%"});
    }
});
///////////////////////////////////////////////////////////////////////////
$(".mainBaseList4").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="cadRili.html";
});
$(".mainBaseList3").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="stuList.html";
});
$(".mainBaseList2").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="depDepartment.html";
});
$(".mainBaseList1").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="perHtml.html";
});
$(".mainImg").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="myPages.html";
});
//mainApList
$(".mainApList").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="planMag.html";
});
$(".mainCurList").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="couHtml.html";
});
$(".mainStuList").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="stuliebiao.html";
});
$(".mainTo").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="clsList.html";
});