$(document).ready(function() {

    //set up variables for game

    var timer = 45;

    var correctCount = 0;

    var wrongCount = 0;

    var endGame = false;

    //capturing responses from user input

    // var question1Capture =  $("input[name='question1']:checked").val();
    // var question2Capture =  $("input[name='question2']:checked").val();
    // var question3Capture =  $("input[name='question3']:checked").val();
    // var question4Capture =  $("input[name='question4']:checked").val();
    // var question5Capture =  $("input[name='question5']:checked").val();
    // var question6Capture =  $("input[name='question6']:checked").val();
    // var question7Capture =  $("input[name='question7']:checked").val();
    // var question8Capture =  $("input[name='question8']:checked").val();
    // var question9Capture =  $("input[name='question9']:checked").val();
    // var question10Capture = $("input[name='question10']:checked").val();


    //!! If extra time, add audio queues here!!
    
    // !!----------------

    // setting timeout

    setTimeout(timerCountDown, 100 * 45);

    //functions

    function timerCountDown() {

        timer--;

        $("#timeLeft").text("Time Left: " + timer + " seconds");

        if (timer === 0) {

            endGame === true;
        }
        
        console.log(timer);

    }

    //function for when the game ends

    function gameOver() {

        event.preventDefault();

        $(".playScreen").hide();

        $(".bannerScreen").hide();

        $(".startScreen").hide();

        $(".endScreen").show();

        console.log("game's over!");
        
    }

    //function for going through responses

    function responseCheck() {

        // question 1

        if ($(this).val() === 1) {
            

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if ($(this).val() != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 2

        if ($(this).val() === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if ($(this).val() != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 3

        if ($(this).val() === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if ($(this).val() != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 4

        if ($(this).val() === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if ($(this).val() != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 5

        if ($(this).val() === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if ($(this).val() != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 6

        if ($(this).val() === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if ($(this).val() != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 7

        if ($(this).val() === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if ($(this).val() != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 8

        if ($(this).val() === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if ($(this).val() != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 9

        if ($(this).val() === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if ($(this).val() != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 10

        if ($(this).val() === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if ($(this).val() != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }
    }

    //start game click event

    $("#startButton").on("click", function() {

        event.preventDefault();

        $(".playScreen").show();

        $(".bannerScreen").show();

        $(".startScreen").hide();

        $(".endScreen").hide();

        timerCountDown();

        if (endGame) {
            
            console.log("times up!")

            gameOver();
        }

    });

    //on click attempt to record user presses in quiz

    $("input").on("click", function() {

        responseCheck();
    });

    //if the submit button is pressed before the time runs out

    $("#submitButton").on("click", function() {

        gameOver();

        clearTimeout(timerCountDown);
    });


});