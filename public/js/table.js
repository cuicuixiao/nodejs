/**
 * Created by q on 2017/10/2.
 */
createShowingTable();
//动态的创建一个table，同时将后台获取的数据动态的填充到相应的单元格
function createShowingTable() {
    var tableStr = "";
    var len = crew.length;
    for (var i = 0; i < len; i++) {
        tableStr = tableStr + "<tr>"
            + "<td>" + crew[i].creN + "</td>"
            + "<td >" + crew[i].creB + "</td>"
            + "<td >" + crew[i].creP + "</td>"
            + "<td >" + crew[i].creI + "</td>"
            + "<td >" + crew[i].creT + "</td>"
            + "<td >" + crew[i].creQ + "</td>"
            + "<td >" + crew[i].creE + "</td>"
            + "<td >" + crew[i].creG + "</td>"
            + "<td ><span class='glyphicon glyphicon-edit' onclick='per_edite(text1)'></span>"
            + "<span class='glyphicon glyphicon-trash per_span' onclick='per_edite(text2)'></span></td>"
            + "</tr>";
    }
    //将动态生成的table添加的事先隐藏的div中.
    $(".per_table").html(tableStr);
}
