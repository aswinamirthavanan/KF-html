//Task1
var a=3
var b="word"
console.log(Number.isInteger(a))
console.log(Number.isInteger(b))
console.log("\n")

//Task 2
var a='Welcome'
var b=''
for(i=a.length-1; i>=0; i--){
        b=b+a[i];
    }
console.log(b);
console.log("\n")

//Task 3
const str = "This is string upper case"
const n = str
  .split(" ")
  .map(word =>word[0].toUpperCase() + word.slice(1))
  .join(" ");

console.log(n);
console.log("\n")

//Task 4
for (let i = 0; i <= 15; i++) 
    {
    if (i % 2 === 0) {
      console.log("Number "+ i + " is even")
    } else {
      console.log("Number "+ i + " is odd")
    }
  } 
console.log("\n")

//Task 5
let colors = ["Green", "Red", "Blue", "Orange", "Yellow"]
colors.splice(-2)
colors.push("Violet","White")
console.log(colors)