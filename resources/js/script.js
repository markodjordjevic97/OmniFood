$(document).ready(function () {

/*------------------------------------------*/
/* STICKY NAVIGATION */
/*------------------------------------------*/

    $('.jq-sticky').waypoint(function (direction) {
        if (direction == "down")
            $('nav').addClass('sticky')
        else
            $('nav').removeClass('sticky')
    }, {
        offset: '105px;'
    })
    
/*------------------------------------------*/
/* SCROLL EFFECTS:) */
/*------------------------------------------*/
    
    $('.logo-black').click(function () {
        $('html').animate({
            scrollTop: $('header').offset().top
        }, 1000)

        $('.scrooll-singUP').css('font-weight', '300')
        $('.scrooll-start').css('font-weight', '300')
        $('.scroll-works').css('font-weight', '300')
        $('.scroll-city').css('font-weight', '300')
    })

    $('.scrooll-start').click(function () {
        $('html').animate({
            scrollTop: $('.jq-sticky').offset().top
        }, 500)
        $('.scrooll-singUP').css('font-weight', '300')
        $('.scrooll-start').css('font-weight', 'bold')
        $('.scroll-works').css('font-weight', '300')
        $('.scroll-city').css('font-weight', '300')
    })

    $('.scroll-works').click(function () {
        $('html').animate({
            scrollTop: $('.js-works').offset().top
        }, 1000)

        $('.scrooll-singUP').css('font-weight', '300')
        $('.scrooll-start').css('font-weight', '300')
        $('.scroll-works').css('font-weight', 'bold')
        $('.scroll-city').css('font-weight', '300')
    })

    $('.scroll-city').click(function () {
        $('html').animate({
            scrollTop: $('.js-city').offset().top
        }, 1000)

        $('.scrooll-singUP').css('font-weight', '300')
        $('.scrooll-start').css('font-weight', '300')
        $('.scroll-works').css('font-weight', '300')
        $('.scroll-city').css('font-weight', 'bold')
    })

    $('.scrooll-singUP').click(function () {
        $('html').animate({
            scrollTop: $('.sc-singUP').offset().top
        }, 1000)

        $('.scrooll-singUP').css('font-weight', 'bold')
        $('.scrooll-start').css('font-weight', '300')
        $('.scroll-works').css('font-weight', '300')
        $('.scroll-city').css('font-weight', '300')
    })

/*------------------------------------------*/
/* ANIMATIONS */
/*------------------------------------------*/

    $('.animat-css-1').waypoint(function (direction) {
        $('.animat-css-1').addClass('animated zoomIn')
    },{
        offset: '60%;'
    })

    $('.animat-css-2').waypoint(function (direction) {
        $('.animat-css-2').addClass('animated slideInUp')
    }, {
        offset: '60%;'
    })

    $('.animat-css-3').waypoint(function (direction) {
        $('.animat-css-3').addClass('animated pulse')
    }, {
        offset: '55%;'
    })

    $('.animat-css-4').waypoint(function (direction) {
        $('.animat-css-4').addClass('animated pulse')
    }, {
        offset: '50%;'
    })
/*------------------------------------------*/
/* MOBILE NAVIGATION */
/*------------------------------------------*/
    $('.mob-icon').click(function(){
        let nav = $('.js-nav')
        let icon = $('.mob-icon i')
        nav.slideToggle(400)
        
        if(icon.hasClass('ion-navicon-round')){
            icon.removeClass('ion-navicon-round')
            icon.addClass('ion-close-round')
        }
        else{
            icon.removeClass('ion-close-round')
             icon.addClass('ion-navicon-round')
            
        }
            
    })
})
