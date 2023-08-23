// ================ ヘッダー画像フェード切り替え ================ //
$('.top-img img:nth-child(n+2)').hide();

setInterval(function() {
    $(".top-img img:first-child").fadeOut(2000);
    $(".top-img img:nth-child(2)").fadeIn(2000);
    $(".top-img img:first-child").appendTo(".top-img");
    }, 5000);


// ================ スクロール　フェード処理 ================ //

$(window).on('scroll',function(){
    $('.fade-up, .fade-down, .fade-right').each(function(){
        var target = $(this).offset().top; //ドキュメントの左上の起点と、指定要素の左上の距離を取得
        var scroll = $(window).scrollTop(); //ブラウザの画面をスクロールした時の位置（スクロール量）を取得
        var height = $(window).height();
        
        var point = target - height;

        if (scroll > point  && scroll < (point + $(this).height() + height)) {
            $(this).addClass('active');
            }else{
            $(this).removeClass('active');
            }
        });

        });

// ================ ハンバーガーメニュー ================ //
$(function(){
    $('.js-btn').on('click', function(){
        $('.humburger-menu, .btn-line').toggleClass('active');
    })
});