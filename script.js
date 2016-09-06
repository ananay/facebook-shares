/**
* @Author: ananayarora
* @Date:   2016-09-07T03:41:12+05:30
* @Last modified by:   ananayarora
* @Last modified time: 2016-09-07T03:48:06+05:30
*/



$(document).ready(function(){
    $(".check").click(function(){
        $.getJSON("http://graph.facebook.com/"+$(".url").val(), function(r){
            $(".num").html(r.share.share_count + " shares");
        });
    });
});
