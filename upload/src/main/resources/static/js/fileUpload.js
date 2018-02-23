/**
 * 文件上传js
 * Created by 杨鹏 on 2018/2/10.
 */
/**
 *
 */
$(document).ready(function () {

    $("#fileMutiply").on("change", function eventStart() {
        j = 0;

        var allFiles = this.files; //获取当前选择的文件对象
        var fileName;
        var fileSize;

        for (var k = 0; k < allFiles.length; k++) { //循环添加进度条

            fileName = allFiles[k].name;

            if (allFiles[k].size > 1024 * 1024) {
                // 四舍五入
                fileSize = (Math.round(allFiles[k].size / (1024 * 1024))).toString() + 'MB';
            }
            else {
                fileSize = (Math.round(allFiles[k].size / 1024)).toString() + 'KB';
            }
            // 在匹配的元素的末尾添加DOM元素，HTML代码，文本节点
            $("#test").append(
                "<li  id='" + k + "file'>" +
                    "<div class='progress' style='width:100px;'>" +
                        "<div id='" + k + "barj' class='progressbar'></div>" +
                    "</div>" +
                    "<span class='filename'>" + fileName + "</span>" +
                    "<span id='" + k + "pps' class='progressnum'>" + (fileSize) + "</span>" +
                "</li>"
            );

        }
        sendAjax();
        //采用递归的方式循环发送ajax请求
        function sendAjax() {
            if (j >= allFiles.length)//文件为空
            {
                $("#fileMutiply").val("");
                j = 0;
                return;
            }
            var formData = new FormData();
            formData.append('files', allFiles[j]); //将该file对象添加到formData对象中
            $.ajax({
                url: '/upload/fileUpload',
                type: 'POST',
                cache: false,
                data: {},//需要什么参数，自己配置
                data: formData,//文件以formData形式传入
                processData: false,
                //必须false才会自动加上正确的Content-Type
                contentType: false,
                /*
                 beforeSend:beforeSend,//发送请求
                 complete:complete,//请求完成
                 */
                xhr: function () { //监听用于上传显示进度
                    var xhr = $.ajaxSettings.xhr();
                    if (onprogress && xhr.upload) {
                        xhr.upload.addEventListener("progress", onprogress, false);
                        return xhr;
                    }
                },
                success: function (data) {
                    $("#" + j + "file").remove();//移除进度条样式
                    j++; //递归条件
                    sendAjax();
                },
                error: function (xhr) {
                    alert("上传出错");
                }
            });
        }
    });

});

function onprogress(evt) {
    var loaded = evt.loaded;     //已经上传大小情况
    var tot = evt.total;      //附件总大小
    var per = Math.floor(100 * loaded / tot);  //已经上传的百分比
    $("#" + j + "pps").text(per + "%");
    $("#" + j + "barj").css({"background-color":"blue","height":"5px","width":per+"%"})
}