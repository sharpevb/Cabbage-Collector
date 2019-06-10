$(document).ready(function() {

var min = 19
var max = 120

//Each cabbage generating a different value between 1-12
$("#bok").on("click", function() {
    var min = 1
    var max = 12
var random = Math.floor(Math.random() * (max - min +1 )) + min;
alert(random);
})

$("#red").on("click", function() {
    var min = 1
    var max = 12
var random = Math.floor(Math.random() * (max - min +1 )) + min;
alert(random);
})

$("#napa").on("click", function() {
    var min = 1
    var max = 12
var random = Math.floor(Math.random() * (max - min +1 )) + min;
alert(random);
})

$("#usa").on("click", function() {
    var min = 1
    var max = 12
var random = Math.floor(Math.random() * (max - min +1 )) + min;
alert(random);
})






/*function getRandomInt(min, max) {
if () {

}
    var min = 19
    var max = 120
    
}

console.log(this);

*/

// Target Number 
if (randomTotal = Math.floor(Math.random() * (max - min +1 )) + min) {
   $("#randomNumber").html(randomTotal) 
};








});


