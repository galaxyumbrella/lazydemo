//打开后台页面时候发送请求刷新新闻列表
$(function() {
    var $newsTable = $("#newstable tbody");
    refreshNews();
    /*添加新闻*/
    $('#btnsubmit').click(function(e) {
        e.preventDefault();
        //输入判断
        if ($('#newstitle').val() === "" || $('#newsimg').val() === "" || $('#newstime').val() === "" || $('#newstype').val() === "") {
            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().remove('has-error');
            }
            if ($('#newsimg').val() === "") {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().remove('has-error');
            }
            if ($('#newstime').val() === "") {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().remove('has-error');
            }
            if ($('#newssrc').val() === "") {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().remove('has-error');
            }
        } else {
            var jsonNews = {
                newstitle: $('#newstitle').val(),
                newstype: $('#newstype').val(),
                newsimg: $('#newsimg').val(),
                newstime: $('#newstime').val(),
                newssrc: $('#newssrc').val()
            };
            //提交添加
            $.ajax({
                url: '/admin/insert',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function(data) {
                    console.log(data);
                    $('#newstitle').val('');
                    $('#newstype').val('');
                    $('#newsimg').val('');
                    $('#newstime').val('');
                    $('#newssrc').val('');
                    refreshNews();
                    document.location.reload();
                }
            });
        }
    });



    /*删除新闻功能*/

    var deleteId = null;
    $newsTable.on('click', '.btn-danger', function(e) { //模态框 动态生成的按钮用事件委托
        event.preventDefault();
        // console.log('click');
        $('#deleteModal').modal('show'); //点击显示模态框
        deleteId = $(this).parent().prevAll().eq(3).html();
        // console.log(deleteId);
    });
    $('#deleteModal #confirmDelete').click(function(e) {
        if (deleteId) {
            $.ajax({
                url: '/admin/delete',
                type: 'post',
                data: { newsid: deleteId },
                success: function(data) {
                    console.log('删除成功');
                    $('#deleteModal').modal('hide');
                    refreshNews();
                }

            });
        }
    });


    /*修改新闻功能*/

    var updateId = null;
    //获取要修改新闻的数据
    $newsTable.on('click', '.btn-primary', function(e) { 
        e.preventDefault();
        // console.log('click');
        $('#updateModal').modal('show'); //点击显示模态框
        updateId = $(this).parent().prevAll().eq(3).html();
        $.ajax({
        	url:'/admin/curnews',
        	type:'get',
        	datatype:'json',
        	data:{newsid:updateId},
        	success:function(data){
        		$('#unewstitle').val(data[0].newstitle);
        		$('#unewstype').val(data[0].newstype);
        		$('#unewsimg').val(data[0].newsimg);
        		$('#unewssrc').val(data[0].newssrc);
        		var utime= data[0].newstime.split('T')[0];
        		$('#unewstime').val(utime);
        	}
        });
    });
    //确认提交修改后的数据
    $('#updateModal #confirmUpdate').click(function(e) {
            $.ajax({
                url: '/admin/update',
                type: 'post',
                data: {
                	newstitle: $('#unewstitle').val(),
                	newstype: $('#unewstype').val(),
                	newsimg: $('#unewsimg').val(),
                	newstime: $('#unewstime').val(),
                	newssrc: $('#unewssrc').val(),
                	id:updateId
                },
                success: function(data) {
                    $('#updateModal').modal('hide');
                    refreshNews();
                }
            });
    });


    function refreshNews() {
        $newsTable.empty();
        $.ajax({
            type: "get",
            url: "../admin/getnews",
            datatype: "json",
            success: function(data) {
                console.log(data);
                data.forEach(function(item, index, array) {
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdsrc = $('<td>').html(item.newssrc);
                    var $tdtime = $('<td>').html(item.newstime);
                    var $tdctrl = $('<td>');
                    var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('编辑');
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnupdate, $btndelete);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdtime, $tdctrl);
                    $newsTable.append($tRow);
                });
            },
            error:function(e){
                console.log(e);
            }
        });
    }
});
