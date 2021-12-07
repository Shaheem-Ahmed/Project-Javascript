
//multidimensional array//

  var items = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
  ];
  console.log(items[0][0]); 
  console.log(items[0][1]); 
  console.log(items[1][0]); 
  console.log(items[1][1]); 
  console.log(items);

//1 TO 10//

for (var input = 1; input <= 10; input++) {
    console.log(input);
   }

//MULTIPLICATION TABLE//

var table = prompt("ENTER YOUR DESIRED TABLE")
var length = prompt("ENTER DESIRED LENGTH")

for(let i = 1; i <= length; i++) {
    var result = i * table;

    console.log(`${table} X ${i} = ${result}`);
}

//FRUITS//

var fruits = ["apple","banana", "mango", "orange","strawberry"]


var x=0;

while( x <= fruits.length) {
  console.log(fruits[x])
  x++;
}

//Reverse counting//

var array = [1,2,3,4,5,6,7,8,9,10];

console.log(array);
console.log(array.reverse());

//Counting//

var array = [1,2,3,4,5,6,7,8,9,10];

console.log(array)

//Even//

var array = [1,2,3,4,5,6,7,8,9,10];

//LARGEST NUMBER//

var array = [24, 53, 78, 91, 12]

var biggest = 0;

for (var i = 0 ; i < array; i++){
if(array[i] > biggest){
    biggest = array[i]
}
}

console.log(array)