const cars = [
  { brand: "Toyota", model: "Corolla", year: 2018, price: 800000 },
  { brand: "Honda", model: "City", year: 2020, price: 1100000 },
  { brand: "Hyundai", model: "i20", year: 2017, price: 600000 },
  { brand: "Tata", model: "Nexon", year: 2021, price: 1300000 },
  { brand: "Maruti", model: "Swift", year: 2016, price: 550000 },
  { brand: "Kia", model: "Seltos", year: 2022, price: 1500000 },
  { brand: "Mahindra", model: "XUV300", year: 2019, price: 900000 }
];
// Find cars priced above ₹10,00,000
let a =[]
for ( let i=0; i<cars.length; i++){
    if(cars[i].price>1000000){
        a.push(cars[i])
    }
}
console.log(a)
//  Find the oldest car
let oldest = cars[0]
for ( let i=0; i<cars.length; i++){
    if(cars.year< oldest.year){
        oldest = cars[i]
           
    }
  
}
   console.log(oldest)
//Find the average price
let sum = 0
for ( let i=0; i<cars.length; i++){
    sum+= cars[i].price
}
let r = sum/cars.length
console.log(r)
//Sort by price (low → high)
const low = [...cars].sort((a, b) => a.price - b.price);
console.log(low)
//Sort by year (newest first)
const high = [...cars].sort((a, b) => b.year - a.year);
console.log(high)
// Add a new car
console.log(cars.push({brand: "Suzuki", model: "800", year: 2010, price: 80000}))
console.log(cars)
// Count cars manufactured after 2018
let add =[]
for(let i=0 ; i<cars.length; i++){
    if(cars[i].year>2018){
        add.push(cars[i])
    }
}
   console.log(add)
   // Find the most expensive car
   let exp = []
   let prices = cars[0]
   for(let i =0; i< cars.length; i++){
    for(let j =0 ; j< prices.length ; j++){
    if(cars[i].price> prices[j].price){
        exp.push(cars[i])
    }
    }
   }
   console.log(exp)
   // Create array with only brand & model
   let brand1 = []
   function model(n){
    for(let i = 0; i< cars.length; i++){
        brand1.push(n[i].brand ,n[i].model)
    }
   }
   model(cars)
   console.log(brand1)
//    Increase price by 5%
 let newprice = []
 function increaseprice(){
 for(let i=0 ; i<cars.length; i++){
       newprice.push(cars[i].price*1.05);
 }
}
increaseprice()
console.log(newprice)
console.log(cars)
