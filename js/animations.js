$(document).ready(function() {
    // Tweet input box animations
    // $('#tweet-controls').hide();

    $(".tweet-compose").click(function() {
        $("#tweet-controls").show(function() {
            $(".tweet-compose").animate({
                height: "5em"
            });
        });
    });

    // // $(".tweet-compose").blur(function() {
    // //     $("#tweet-controls").hide(function() {
    // //         $(".tweet-compose").animate({
    // //             height: "2.5em"
    // //         });
    //     });
    // });

    $(".tweet-compose").on("keyup", counter);
// #tweet-submit;
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


    });
