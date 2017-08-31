$(function () {
    //각 section의 위치값을 배열에 저장하기
    var section = $("#contents>.parallax>div");
    var sectionInfo = [];
    //각 섹션안에 들어있는 오브젝트의 위치값
    var objectInfo = [];
    section.each(function (i) {
        var tg = $(this);
        sectionInfo.push(tg.offset().top);
        //오브젝트의 위치를 저장할 배열을 2차원으로 만들기
        objectInfo.push([]);
        //각각의 섹션에 있는 object 저장할 변수 만들기
        var child = tg.children();
        child.each(function (j) {
                var t = $(this);
                objectInfo[i][j] = t.position().top;
            })
            //console.log(objectInfo);

        //위로가는 버튼
        var upBtn = tg.find(">.arrow>a:eq(0)");
        //아래로가는 버튼
        var downBtn = tg.find(">.arrow>a:eq(1)");
        //위로가는 버튼을 클릭하면
        upBtn.click(function (e) {
            e.preventDefault();
            if (i == 0) {
                return false;
            } else {
                var tt = sectionInfo[i - 1];
                $("html,body").stop().animate({
                    scrollTop: tt
                }, 1000)
            }
        })
        downBtn.click(function (e) {
            //jquery # 링크 기능을 막아줄때
            e.preventDefault();
            if (i == 2) {
                //javascript # 링크기능을 막아줄때
                return false;
            } else {
                var tt = sectionInfo[i + 1];
                $("html,body").stop().animate({
                    scrollTop: tt
                }, 1000)
            }
        })
    })
    section.css("position", "fixed");
    //scroll이벤트
    $(window).scroll(function () {
        //스크롤의 위치를 저장할 변수 만들기
        var sct = $(window).scrollTop();
        console.log(sct);
        section.each(function (i) {
            var tg = $(this);
            //각각의 섹션의 위치값을 계산할 변수만들기
            var tt = sectionInfo[i] - sct;
            //스크롤의 위치값이 해상 섹션위치보다 커지면, 해당 섹션의 속도를 반으로 줄여서 아래의 섹션이 더 빨리 올라오도록
            if (sct > sectionInfo[i]) tt *= 0.5;
            tg.css("top", tt);

            //각 섹션의 자식 요소들이 움직일 위치값
            var child = tg.children();
            //x가 a~b로 움직일때
            //y가 c~d로 움직인다.
            //x가 이동한 위치에 따른 y가 이동할 위치값 계산하기 일차함수
            // y가 이동할 위치는 = (d-c)/(b-a)*(x의위치-a)+c
            child.each(function (j) {
                var t = $(this);
                //a,b start, end로
                var start = sectionInfo[i];
                var end = sectionInfo[i + 1];
                //c,d min, max
                var min = objectInfo[i][j];
                var max = objectInfo[i][j] + j * 500 ;
                var objT = (sct - start) * (end - start) / (max - min) + min;
                t.css("top", objT);
            })
        })
    })

})