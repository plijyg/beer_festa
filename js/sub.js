$(document).ready(function () {

    const mb = new Swiper(".mc_info", {

        speed: 1000,
        navigation:
        {
            nextEl: ".swiper-button-next", //다음버튼
            prevEl: ".swiper-button-prev", //이전버튼
        },
        /* pagination: {
            el: ".swiper-pagination",
            type: "fraction", //버튼 종류 설정 'bullets', 'fraction', etc
            clickable: true, //버튼 클릭 여부
        }, */
    });
});