 //Given an array of numbers print the square of those numbers
 var array=[1,2,3,4,5];

 array.forEach(square);
 function square(element)
 {
 console.log(element*element);
 }


 //Given an array of numbers generate an array containing the double value of the numbers

// Sample Input [1, 2]
// Sample Output [2, 4]
var array=[1,2,3,4,5];
array.map(double)
function double(element){
  return element*2;
}


// Given an array of numbers extract the numbers which are odd

// Sample Input - [1,2,3]
// Sample Output - [1,3]



var array=[1,2,3,4,5];
array.filter(odd);
function odd(element){
  if(element%2==1){
    return element;
  }
}

// Given an array of numbers print the product of all numbers

// Sample Input - [2,3,4]
// Sample Output - 24

var array=[1,2,3,4,5];
array.reduce(product)
function product(ac,ce){
  var product=ac*ce
  return product
}

// Given an array of numbers find the sum of odd elements
// Sample Input - [1, 2, 3, 4]
// Sample Output - 4

var array=[1,2,3,4,5];
array.filter(odd).reduce(sum)
function sum(ac,ec)
{
 var sum= ac+ec
   
  return sum;

}
function odd(element){
  if(element%2==1)
  {
    return element;
  }
}

// Given an array of numbers find the sum of cubes if the number is divisible by 3
// Sample Input - [1, 2, 3, 4, 5, 6]
// Sample Output - 243 (27+216)

var array=[1, 2, 3, 4, 5, 6]

array.map(cube).filter(divisibleby3).reduce(sum);
function cube(element){
  return element*element
}
function divisibleby3(element){
  if(element%3==0){
    return element;
  }
 
}
function sum(ac,ec){
  var add=ac+ec;
  return add;

}