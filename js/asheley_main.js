$(function () {
    //고정 헤더
    //scroll 이벤트
    $(window).scroll(function () {
        //스크롤의 위치값을 체크해줄 변수 만들기
        var yPos = $(window).scrollTop();
        $(".logo").show();
//        console.log(yPos);
        if (yPos < 30) {
            $(".fixed_logo").css("display", "none");
            $("header ul li a").css("color", "#fff");
        } else {
            $(".fixed_logo").css("display", "block");
        }

        if (yPos >= 30) {
            $(".fixed_logo").stop().animate({
                "top": "10px"
            }, 500);
            
        } else {
            $(".fixed_logo").stop().animate({
                "top": "-50px"
            }, 500)
        }

        if (yPos >= 30) {
            $(".logo").hide();
            $("header a").css("color", "#476500");
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
        
//        시간차 페이지
        
        if (yPos < 1400 || yPos > 1700) {
          $("#txt1").fadeOut(700);
        } else{
            $("#txt1").fadeIn(700);
        }

        if (yPos > 1600) {
          $("#txt2").fadeOut(600);
        } else{
           $("#txt2").fadeIn(1000);
        }
        
        if (yPos < 1600 || yPos > 1850) {
          $("#txt3").fadeOut(500);
        } else{
           $("#txt3").fadeIn(1000);
        }
        
        if (yPos < 1500 || yPos > 1750) {
          $("#arrow1").fadeOut(700);
        } else{
           $("#arrow1").fadeIn(1000);
        }
        
        if (yPos < 800 || yPos > 1500) {
          $("#arrow2").fadeOut(1000);
        } else{
           $("#arrow2").fadeIn(1000);
        }
        
        if (yPos < 1500 || yPos > 1700) {
          $("#arrow3").fadeOut(1000);
        } else{
           $("#arrow3").fadeIn(1000);
        }

//        스크롤 이벤트 끝
    });

    $('.bslider').bxSlider({
    slideWidth: 300,
    maxSlides: 6,
    moveSlides:1,
    slideMargin: 20,
    auto: true,
    autoControls: true
  });

    //new 슬라이드 배너

    var obj = [$(".desert>li:eq(0)"), $(".desert>li:eq(1)"), $(".desert>li:eq(2)"),
$(".desert>li:eq(3)"), $(".desert>li:eq(4)")]

    var posX = [-300, 110, 395, 680, 1100];

    var scale = [0.7, 0.9, 1, 0.9, 0.7];

    var zPos = [5, 10, 100, 10, 5];

    var flag = 0;
    function init() {

        if (flag != 0) {
            zPos = [5, 10, 100, 10, 5];
        } else {
            zPos = [5, 10, 100, 10, 5];
        }


        for (i = 0; i < 5; i++) {
            obj[i].animate({
                "left": posX[i] + "px"
            }, 500)


            obj[i].css({
                "transform": "scale(" + scale[i] + ")",
                "z-index": zPos[i],
                "transition": "1s"
            })
        }
    }

    init();

    $(".nextBtn").click(function () {
        var r_obj = obj.pop();
        obj.unshift(r_obj);
        flag = 1;
        init();
    })

    $(".prevBtn").click(function () {
        var l_obj = obj.shift();
        obj.push(l_obj);
        flag = 0;
        init();
    })

    // new 슬라이드 배너 끝
   
    //시간차 메인 페이지

    //scroll이벤트
    $(window).scroll(function(){
       //스크롤위치값
        var scrollT=$(window).scrollTop();
//        console.log(scrollT);
        $("#parallax-1").css("top",(-scrollT*0.5)+"px");
        $("#parallax_txt").css("bottom",(-scrollT*0.5)+"px");
        
   }); 
        
    $("#familySite>a").click(function(){
        $("#familySite li").slideToggle(500);
    })
    
//문서 시작 함수 종료
});
