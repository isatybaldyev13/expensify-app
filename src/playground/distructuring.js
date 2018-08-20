//object distructuring
// const person ={
//     name: 'Alex',
//     age:23,
//     location:{
//         city : 'Osh',
//         temp:95
//     }
// }

// const { name:firstName="Alex",age }=person
// console.log(name,age)
// const {temp:temperature,city} = person.location
// if(temperature&&city){
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book ={
//     title : "Elon Musk",
//     author : "Alex Mamasaliev",
//     publisher : {
//         name:"Gnu"
//     }
// }
// const {publisher:publisherName="Self Published"} = book.publisher

//Array Distructuring

const address = ['1268 street ','Denizli','Turkey','1234']
const [,city,state] = address
const [street,,,zip] = address
console.log(`You are in ${city} ,  ${state}`);

