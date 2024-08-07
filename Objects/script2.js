
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
console.log("merge two objects into one" , merge)

// accessing properties
 
const obj1 = {
    item : "bike", 
    color: "red", 
    number:"32213"
}

const access = obj1.item
console.log("accessing the values dynamically" , access)

//string to object

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
const obj = JSON.parse(text);
console.log("converting JSON string into object" , obj)
//object into string
const obj4 = {
    item : "bike", 
    color: "red", 
    number:"32213"
}

const string = JSON.stringify(obj4)
console.log("converting Object into JSON string" , string)
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
console.log("Merge two objects into target object" , merger)

// iterate over key/values pair

const obj8 = {
    item : "bike", 
    color: "red", 
    number:"32213"
}
const results  = Object.entries(obj8)
console.log("key/values" , results)

//getting keys 
const obj9 = {
    item : "bike", 
    color: "red", 
    number:"32213"
}
const keys = Object.keys(obj9)
console.log("Keys of an Object are" , keys )

// getting values
const obj10 = {
    item : "bike", 
    color: "red", 
    number:"32213"
}
const values = Object.values(obj9)
console.log("values of an Object are" , values )
