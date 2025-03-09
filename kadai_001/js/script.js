$(function () {

  $('.menu1').hover(
    function() {
    $(this).stop().animate({ opacity: 0.5 }, 300); // マウスが乗ったとき
    },
    function() {
    $(this).stop().animate({ opacity: 1.0 }, 300); // マウスが離れたとき
    }
    );

  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade:true,
    speed:1000
  });

  $(document).ready(function() {
    var offset = 100; // 100pxを境に表示・非表示を切り替え
    
    $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
    $('#back').fadeIn();
    } else {
    $('#back').fadeOut();
    }
    });
    
    $('#back').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });

  
  // ページ内リンクをクリックしたときの処理
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault(); // デフォルトのリンク動作を無効化
  
    // クリックされたリンクのhref属性の値を取得
    var target = $(this).attr('href');
  
    // スクロール先の要素を決定
    var scrollTo = (target === '#') ? $('html') : $(target);
  
    // スクロール先の位置を取得
    var position = scrollTo.offset().top;
  
    // アニメーションでスクロール
    $('html, body').animate({
    scrollTop: position
    }, 700); // 700ミリ秒でスクロール
    });
  });

  $(window).on('scroll', function() {
    $('.about, .works').each(function() {
    var sectionTop = $(this).offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    
    if (scrollTop + windowHeight > sectionTop) {
    $(this).addClass('fade-in');
    }
    });
  });



});


