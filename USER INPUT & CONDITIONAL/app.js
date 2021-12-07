//City name//

var city = prompt("ENTER CITY NAME")

if(city = "Karachi"){
    alert("Welcome to city of lights")
}

//GENDER//

var gender = prompt("ENTER YOUR GENDER")

if(gender == "male"){
    alert("Good Morning Sir")
}
else {
    alert("Good Morning Ma’am")
}

//TRAFFIC SIGNAL//

var signal = prompt()

if(signal == "Red" || "red"){
 alert("Must Stop")
}

if(signal == "Yellow" || "yellow"){
    alert("Ready to move")
}

if(signal == "Green" || "green"){
    alert("Move now")
}

//PETROL//

var petrol = prompt("Remaining fuel in car?")

if(petrol<0.25){
    alert("Please refill the fuel in your car")        

}

//MARKS//

var inputMATHS = +prompt("ENTER YOUR MATHS MARKS")
var inputENG = +prompt("ENTER YOUR ENGLISH MARKS")
var inputPHY = +prompt("ENTER YOUR PHYSICS MARKS")
var total = 300;
var earn = inputMATHS + inputENG + inputPHY
var percentage = (earn/total)*100;
console.log(percentage);

if(percentage<60){
    document.write("TOTAL MARKS: " + total)
    document.write("<br>")
    document.write("MARKS EARNED: " + earn)
    document.write("<br>")
    document.write("PERCENTAGE: " + percentage + "%")
    document.write("<br>")
    document.write("MARKS EARNED: " + "F")
    document.write("<br>")
    document.write("REMARKS: " + "SORRY")
}


if(percentage>60 && percentage<70){
    document.write("TOTAL MARKS: " + total)
    document.write("<br>")
    document.write("MARKS EARNED: " + earn)
    document.write("<br>")
    document.write("PERCENTAGE: " + percentage + "%")
    document.write("<br>")
    document.write("MARKS EARNED: " + "B")
    document.write("<br>")
    document.write("REMARKS: " + "YOU NEED TO IMPROVE")
}

if(percentage>70 && percentage<80){
    document.write("TOTAL MARKS: " + total)
    document.write("<br>")
    document.write("MARKS EARNED: " + earn)
    document.write("<br>")
    document.write("PERCENTAGE: " + percentage + "%")
    document.write("<br>")
    document.write("MARKS EARNED: " + "A")
    document.write("<br>")
    document.write("REMARKS: " + "GOOD")
}


if(percentage>80){
    document.write("TOTAL MARKS: " + total)
    document.write("<br>")
    document.write("MARKS EARNED: " + earn)
    document.write("<br>")
    document.write("PERCENTAGE: " + percentage + "%")
    document.write("<br>")
    document.write("MARKS EARNED: " + "A-ONE")
    document.write("<br>")
    document.write("REMARKS: " + "EXCELLENT")
}

//GUESS GAME//
var Rightnum = 9;
var RealNum = [0,1,2,3,4,5,6,7,8,9,10];
var guess = +prompt("GUESS THE NUMBER?");

if(guess = Rightnum ){
    console.log()
    alert("Bingo! Correct answer")
}

if(guess = 10){
   
    alert("Close enough to the correct answer")
}

if(guess =! Rightnum){
   
    alert("WRONG NUMBER")
}

//TEMPERATURE//

var temp = prompt("WRITE THE TEMPERATURE");

if(temp < 40 && temp > 30){
    
    alert("It is too hot outside")
}

if(temp < 30 && temp > 20){
    
    alert("The Weather today is Normal.")
}

if(temp < 20 && temp > 10){
   
    alert("Today’s Weather is cool.")
}

if(temp < 10){
   
    alert("OMG! Today’s weather is so Cool")
}