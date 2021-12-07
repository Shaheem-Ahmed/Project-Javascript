//JS literal notation//

var studentName = {};
var Studentname = {};

// strings array//

var cities = ["Karachi","Lahore","Rawalpindi","Multan","Peshawar"]

//numbers array//

var num = ["1","22","44","55","78"]

//mixed array//

var mixedArray = ["Johnatan","5","3"]

//boolean array//

//var numElements = cleanestCities.length;
 //var matchFound = false;
 //for (var i = 0; i < numElements; i++);
 //if (cityToCheck === cleanestCities[i]) {
// matchFound = true;
 //alert("It's one of the cleanest cities");
 
// }
 
 //if (matchFound === false) {
 //alert("It's not on the list");
 //}


 //QUALIFICATIONS//

 var QUALIFICATIONS = ["SSC","HCS","BCS","BS","BCOM","MS","M.Phil","PhD"]

 console.log(QUALIFICATIONS)

 //STUDENT ARRAY//

 var surname = ["Michael","John","Tony"]
 var score = ["230","320","480"]
 var percentage = ["46%","64%","96%"]

 var combined = []
 combined.push(surname,score,percentage)

 console.log(`combined = `+combined)

 //single string//

 var arr = ["This ", " is ", " my ", " cat"];
 
document.write(arr[0]); 
document.write(arr[1]); 
document.write(arr[2]);
document.write(arr[arr.length -1 ]); 

////

let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers);
