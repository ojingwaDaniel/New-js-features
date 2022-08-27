// destructuring an object using function 
const ballonDor= [
    {
        name : 'benzema',
        club : 'Real Madrid',
        country : 'France'
    },
    {
        name : 'cortios',
        club : 'Real Madrid',
        country : 'Belguim'
    },
    {
        name : 'Modric',
        club : 'Real Madrid',
        country : 'Corotia'
    },
    {
        name : 'Kelvin De Brunye',
        club : 'Man city',
        country : 'France'
    },
]
const[winner] = ballonDor
const [second] =ballonDor
const[third] = ballonDor
const[,{name,club}]= ballonDor
const champion = ([,,,{name,club}])=>{
    console.log(   `the winner of the  ballonDor is ${name} who plays for ${club}`)
}
const details = {
    first : 'Daniel',
    last : 'Ojingwa',
    hometown : 'item'
}
const Name =({first,last})=>{
    console.log(`my name is ${first} ${last}`)


}
// picking random jersey by players
let radomValue = (list)=>{
    let random = Math.floor(Math.random()* list.length)
    return list[random]
}
 let players  =['Fati','Dembele','De Jong','Araujo','Pedri','Gav','lewandoskki','Auba','kounde','Christensen']
 let jerseyNumbers = [1,2,3,4,5,6,7,8,9,10,11]
 let knowYourNumber = ()=>{

    let player = radomValue(players)
    let JerseyNumbers = radomValue(jerseyNumbers)
    return{
        player,
        JerseyNumbers
    }
 }
 
 let result = knowYourNumber()
 console.log(result)
 // another example 
 // write a function to print of the maxx,min ,avg, sum
 let opreator = (list)=>{
    let max = Math.max(...list)
    let min = Math.min(...list)
    let sum = list.reduce((total,currentValue)=> total + currentValue)
    let avg = sum / list.length
    return {
        max,
        min,
        sum,
        avg
    }
 }
 let nums = [2,4,5,6,7,8,9]
 let review = opreator(nums)
 console.log(review)
 
 //computed property
 // a code to input all employers name to a object and update it 
 const employer1 =  'benjamin'
 let position = 'direcor'
 
 const employer2 =  'emmanuel'
 let position2 = 'Accountant'
 
 let team = {
    [position] : employer1,
    [position2] : employer2
 }
 console.log(team)
team = {
    ...team,
    receptionist : 'Mrs Grace'
} 
team = {
    ...team,
    Cashier : 'Mrs mercy'
}
let addStaff = ((obj,position,staffName)=>{
    let listOfStaff = {
        ...obj,
        [position]: staffName
    }
    return listOfStaff
    
})
let updateStaffs = addStaff(team,'lawyer','prof. Ikechukwu')
console.log(updateStaffs)



