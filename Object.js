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
// using THIS
let  profile = {
    firstName : 'Anselm',
    lastName : 'Chikezie',
    nickName : 'odogwu',
    fullname(){
        const{firstName,lastName,nickName} = this

        return `${firstName} ${lastName} A.KA ${nickName}`
    },
    biography(){
        console.log(`${this.fullname()} is my gee for life . He is more than a brother ,got my back always`)
    }
}
// this can give different values depending on how you call it
