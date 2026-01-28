let arr1 = []
let target = 7
function num( n){
    for(let i=0; i<n.length ;i++){
       for(let j= 0; j< n.length ;j++){
        if(n[i]+ n[j]=== 7){
            arr1.push(n[i],n[j])
        }
       } 
         

    }
    return n;
}

let arr = [2, 4, 3, 5, 7]
num(arr)
console.log(arr1)