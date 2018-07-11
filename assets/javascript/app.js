$(document).ready(function() {

    //set up variables for game

    var responsesArray = [];

    //var buttonChecked = parseInt($("input[class='questions']:checked").val());

    var timer = 46;

    var timerInterval;

    var correctCount = 0;

    var wrongCount = 0;

    var noDoubleDip = false;

    //var responses = parseInt($("input[class='questions']:checked").val());

    //!! If extra time, add audio queues here!!
    
    // !!---------------
    

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

        // responsesArray.push(buttonChecked);

        console.log(responsesArray);

        $("input[class='questions']:checked");
        //debugger;


        for (var j = 0; j > responsesArray.length; j++) {

            if (parseInt($("input[class='questions']:checked").val()) === 1) {
                console.log("correct");
                correctCount++;
                $("#correctCountDiv").text("Correct Answers: " + correctCount);
            }

            else {
                console.log("incorrecet");
                wrongCount++;
                $("#wrongCountDiv").text("wrong Answers: " + wrongCount);
            }

        }

        // // question 1

        // if (parseInt($("input[class='questions']:checked").val()) === 1) {

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

    $("#submitButton").on("click", function() {

        responseCheck();

        if (noDoubleDip) {

            ///event.preventDefault();

            //attempt to prevent additional clicks from counting towards appropiate category -- UNRESOLVED <--

            //above code actually stopped another

            correctCount = "";

            wrongCount = "";

        }

        noDoubleDip = true;
    });

    //if the submit button is pressed before the time runs out

    $("#submitButton").on("click", function() {

        event.preventDefault();

        console.log("Finished before timer ran out");

        gameOver("success");

       
    });


});