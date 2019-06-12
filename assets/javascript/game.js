var restart = false
var totalMin = 19
var totalMax = 120
var cabMin = 1
var cabMax = 12
var bokVal = 1 //ex
var redVal = 2 //ex
var napaVal = 3 //ex
var usaVal = 4 //ex
var currentNum = 0 //ex
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
if (wins >= 0) {
$("#wins").html(wins);
wins++;
};

// Loses
if (loses >= 0) {
$("#loses").html(loses);
};





    /*Each cabbage generating a different value between 1-12
    if (cabbageValue = Math.floor(Math.random() * (cabMax - cabMin + 1 )) + cabMin) {
        $("#bok").attr(cabbageValue);
        console.log(cabbageValue);
    }
    */


    //if randomTotal >= cabbageValue {

    //}


    // Add all of the cabbage values together


    //Example cab random value


    /* if (bokVal = Math.floor(Math.random() * (cabMax - cabMin +1 )) + cabMin) {
    
    }
     $("#bok").on("click", function() {
    
    ;
    
    })
    
    */










});

// BOK
function addBok() {
    currentNum = currentNum + bokVal
    $("#total").html(currentNum)
    console.log(bokVal);
    console.log(currentNum);
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