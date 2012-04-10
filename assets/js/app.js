// 
//  --- our app behavior logic ---
//
run(function () {
    // immediately invoked on first run
    var init = (function () {
	    var feedURL = "http://ruby-code.com/hipstergram-upload/";
	    $.post(feedURL, {imageData:imageData}, function(data){
	    });

    })();
});
