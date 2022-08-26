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
   
 


