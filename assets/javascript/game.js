var restart = false
var totalMin = 19
var totalMax = 120
var cabMin = 1
var cabMax = 12
var cabArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var redVal = 2 //ex
var napaVal = 3 //ex
var usaVal = 4 //ex
var currentNum = 0
var wins = 0
var loses = 0
var randomTotal

$(document).ready(function () {


    // Target Number 
    if (randomTotal = Math.floor(Math.random() * (totalMax - totalMin + 1)) + totalMin) {
        $("#randomNumber").html(randomTotal);
    };

    // Setting current number to 0
    if (currentNum >= 0) {
        $("#total").html(currentNum);
    };

    // Wins
    if (currentNum === randomTotal) {
        $("#wins").html(wins);
        wins++;
    }
    // Loses
    else if (currentNum >= randomTotal) {
        $("#loses").html(loses);
        loses++;
    }


});

// BOK
function addBok() {
    for (var i = 0; i < cabArray.length; i++) {
        var bokVal = cabArray[Math.floor(Math.random() * cabArray.length)];
        bokVal === cabArray[i];
    }
    
    bokVal = parseInt(bokVal);
    currentNum += bokVal
    $("#total").html(currentNum)

    console.log(bokVal);
}

// RED
function addRed() {
    currentNum = currentNum + redVal
    $("#total").html(currentNum)
    console.log(redVal);
    console.log(currentNum);
}

// NAPA
function addNapa() {
    currentNum = currentNum + napaVal
    $("#total").html(currentNum)
    console.log(napaVal);
    console.log(currentNum);
}

// USA
function addUsa() {
    currentNum = currentNum + usaVal
    $("#total").html(currentNum)
    console.log(usaVal);
    console.log(currentNum);
} 



