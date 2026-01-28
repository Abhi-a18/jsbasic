// Check if a string is palindrome
let a=  "madam"
let b = a.split("").reverse().join("")

    if(a===b)
        console.log('palindrome')
    else{
        console.log('not palindrome')
    }
// 2. Reverse a string
let d = 'banyal'
let rev = d.split("").reverse().join("")
console.log(rev)
//  Count vowels in a string
let r = "javascript"
let count =0
for(let i =0 ; i< r.length ;i++){
    if(r[i] == 'a'|| r[i]== 'e' || r[i]== 'i' || r[i] == 'o' || r[i]== 'u' ){
      count++
    }
}
console.log(count)
// Sum all numbers in an array
let y = [1, 2, 3, 4, 5]
let sum =0 
for(let i=0 ; i< y.length; i++){
    sum+= y[i]
}
console.log(sum)