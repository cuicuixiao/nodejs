/**
 * Created by 马琳峰 on 2017/10/7.
 */

function newClassclick(a) {
    $(".newClass_but").css("backgroundColor","rgba(0,0,0,0)");
    if(a==1){
        $(".click1").css("backgroundColor","rgba(0,0,0,0.4)");
        $(".newClass_banJiLu").css("visibility","hidden");
        $(".newClass_kuang").css("visibility","visible");
    }
    if(a==2){
        $(".click2").css("backgroundColor","rgba(0,0,0,0.4)");
        $(".newClass_kuang").css("visibility","hidden");
        $(".newClass_banJiLu").css("visibility","visible");
    }
}
var gg;
$(".jiedidan").click(function () {
    $(".newCLassPos").css("top","-300px");
    $(".newCLassPos").css("visibility","visible");
    $(".newCLassPos").animate({top:"0"});
    gg=$(this).parent().parent().parent().parent()

});
$(".newCLass_delete").click(function () {
    $(".newCLassPos").css("visibility","hidden");
});
$(".newCLass_queren").click(function () {
    $(".newCLassPos").css("visibility","hidden");
    gg.remove()
});
//    下拉框点击效果
$(".planBmNc").click(function(){
    $(".planT1").css({"visibility":"visible","animation":"bs .3s linear"});
});
$(".planClick1").click(function(){
    $(".planBmN").html("web前端");
    $(".planYgN").html("林毅娜");
    $(".planBjN").html("135");
    $(".planC1").css({"visibility":"hidden","animation":""});
});
$(".planClick2").click(function(){
    $(".planBmN").html("UI预科");
    $(".planYgN").html("郭丽娜");
    $(".planBjN").html("124");
    $(".planC1").css({"visibility":"hidden","animation":""});
});
$(".planClick3").click(function(){
    $(".planBmN").html("JAVA");
    $(".planYgN").html("杨婉兰");
    $(".planBjN").html("132");
    $(".planC1").css({"visibility":"hidden","animation":""});
});
$(".planClick4").click(function(){
    $(".planBmN").html("职业素养");
    $(".planYgN").html("王芳");
    $(".planBjN").html("135");
    $(".planC1").css({"visibility":"hidden","animation":""});
});
//
$(".planClick11").click(function(){
    $(this).parent().prev().prev().html("邹杰");
    $(".planC11").css({"visibility":"hidden","animation":""});
});
$(".planClick21").click(function(){
    $(this).parent().prev().prev().html("林伊娜");
    $(".planC11").css({"visibility":"hidden","animation":""});
});
$(".planClick31").click(function(){
    $(this).parent().prev().prev().html("唐钰玮");
    $(".planC11").css({"visibility":"hidden","animation":""});
});
$(".planClick41").click(function(){
    $(this).parent().prev().prev().html("王芳");
    $(".planC11").css({"visibility":"hidden","animation":""});
});
$(".planBmNc1").click(function(){
    $(this).next().css({"visibility":"visible","animation":"bs .3s linear"});
    console.log($(this).next())
//                $(".planT1").css({"visibility":"visible","animation":"bs .3s linear"});
});
$(".planClick12").click(function(){
    $(this).parent().prev().prev().html("每天");
    $(".planC12").css({"visibility":"hidden","animation":""});
});
$(".planClick22").click(function(){
    $(this).parent().prev().prev().html("星期一");
    $(".planC12").css({"visibility":"hidden","animation":""});
});
$(".planClick32").click(function(){
    $(this).parent().prev().prev().html("星期二");
    $(".planC12").css({"visibility":"hidden","animation":""});
});
$(".planClick42").click(function(){
    $(this).parent().prev().prev().html("星期三");
    $(".planC12").css({"visibility":"hidden","animation":""});
})
;$(".planClick52").click(function(){
    $(this).parent().prev().prev().html("星期四");
    $(".planC12").css({"visibility":"hidden","animation":""});
})
;$(".planClick62").click(function(){
    $(this).parent().prev().prev().html("星期五");
    $(".planC12").css({"visibility":"hidden","animation":""});
});
$(".planBmNc2").click(function(){
    $(this).next().css({"visibility":"visible","animation":"bs .3s linear"});
    console.log($(this).next())
//                $(".planT1").css({"visibility":"visible","animation":"bs .3s linear"});
});
$(".newClassChaKan").click(function () {
    $(".zhuye").css("display","none");
    $(".banjikecheng").css("display","block");
    $(".fanhui").click(function () {
        $(".banjikecheng").css("display","none");
        $(".zhuye").css("display","block");
    });
    $(".xinzengkecheng").click(function () {
        $(".newCLassPos1").css("top","-300px");
        $(".newCLassPos1").css("visibility","visible");
        $(".newCLassPos1").animate({top:"0"});
        $(".newQuXiao").click(function () {
            $(".newCLassPos1").css("visibility","hidden");
        });
//          点击确认 新增课程  自己消失
        $(".newQueRen").click(function () {
            $(".newCLassPos1").css("visibility","hidden");
            $(".newClass-border").html($(".newClass-border").html()+"<table>" +
                "<tr class='border-bottom'> <td>web前端</td> <td colspan='2' class='newCLassleft'>开始日期  2016年1月1日</td> <td class='newClass_right'><span class='glyphicon glyphicon-trash cusuer jiedidan'></span></td> " +
            "</tr>" +
            " <tr> <td>一阶段</td> <td>授课人</td> <td>邹捷</td> <td>每天</td> " +
            "</tr> " +
            "<tr> <td>二阶段</td> <td>授课人</td> <td>邹捷</td> <td>每天</td> " +
            "</tr> " +
            "<tr> <td>三阶段</td> <td>授课人</td> <td>邹捷</td> <td>每天</td>" +
            " </tr>" +
            " <tr> <td>四阶段</td> <td>授课人</td> <td>邹捷</td> <td>每天</td> " +
            "</tr> </table>" +
            "<script>$('.newCLass_queren').click(function () {$('.newCLassPos').css('visibility','hidden');gg.remove()});</script>")
        })
    })
});

$(".newCLass_queren").hover(function(){
    $(this).css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
    $(".newCLass_delete").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
});
$(".newCLass_delete").hover(function(){
    $(".newCLass_queren").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
    $(this).css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
});
$(".newClass_zongRenShu span").html(stusit[0].ssiN);
$(".newClass_nanSeng div:nth-child(1) span").html(stusit[0].ssiM);
$(".newClass_nanSeng div:nth-child(2) span").html(stusit[0].ssiB);
$(".newClass_girl div:nth-child(1) span").html(stusit[0].ssiW);
$(".newClass_girl div:nth-child(2) span").html(stusit[0].ssiZ);
$(".newClass_GaoZhong span").html(stusit[0].ssiG);
