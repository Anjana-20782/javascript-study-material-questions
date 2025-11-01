//1)how to reverse a number

let num=123456;
let rev=0

while(num>0)
{
    digit=num%10
    rev=rev*10+digit
    num=Math.floor(num/10)

}
console.log(rev);
