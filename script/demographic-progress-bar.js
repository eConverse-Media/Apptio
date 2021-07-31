$(function(){

    handleDemoProgress();

});

function handleDemoProgress() {

    // Wrapping all demographic sections inside rows
    $('.apptioone-onboard').wrapAll('<div class="row row-wide clearfix apptioone-onboard "/>');
    
    // Wrapping all demographic sections inside rows
    $('.apptioone-earnrap').wrapAll('<div class="row row-wide clearfix apptioone-earnrap hidden"/>');
        
    // Wrapping all demographic sections inside rows
    $('.cloudability-onboard').wrapAll('<div class="row row-wide clearfix cloudability-onboard hidden"/>');

    $('.apptioone-onboard.row-wide, .apptioone-earnrap.row-wide, .cloudability-onboard.row-wide').wrapAll('<div class="learning-path"/>');
    

    // Capturing Currently Working On Status
    var onBoardWorkingOnStatus = $('.apptioone-onboard.row-wide > div:first-of-type h2').text();

    var onBoardWorkingOnStatusTrimmed = $.trim(onBoardWorkingOnStatus);

    // console.log(onBoardWorkingOnStatusTrimmed);

    var colonIndexOnBoardWorkingOnStatusTrimmed = onBoardWorkingOnStatusTrimmed.indexOf(':');

    var workingOnTitle = onBoardWorkingOnStatusTrimmed.substring(0, colonIndexOnBoardWorkingOnStatusTrimmed);

    // Create Onboard Progress Bar

    $('.apptioone-onboard.row-wide').prepend('<div class="progress-bar-wrap"><div class="apptioone-onboard-progress-bar"/></div>');

    $('.apptioone-onboard.row-wide').prepend('<p><strong>' + workingOnTitle +'</strong></p>');

    $('.apptioone-onboard.row-wide').prepend('<h6>Currently working on:</h6>');

    var apptioOneOnBoardCounter = 0;
    $('.apptioone-onboard:not(.row-wide) ul li:first-of-type').each(function(){
        apptioOneOnBoardCounter++;
        if(apptioOneOnBoardCounter === 1) {
            $('.apptioone-onboard-progress-bar').css('width', '25%');
        }
        
        if(apptioOneOnBoardCounter === 2) {
            $('.apptioone-onboard-progress-bar').css('width', '50%');
        }
                
        if(apptioOneOnBoardCounter === 3) {
            $('.apptioone-onboard-progress-bar').css('width', '75%');
        }
                        
        if(apptioOneOnBoardCounter === 4) {
            $('.apptioone-onboard-progress-bar').css('width', '100%');
        }
        
    });
    // Capturing Currently Working On Status
    var onBoardWorkingOnStatus = $('.apptioone-earnrap.row-wide > div:first-of-type h2').text();

    var onBoardWorkingOnStatusTrimmed = $.trim(onBoardWorkingOnStatus);

    // console.log(onBoardWorkingOnStatusTrimmed);

    var colonIndexOnBoardWorkingOnStatusTrimmed = onBoardWorkingOnStatusTrimmed.indexOf(':');

    var workingOnTitle = onBoardWorkingOnStatusTrimmed.substring(0, colonIndexOnBoardWorkingOnStatusTrimmed);

    // Create Onboard Progress Bar

    $('.apptioone-earnrap.row-wide').prepend('<div class="progress-bar-wrap"><div class="apptioone-earnrap-progress-bar"/></div>');

    $('.apptioone-earnrap.row-wide').prepend('<p><strong>' + workingOnTitle +'</strong></p>');

    $('.apptioone-earnrap.row-wide').prepend('<h6>Currently working on:</h6>');
    
    var apptioOneEarnCounter = 0;
    $('.apptioone-earnrap:not(.row-wide) ul:not(.dropdown-menu) li:first-of-type').each(function(){
        apptioOneEarnCounter++;
        if(apptioOneEarnCounter === 1) {
            $('.apptioone-earnrap-progress-bar').css('width', '25%');
        }
        
        if(apptioOneEarnCounter === 2) {
            $('.apptioone-earnrap-progress-bar').css('width', '50%');
        }
                
        if(apptioOneEarnCounter === 3) {
            $('.apptioone-earnrap-progress-bar').css('width', '75%');
        }
                        
        if(apptioOneEarnCounter === 4) {
            $('.apptioone-earnrap-progress-bar').css('width', '100%');
        }
        
    });
        // Capturing Currently Working On Status
        var onBoardWorkingOnStatus = $('.cloudability-onboard.row-wide > div:first-of-type h2').text();

        var onBoardWorkingOnStatusTrimmed = $.trim(onBoardWorkingOnStatus);
    
        // console.log(onBoardWorkingOnStatusTrimmed);
    
        var colonIndexOnBoardWorkingOnStatusTrimmed = onBoardWorkingOnStatusTrimmed.indexOf(':');
    
        var workingOnTitle = onBoardWorkingOnStatusTrimmed.substring(0, colonIndexOnBoardWorkingOnStatusTrimmed);
    
        // Create Onboard Progress Bar
    
        $('.cloudability-onboard.row-wide').prepend('<div class="progress-bar-wrap"><div class="cloudability-onboard-progress-bar"/></div>');
    
        $('.cloudability-onboard.row-wide').prepend('<p><strong>' + workingOnTitle +'</strong></p>');

        $('.cloudability-onboard.row-wide').prepend('<h6>Currently working on:</h6>');

        var cloudabilityOnboard = 0;
    $('.cloudability-onboard:not(.row-wide) ul li:first-of-type').each(function(){
        cloudabilityOnboard++;
        if(cloudabilityOnboard === 1) {
            $('.cloudability-onboard-progress-bar').css('width', '16.6666666667%');
        }
        
        if(cloudabilityOnboard === 2) {
            $('.cloudability-onboard-progress-bar').css('width', '33.3333333334%');
        }
                
        if(cloudabilityOnboard === 3) {
            $('.cloudability-onboard-progress-bar').css('width', '50.0000000001%');
        }
                        
        if(cloudabilityOnboard === 4) {
            $('.cloudability-onboard-progress-bar').css('width', '66.6666666668%');
        }
                                
        if(cloudabilityOnboard === 5) {
            $('.cloudability-onboard-progress-bar').css('width', '83.3333333335%');
        }
                                        
        if(cloudabilityOnboard === 6) {
            $('.cloudability-onboard-progress-bar').css('width', '100%');
        }
        
    });
}