//THIS IS THE MATHEMATICAL EXPRESSIONS//
var num1 = prompt();
var num2 = prompt();
var add = num1 + num2;

document.write("The sum of " + num1 + " and " + num2 + " is " + add );
document.write("<br>")
var num1 = prompt();
var num2 = prompt();
var add = num1 * num2;

document.write("The product of " + num1 + " and " + num2 + " is " + add );
document.write("<br>")
var num1 = prompt();
var num2 = prompt();
var add = num1 / num2;

document.write("The division of " + num1 + " and " + num2 + " is " + add );
document.write("<br>")
var num1 = prompt();
var num2 = prompt();
var add = num1 - num2;
document.write("<br>")
document.write("The answer of " + num1 + " and " + num2 + " is " + add );

var num1 = prompt();
var num2 = prompt();
var add = num1 % num2;
document.write("<br>")
document.write("The modulus of " + num1 + " and " + num2 + " is " + add );
document.write("<br>")
var ticket = prompt("ENTER NUMBER OF TICKETS");
var price = ticket * 600;

document.write("The cost to buy " + ticket + " tickets " + " is " + price);
document.write("<br>")
//THIS IS AGE CALCULATOR//

var birthYear = prompt("ENTER YOUR AGE");
var year = 2021;
var current = 2021 - birthYear;


document.write("<br>")
document.write("CURRENT YEAR: 2021")
document.write("<br>")
document.write("BIRTH YEAR:" +  current );
document.write("<br>")
document.write("YOUR AGE IS " + birthYear);

//arithmetic//

var num = prompt("ENTER NUMBER");
var arithimetic = num + 5 * 10 / 2;
document.write("<br>")

document.write("THE VALUE IS " + arithimetic)

//TABLE//

const Number = parseInt(prompt("Enter a number : "));
document.write("<br>")
document.write("<hr/>")
document.write("TABLE OF " + Number)


for (let i = 1; i <= 10; i++) {
    document.write("<br>")
    console.log(Number + "*" + i + "=" + Number * i);
    document.write("<br>")
    document.write(Number + "*" + i + "=" + Number * i);
  
}
document.write("<hr/>")

//TEMPERATURE//

var tempFarhenheit = prompt("ENTER TEMPERATURE (Fahrenheit)");
var tempCelsius = prompt("(ENTER TEMPERATURE Celsius)");
var convertFarhenheit = (((tempFarhenheit) - 32) * 5/9 );
var convertCelsius = ((tempCelsius * 9/5)+ 32);

document.write(tempCelsius+" is "+convertCelsius);
document.write("<br>")
document.write(tempFarhenheit+" is "+convertFarhenheit);

//The Lifetime Supply Calculator//

var snack = prompt("ENTER YOUR FAVOURITE SNACK");
var age = prompt("ENTER YOUR AGE IN YEARS");
var maxAge = prompt("ENTER MAXIMUM AGE");
var amount = prompt("HOW MANY TIMES A DAY DO YO EAT?");
var totalAmount = ((maxAge - age) * amount);

document.write("FAVOURITE SNACK: " + snack)
document.write("")