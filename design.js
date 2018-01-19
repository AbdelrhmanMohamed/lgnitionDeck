$(function () {

  const circleColor = $(".circle-color"),
    circle1 = $("#play1"),
    circle2 = $("#circle1"),
    circle3 = $("#circle2"),
    circle4 = $("#circle3"),
    circle5 = $("#circle4"),
    tdefualt = $(".defualt"),
    team1 = $(".team1"),
    team2 = $(".team2"),
    team3 = $(".team3"),
    team4 = $(".team4"),
    team5 = $(".team5"),
    mybutton = $("button");
    departments =$(".departments");

  circleColor.hover(
    function () {
      $(this).css("animation-play-state", "paused");
    }, function () {
      $(this).css("animation-play-state", "running");
    }
  );

  circle1.click(function () {
   departments.children().slideUp(500);
    team1.slideDown("slow");
  });

  circle2.click(function(){
    departments.children().slideUp(500);
    team2.slideDown("slow");
  });

  circle3.click(function(){
    departments.children().slideUp(500);
    team3.slideDown("slow");
  });
  circle4.click(function(){
    departments.children().slideUp(500);
    team4.slideDown("slow");
  });
  circle5.click(function(){
    departments.children().slideUp(500);
    team5.slideDown("slow");
  });


  mybutton.click(function () {

    $(this).addClass("pbutton");

    mybutton.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function (e) {
        mybutton.removeClass('pbutton');
      });


  });



});