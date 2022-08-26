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

