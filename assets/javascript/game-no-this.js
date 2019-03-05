



var wins = 0;
var losses = 0;
var randomNbr;
var totalScore = 0;
var gemButtons = [0, 0, 0, 0];
var buttonName = "";
var gameRunning = false;




function generateRandomNbr() {
    var min = 19;
    var max = 120;
    randomNbr = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("random number " + randomNbr);
    $('#randomNumber').html(randomNbr)
}

function generateButtons() {
    for (var i = 0; i < gemButtons.length; i++) {
        var min = 1;
        var max = 12;
        gemButtons[i] = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("gem buttons i " + gemButtons[i])

    }
}


function resetScore() {
    var totalScore = 0;
    $("#totalScore").html(totalScore);
}



$("#gem1").on("click", function () {
    totalScore = totalScore + gemButtons[0];
    $("#totalScore").html(totalScore)
});

$("#gem2").on("click", function () {
    totalScore = totalScore + gemButtons[1];
    $("#totalScore").html(totalScore)
});

$("#gem3").on("click", function () {
    totalScore = totalScore + gemButtons[2];
    $("#totalScore").html(totalScore)
    if (totalScore > randomNbr){ 
        totalScore = 0;
        $("#totalScore").html(totalScore)
        losses++;
        $("")
        generateRandomNbr();
        generateButtons();
        resetScore();
    
    }
});

$("#gem4").on("click", function () {
    totalScore = totalScore + gemButtons[3];
    $("#totalScore").html(totalScore)
    if (totalScore > randomNbr){ 

        generateRandomNbr();
        generateButtons();
        resetScore();
    
    }
});

if (totalScore > randomNbr){ 

    generateRandomNbr();
    generateButtons();
    resetScore();

}



generateRandomNbr();
generateButtons();
resetScore();



