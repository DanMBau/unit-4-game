
$(document).ready(function(){

var wins = 0;
var losses = 0;
var randomNbr = 0;
var totalScore = 0;
var gemButtons = [0, 0, 0, 0];
var buttonName = "";
var gameRunning = false;

//generate random number between 19 and 120 


function generate() {
    var min = 19;
    var max = 120;
    randomNbr = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("random number " + randomNbr);
    $('#randomNumber').html(randomNbr);
    $('#status').text("click the crystal buttons and match the random number");

    for (var i = 0; i < gemButtons.length; i++) {
        var min = 1;
        var max = 12;
        gemButtons[i] = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("gem buttons i " + gemButtons[i])

    }
}

$(".btn").click(function () {
    buttonName = this.id;
    console.log("this " + this)

    if (buttonName === "gem1") {
        totalScore = totalScore + gemButtons[0];
        $("#totalScore").text(totalScore);
        $('#status').text("keep on clicking :)");

    }
    if (buttonName === "gem2") {
        totalScore = totalScore + gemButtons[1];
        $("#totalScore").text(totalScore);
        $('#status').text("keep on clicking :)");

    }
    if (buttonName === "gem3") {
        totalScore = totalScore + gemButtons[2];
        $("#totalScore").text(totalScore);
        $('#status').text("keep on clicking :)");

    }
    if (buttonName === "gem4") {
        totalScore = totalScore + gemButtons[3];
        $("#totalScore").text(totalScore);
        $('#status').text("keep on clicking :)");

    }
    console.log("losses " + losses)
    if (totalScore > randomNbr) {
        losses++;
        $("#losses").text(losses);
        totalScore = 0;
        $("#totalScore").html(totalScore);

        generate();
    }
    else if (totalScore === randomNbr){
        wins++;
        $("#wins").text(wins);
        totalScore = 0;
        $("#totalScore").html(totalScore);
        generate();
    }

})
generate();
    
});























