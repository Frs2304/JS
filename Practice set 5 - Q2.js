// Practice Set 5 - Q2
// Take input from the user till the input is not 0
let arr = [1,2,3,4,5,6,7]
let a;
do {
 a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)
}while(a!=0)
console.log(arr)
