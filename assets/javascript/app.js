$(document).ready(function() {

    //set up variables for game

    var timer = 45;

    var correctCount = 0;

    var wrongCount = 0;

    var endGame = false;

    var userResponse;

    //!! If extra time, add audio queues here!!
    
    // !!

    // setting timeout

    setTimeout(timerCountDown, 1000 * 45);

    //functions

    function timerCountDown() {

        timer--;

        $("#timeLeft").text("Time Left: " + timer + " seconds");

        if (timer == 0) {

            endGame === true;
        }
        
        console.log(timer);

    }

    //function to show content

    function showContent (j) {
        $(j).show();
    }

    //function to hide content

    function hideContent (j) {
        $(j).hide();
    }

    //function to start the game

    function gameStart() {

        showContent(".playScreen");

        showContent(".bannerScreen");

        hideContent(".startScreen");

        hideContent(".endScreen");

        timerCountDown();

    }

    //function for when the game ends

    function gameOver() {

        hideContent(".playScreen");

        hideContent(".bannerScreen");

        hideContent(".startScreen");

        showContent(".endScreen");
        
    }

    //function to initialize the screen before the user presses the button

    function initializeScreen () {

        hideContent(".playScreen");

        hideContent(".bannerScreen");

        hideContent(".endScreen");

        showContent(".startScreen");
    }

    //function for going through responses

    //calling initializeScreen function

    initializeScreen();

    //start game click event

    $("#startButton").on("click", function() {

        gameStart();

        if (endGame) {
            
            console.log("times up!")

            gameOver();
        }

    });


});