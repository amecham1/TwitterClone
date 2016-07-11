$(document).ready(function() {
    // Tweet input box animations

    jQuery("time.timeago").timeago();


    var tweetText;
    var resetInput = function (){
           $('.tweet-compose').delay(100).animate({height: '2.5em'}, 'fast');
           $('#tweet-controls').hide();
    };
    resetInput();


    // Hide tweet buttons
    $('#tweet-controls').hide();

    // Reveal tweet button when the input box it clicked
    function resetText(){
    $(".tweet-compose").click(function() {
        $("#tweet-controls").show(function() {
            $(".tweet-compose").animate({
                height: "5em"
            });
        });
    });
    // Hide button again when clicked out of input box
    $(".tweet-compose").blur(function() {
        $("#tweet-controls").hide(function() {
            $(".tweet-compose").animate({
                height: "2.5em"
            });
        });
    });
}
resetText();

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

var submitIt = function() {
  $('#tweet-submit').on('click', function(e) {
    var newTweet = $('#tweet-content .tweet-compose').val();
    $('.tweet:first').clone().prependTo('#stream');
    $('.avatar:eq(1)').attr('src', 'img/alagoon.jpg');
    $('.fullname:first').text('Andrew');
    $('.username:first').text('@Andrew');
    $('.tweet-text:first').text(newTweet);
    $('.reply .tweet-compose:first').attr("placeholder", "reply to @andrew");
    resetInput();
    e.preventDefault();
    $('#tweet-content .tweet-compose').val('');
    $('#char-count').text('140');
    resetText();
    clickTweet();
  });
  };
  submitIt();

  clickTweet();






    });
