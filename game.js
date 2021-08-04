// array to store expected pattern
var gamePattern = [];

// array to store user clicked pattern 
var userClickedPattern = [];

// array with colour name 
var buttonColours = ["red", "blue", "green", "yellow"];

var started = false;

var level= 0;


$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
    
});

// event listner to push users input in userClickedPattern array 
// this fkn dot .btn 
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
    // play sound to correnponding button
    playSound(userChosenColour);

    // animate the click event 
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("Success");
        
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("Fail");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);

          $("#level-title").text("Game Over, Press Any Key to Restart");

          startOver();
    }
}

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.round(Math.random()*3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    // animation
    $("#"+randomChosenColour).fadeOut(200).fadeIn(200);
    
    //audio
    playSound(randomChosenColour);
}

function playSound(name){
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}