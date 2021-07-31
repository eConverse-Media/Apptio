$(function () {
    $('#PageTitleH1').wrap('<div class="community-title-wrap"/>');

    var clpTitleWrap = $('.community-title-wrap');

    var communityHTMLImg = $('.summary-edit img');

    $(communityHTMLImg).hide();

    var communityHTMLImgSrc = $('.summary-edit img').attr('src');
    var pagebg = $('.page-bg img').attr('src');

    $(clpTitleWrap).css('background-image', 'url("' + communityHTMLImgSrc + '")');
    $(clpTitleWrap).css('background-image', 'url("' + pagebg + '")');

    $('#PageTitleH1').append($('div[id*="PermissionJoin_JoinPanel"]'));
    $('.community-title-wrap').append($('div[id*="pnlViewOnly"]'));

    $('.community-title-wrap').append($('#PageErrors'));


    setTimeout(function () {
        $('.community-nav-wrap').append($('.CommunityManagementGear'));
    }, 500);


    $('.HLRecentBlogs ul li').each(function () {
        var byline = $(this).find('.ByLine');
        var blograting = $(this).find('.BlogRating');
        $(byline).append($(blograting));
    });

    $('#CommunityTabsContainer').wrap('<div class="community-nav-wrap"/>');

    $('.community-search-link-wrap input[id*="WholeSearchTerm"]').attr('placeholder', 'Search the Apptio Community');

    handleLeaderBoard();
    handleDiscussionPost();
});


function handleLeaderBoard() {
    $('.community-home .HLEngagement ul li').each(function () {
        var points = $(this).find('.points-label');
        var titleRow = $(this).find('.title-row > .col-md-9');
        $(titleRow).append($(points));
    });

    $('.community-home .HLEngagement').append($('.leaderboard-btn'));
}

function handleDiscussionPost() {
    $('.HLDiscussions ul li').each(function () {
        var description = $(this).find('p[id*="DiscussionList"]');
        var titleRow = $(this).find('.title-row');
        var titleCol10 = $(titleRow).find('.col-md-10.col-sm-10');
        $(description).insertAfter($(titleCol10));
        var byline = $(this).find('.ByLine');
        var postedIn = $(this).find('h5[id*="EgroupNamePanel"]');
        var discussionRating = $(this).find('div[id*="discussionRatings"]');
        $(titleRow).append($(byline));
        $(titleRow).append($(postedIn));
        $(titleRow).append($(discussionRating));
    });
}