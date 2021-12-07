//two integers//

var num1 = prompt("ENTER FIRST INTEGER");
var num2 = prompt("ENTER SECOND INTEGER");

if (num1 > num2 ) {
    document.write("The larger number is the first integer" );
}

if (num2 > num1){
    document.write("The larger number is the second integer" )
}

if (num1 == num2){
    document.write("They are equal")
}

document.write("<br>")


//TIME STATEMENT//

var time = prompt("ENTER TIME");

if(time >= 0000 && time<1200){
    document.write("GOOD MORNING!")
    
}
if(time >=1200 && time<1700){
    document.write("GOOD AFTERNOON!")
    
}
if(time >=1750 && time<2100){
    document.write("GOOD EVENING!")
    
}
if(time >=2100 && time<=2359){
    document.write("GOOD NIGHT!")
    
}


//number from user//
document.write("<br>")
var num = prompt("ENTER THE NUMBER");

if(num == 0){
    document.write("THE NUMBER IS ZERO")
}

if(num > 0){
    document.write("THE NUMBER IS POSITIVE")
}

if(num < 0){
    document.write("THE NUMBER IS NEGATIVE")
}



//Input is a number, uppercase letter or lower case letter//

document.write("<br>")




var num = prompt("ENTER A NUMBER, UPPERCASE LETTER OR LOWER CASE LETTER");

if(num == num.toUpperCase()){
    console.log("THIS IS UPPER CASE")
    document.write("THIS IS UPPER CASE")
}
if(num == num.toLowerCase()){
    console.log("THIS IS LOWER CASE")
    document.write("THIS IS LOWER CASE")
}


//PASSWORD//
document.write("<br>")

var yourPassword = prompt("ENTER THE CORRECT PASSWORD");
var password = ("WELCOMEMAN");

if(password == yourPassword){
    alert("CORRECT")
}
else {
    alert("WRONG")
}

//string of length 1//

function isVowel(argument){

	var text;
	var argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}

//NOT WORKING STATEMENT//

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else {
greeting = "Good evening"
}

document.getElementById("demo").innerHTML = greeting;

