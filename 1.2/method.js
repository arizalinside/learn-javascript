// const data = {
//   name: "Bagus",
//   // addLastName: function(lastName){
//   //   const {name} = this
//   //   console.log(name + lastName)
//   // }
//   addLastName: (lastname) => {
//     console.log(data.name + lastname)
//   }
// }

// data.addLastName('Tri')

// JOIN()
let fruits = ["Banana", "Apple" ,"Mango"]
// let allFruits = fruits.join(0)
// console.log(fruits)
// console.log(allFruits)

// SORT()
let sortASCFruits = fruits.sort() //ASC
let sortDESCFruits = fruits.sort().reverse() //DESC
// console.log(sortASCFruits)
// console.log(sortDESCFruits)

// MAP()
let data = [
  {name: 'Bagus', lastName: 'Tri'}, 
  {name: 'Ardhika', lastName: 'R. N'}, 
  {name: 'Arif', lastName: 'Rahman'}
]

data.map((value, index) => {
  // console.log(value.name)
  // console.log(index)
})

// const newData = data.map((value, index) => { return{fullName : value.name + value.lastName} } )
const newData = data.map((value, index) => ({fullName : `${value.name} ${value.lastName}`}) )
// const newData = data.map((value, index) => ({fullName : value.name + ' ' + value.lastName}) )
// console.log(data)
// console.log(newData)

// FILTER
const age = [15, 16, 19, 20, 25, 17]
const checkAge = age.filter((value) => value >= 17)
// console.log(age)
// console.log(checkAge)

//PUSH
const sayur = ["bayam"]
console.log(sayur)
sayur.push("kangkung")
console.log(sayur)
// const sayur = ["bayam", "kangkung"]
