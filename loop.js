// Solve the following using loops:
// Print numbers from 1 to 10
for(let i = 1; i<=10 ; i++){
    console.log(i)
}
//  Print even numbers from 1 to 50
for(let i = 1; i<=50 ; i++){
    if(i%2==0){
        console.log(i)
    }
}
// . Find sum of numbers from 1 to 100
let sum = 0
for(let i = 1; i<=100 ; i++){
    sum+= i
}
console.log(sum)
//  Print multiplication table of 5
for(let i = 5; i<=5 ; i++){
    for(let j = 1; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}
// . Write a function that generates the Fibonacci series up to N terms.
let num =5
let a =0
let b=1
for(let i=2;i<num;i++){
    let next= a+b
    console.log(next)
    a=b
    b=next
}
// Count digits in a number
let r =7000
let count  =0 
while(r !==0){
    r= Math.floor(r/10)
    count++
}
console.log(count)
//