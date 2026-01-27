let a =[10, 45, 23, 89, 5]

let b =[] 
for(let i = 0 ; i< a.length; i++){
    if(a[i]> b[i+1]){
        b.push(a[i])
    }

}
