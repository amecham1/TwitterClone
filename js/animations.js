$(document).ready(function() {
    // Tweet input box animations

    jQuery("time.timeago").timeago();

    var userName = "Andrew";
    var profilePic = "alagoon";
    var tweetText;
    $('#tweet-controls').hide();

    $(".tweet-compose").click(function() {
        $("#tweet-controls").show(function() {
            $(".tweet-compose").animate({
                height: "5em"
            });
        });
    });

    $(".tweet-compose").blur(function() {
        $("#tweet-controls").hide(function() {
            $(".tweet-compose").animate({
                height: "2.5em"
            });
        });
    });

    $(".tweet-compose").on("keyup", counter);
// steps 1 through 4;
  var len = $(this).val().length;
  tweetText = $(".tweet-compose").val();
    function counter() {
        var newCount = $('.tweet-compose').val().length;
        console.log(newCount);
        $("#char-count").text(140 - newCount);
        if (newCount >= 130) {
            $("#char-count").css("color", "red");
        }
        if (newCount < 130) {
            $("#char-count").css("color", "gray");
        }
        if (newCount > 140) {
          $("#tweet-submit").removeClass("button").addClass("button:disabled");
        }
        if (newCount <= 140) {
          $("#tweet-submit").removeClass("button:disabled").addClass("button");
        }
    }

// tweet transfer
  $('#tweet-submit').on('click', function() {
    newTweet = $('<div class="tweet"><div class="content"><img class="avatar" src="img/' + profilePic + '.jpg" /><strong class="fullname">' + userName + '</strong><span class="username"> @' + userName + '</span><span class="upperTime"><time class="timeago"> &sdot; ' + jQuery.timeago(new Date()) + '</time></span><p class="tweet-text">' + tweetText + '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/alagoon.jpg" /><img src="img/vklimenko.jpg" /></div></div><div class="time"><time class="timeago">' + jQuery.timeago(new Date()) + '</time></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose-reply" placeholder="Reply to @' + userName + '" /></textarea></div></div></div>');
    if (tweetText) {
        $(newTweet).prependTo('#stream').fadeIn(1000);
        tweetText = null;
        $('.tweet-compose').val(null);
        $('#char-count').text("140");
    }
});



    });
