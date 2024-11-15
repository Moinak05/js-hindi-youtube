// two types of datatypes are present --
// ##1.Primitive and another ##2. Non primitive/Reference Type
// ##1.Primitive Types -- String,Number,Boolean,Null,Undefined,Symbol,Bright
// ##2.Non Primitive Types -- Arrey,Objects,Functions

//+++++++++++++++++++++++++++++++++++++++++

//Two types of Memory -- Stack(Primitive) , Heap (Non primitive)
let myYoutubename = "Dream to fly"
let anothername = myYoutubename
anothername = "Dream to fly 2.O"
console.log(anothername)
console.log(myYoutubename)
let userOne = {
    emial : "moinakmaiti36@gmail.com",
    upi : "moi@ybl "
}
let userTwo = userOne
userTwo.email = "user@google.com"
console.log(userOne.email)
console.log(userTwo.email)