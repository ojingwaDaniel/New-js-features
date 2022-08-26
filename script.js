// before we do this
const mutiply = (a,b)=>{
    // to make sure this does not return NaN when a user fail to input  a value we check manually if y was passed in
    b = typeof b  == 'undefined' ? 1 : b
    return a * b
}
// default parameter
const mutiply2 = (a,b=1)=>{
    // to make sure this does not return NaN when a user fail to input  a value we check manually if y was passed in
    return a * b
}
// another example
const greetingPlayers = ((playerName,greeting = 'Hi')=>{
    return `${greeting} ${playerName}!`
})
// SPREAD
let numbering = ((a,b,c,d)=>{
    console.log( `a : ${a}`)
    console.log( `b : ${b}`)
    console.log( `c : ${c}`)
    console.log( `d : ${d}`)
})
let list = ['Headphone','phone','clothes','shoe']
// spread used to join two or more arrays
let goalkeepers = ['Ter stergen','Pena','Tenas']
let defenders = ['Araujo','Kounde','Christensen','Eric Garcia','Sergio Roberto','Blade']
let strikers = ['Lewandoski','Raphinha','Ansu Fati','Dembele','Ferran Torres']
let firstTeamPlayers = [...goalkeepers,...defenders,...strikers]
let firstTeamPlayers2 = goalkeepers.concat(defenders,strikers,'pjanic')
// spread in objects
const DF = {
    pace : true,
    passing : 'average',
    shooting : 'low',
    pulling : 'high',
    heading : 'high',
    dribbling : 'low',
    tall : 'high'
}
const DFM = {
    space : true,
    defensive : true,
    passing : 'high',
    skills : 'average',
    tall : 'average',
    heading : 'average',
    tackling : 'high',
    dribbling : 'high'
}
const FW = {
    pace : true,
    passing : true,
    shooting : 'high',
    heading : 'high',
    dribbling : 'high'
}
const LW = {
    pace : true,
    passing : true,
    shooting : 'high',
    heading : 'Average',
    dribbling : 'high'
}
const arajuo = {
    ...DFM,
    physically : 'high'
}
const deJong = {
    ...DFM,
    dribbling : 'high',
    skills : "low"
}
const sumAll = (...nums)=>{
     return nums.reduce((total,currentValue)=>{

        return total + currentValue

     })


  }
const details = ((firstName,lastName, ...otherName)=>{
    console.log(`first-name : ${firstName}\n last-name : ${lastName} \n Other-name : ${otherName}`)
})
// DESTRUCTURING OF AN ARRAY
const players = [
   
    'Roberto',
    'Blade',
    
    'De Jong',
    
    'Pjanic',
    'Ter stergen',
    'Ansu Fati',
    'Raphinha',
    'Lewandoski',
    'Araujo',
    'Kounde',
    'pedri'
    

]
const[,,,,...untouchable] = players
let nominnes = [
    'benzema',
    'Modric',
    'junior',
    'cortrios',
    'Kelvin De brunye',
    'Mane',
    'Mpape'
]
const[bestplayerInSpain,,,,BestPlayerInEng] = nominnes
const[winner,...others] = nominnes
const[Bestplayer,BestMidfielder,BestyoungPlayer]= nominnes


// DESTRUCTURING  OBJECTS
const data = {
    name : 'Daniel',
    surname :'ojingwa',
    hobby : 'foorball and adding values',
    title : 'African gaint'

    
}
const{name,surname,...otherHobbies} = data
