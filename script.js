// before we do this
const mutiply = (a,b)=>{
    // to make sure this does not return NaN when a user fail to input  a value we check manually if y was passed in
    b = typeof b  == 'undefined' ? 1 : b
    return a * b
}
