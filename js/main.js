
$(document).ready(function () {
    $('.slider_wrapper').slick({
        arrows:true,
        infinity:true,
        variableWidth: true,
    });
});

$(document).ready(function () {
    var $list = $(".wrapper .mix").hide(),
        $content;

    $(".example").on("click", function () {
        var $this = $(this);
        $this.addClass("onfocus").siblings().removeClass("onfocus");
        $content = $list.filter("." + this.id).hide();
        $content.slice(0, 9).show(0);

        $list.not($content).hide(0);
    })
        .filter(".onfocus")
        .click();

    $('.example').click(function () {
        window.scrollBy(0, -9999);
    });
});

$(function () {
    $('.story_card').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 100);
    })
    $('.story_card').click(function (e) {
        $('.wrapper').hide();
        e.preventDefault();
        $('.story_work_card').fadeToggle('slow');
        e.preventDefault();
    });
    $(".example").on("click", function () {
        $(".story_work_card").hide();
        $(".disable").hide();
        $(".wrapper").show();
    });
});

$(function () {
    $('.story_card_portfolio').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 100);
    })
    $('.lovestory_card').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 100);
    })
    $('.business_card').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 100);
    })
    
});

$(function () {
    $('.individual').click(function (e) {
        $('.portfolio').hide();
        e.preventDefault();
        $('.individual_wrapper').fadeToggle('slow');
        e.preventDefault();
    })
    $('.individual_card').click(function (e) {
        $('.individual_wrapper').hide();
        e.preventDefault();
        $('.story_work_card').fadeToggle('slow');
        e.preventDefault();
    })
    // ------------------------
    $('.lovestory').click(function (e) {
        $('.portfolio').hide();
        e.preventDefault();
        $('.lovestory_wrapper').fadeToggle('slow');
        e.preventDefault();
    })
    $('.lovestory_card').click(function (e) {
        $('.lovestory_wrapper').hide();
        e.preventDefault();
        $('.story_work_card').fadeToggle('slow');
        e.preventDefault();
    })
    // ----------------------------
    $('.family').click(function (e) {
        $('.portfolio').hide();
        e.preventDefault();
        $('.family_wrapper').fadeToggle('slow');
        e.preventDefault();
    })
    $('.family_card').click(function (e) {
        $('.family_wrapper').hide();
        e.preventDefault();
        $('.story_work_card').fadeToggle('slow');
        e.preventDefault();
    })
    // -----------------------------
    $('.prag').click(function (e) {
        $('.portfolio').hide();
        e.preventDefault();
        $('.prag_wrapper').fadeToggle('slow');
        e.preventDefault();
    })
    $('.prag_card').click(function (e) {
        $('.prag_wrapper').hide();
        e.preventDefault();
        $('.story_work_card').fadeToggle('slow');
        e.preventDefault();
    })
    // ----------------------------------
    $('.newYear').click(function (e) {
        $('.portfolio').hide();
        e.preventDefault();
        $('.newYear_wrapper').fadeToggle('slow');
        e.preventDefault();
    })
    $('.newYear_card').click(function (e) {
        $('.newYear_wrapper').hide();
        e.preventDefault();
        $('.story_work_card').fadeToggle('slow');
        e.preventDefault();
    })
    // ------------------------------------
    $('.projects').click(function (e) {
        $('.portfolio').hide();
        e.preventDefault();
        $('.projects_wrapper').fadeToggle('slow');
        e.preventDefault();
    })
    $('.projects_card').click(function (e) {
        $('.projects_wrapper').hide();
        e.preventDefault();
        $('.story_work_card').fadeToggle('slow');
        e.preventDefault();
    })
    // ----------------------------
    $('.food').click(function (e) {
        $('.business').hide();
        e.preventDefault();
        $('.food_wrapper').fadeToggle('slow');
        e.preventDefault();
    })
    $('.food_card').click(function (e) {
        $('.food_wrapper').hide();
        e.preventDefault();
        $('.story_work_card').fadeToggle('slow');
        e.preventDefault();
    })
    // -----------------------------------
    $('.catalog').click(function (e) {
        $('.business').hide();
        e.preventDefault();
        $('.catalog_wrapper').fadeToggle('slow');
        e.preventDefault();
    })
    $('.catalog_card').click(function (e) {
        $('.catalog_wrapper').hide();
        e.preventDefault();
        $('.story_work_card').fadeToggle('slow');
        e.preventDefault();
    })
    // -----------------------------------
    $('.recording').click(function (e) {
        $('.business').hide();
        e.preventDefault();
        $('.recording_wrapper').fadeToggle('slow');
        e.preventDefault();
    })
    $('.recording_card').click(function (e) {
        $('.recording_wrapper').hide();
        e.preventDefault();
        $('.story_work_card').fadeToggle('slow');
        e.preventDefault();
    })
    // -----------------------------------
    $('.fitnes').click(function (e) {
        $('.business').hide();
        e.preventDefault();
        $('.fitnes_wrapper').fadeToggle('slow');
        e.preventDefault();
    })
    $('.fitnes_card').click(function (e) {
        $('.fitnes_wrapper').hide();
        e.preventDefault();
        $('.story_work_card').fadeToggle('slow');
        e.preventDefault();
    })
});

$(function () {
    
   
});




