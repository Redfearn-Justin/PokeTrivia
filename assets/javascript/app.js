$(document).ready(function() {

    //set up variables for game

    var timer = 46;

    var timerInterval;

    var correctCount = 0;

    var wrongCount = 0;

    var endGame = false;

    var noDoubleDip = false;

    //!! If extra time, add audio queues here!!
    
    // !!----------------

    // setting timeout -- TIMER DOES NOT DECREMENT PROPERLY <-- UNRESOLVED

    

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

            alert('you did it');
        }

        else {
            
            alert('time ran out');
        }
            
        console.log("times up!")

     
        $(".playScreen").hide();

        $(".bannerScreen").hide();

        $(".startScreen").hide();

        $(".endScreen").show();

        console.log("game's over!");
        
    }

    //function for going through responses; issue: COUNTS ALL FOR ONE <--- UNRESOLVED

    function responseCheck() {

        // question 1

        if (parseInt($("input[class='questions']:checked").val()) === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);

        }

        //question 2

        if (parseInt($("input[name= question2]:checked").val()) === 1) {

            console.log("correct");
            correctCount++;
            $("#correctCountDiv").text("Correct Answers: " + correctCount);

        }
        else {

            console.log("incorrect");
            wrongCount++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        // //question 3

        // if ($("input[name='question3']:checked").val() === 1) {

        //     console.log("correct");
        //     correctCount++;
        //     $("#correctCountDiv").text("Correct Answers: " + correctCount);

        // }
        // else {

        //     console.log("incorrect");
        //     wrongCount++;
        //     $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        // }

        // //question 4

        // if ($("input[name='question4']:checked").val() === 1) {

        //     console.log("correct");
        //     correctCount++;
        //     $("#correctCountDiv").text("Correct Answers: " + correctCount);

        // }
        // else {

        //     console.log("incorrect");
        //     wrongCount++;
        //     $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        // }

        // //question 5

        // if ($("input[name='question5']:checked").val() === 1) {

        //     console.log("correct");
        //     correctCount++;
        //     $("#correctCountDiv").text("Correct Answers: " + correctCount);

        // }
        // else {

        //     console.log("incorrect");
        //     wrongCount++;
        //     $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        // }

        // //question 6

        // if ($("input[name='question6']:checked").val() === 1) {

        //     console.log("correct");
        //     correctCount++;
        //     $("#correctCountDiv").text("Correct Answers: " + correctCount);

        // }
        // else {

        //     console.log("incorrect");
        //     wrongCount++;
        //     $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        // }

        // //question 7

        // if ($("input[name='question7']:checked").val() === 1) {

        //     console.log("correct");
        //     correctCount++;
        //     $("#correctCountDiv").text("Correct Answers: " + correctCount);

        // }
        // else {

        //     console.log("incorrect");
        //     wrongCount++;
        //     $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        // }

        // //question 8

        // if ($("input[name='question8']:checked").val() === 1) {

        //     console.log("correct");
        //     correctCount++;
        //     $("#correctCountDiv").text("Correct Answers: " + correctCount);

        // }
        // else {

        //     console.log("incorrect");
        //     wrongCount++;
        //     $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        // }

        // //question 9

        // if ($("input[name='question9']:checked").val() === 1) {

        //     console.log("correct");
        //     correctCount++;
        //     $("#correctCountDiv").text("Correct Answers: " + correctCount);

        // }
        // else {

        //     console.log("incorrect");
        //     wrongCount++;
        //     $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        // }

        // //question 10

        // if ($("input[name='question10']:checked").val() === 1) {

        //     console.log("correct");
        //     correctCount++;
        //     $("#correctCountDiv").text("Correct Answers: " + correctCount);

        // }
        // else {

        //     console.log("incorrect");
        //     wrongCount++;
        //     $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        // }
    }

    //start game click event

    $("#startButton").on("click", function() {

        event.preventDefault();

        $(".playScreen").show();

        $(".bannerScreen").show();

        $(".startScreen").hide();

        $(".endScreen").hide();

        timerInterval = setInterval(timerCountDown, 1000);

    });

    //on click attempt to record user presses in quiz

    $("input").on("click", function() {

        responseCheck();

        if (noDoubleDip) {

            event.preventDefault();

            //attempt to prevent additional clicks from counting towards appropiate category -- UNRESOLVED <--

            correctCount = "";

            wrongCount = "";

        }

        noDoubleDip = true;
    });

    //if the submit button is pressed before the time runs out

    $("#submitButton").on("click", function() {

        console.log("Finished before timer ran out");

        gameOver("success");

       
    });


});