/**
* @Author: ananayarora
* @Date:   2016-09-07T03:41:12+05:30
* @Last modified by:   ananayarora
* @Last modified time: 2016-09-07T04:05:48+05:30
*/



$(document).ready(function(){
    $(".check").click(function(){
        var prefix = 'http://';
        var prefix2 = 'https://';
        var url = $(".url").val();
        if (url.substr(0, prefix.length) !== prefix && url.substr(0, prefix2.length) !== prefix2) {
            url = prefix + url;
        }
        $.getJSON("https://graph.facebook.com/"+url, function(r){
            if (r.share !== undefined) {
                $(".num").html(r.share.share_count + " shares");
            } else {
                $(".num").html("0 shares");
            }
        });
    });
    $(document).keydown(function(e){
        if (e.keyCode == 13) {
            $(".check").trigger('click');
        }
    });
});
