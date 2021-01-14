var x = 10;
var y = 20

function Addition() {
    return x * y ;
}
document.getElementById("javascript").innerHTML = Addition();

function myFunction(p1, p2) {
    return p1 * p2;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);

var car = { type: "Fiat", model: "500", color: "white" };
function carObj() {
    return car;
}
document.getElementById("carO").innerHTML = "The car  is " + car.type + " model " + car.model + " color " + car.color

var txt ="Donald nyemba";
var num = txt.length;
function wordlength() {
    return num;
}
document.getElementById("Wlength").innerHTML = "The word length is";