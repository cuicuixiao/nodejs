

var zc;
var zz;
for(var i=0;i<4;i++){
    $("tr:nth-child("+(i+2)+") td:nth-child(1)").html(grade[i].claN);
    $("tr:nth-child("+(i+2)+") td:nth-child(2)").html(grade[i].claM);
    $("tr:nth-child("+(i+2)+") td:nth-child(3)").html(grade[i].claS);
    $("tr:nth-child("+(i+2)+") td:nth-child(4)").html(grade[i].claK);
    $("tr:nth-child("+(i+2)+") td:nth-child(5)").html(grade[i].claD);
    $("tr:nth-child("+(i+2)+") td:nth-child(6)").html(grade[i].claX);
    $("tr:nth-child("+(i+2)+") td:nth-child(7)").html(grade[i].claB);
    $("tr:nth-child("+(i+2)+") td:nth-child(8)").html(grade[i].claC);
    $("tr:nth-child("+(i+2)+") td:nth-child(9)").html(grade[i].claA);
}
var d;
$(".planBtn1").click(function(){
    $(".myTs").css({visibility: "visible"});
    $(".myWron").css("margin-top","200px");
    $(".myWhat").html("确认修改信息？");
    zz=$(this);
    zc=0;
    var $d=$(this).parent().parent();
    d=$d[0];

});

$(".planBtn2").click(function(){
    $(".myTs").css({visibility: "visible"});
    $(".myWron").css("margin-top","200px");
    $(".myWhat").html("确认删除信息？");
    zz=$(this).parent().prev().prev().prev().prev().prev().prev().prev().html();
    zc=1;
});
$(".myNo").click(function(){
    $(".myTs").css({visibility: "hidden"});
    $(".myWron").css("margin-top","-250px");
})
$(".myOk").click(function(){
    $(".myTs").css({visibility: "hidden"});
    $(".myWron").css("margin-top","-250px");
    if(zc==1){
        for(var e=0;e<grade.length;e++){
            if(zz==grade[e].claS){
                grade.splice(e,1)
            }
        }
        console.log(grade.length);
        $("tr:nth-child(" + (grade.length+2) + ") td:nth-child(10)").html("");
    }
    //if(zc==0){
    //    zz.parent().prev()
    //}
    for(var i=0;i<4;i++) {
        $("tr:nth-child(" + (i + 2) + ") td:nth-child(1)").html("");
        $("tr:nth-child(" + (i + 2) + ") td:nth-child(2)").html("");
        $("tr:nth-child(" + (i + 2) + ") td:nth-child(3)").html("");
        $("tr:nth-child(" + (i + 2) + ") td:nth-child(4)").html("");
        $("tr:nth-child(" + (i + 2) + ") td:nth-child(5)").html("");
        $("tr:nth-child(" + (i + 2) + ") td:nth-child(6)").html("");
        $("tr:nth-child(" + (i + 2) + ") td:nth-child(7)").html("");
        $("tr:nth-child(" + (i + 2) + ") td:nth-child(8)").html("");
        $("tr:nth-child(" + (i + 2) + ") td:nth-child(9)").html("");
    }
    for(var i=0;i<grade.length;i++){
        $("tr:nth-child("+(i+2)+") td:nth-child(1)").html(grade[i].claN);
        $("tr:nth-child("+(i+2)+") td:nth-child(2)").html(grade[i].claM);
        $("tr:nth-child("+(i+2)+") td:nth-child(3)").html(grade[i].claS);
        $("tr:nth-child("+(i+2)+") td:nth-child(4)").html(grade[i].claK);
        $("tr:nth-child("+(i+2)+") td:nth-child(5)").html(grade[i].claD);
        $("tr:nth-child("+(i+2)+") td:nth-child(6)").html(grade[i].claX);
        $("tr:nth-child("+(i+2)+") td:nth-child(7)").html(grade[i].claB);
        $("tr:nth-child("+(i+2)+") td:nth-child(8)").html(grade[i].claC);
        $("tr:nth-child("+(i+2)+") td:nth-child(9)").html(grade[i].claA);
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




