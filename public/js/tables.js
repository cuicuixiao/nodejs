/**
 * Created by q on 2017/10/2.
 */
createShowingTable();
//动态的创建一个table，同时将后台获取的数据动态的填充到相应的单元格
function createShowingTable() {
    var tableStr = "";
    var len = course.length;
    for (var i = 0; i < len; i++) {
        tableStr = tableStr + "<tr>"
            + "<td>" +course[i].couC + "</td>"
            + "<td >" + course[i].couJ + "</td>"
            + "<td >" + course[i].couZ + "</td>"
            + "<td >" + course[i].couX+ "</td>"
            + "<td ><span class='glyphicon glyphicon-edit' onclick='cou_edite(text1)'></span>"
            + "<span class='glyphicon glyphicon-trash per_span' onclick='cou_edite(text2)'></span></td>"
            + "</tr>";
    }
    //将动态生成的table添加的事先隐藏的div中.
    $(".cou_table").html(tableStr);
}
