// //=================================
// // variable
// //=================================

// const breakpoint = 769;

// //=================================
// // common
// //=================================

// // // フォント読み込み
// // window.WebFontConfig = {
// //   google: { families: ['Noto+Sans+JP:400'] },
// //   active: function() {
// //     sessionStorage.fonts = true;
// //   }
// // };
// // (function() {
// //   var wf = document.createElement('script');
// //   wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
// //   wf.type = 'text/javascript';
// //   wf.async = 'true';
// //   var s = document.getElementsByTagName('script')[0];
// //   s.parentNode.insertBefore(wf, s);
// // })();

// // スムーススクロール
// document.addEventListener('DOMContentLoaded', function() {
//   const is_offset = { pc: true, sp: true }; // l_headerの高さを取りたくない場合はfalse
//   const header_h = is_offset[size(breakpoint)] ? $('.l_header').height() : 0;

//   $('.js_anchor').click(function() {
//     const href = $(this).attr('href');
//     const target = $(href == '#' || href == '' ? 'html' : href);
//     const position = target.offset().top - header_h;
//     $('html, body').animate({ scrollTop: position }, 500, 'linear');
//     return false;
//   });
// });

// // スクロールすると出てくる「ページトップへ」ボタン
// $(function() {
//   var topBtn = $('.js_btn_p_top');
//   topBtn.hide();
//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//       topBtn.fadeIn();
//     } else {
//       topBtn.fadeOut();
//     }
//   });
//   topBtn.click(function() {
//     $('body,html').animate({
//       scrollTop: 0
//     }, 500);
//     return false;
//   });
// });

// // 要素がウィンドウに入ったら実行
// $(function() {
//   $('.js_window_in').on('inview', function(event, isInView){
//     if (isInView) {
//       $(this).removeClass('_hide');
//       $(this).addClass('_show');
//     } else {
//       $(this).addClass('_hide');
//       $(this).removeClass('_show');
//     }
//   });
// });

// // 要素がウィンドウに入ったら実行 1回のみ
// $(function() {
//   $('.js_window_in_one').on('inview', function(event, isInView){
//     if (isInView) {
//       $(this).addClass('_show');
//     }
//   });
// });

// img ドラッグ・右クリック禁止
$(function() {
  $('img').attr('onmousedown', 'return false');
  $('img').attr('onselectstart', 'return false');
  $('img').attr('oncontextmenu', 'return false');
});

// // 画面幅判定
// function size(bp) {
//   const breakpoint = isNaN(bp) ? 0 : bp;
//   const window_w = $(window).width();
//   if(window_w < breakpoint) {
//     return 'sp';
//   } else {
//     return 'pc';
//   }
// }