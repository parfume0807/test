$(function(){

//type 슬라이드 배너 
    $('#type').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    //    type 슬라이드 배너 
    //보여질 배너를 저장할 변수 만들기
    var list = $("#type");
    //보여질 배너의 갯수를 체크해줄 변수 만들기
    var show_num = 6;
    //그림의 갯수를 체크해줄 변수 만들기
    var num = 0;
    //size() li의 갯수 알아오기
    var total = $(list).children("div").size();
//    console.log(total);
    //그림 한장의 사이즈 얻어오기
    var li_width = $(list).children("div:first").outerWidth();
//    console.log(li_width);
    //list를 복사하기
    var obj = list.children("div").clone();
    list.append(obj);
    //type 슬라이드 배너 끝

});