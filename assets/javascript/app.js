$(document).ready(function() {

    //set up variables for game

    var timer = 45;

    var correctCount = 0;

    var wrongCount = 0;

    var endGame = false;

    //capturing responses from user input

    var question1Capture =  $("input[name='question1']:checked").val();
    var question2Capture =  $("input[name='question2']:checked").val();
    var question3Capture =  $("input[name='question3']:checked").val();
    var question4Capture =  $("input[name='question4']:checked").val();
    var question5Capture =  $("input[name='question5']:checked").val();
    var question6Capture =  $("input[name='question6']:checked").val();
    var question7Capture =  $("input[name='question7']:checked").val();
    var question8Capture =  $("input[name='question8']:checked").val();
    var question9Capture =  $("input[name='question9']:checked").val();
    var question10Capture = $("input[name='question10']:checked").val();


    //!! If extra time, add audio queues here!!
    
    // !!----------------

    // setting timeout

    setTimeout(timerCountDown, 1000 * 45);

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

        $(".playScreen").hide();

        $(".bannerScreen").hide();

        $(".startScreen").hide();

        $(".endScreen").show();

        console.log("game's over!");
        
    }

    //function for going through responses

    function responseCheck() {

        // question 1

        if (question1Capture === 1) {
            

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if (question1Capture != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 2

        if (question2Capture === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if (question2Capture != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 3

        if (question3Capture === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if (question3Capture != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 4

        if (question4Capture === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if (question4Capture != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 5

        if (question5Capture === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if (question5Capture != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 6

        if (question6Capture === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if (question6Capture != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 7

        if (question7Capture === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if (question7Capture != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 8

        if (question8Capture === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if (question8Capture != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 9

        if (question9Capture === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if (question9Capture != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        //question 10

        if (question10Capture === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else if (question10Capture != 1) {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }
    }

    //start game click event

    $("#startButton").on("click", function() {

        $(".playScreen").show();

        $(".bannerScreen").show();

        $(".startScreen").hide();

        $(".endScreen").hide();

        timerCountDown();

        responseCheck();

        if (endGame) {
            
            console.log("times up!")

            //gameOver();
        }

        debugger;

        //Noticed "flashing" issue occurs because for some reason the page runs through the entire click function, and then brings back the "start screen"
        //HAVE YET TO RESOLVE -- AS FAR AS I'M AWARE THIS IS THE ONLY ISSUE

    });

    //if the submit button is pressed before the time runs out

    $("#submitButton").on("click", gameOver);


});