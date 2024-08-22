$(document).ready(function () {

  // 상단메뉴
  $(".depth2,.depth2_bg").hide();

  $(".gnb>li").mouseenter(function () {
    $(".depth2_bg").stop().fadeIn();
    $(this).children(".depth2").stop().fadeIn();
  });
  $(".gnb>li").mouseleave(function () {
    $(".depth2_bg").stop().fadeOut();
    $(this).children(".depth2").stop().fadeOut();
  });

  $(".ham").click(function () {
    $(".mobile_wrap").animate({
      left: "0"
    });
  });

  $(".mobile_close").click(function () {
    $(".mobile_wrap").animate({
      left: "-150%"
    });
  });

  $(".mobile_depth2").hide();

  $(".mobile_gnb > li").click(function () {
    $(this).children(".mobile_depth2").slideToggle();
    $(this).siblings().find(".mobile_depth2").slideUp();
  });

});