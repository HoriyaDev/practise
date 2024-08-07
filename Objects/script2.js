
// merge two objects
const object1 = {
    lead: "naveed",
    mode:"strict"
}
const object2 = {
    name : "pakistan",
    id:"44"
}
const merge = Object.assign(object1 , object2)
console.log(merge)

// accessing properties
 
const obj1 = {
    item : "bike", 
    color: "red", 
    number:"32213"
}

const access = obj1.item
console.log(access)

//string to object

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
const obj = JSON.parse(text);
console.log(obj)
//object into string
const obj4 = {
    item : "bike", 
    color: "red", 
    number:"32213"
}

const string = JSON.stringify(obj4)
console.log(string)
// using object.entries

const obj5 = {
    item : "bike", 
    color: "red", 
    number:"32213"
}
const object6 = {
    lead: "naveed",
    mode:"strict"
}
const object7 = {
    name : "pakistan",
    id:"44"
}


const merger = Object.assign(obj5 , object6 , object7)
console.log(merger)
