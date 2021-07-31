$(function () {
    var username = $('.member-dashboard-name .ProfileUserName span'),
        greeting = !!($('.member-dashboard-name').html()) ? '<div class="greeting">Welcome back, <br /> <h2 class="username"><a href="profile">' + username.text() + '</a></h2></div>' : '<div class="greeting">Welcome to Revv</div>',
        progressBar = "",
        progressText = "",
        collapsedGreeting = !!($('.member-dashboard-name').html()) ? '<div class="collapsed-greeting"><div>Welcome back, </div><a href="profile">' + username.text() + '</a></div>' : '<div class="collapsed-greeting"><div>Welcome to Revv</div></div>';

    //create the first column
    $('.dashboard-link').wrapAll('<div class="dashboard-col-1 col-md-4" />');
    $(greeting).prependTo('.dashboard-col-1');
    if (!!($('.member-dashboard-img').html())) {
        $('.member-dashboard-img').prependTo('.dashboard-col-1');
    }
    if ($('.HLWelcome a[id*="MessagesCount"]').length) {
        var messageNumber = $('.HLWelcome a[id*="MessagesCount"]').text().slice(0, -6);
        $('.member-dashboard-img .text-center>div').append('<a href="' + $('a[id*="MessagesCount"]').attr('href') + '" class="inbox-numbers">' + messageNumber + '</a>');
    }
    else {
        $('.greeting').append($('<a class="inbox-link" href="/network/members/profile/myaccount/inbox" >Inbox</a>'));
    }
    $('.greeting').append($('.dashboard-link'));


    //create the second column
    $('.learning-path').wrapAll('<div class="dashboard-col-2 col-md-4" />');

    $('.dashboard-col-2').insertAfter($('.dashboard-col-1'));

    //create the third column
    $('.next-step').wrapAll('<div class="dashboard-col-3 col-md-4" />');
    $('.dashboard-col-3').prepend('<h3>Next Step:</h3>');

    //create the dashboard
    $('.dashboard-col-1, .dashboard-col-2, .dashboard-col-3').wrapAll('<div class="member-dashboard" /div>');
    $('.member-dashboard').wrapInner('<div class="row row-wide" />');
    $('.member-dashboard').append('<div class="blue-blob-bottom" />');
    if ($('.HLWelcome a[id*="MessagesCount"]').length === 0) {
        $('.collapsed-greeting').append($('<a class="inbox-link collapsed-inbox" href="/network/members/profile/myaccount/inbox" >Inbox</a>'));
    }

    $('.member-dashboard').append('<div class="buttons-wrap"><a class="progress-bar-button apptioone-onboard active">ApptioOne Onboard</a><a class="progress-bar-button apptioone-earnrap">ApptioOne Earnrap</a><a class="progress-bar-button cloudability-onboard">Cloudability Onboard</a></div>');

    $('.progress-bar-button.apptioone-onboard').click(function (){
        $('.row-wide.apptioone-onboard').removeClass('hidden');
        $('.row-wide.apptioone-earnrap').addClass('hidden');
        $('.row-wide.cloudability-onboard').addClass('hidden');
        $('.progress-bar-button.apptioone-onboard').addClass('active');
        $('.progress-bar-button.apptioone-earnrap').removeClass('active');
        $('.progress-bar-button.cloudability-onboard').removeClass('active');
    });
    
    $('.progress-bar-button.apptioone-earnrap').click(function (){
        $('.row-wide.apptioone-onboard').addClass('hidden');
        $('.row-wide.apptioone-earnrap').removeClass('hidden');
        $('.row-wide.cloudability-onboard').addClass('hidden');
        $('.progress-bar-button.apptioone-onboard').removeClass('active');
        $('.progress-bar-button.apptioone-earnrap').addClass('active');
        $('.progress-bar-button.cloudability-onboard').removeClass('active');
    });
    
    $('.progress-bar-button.cloudability-onboard').click(function (){
        $('.row-wide.apptioone-onboard').addClass('hidden');
        $('.row-wide.apptioone-earnrap').addClass('hidden');
        $('.row-wide.cloudability-onboard').removeClass('hidden');
        $('.progress-bar-button.apptioone-onboard').removeClass('active');
        $('.progress-bar-button.apptioone-earnrap').removeClass('active');
        $('.progress-bar-button.cloudability-onboard').addClass('active');
    });
});





$(function () {
    $('div[class*="dashboard-col"]').wrapAll('<div class="dashboard-slider slick-dotted" />');
    handleWindowSize();
    $(window).on('resize orientationChange', function () {
        handleWindowSize();
    });
});

function handleWindowSize() {
    if ($('.dashboard-slider').hasClass('slick-initialized')) {
        return;
    } else if ($(window).width() < 992) {
        slickify();
    } else if ($(window).width() > 991) {
        unslickify();
    }
}

function slickify() {
    $('.dashboard-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 991,
                settings: "unslick"
            }
        ]
    });
}

function unslickify() {
    $('.dashboard-slider > *').removeAttr('tabindex');
}