$(function() {
    var organizations = [
        {location:"TFUG会津", url:"https://tfug-aizu.connpass.com/"},
        {location:"TFUG宇都宮", url:"https://tfug-utsunomiya.connpass.com/"},
        {location:"TFUG東京", url:"https://tfug-tokyo.connpass.com/"},
        {location:"TFUG関西", url:"https://tfug-kansai.connpass.com/"},
        {location:"TFUG福岡", url:"https://tfugfuk.connpass.com/"},
        {location:"TFUG鹿児島", url:"https://tfug-kagoshima.connpass.com/"},
        {location:"TFUG沖縄", url:"https://tfug-okinawa.connpass.com/"}
    ];

    function init(){
        for (var i = 0; i < organizations.length; i++) {
            organizations[i]
            var card = `
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
                <div class="mdl-card__title">
                    <div class="mdl-card__title-text"><a target=_blank href="${organizations[i].url}">${organizations[i].location}</a></div>
                </div>
            </div>
            `;
            $(".card-list").append(card);
        }
    }

    init();
});
