/**
 * Created by Administrator on 2017/10/3.
 */
$(window).ready(function(){
    $(".myOne tr:nth-child(2) td:nth-child(2)").html(crew[0].creI);
    $(".myOne tr:nth-child(3) td:nth-child(2)").html(crew[0].creP);
    $(".myOne tr:nth-child(4) td:nth-child(2)").html(crew[0].creT);
    $(".myOne tr:nth-child(5) td:nth-child(2)").html(crew[0].creQ);
    $(".myOne tr:nth-child(6) td:nth-child(2)").html(crew[0].creM);
    $(".myOne tr:nth-child(7) td:nth-child(2)").html(crew[0].creG);
    $(".myOne tr:nth-child(8) td:nth-child(2)").html(crew[0].creE);
});
$(window).resize(function() {
    var w = parseInt($(".myBoss").css("width"));
    if(w<769){
        $("table,tr").css("width","100%");
        $(".myChange").css({"margin-left":"30%",width:"40%"});
    }else{
        $("table,tr").css("width","235px");
        $(".myChange").css({"margin-left":"60px",width:"120px"});
    }
});
$(".myChange").click(function(){
    $(".myTs").css({visibility: "visible"});
    $(".myWron").css("margin-top","200px");
});
$(".myOk").click(function(){
    $(".myTs").css({visibility: "hidden"});
    $(".myWron").css("margin-top","-250px");
    crew[0].creI=$(".myOne tr:nth-child(2) td:nth-child(2)").html();
    crew[0].creP=$(".myOne tr:nth-child(3) td:nth-child(2)").html();
    crew[0].creT=$(".myOne tr:nth-child(4) td:nth-child(2)").html();
    crew[0].creQ=$(".myOne tr:nth-child(5) td:nth-child(2)").html();
    crew[0].creM=$(".myOne tr:nth-child(6) td:nth-child(2)").html();
    crew[0].creG=$(".myOne tr:nth-child(7) td:nth-child(2)").html();
    crew[0].creE=$(".myOne tr:nth-child(8) td:nth-child(2)").html();
});
$(".myNo").click(function(){
    $(".myTs").css({visibility: "hidden"});
    $(".myWron").css("margin-top","-250px");
    $(".myOne tr:nth-child(2) td:nth-child(2)").html(crew[0].creI);
    $(".myOne tr:nth-child(3) td:nth-child(2)").html(crew[0].creP);
    $(".myOne tr:nth-child(4) td:nth-child(2)").html(crew[0].creT);
    $(".myOne tr:nth-child(5) td:nth-child(2)").html(crew[0].creQ);
    $(".myOne tr:nth-child(6) td:nth-child(2)").html(crew[0].creM);
    $(".myOne tr:nth-child(7) td:nth-child(2)").html(crew[0].creG);
    $(".myOne tr:nth-child(8) td:nth-child(2)").html(crew[0].creE);
});
$(".myOk").hover(function(){
    $(".myOk").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
    $(".myNo").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
});
$(".myNo").hover(function(){
    $(".myOk").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
    $(".myNo").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
});