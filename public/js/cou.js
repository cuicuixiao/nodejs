// 弹出框样式
// 弹出框
var text1 = "是否确认编辑？";
var text2 = "是否确认删除？";
// js传入table数据
createShowingTable(course);
//动态的创建一个table，同时将后台获取的数据动态的填充到相应的单元格
function createShowingTable(course) {
    var tableStr = "";
    var len = course.length;
    for (var i = 0; i < len; i++) {
        tableStr = tableStr + "<tr >"
            + "<td id='name' contenteditable='true'>" + course[i].couC + "</td>"
            + "<td contenteditable='true'>" + course[i].couJ + "</td>"
            + "<td contenteditable='true'>" + course[i].couZ + "</td>"
            + "<td >" + course[i].couX + "</td>"
            + "<td ><span class='glyphicon glyphicon-edit' onclick='cou_edite(text1,this)'></span>"
            + "<span class='glyphicon glyphicon-trash per_span' onclick='cou_detele(text2,this)'></span></td>"
            + "</tr>";
    }
    //将动态生成的table添加的事先隐藏的div中.
    $(".cou_table").html(tableStr);
}

// 确认和取消按钮
function cou_detele(str, obj) {
    $(".cou_maxBox").css({visibility: "visible","top":"200px"});
    $(".cou_minBox").text(str);
    $(".cou_sure").click(function () {
        var brOoj1 = $(obj).parent();
        var brObj = $(brOoj1).siblings('#name');
        for (var i = 0; i < course.length; i++) {
            if (course[i].couC === $(brObj).text()) {
                course.splice(i, 1);
                createShowingTable(course);
            }
        }
    });
}

function cou_edite(str, obj) {
    $(".cou_maxBox").css({visibility: "visible","top":"200px"});
    $(".cou_minBox").text(str);
}

function couWindow() {
    var myWindow = $("#cou_maxBox");
    myWindow.css({"visibility":"hidden","zIndex":"10","top":"-250px"})
}

$(".per_sure,.cou_sure").hover(function(){
    $(".per_sure,.cou_sure").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
    $(".per_close,.cou_close").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
});
$(".per_close,.cou_close").hover(function(){
    $(".per_sure,.cou_sure").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
    $(".per_close,.cou_close").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
});