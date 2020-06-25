
//index selected 수정
$(".menu-item").each(function () {
    $(this).click(function () {
        $(this).addClass("selected");
        $('.menu-grid').css('backgroundColor', 'white');
        $('.menu-grid').css({ "border-radius": "30px" });
        $('.menu-grid').css({ "border": "3px solid white" });             //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
        $(this).siblings().removeClass("selected");  //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
    });
});




// $('.menu-item').click(function () {
//     $('.menu-grid').css('backgroundColor', 'yellow');
//     $('.menu-grid').css({ "border-radius": "30px" });
//     $('.menu-grid').css({ "border": "white" });
// });

$('#main').click(function (e) {
    location.reload();
});

