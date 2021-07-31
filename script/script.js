function handleHeaderSearch() {
    $('#searchColumn').insertAfter('#MPheader > .row:first-child > .col-md-12 > div:first-of-type');
}

function handleQuickLinks() {
    $('.quick-link').each(function () {
        var self = $(this);
        if ($(self).hasClass('event-link')) {
            $(self).find('.HtmlContent em').appendTo('.quick-links.event-links .HtmlContent');
        } else {
            $(self).find('.HtmlContent em').appendTo('.quick-links:not(.event-links) .HtmlContent');
        }
    });
}

function handleDiscussionPosts() {
    $('.tabs .HLDiscussions ul li').each(function () {
        var byline = $(this).find('.ByLine');
        var postedIn = $(this).find('h5[id*="DiscussionList"]');
        var description = $(this).find('p[id*="DiscussionList"]');
        var col10 = $(this).find('.title-row > .col-sm-10.col-md-10');
        $(col10).append($(description));
        $(col10).append($(byline));
        $(col10).append($(postedIn));
    });

    $('.tabs .SearchResults.HLLandingControl ul li').each(function () {
        var byline = $(this).find('.ByLine');
        var postedIn = $(this).find('h5');
        var description = $(this).find('div[id*="pnlDescription"]');
        $(description).append($(byline));
        $(description).append($(postedIn));
    });
}

function handlePoll() {
    $(document).click(function (e) {
        var target = e.target;

        if ($(target).is('input') &&
            !!($(target).closest('.col-md-4 .ContentItemReact').html())) {
            var parent = $(target).closest('.radio');
            var siblings = $(parent).closest('.form-group').find('.radio');
            $(siblings).removeClass('is-active');
            $(parent).addClass('is-active');
        }

    });
}

function handleLeaderBoard() {
    $('.home .HLEngagement ul li').each(function () {
        var points = $(this).find('.points-label');
        var titleRow = $(this).find('.title-row > .col-md-9');
        $(titleRow).append($(points));
    });

    $('.home .HLEngagement').append($('.leaderboard-btn'));
}

function handleLogoutPanel() {
    $('.login-wrapper').append('<div class="white-bottom-blob" />');
}


function loggedIn() {
    if ($('.HLWelcome .imgButton').length) {
        $('body').addClass('logged-in');
    }
}

function handleContentTabs() {

    // Add class tabbed-content to the closest section to content items with the class tabs
    $('.tabs').closest('div[class*="section"]').addClass('tabbed-content');

    // Initialize and set counter that will be used to set unique id's and hrefs contecting tab nav items to tab content items
    var counter = 1;

    // Iterate over each HL section that has tabs to prepend bootstrap nav-tab markup
    $('.tabbed-content').each(function () {

        // Grab direct parent of tabs content items and add bootstrap tab markup to parent div
        var firstDiv = $('.tabs').parent();

        if (!$(firstDiv).hasClass('has-tab-nav')) {
            $(firstDiv).prepend('<div class="row-groups"><div class="container"><div class="row"><div class="col-md-12"><ul class="nav nav-tabs" role="tablist"></ul></div></div><div class="row"><div class="col-md-12"><div class="tab-content"></div></div></div></div></div>').addClass('has-tab-nav');;
        }


        var tabContent = $(this).find('.tab-content');

        var tabs = $(this).find('.tabs');

        // Iterate over each content item with the class tabs 
        $(tabs).each(function () {
            // Wrap tabs content item with tab markup and generated tab + counter id
            $(this).wrap('<div id="tab-' + counter + '" class="tab-pane" aria-labelledby="tab-' + counter + '" role="tabpanel" ></div>');

            // Add the tab content item with tab markup to tab-content div found in tabbed-content div
            $(tabContent).append($('#tab-' + counter));

            // travel up the dom from tabs content to closest tabbed-content div and then find the nav-tabs markup within tabbed content
            var navTabs = $(this).closest('.tabbed-content').find('.nav-tabs');
            // Add markup for nav tabs for each tabs content item with href matching the tab + counter id to allow tabs to work with tabs content
            $(navTabs).append('<li role="presentation"><a href="#tab-' + counter + '" aria-controls="all" role="tab" data-toggle="tab">FIRST TAB</a></li>');

            // Get tab title without additional add button text
            var tabTitle = $(this).find('.heading h2:first-of-type:not(a[id*="Add"]),  > h2:not(a[id*="Add"]), h2[id*="TitleText"]').clone().children().remove().end().text();
            // Replace FIRST TAB placeholder text with tab content item title
            $(this).find($('.nav-tabs a[href="#tab-' + counter + '"]').text(tabTitle));


            // Increase counter by 1 for next iteration of tabs content item id and href
            counter++;


        });

    });

    // Set first child of any tabbed content to active state to display on page load
    $('.tabbed-content .nav-tabs > li:first-of-type').addClass('active');

    $('.tabbed-content .tab-content > div.tab-pane:first-of-type').addClass('active');



}

function handleCommunityQuickLinks() {
    $('.summary-edit a:not(.user-content-hashtag)').each(function () {
        $(this).unwrap();
    });

    $('.quick-links .HtmlContent').append($('.summary-edit a:not(.user-content-hashtag)'));
}

function handleInteriorTitle() {
    $('.interior h1#PageTitleH1').wrap('<div class="interior-title-wrap"/>');
}

function handleHomePageSearch() {
    $('.home .home-search input.form-control').attr('placeholder', 'Search the Apptio Community');
}

function handleSidebarWidget() {
    $('.widget-sidebar-inverse ul li, .widget-sidebar-white ul li').each(function() {
        var timeLine = $(this).find('.ByLine');
        var timelineTrim = $(timeLine).text().trim().substring(2, $(timeLine).text().length);

        $(timeLine).text(timelineTrim);

    });
}


$(function () {
    handleHeaderSearch();
    handleHomePageSearch();
    handleQuickLinks();
    handleDiscussionPosts();
    handlePoll();
    handleLeaderBoard();
    handleLogoutPanel();
    loggedIn();
    // Call handleContent Tabs Function
    handleContentTabs();
    handleCommunityQuickLinks();
    handleInteriorTitle();
    handleSidebarWidget();

});