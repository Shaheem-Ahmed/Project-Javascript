//input a name//

var yourName = prompt("ENTER YOUR NAME")
alert("Welcome "  + yourName)

//arithmetic //
var num = prompt("ENTER NUMBER");
var add = (++num);
var sum = (num++);
var minus = (--num);
var subtract = (num--);

document.write("RESULT")
document.write("<br>")
document.write("THE VALUE OF A IS " + num)
document.write("<br>")
document.write("<hr />");
document.write("<br>")
document.write("THE VALUE OF A IS: " + num)
document.write("<br>")
document.write("THE VALUE OF ++A IS: " + add)
document.write("<br>")
document.write("THE VALUE OF A IS: " + num)
document.write("<br>")
document.write("THE VALUE OF A++ IS: " + sum)
document.write("<br>")
document.write("<br>")
document.write("THE VALUE OF --A IS: " + num)
document.write("<br>")
document.write("NOW THE VALUE OF A IS: " + minus)
document.write("<br>")
document.write("<br>")
document.write("THE VALUE OF A-- IS: " + num)
document.write("<br>")
document.write("NOW THE VALUE OF A IS:" + subtract)

//a, b & result after execution of the following script://

var a = 2;
var b = 1;
var c = --a - --b + ++b + b--;

console.log(c)

//OUTPUT//

var a = 2;
var b = 1;
var c = --a;
var d = --a - --b;
var e = --a - --b + ++b;
var f = --a - --b + ++b + b--;

console.log(c)
console.log(d)
console.log(e)
console.log(f)

//MULTIPLICATION TABLE//

var num = prompt("Enter Number", "5") 
var num = parseInt(num); 
var i = 0;
document.write("<br>")
for (i = 1; i < 11; i++) {
  document.write("<tr><td><br>" + num + " x " + i + " = " + num * i + "</td></tr>");
}

//SUBJECT NAME//

var subject1 = prompt("ENTER SUBJECT NAME");
var subject2 = prompt("ENTER SUBJECT NAME");
var subject3 = prompt("ENTER SUBJECT NAME");

var num1 = 100;
var num2 = 100;
var num3 = 100;

var marks = prompt("ENTER MARKS")
var marks2 = prompt("ENTER MARKS")
var marks3 = prompt("ENTER MARKS")

var markOBTAINED = (num1 - marks);
var markOBTAINED2 = (num2 - marks2);
var markOBTAINED3 = (num3 - marks3);

var percentage = ((markOBTAINED/100) * 100)
var percentage2 = ((markOBTAINED2/100) * 100)
var percentage3 = ((markOBTAINED3/100) * 100)

document.write("<br>")

document.write("<th> SUBJECT</th>")

document.write("<th> TOTAL MARKS</th>")

document.write("<th> OBTAINED MARKS</th>")

document.write("<th> PERCENTAGE</th>")



document.write(subject)
document.write(subject2)
document.write(subject3)

document.write(marks)
document.write(marks2)
document.write(marks3)

document.write(markOBTAINED)
document.write(markOBTAINED2)
document.write(markOBTAINED3)

document.write(percentage)
document.write(percentage2)
document.write(percentage3)

