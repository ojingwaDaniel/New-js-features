let opreators = {
    add :(x,y=0)=>{
        return x + y
    },
    mutiply :function(x,y=1){
        return x * y
    },
    divde :function(x,y=1){
        return x / y
    }
}
//shorthand
let math = {
   add(x,y= 0) {
    return x + y
   },
   mutiply(x,y=1) {
    return x * y
   },
   divide(x,y=1) {
    return x/y
   }
} 
// staff  regulatory time
let timeRegulatory = [
    {
        staffname : 'Daniel',
        time(hour,mins,am){
            console.log(`today ${this.staffname} came by ${hour}:${mins} ${am} today`)
        }
    },
    {
        staffname : 'Benjamin',
        time(hour,mins,am){
            console.log(`today ${this.staffname} came by ${hour}:${mins} ${am} today`)
        }
    }
] 