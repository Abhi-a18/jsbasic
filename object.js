const students = [
  { name: "Sidhant", age: 15, marks: 38 },
  { name: "Aman", age: 18, marks: 85 },
  { name: "Riya", age: 19, marks: 90 },
  { name: "Neha", age: 20, marks: 28 },
  { name: "Rahul", age: 17, marks: 72 },
  { name: "Priya", age: 16, marks: 81 },
  { name: "Karan", age: 21, marks: 67 },
  { name: "Anjali", age: 18, marks: 92 },
  { name: "Vikram", age: 22, marks: 76 },
  { name: "Pooja", age: 19, marks: 84 },
  { name: "Ajay", age: 19, marks: 34 }
]
//Find all students with marks ≥ 80 (return new array)
let a =[]
for(let i =0 ; i< students.length;i++){
if (students[i].marks >= 80){
   a.push(students[i])
}
}
console.log(a)
// Find the youngest student
let youngest =students[0]
for(let i =0 ; i< students.length;i++){
    if(students[i].age< youngest.age){
        youngest =students[i]
    }
}
console.log(youngest)
//- Find the average marks
let sum =0
for(let i =0 ; i< students.length;i++){
    sum+=students[i].marks

}
let avg=(sum/students.length)

console.log(avg)
// Sort students by marks (ascending & descending)
const ascending = [...students].sort((a, b) => a.marks - b.marks);

const descending = [...students].sort((a, b) => b.marks - a.marks);

console.log("Ascending:", ascending);
console.log("Descending:", descending);
//Add a new student object
console.log(a.push({name:"Abhishek",age: 21, marks: 95}))
console.log(a)
//Count students older than 18
let count = 0
for(let i =0 ; i< students.length;i++){
    if (students[i].age>18){
        count+=1
     }
    }
     console.log(count)
     //Return a list of failed students (marks < 40)
let fail =[]
for(let i=0; i< students.length;i++){
   if (students[i].marks<40){
     fail.push(students[i])
   }
}
 console.log(fail)