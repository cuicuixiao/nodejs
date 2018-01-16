/**
 * Created by 马琳峰 on 2017/10/7.
 */

$(window).ready(function(){
    for(var i= 0;i<3;i++){
        $("tr:nth-child("+(i+2)+") td:nth-child(1)").html(branch[i].braN);
        $("tr:nth-child("+(i+2)+") td:nth-child(2)").html(branch[i].braB);
        $("tr:nth-child("+(i+2)+") td:nth-child(3)").html(branch[i].braG);
        $("tr:nth-child("+(i+2)+") td:nth-child(4)").html(branch[i].braP);
        $("tr:nth-child("+(i+2)+") td:nth-child(5)").html(branch[i].braA);
    }
});
var zz;
var zc=1;
$(".stuDel").click(function(){
    $(".myTs").css({visibility: "visible"});
    $(".myWron").css("margin-top","200px");
    $(".myWhat").html("确认删除信息？");
    zz=parseInt($(this).parent().prev().prev().prev().prev().prev().html());
    zc=0;
});
$(".stuCge").click(function(){
    $(".myTs").css({visibility: "visible"});
    $(".myWron").css("margin-top","200px");
    $(".myWhat").html("确认修改信息？");
    zz=parseInt($(this).parent().prev().prev().prev().prev().prev().html());
    zc=1;
});
$(".myNo").click(function () {
    $(".myTs").css({visibility: "hidden"});
    $(".myWron").css("margin-top","-250px");
});
$(".myOk").click(function(){
    $(".myTs").css({visibility: "hidden"});
    $(".myWron").css("margin-top","-250px");
    if(zc==0){
        branch.splice(zz-1,1);
        for(var i= 0;i<branch.length;i++){
            $("tr:nth-child("+(i+2)+") td:nth-child(1)").html(i+1);
            $("tr:nth-child("+(i+2)+") td:nth-child(2)").html(branch[i].braB);
            $("tr:nth-child("+(i+2)+") td:nth-child(3)").html(branch[i].braG);
            $("tr:nth-child("+(i+2)+") td:nth-child(4)").html(branch[i].braP);
            $("tr:nth-child("+(i+2)+") td:nth-child(5)").html(branch[i].braA);
        }
        for(var i= branch.length;i<3;i++){
            $("tr:nth-child("+(i+2)+") td:nth-child(1)").html("");
            $("tr:nth-child("+(i+2)+") td:nth-child(2)").html("");
            $("tr:nth-child("+(i+2)+") td:nth-child(3)").html("");
            $("tr:nth-child("+(i+2)+") td:nth-child(4)").html("");
            $("tr:nth-child("+(i+2)+") td:nth-child(5)").html("");
            $("tr:nth-child("+(i+2)+") td:nth-child(6)").html("");
        }
    }
    if(zc==1){
        branch[zz-1].braB=$("tr:nth-child("+(zz+1)+") td:nth-child(2)").html();
        branch[zz-1].braG=$("tr:nth-child("+(zz+1)+") td:nth-child(3)").html();
        branch[zz-1].braP=$("tr:nth-child("+(zz+1)+") td:nth-child(4)").html();
        branch[zz-1].braA=$("tr:nth-child("+(zz+1)+") td:nth-child(5)").html();
        for(var i= 0;i<part.length;i++){
            // $("tr:nth-child("+(i+2)+") td:nth-child(1)").html(i+1);
            $("tr:nth-child("+(i+2)+") td:nth-child(2)").html(branch[i].braB);
            $("tr:nth-child("+(i+2)+") td:nth-child(3)").html(branch[i].braG);
            $("tr:nth-child("+(i+2)+") td:nth-child(4)").html(branch[i].braP);
            $("tr:nth-child("+(i+2)+") td:nth-child(5)").html(branch[i].braA);
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
    