
$(".planClick1").click(function(){
    $(".planBmN").html("项目经理");
    $(".planC1").css({"visibility":"hidden","animation":""});
});

$(".planClick2").click(function(){
    $(".planBmN").html("班主任");
    $(".planT1").css({"visibility":"hidden","animation":""});
});


$(".planBmNc").click(function(){
    $(".planT1").css({"visibility":"visible","animation":"bs .3s linear"});
});


//
//
$(".xz").click(function(){
    $(".newc").after("<div class='row' id='newclassss'>" +
        " <div class='col-xs-6'>" +
        "<div id='newclassk'>" +
        "<div id='z'>" +
        "<input id='newclassp1' type='text' placeholder='阶段名称'/>" +
        "<span id='newclasszi'>总天数：180天 <span class='glyphicon glyphicon-plus-sign en' id='newclasszi1'></span></span>" +
        "</div>" +
        "<div id='z1'>" +
        "<span class='glyphicon glyphicon-minus-sign ncz' id='newclasszi2'></span>" +
        "<input id='newclassp2' type='text' placeholder='阶段内容名称'/>" +
        "<input id='newclassp3' type='text' placeholder='天数'/>" +
        "</div>" +
        "</div>" +
        "<script>" +
        "" +
        "<script>");
});


$(".en").click(function(){
    $(".zn").html($(".zn").html()+
        "<div id='z1'>" +
        "<span class='glyphicon glyphicon-minus-sign ncz' id='newclasszi2'></span>" +
        "<input id='newclassp2' type='text' placeholder='阶段内容名称'/>" +
        "<input id='newclassp3' type='text' placeholder='天数'/>" +
        "</div>" +
        "<script>$('.ncz').click(function(){$(this).parent().remove();});</script>");
});



$(".ncz").click(function(){$(this).parent().remove();});