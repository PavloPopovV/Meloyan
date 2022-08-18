
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
        $(".lovestory_wrapper").hide();
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
    $('.lovestory').click(function (e) {
        $('.portfolio').hide();
        e.preventDefault();
        $('.lovestory_wrapper').fadeToggle('slow');
        e.preventDefault();
    })
});

$(function () {
    $('.lovestory_card').click(function (e) {
        $('.lovestory_wrapper').hide();
        e.preventDefault();
        $('.story_work_card').fadeToggle('slow');
        e.preventDefault();
    })
});





