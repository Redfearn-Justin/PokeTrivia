$(document).ready(function() {

    //set up variables for game

    var timer = 46;

    var timerInterval;

    var correctCount = 0;

    var wrongCount = 0;

    //audio queue variables

    var openingSong = new Audio("assets/media/101-opening.mp3");

    var quizSong = new Audio ("assets/media/115-battle.mp3");

    var endSong = new Audio ("assets/media/145-ending.mp3");

    var submitSong = new Audio ("assets/media/012-submit.mp3");

    //functions

    function timerCountDown() {

        timer--;

        if (timer > 0) {

            $("#timeLeft").text("Time Left: " + timer + " seconds");

            console.log(timer);

        }

        else {

            gameOver("fail");
        }

    }

    //function for when the game ends

    function gameOver(status) {

        clearInterval(timerInterval);

        if(status == 'success') {

            console.log('You Did It');
        }

        else {

            console.log('Time Ran Out');
        }

        console.log("times up!");

        //play this track when the game is over

        endSong.play();


        $(".playScreen").hide();

        $(".bannerScreen").hide();

        $(".startScreen").hide();

        $(".endScreen").show();

        console.log("game's over!");

    }

    function responseCheck() {

      $("input[type='radio']:checked").each(function() {

            if (parseInt($(this).val()) === 1) {
                correctCount++;
                $("#correctCountDiv").text("Correct Answers: " + correctCount);
            }

            else {
                wrongCount++;
                $("#wrongCountDiv").text("wrong Answers: " + wrongCount);
            }

        });

    }

    setTimeout(openingTrackPlay, 1500);

    function openingTrackPlay () {

      openingSong.autoplay = true;

      openingSong.play();


    }

    // play this track when page opens

    openingTrackPlay();

    //start game click event

    $("#startButton").on("click", function() {

        event.preventDefault();

        $(".playScreen").show();

        $(".bannerScreen").show();

        $(".startScreen").hide();

        $(".endScreen").hide();

        timerInterval = setInterval(timerCountDown, 1000);

        // pause openingsong and start quizSong when start button is pressed

        openingSong.pause();

        quizSong.play();

    });

    //if the submit button is pressed before the time runs out

    $("#submitButton").on("click", function() {

        event.preventDefault();

        //pause quiz music so that the submit button sound can play

        quizSong.pause();

        submitSong.play();

        responseCheck();

        console.log("Finished before timer ran out");

        gameOver("success");

    });

});