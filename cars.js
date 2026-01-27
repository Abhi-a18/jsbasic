const cars = [
  { brand: "Toyota", model: "Corolla", year: 2018, price: 800000 },
  { brand: "Honda", model: "City", year: 2020, price: 1100000 },
  { brand: "Hyundai", model: "i20", year: 2017, price: 600000 },
  { brand: "Tata", model: "Nexon", year: 2021, price: 1300000 },
  { brand: "Maruti", model: "Swift", year: 2016, price: 550000 },
  { brand: "Kia", model: "Seltos", year: 2022, price: 1500000 },
  { brand: "Mahindra", model: "XUV300", year: 2019, price: 900000 }
];
//- Find cars priced above ₹10,00,000
let a =[]
for ( let i; i<cars.length; i++){
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
