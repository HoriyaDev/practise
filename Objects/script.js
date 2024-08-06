const nameField = document.getElementById("name");
const ageField = document.getElementById("age");
const addBtn = document.getElementById("add");
const showDiv = document.getElementById("show");
//const editBtn = document.getElementById("edit")

// const array = [];
// const obj = {
//     id: array.length + 1,
//     name: "",
//     age: "",
// };

// addBtn.addEventListener("click", () => {
//     const fullName = nameField.value;
//     const age = ageField.value;

    
//     obj.name = fullName;
//     obj.age = age
//     array.push(obj);
//     console.log(array);

//     showDiv.innerHTML = obj.name + "   " + obj.age;
//     display();
//     nameField.value = "";
//     ageField.value = "";
// });

const array = [];
let editIndex = null;

addBtn.addEventListener("click", () => {
    const fullName = nameField.value;
    const age = ageField.value;

    if (editIndex !== null) {
        // Edit mode: update the existing object
        array[editIndex].name = fullName;
        array[editIndex].age = age;
        editIndex = null;
    } else {
        // Add mode: push a new object to the array
        const obj = {
            id: array.length + 1,
            name: fullName,
            age: age,
        };
        console.log("obj", obj);
        array.push(obj);
    }

    console.log(array);

    nameField.value = "";
    ageField.value = "";
    display();
});

function display() {
    showDiv.innerHTML = ''; 
    array.forEach((item, index) => {
        const div = document.createElement('div');
        const list = document.createElement('li');
        list.textContent = item.name + "    " + item.age;
        const editBtn = document.createElement('button');
        editBtn.innerHTML = "EDIT";
        editBtn.addEventListener("click", () => {
            nameField.value = item.name;
            ageField.value = item.age;
            editIndex = index;
        });
        div.appendChild(list);
        div.appendChild(editBtn);
        showDiv.appendChild(div);
    });
}


// const nameField = document.getElementById("name")
// const ageField = document.getElementById("age")
// const addBtn = document.getElementById("add")
// const editBtn = document.getElementById("edit")
// const showDiv = document.getElementById("show")

// const obj = {
//     id: "" ,
//     name : "" ,
//     age : ""  ,
// } 
// const array = []

// addBtn.addEventListener("click" , ()=>{
//     const fullName  = nameField.value
//     const age = ageField.value
     
//     obj.name = fullName
//     obj.age = age
//     console.log(obj)

//     for(let i = 0; i<array.length ; i++){
//         const Arr = array.push(obj)
//         console.log(Arr)

//     }

//     showDiv.innerHTML =  obj.name   +     obj.age 
//     display()
//     nameField.value = ""
//     ageField.value = ""

//  })

//  function display (){
//      const div  = document.createElement('div')
//      const list = document.createElement('li')
     
//      div.appendChild(list)
//      showDiv.appendChild(div)

//  } 