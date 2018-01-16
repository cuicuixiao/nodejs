$("input").focus(function(){
    $(this).css("outline","none");
    $(this).css("border","none");
    $(this).css("border-bottom","1px solid white");
    $(this).css("box-shadow","none");
});
$("textarea").focus(function () {
    $(this).css("outline","none");
    $(this).css("box-shadow","none");
});
$(".planClick11").click(function(){
    $(this).parent().prev().prev().html("男");
    $(".planC11").css({"visibility":"hidden","animation":""});
});
$(".planClick21").click(function(){
    $(this).parent().prev().prev().html("女");
    $(".planC11").css({"visibility":"hidden","animation":""});
});
$(".planClick12").click(function(){
    $(this).parent().prev().prev().html("135");
    $(".planC12").css({"visibility":"hidden","animation":""});
});
$(".planClick22").click(function(){
    $(this).parent().prev().prev().html("124");
    $(".planC12").css({"visibility":"hidden","animation":""});
});
$(".planClick32").click(function(){
    $(this).parent().prev().prev().html("136");
    $(".planC12").css({"visibility":"hidden","animation":""});
});
$(".planClick42").click(function(){
    $(this).parent().prev().prev().html("132");
    $(".planC12").css({"visibility":"hidden","animation":""});
});
$(".planBmNc2").click(function(){
    $(this).next().css({"visibility":"visible","animation":"bs .3s linear"});
    console.log($(this).next())
//                $(".planT1").css({"visibility":"visible","animation":"bs .3s linear"});
});
$(".planBmNc1").click(function(){
    $(this).next().css({"visibility":"visible","animation":"bs .3s linear"});
    console.log($(this).next());
//                $(".planT1").css({"visibility":"visible","animation":"bs .3s linear"});
});
var ff=[];
$(".dd").click(function(){
    $("input[type='text']").each(function(i,hh){
        ff[i]=$(this).val();
    });
    var s=$(".ff1").html();//性别
    var x=$(".ff").html();
    var mm=$(".ff2").html();//备注
    student.push({
        stuC: x,//班级编号
        stuN: ff[0],//学生姓名
        stuP: ff[9],//电话
        stuQ: ff[1],//QQ
        stuB: ff[6],//毕业时间
        stuX: ff[7],//学历
        stuS: ff[3],//毕业学校
        stuJ: ff[5],//紧急联系人
        stuT: ff[8],//紧急联系人电话
        stuA: mm,//备注
        stuSex: s,//性别
        stuY: ff[4],//邮箱
        stuId: ff[2]//身份证
    });
    console.log(student)
});
