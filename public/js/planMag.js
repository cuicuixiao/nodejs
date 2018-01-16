/**
 * Created by Administrator on 2017/10/5.
 */
$(window).ready(function(){
    shuju();
});
function shuju() {
    for(var i= 2;i<7;i++){
        for(var j=2;j<7;j++){
            $("tr:nth-child("+i+") td:nth-child("+j+") div:nth-child(1)").html(desclass[0].dcsOne);
            $("tr:nth-child("+i+") td:nth-child("+j+") div:nth-child(2)").html(desclass[0].dcsTwo);
        }
        i++;
    }
    for(var k= 2;k<7;k++){
        k++;
        for(var l=2;l<7;l++){
            $("tr:nth-child("+k+") td:nth-child("+l+") div:nth-child(1)").html(desclass[0].dcsThree);
            $("tr:nth-child("+k+") td:nth-child("+l+") div:nth-child(2)").html(desclass[0].dcsFour);
        }
    }
}
$(".planClick1").click(function(){
    $(".planBmN").html("web前端");
    $(".planYgN").html("林毅娜");
    $(".planBjN").html("135");
    $(".planC1").css({"visibility":"hidden","animation":""});
    $("td div").html("");
    for(var i= 2;i<7;i++){
        for(var j=2;j<7;j++){
            $("tr:nth-child("+i+") td:nth-child("+j+") div:nth-child(1)").html(desclass[0].dcsOne);
        }
        i++;
    }
});
$(".planClick2").click(function(){
    $(".planBmN").html("UI预科");
    $(".planYgN").html("郭丽娜");
    $(".planBjN").html("124");
    $(".planC1").css({"visibility":"hidden","animation":""});
    $("td div").html("");
    for(var i= 2;i<7;i++){
        for(var j=2;j<7;j++){
            $("tr:nth-child("+i+") td:nth-child("+j+") div:nth-child(1)").html(desclass[0].dcsTwo);
        }
        i++;
    }
});
$(".planClick3").click(function(){
    $(".planBmN").html("JAVA");
    $(".planYgN").html("杨婉兰");
    $(".planBjN").html("132");
    $(".planC1").css({"visibility":"hidden","animation":""});
    $("td div").html("");
    for(var k= 2;k<7;k++){
        k++;
        for(var l=2;l<7;l++){
            $("tr:nth-child("+k+") td:nth-child("+l+") div:nth-child(1)").html(desclass[0].dcsThree);
        }
    }
});
$(".planClick4").click(function(){
    $(".planBmN").html("职业素养");
    $(".planYgN").html("王芳");
    $(".planBjN").html("135");
    $(".planC1").css({"visibility":"hidden","animation":""});
    $("td div").html("");
    for(var k= 2;k<7;k++){
        k++;
        for(var l=2;l<7;l++){
            $("tr:nth-child("+k+") td:nth-child("+l+") div:nth-child(1)").html(desclass[0].dcsFour);
        }
    }
});
$(".planCk1").click(function(){
    $(".planBmN").html("--请选择--");
    $(".planYgN").html("--请选择--");
    $(".planBjN").html("135");
    $(".planC1").css({"visibility":"hidden","animation":""});
    $("td div").html("");
    for(var i= 2;i<7;i++){
        for(var j=2;j<7;j++){
            $("tr:nth-child("+i+") td:nth-child("+j+") div:nth-child(1)").html(desclass[0].dcsOne);
        }
        i++;
    }
    for(var k= 2;k<7;k++){
        k++;
        for(var l=2;l<7;l++){
            $("tr:nth-child("+k+") td:nth-child("+l+") div:nth-child(1)").html(desclass[0].dcsFour);
        }
    }
});
$(".planBmNc").click(function(){
    $(".planT1").css({"visibility":"visible","animation":"bs .3s linear"});
});
$(".planYgNc").click(function(){
    $(".planT2").css({"visibility":"visible","animation":"bs .3s linear"});
});
$(".planBjNc").click(function(){
    $(".planT3").css({"visibility":"visible","animation":"bs .3s linear"});
});
$(".planBtn1").click(function(){
    $(".myTs").css({visibility: "visible"});
    $(".myWron").css("margin-top","200px");
    $(".myWhat").html("确认导出备课表？");
});
$(".planBtn2").click(function(){
    $(".myTs").css({visibility: "visible"});
    $(".myWron").css("margin-top","200px");
    $(".myWhat").html("确认导出课时表？");
});
$(".myOk,.myNo").click(function(){
    $(".myTs").css({visibility: "hidden"});
    $(".myWron").css("margin-top","-250px");
});
$(".myOk").hover(function(){
    $(".myOk").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
    $(".myNo").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
});
$(".myNo").hover(function(){
    $(".myOk").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
    $(".myNo").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
});
$(".planN3 span:nth-child(2)").click(function () {
    var ll = parseInt($(".planN2").html())+1;
    if(ll>12){
        ll=1;
    }
    $(".planN2").html(ll+"-2017");
    shuju();
    var zl = parseInt($("tr:nth-child(6) td:nth-child(7) span").html());
    for(var j=0;j<5;j++){
        for (var i=1;i<8;i++){
            var z = i+j*7+zl;
            if(z>30&&z<=60){
                z=z-30;
            }else if(z>60){
                z=z-60;
            }
            $("tr:nth-child("+(j+2)+") td:nth-child("+i+") span").html(z);
        }
    }
});
$(".planN3 span:nth-child(1)").click(function () {
    var ll = parseInt($(".planN2").html())-1;
    if(ll<1){
        ll=12;
    }
    $(".planN2").html(ll+"-2017");
    shuju();
    var zl = parseInt($("tr:nth-child(6) td:nth-child(7) span").html())-10;
    if(zl<0){
        zl=zl+30
    }
    for(var j=0;j<5;j++){
        for (var i=1;i<8;i++){
            var z = i+j*7+zl;
            if(z>30&&z<=60){
                z=z-30;
            }else if(z>60){
                z=z-60;
            }
            $("tr:nth-child("+(j+2)+") td:nth-child("+i+") span").html(z);
        }
    }
});