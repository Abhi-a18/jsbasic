// check odd and even
function num (a){
if(a%2==0){
    console.log('even')
}
else{
    console.log('odd')
}
return a;
}
num(4)

// factorial
function factorial(n){
    if(n===1 || n===0){
        return 1;
    }   
    else if (n<1) {
        return "factorial is not defined for -ve number";
    }
    else {
        return n * factorial(n-1);
    }
     

    }
      console.log(factorial(18))
// duplicate
function duplicate(arr){
    return [...new Set(arr)]
}
let a =[1, 2, 2, 3, 4, 4, 5]
console.log(duplicate(a))
// fahrnite 
      function fahrenheit(n){
    let a = (n*9/5)+32
    return a
}
console.log(fahrenheit(1))
