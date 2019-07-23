$(function() {
    var api = "https://connpass.com/api/v1/event/";
    var locations = {
        "2834":"東京",
        "3288":"会津",
        "3732":"宇都宮",
        "6374":"関西",
        "5332":"福岡",
        "5630":"鹿児島",
        "5665":"沖縄",
        "8152":"新潟"
    };

    function init(){
        var query = {
            series_id:"2834,3288,3732,6374,5332,5630,5665,8152",
            order: 2,
            count:20
        }
        $.ajax({
            url: api,
            type: 'GET',
            dataType: 'JSONP',
            data: query,
            timeout: 10000,
            callback: putEventData,
            success: function(data) {
                putEventData(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("サーバーとの接続が失敗しました");
            }
        });
    }

    function putEventData(data){
        var events = data.events;
        $(".card-list").empty();
        for (var i = 0; i < events.length; i++) {
            var card = `
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
                <div class="mdl-card__title">
                    <div class="mdl-card__title-text"><a target=_blank href="${events[i].event_url}">${events[i].title}</a></div>
                </div>
                <div class="mdl-card__supporting-text">
                    <div class="event-organization"><span>TFUG${locations[String(events[i].series.id)]}</span></div>
                    <div class="event-location">${events[i].place}</div>
                    <div class="event-date">${transTime(events[i].started_at)}</div>
                </div>
            </div>
            `;
            $(".card-list").append(card);
        }
    }

    function transTime(time){
        var date = new Date(time);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var w = date.getDay();
        var wd = ['日', '月', '火', '水', '木', '金', '土'];
        var h = date.getHours();
        var mi = ("00" + date.getMinutes()).slice(-2);
        var date = y + '年' + m + '月' + d + '日'  + ' (' + wd[w] + ') ' + h + ':' + mi + '';
        return date;
    }

    init();
});
