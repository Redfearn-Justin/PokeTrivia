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

        if (timer = 0) {

            gameOver();
        }

        console.log(timer);

    }

    function showContent (j) {
        $(j).show();
    }

    function hideContent (j) {
        $(j).hide();
    }

    function gameStart() {

        showContent(".playScreen");

        showContent(".bannerScreen");

        hideContent(".startScreen");

        timerCountDown();

    }

    function gameOver() {
        
    }

    function initializeScreen () {

        hideContent(".playScreen");

        hideContent(".bannerScreen");

        hideContent(".endScreen");

        showContent(".startScreen");
    }

    //set up screen before game begins

    initializeScreen();

    //start game click event

    $("#startButton").on("click", function() {
        gameStart();

    });












});