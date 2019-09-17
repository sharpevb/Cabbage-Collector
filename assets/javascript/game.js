$(document).ready(function () {
    // Selects a random number to be shown at the start of the game between 19-120    
    var Random = Math.floor(Math.random() * 101 + 19)
    $('#randomNumber').text(Random);

    // Setting up random numbers between 1-12 for each cabbage   
    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#wins').text(wins);
    $('#loses').text(losses);

    // Resets game wihtout refreshing page
    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('#total').text(userTotal);
    }

    // Win
    function yay() {
        alert("You won! You cooked the perfect dish and got a promotion!");
        wins++;
        $('#wins').text(wins);
        reset();
    }
    
    // Lose
    function loser() {
        alert("You lose! You were too ambitious and cooked too much.");
        losses++;
        $('#loses').text(losses);
        reset()
    }

    // On Click for each cabbage
    $('#bok').on('click', function () {
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#total').text(userTotal);      
        // Win/Lose
        if (userTotal == Random) {
            yay();
        }
        else if (userTotal > Random) {
            loser();
        }
    })

    $('#red').on('click', function () {
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#total').text(userTotal);
        // Win/Lose
        if (userTotal == Random) {
            yay();
        }
        else if (userTotal > Random) {
            loser();
        }
    })

    $('#napa').on('click', function () {
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $('#total').text(userTotal);
        // Win/Lose
        if (userTotal == Random) {
            yay();
        }
        else if (userTotal > Random) {
            loser();
        }
    })

    $('#usa').on('click', function () {
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $('#total').text(userTotal);
        // Win/Lose
        if (userTotal == Random) {
            yay();
        }
        else if (userTotal > Random) {
            loser();
        }
    });
}); 