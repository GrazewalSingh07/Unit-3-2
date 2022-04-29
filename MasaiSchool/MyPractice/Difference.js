// var arr=["Jan", "Feb", "March", "April", "May"];
// Object.freeze(arr);
// arr.splice(5,0,"June")
//The splice method changes the content of the array in place and can be used to add or remove items from the array.
// console.log(arr.slice(2))
// The slice method returns a new array with a copied slice from the original array. 
// console.log(arr)
// arr[0]="dec";
// console.log(arr);

// console.log(this);


// const arr=["Jan", "Feb", "March", "April", "May"];
// // arr.push("dec")

// // // It willl give out ["Jan", "Feb", "March", "April", "May","dec"];
// arr="January"
// // // It will throw an error{Assignment to constant variable}


// //if we removed const and used let
let arr=["Jan", "Feb", "March", "April", "May"];
Object.freeze(arr);

// arr.push("dec")
// //as we freezed the arr it willl throw an error{Cannot add property 5, object is not extensible}
// //Freezing value will not allow us to make changes inside the xsiting value but we can ressign some other value to the variable
arr="January"
// //It is freezed but still we can ressign the value of arr
console.log(arr)