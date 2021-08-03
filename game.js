const gamePattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
    var randomNumber = Math.random()*3;
    randomNumber = Math.round(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(200).fadeIn(200);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    
}







// $("#"+randomChosenColour).click(makeSound());

// function makeSound(){
//     switch(randomChosenColour){
//         case "blue":
//             var blue = new Audio(sounds/blue.mp3);
//             blue.play();
//             break;
//         case "green":
//             var green = new Audio(sounds/green.mp3);
//             green.play();
//             break;
//         case "red":
//             var red = new Audio(sounds/red.mp3);
//             red.play();
//             break;
//         case "yellow":
//             var yellow = new Audio(sounds/yellow.mp3);
//             yellow.play();
//             break;
//     }
// }