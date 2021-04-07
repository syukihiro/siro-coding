$(window).scroll(function(){
  var headerBox = $('.header').height();
  var scrolltop = $(window).scrollTop();

  if (scrolltop > headerBox) {
    $('.header').addClass('fixed');
  }
  else{
    $('.header').removeClass('fixed');
  }

  if (scrolltop > $("header").height()) {
    $('.header').addClass('transform');
    $('.humberguer-menu').addClass('backcolor');
  }
  else {
    $('.header').removeClass('transform');
    $('.humberguer-menu').removeClass('backcolor');
  }
});

$(function(){
  $(".menu").on('click', function() {
    $(this).toggleClass('active');
    return false;
  })
})