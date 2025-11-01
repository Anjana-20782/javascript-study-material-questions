//1)how to reverse a number

// let num=123456;
// let rev=0

// while(num>0)
// {
//     digit=num%10
//     rev=rev*10+digit
//     num=Math.floor(num/10)

// }
// console.log(rev);




//2)check if the number is plidrome or not

let num=121
let temp=num;
let rev=0

while(num>0)
{
    digit=num%10;
    rev=rev*10+digit
    num=Math.floor(num/10)
}
if(temp===rev)
{
    console.log("palidrome");
    
}
else{
    console.log("not palidrome");
    
}


let str = "malayalam";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

if (str === reversed) {
  console.log("Palindrome String");
} else {
  console.log("Not a Palindrome");
}

