/**
 * Created by Administrator on 2017/10/2.
 */
var zz;
$(".stuDel").click(function(){
    $(".myTs1").css({visibility: "visible"});
    $(".myWron1").css("margin-top","200px");
    $(".myWhat1").html("确认删除信息？");
    zz=$(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().html();
    console.log(zz);
});

$(".myNo1").click(function(){
    $(".myTs1").css({visibility: "hidden"});
    $(".myWron1").css("margin-top","-250px");
});

$(".myOk1").click(function(){
    $(".myTs1").css({visibility: "hidden"});
    $(".myWron1").css("margin-top","-250px");
    for (var f=0;f<student.length;f++){
        if(zz==student[f].stuN){
            student.splice(f,1)
        }
    }
});
$(".myOk").hover(function(){
    $(".myOk").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
    $(".myNo").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
});
$(".myNo").hover(function(){
    $(".myOk").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
    $(".myNo").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
});
$(".stuXinzeng").click(function(){
    $(".myTs").css({visibility: "visible"});
    $(".myWron").css("margin-top","200px");
    //$(".myWhat").html("请选择EXCEL");
});