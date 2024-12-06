// .window x 클릭 시 애니메이션
$('.close_btn').click(function() {
    $(this).find('img').attr('src', 'img/heart.svg');
});

// section2 애니메이션 ------------------------------------------------
// 탭 클릭 시 탭메뉴 이동 애니메이션
$('.section2 .tap1, .section2 .btn1').click(function() {
    $('.section2 .tap_img').removeClass('active_2');
    $('.section2 .tap_img').removeClass('active_3');
    $('.section2 .tap_img').addClass('active_1');

    $('.section2 .btn2').removeClass('click');
    $('.section2 .btn3').removeClass('click');
    $('.section2 .btn1').addClass('click');
    $('.section2 div > .img_area > img').attr('src', 'img/소니미리보기1.png');
    $('.section2 .btn_box>button:first-child>a').attr('href', 'https://youngheom.github.io/sonykorea/index.html');
    $('.section2 .btn_box>button:first-child>a').text('Main page View');
})
$('.section2 .tap2, .section2 .btn2').click(function() {
    $('.section2 .tap_img').removeClass('active_1');
    $('.section2 .tap_img').removeClass('active_3');
    $('.section2 .tap_img').addClass('active_2');

    $('.section2 .btn1').removeClass('click');
    $('.section2 .btn3').removeClass('click');
    $('.section2 .btn2').addClass('click');
    $('.section2 div > .img_area > img').attr('src', 'img/소니미리보기2.png');
    $('.section2 .btn_box>button:first-child>a').attr('href', 'https://youngheom.github.io/sonykorea/sub-product.html');
    $('.section2 .btn_box>button:first-child>a').text('Product page View');
})
$('.section2 .tap3, .section2 .btn3').click(function() {
    $('.section2 .tap_img').removeClass('active_1');
    $('.section2 .tap_img').removeClass('active_2');
    $('.section2 .tap_img').addClass('active_3');

    $('.section2 .btn1').removeClass('click');
    $('.section2 .btn2').removeClass('click');
    $('.section2 .btn3').addClass('click');
    $('.section2 div > .img_area > img').attr('src', 'img/소니미리보기3.png');
    $('.section2 .btn_box>button:first-child>a').attr('href', 'https://youngheom.github.io/sonykorea/sub-support.html');
    $('.section2 .btn_box>button:first-child>a').text('Support page View');

})

// $('.close_btn').on('click', function () {
//     $('.close_btn > img').attr('src', 'img/heart.svg'); // 클릭된 요소에만 상태 추가
// });

$('.section2 .tap').on('click', function () {
    $('.section2 .tap').removeClass('click'); // 다른 요소에서 클릭 상태 제거
    $(this).addClass('click'); // 클릭된 요소에만 상태 추가
});



// section3 애니메이션 ------------------------------------------------
$('.section3 .tap1, .section3 .btn1').click(function() {
    $('.section3 .tap_img').removeClass('active_2');
    $('.section3 .tap_img').removeClass('active_3');
    $('.section3 .tap_img').addClass('active_1');

    $('.section3 .btn2').removeClass('click');
    $('.section3 .btn1').addClass('click');
    $('.section3 div > .img_area > img').attr('src', 'img/글입다미리보기1.png');
    $('.section3 .btn_box>button:first-child>a').attr('href', 'https://youngheom.github.io/wearingeul/index.html');
    $('.section3 .btn_box>button:first-child>a').text('Main page View');
})
$('.section3 .tap2, .section3 .btn2').click(function() {
    $('.section3 .tap_img').removeClass('active_1');
    $('.section3 .tap_img').removeClass('active_3');
    $('.section3 .tap_img').addClass('active_2');

    $('.section3 .btn1').removeClass('click');
    $('.section3 .btn2').addClass('click');
    $('.section3 div > .img_area > img').attr('src', 'img/글입다미리보기2.png');
    $('.section3 .btn_box>button:first-child>a').attr('href', 'https://youngheom.github.io/wearingeul/sub-product.html');
    $('.section3 .btn_box>button:first-child>a').text('Sub page View');
})
// x눌렀을 때 애니메이션

$('.section3 .tap').on('click', function () {
    $('.section3 .tap').removeClass('click'); // 다른 요소에서 클릭 상태 제거
    $(this).addClass('click'); // 클릭된 요소에만 상태 추가
});


$('.section3 .tap1, .section3 .btn1').on('click', function () {
    // $('.section3 .btn_box>button:first-child>a').attr('href', 'https://youngheom.github.io/wearingeul/index.html');
});
$('.section3 .tap2, .section3 .btn2').on('click', function () {
    // $('.section3 .btn_box>button:first-child>a').attr('href', 'https://youngheom.github.io/wearingeul/sub-product.html');
});








// 영상 재생 속도(영상 사용하면 쓰기)
// $(document).ready(function() {
//     $('video').get(0).playbackRate = 0.8; // 비디오 속도를 절반으로 설정
// });



// $(window).on('scroll', function () {
//     // 현재 스크롤 위치 가져오기
//     let scrollPosition = $(window).scrollTop();

//     // 스크롤 위치가 800일 때 동작 실행
//     if (scrollPosition >= 800) {
//         $('.object_box .txt_1').addClass('active'); // 예: 클래스 추가
//     } else {
//         $('.object_box .txt_1').removeClass('active'); // 조건 미충족 시 클래스 제거
//     }
// });

// $(window).scroll(function () {

//     if ($(this).scrollTop() > 2160) {
//         $('.object_box .txt_1').addClass('active');
//     } else {
//         $('.object_box .txt_1').removeClass('active');
//     }
// });

// $(window).on('scroll', function () {
//     let section3 = $('.section4')[0]; // .section3 선택
//     let position = section3.getBoundingClientRect(); // 화면에서 요소 위치 정보 가져오기

//     if (position.top <= window.innerHeight && position.bottom >= 1) {
//         $('.object_box .txt_1').addClass('active'); // 요소가 화면에 보이면 클래스 추가
//     } else {
//         $('.object_box .txt_1').removeClass('active'); // 요소가 화면에서 벗어나면 클래스 제거
//     }
// });






// 섹션 별 스크롤 위치에 따라 'porfolio'텍스트 변화 애니메이션
// $(window).scroll(function () {

//     if ($(this).scrollTop() > 0) {
//         $('.object_box .txt_1').text('Portfolio');
//     }
// });
// $(window).on('scroll', function() {
//     let scrollTop = $(window).scrollTop(); // 현재 스크롤 위치
//     let section2Top = $('.section2').offset().top - 8; // .section4의 상단 위치
//     let section2Height = $('.section2').outerHeight(); // .section4의 높이
//     let windowHeight = $(window).height(); // 화면 높이

//     // .section2가 화면에 전부 보일 때
//     if (scrollTop + windowHeight >= section2Top + section2Height && scrollTop < section4Top + section4Height) {
//         $('.object_box .txt_1').text('WEB REDESIGN PROJECT'); // 클래스 추가
//     }
// });

// $(window).on('scroll', function() {
//     let scrollTop = $(window).scrollTop(); // 현재 스크롤 위치
//     let section3Top = $('.section3').offset().top - 8; // .section4의 상단 위치
//     let section3Height = $('.section3').outerHeight() + 8; // .section4의 높이
//     let windowHeight = $(window).height(); // 화면 높이

//     // .section4가 화면에 전부 보일 때
//     if (scrollTop + windowHeight >= section3Top + section3Height && scrollTop < section4Top + section4Height) {
//         $('.object_box .txt_1').addClass('active'); // 클래스 추가
//         $('.object_box .txt_1').text('WEB REDESIGN PROJECT'); // 클래스 추가
//     } else {
//         $('.object_box .txt_1').removeClass('active'); // 클래스 제거
//     }
// });

// $(window).on('scroll', function() {
//     let scrollTop = $(window).scrollTop();
//     let section4Top = $('.section4').offset().top - 8; 
//     let section4Height = $('.section4').outerHeight();
//     let windowHeight = $(window).height(); // 화면 높이

//     if (scrollTop + windowHeight >= section4Top + section4Height && scrollTop < section4Top + section4Height) {
//         $('.object_box .txt_1').text('APP REDESIGN PROJECT'); // 클래스 추가
//     }
// });

// $(window).on('scroll', function() {
//     let scrollTop = $(window).scrollTop();
//     let section5Top = $('.section5').offset().top; 
//     let section5Height = $('.section5').outerHeight();
//     let windowHeight = $(window).height(); // 화면 높이

//     if (scrollTop + windowHeight >= section5Top + section5Height && scrollTop < section4Top + section4Height) {
//         $('.object_box .txt_1').text('APP REDESIGN PROJECT'); // 클래스 추가
//     }
// });
