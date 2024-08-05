const inputField = document.getElementById("input")
const numberField = document.getElementById("number")
const secondField = document.getElementById("index")
const lengthBtn = document.getElementById("length")
const showDiv = document.getElementById("show")
const unicodeBtn = document.getElementById("unicode")
const capitalBtn = document.getElementById("capital")
const substrBtn = document.getElementById("substr")
const padendBtn = document.getElementById("pad-end")
const padStartBtn = document.getElementById("pad-start")
const repeatBtn = document.getElementById("repeat")
const trimBtn = document.getElementById("trim")
const trimStartBtn = document.getElementById("trim-start")
const trimEndBtn = document.getElementById("trim-end")
const indexBtn = document.getElementById("index")
const stringBtn = document.getElementById("string")
const lowerCaseBtn = document.getElementById("lower-case")
const uperCaseBtn = document.getElementById("uper-case")
const templateBtn = document.getElementById("template")
const vowelBtn = document.getElementById("vowel")
const removeBtn = document.getElementById("remove")
const subStringBtn = document.getElementById("sub-string")

subStringBtn.addEventListener("click" , ()=>{
    const word = inputField.value;
    const firstIndex = parseInt(numberField.value)
    const secIndex = parseInt(secondField.value)
    console.log(word,firstIndex , secIndex)
    const partOne  = word.substring(0, firstIndex)
    console.log(partOne)
    const partTwo = word.substring(secIndex+1)
    console.log(partTwo)
    const betweenIndices = word.substring(firstIndex, secIndex + 1);
    console.log(betweenIndices);
    const result = partTwo+betweenIndices+partOne
    showDiv.innerHTML=result
    
})


removeBtn.addEventListener("click", ()=>{
   const word  = inputField.value
  const wordLength = Math.floor(word.length/3)
  console.log(wordLength)
  const firstPart = wordLength 
  const lastPart  = word.length-wordLength
  
  const result = word.slice(0, firstPart) + word.slice(lastPart);
  console.log(firstPart , lastPart)
  showDiv.innerHTML=result

})


// swapBtn.addEventListener("click" , ()=>{
//     const word = inputField.value
//     const vowels  = 'aeiouAEIOU'
//     const charArr = word.split('')
//     for(let i = 0; i < charArr.length; i++){
//         if (vowels.includes(charArray[i])) {
//             // Replace vowel with the next character if not the last one
//             if (i < charArr.length - 1) {
//                 charArr[i] = charArr[i + 1];
//             } else {
//                 // If it's the last character, keep it as is
//                 charArr[i] = charArr[i];
//             }
//         }
//     }
    
//     // Join the array back into a string
//     return charArr.join('');

//     })
vowelBtn.addEventListener("click", () => {
    const word = inputField.value;
    const resultString = replaceVowels(word);
    showDiv.innerHTML = resultString;
});

function replaceVowels(str) {
    
    const vowels = "aeiouAEIOU";
   
    let charArray = str.split('');
    
   
    for (let i = 0; i < charArray.length; i++) {
        if (vowels.includes(charArray[i])) {
            
            if (i < charArray.length - 1) {
                charArray[i] = charArray[i + 1];
            } else {
                
                charArray[i] = charArray[i];
            }
        }
    }   
    return charArray.join('');
}



templateBtn.addEventListener("click" , ()=>{

    const name = inputField.value
    const age = numberField.value
   
    const template = `${name} is ${age} years old`
    const showTemplate = age==="" ? "unknow" : template 
    showDiv.innerHTML= showTemplate
})


uperCaseBtn.addEventListener("click" , ()=>{
    const word = inputField.value;
            const indices = numberField.value.split(',').map(num => parseInt(num.trim()));

           
            const resultString = word
                .split('')
                .map((char, index) => indices.includes(index) ? char.toUpperCase() : char)
                .join('');

            showDiv.innerHTML = resultString;
})
lowerCaseBtn.addEventListener("click" , ()=>{
    // const word = inputField.value
    // const targertIndex = parseInt(numberField.value);
    // if(word.length>=targertIndex){
    //     const char = word[targertIndex].toLowerCase()
    //     showDiv.innerHTML=char

    // }

    const word = inputField.value;
            const indices = numberField.value.split(',').map(num => parseInt(num.trim()));

           
            const resultString = word
                .split('')
                .map((char, index) => indices.includes(index) ? char.toLowerCase() : char)
                .join('');

            showDiv.innerHTML = resultString;
})

stringBtn.addEventListener("click" , ()=>{
    const word = inputField.value
    const stringArray = word.split('').join(",")
    showDiv.innerHTML = `[${stringArray}]`

    
})

indexBtn.addEventListener("click" , ()=>{
    const word = inputField.value
    const targertIndex = parseInt(numberField.value);
    if(word.length>=targertIndex){
        const char = word.charAt(targertIndex)
        showDiv.innerHTML=`[${char}]`

    }
    else{
        showDiv.innerHTML = "out of Bound"
    }
})

padStartBtn.addEventListener("click" , ()=>{
    
    const word = inputField.value;
    const targetNumber = parseInt(numberField.value);
    if (!isNaN(targetNumber) && targetNumber > 0) {
        const paddedWord = word.padStart(targetNumber, "0");
        showDiv.innerHTML = paddedWord;
        console.log(paddedWord);
    } 
})
trimEndBtn.addEventListener("click" , ()=>{
    const word = inputField.value
    console.log(word , word.length)
   // const startTrim = word.split(" ").join(" , ").trimStart()
   // console.log(startTrim , startTrim.length)

  const resultArray = word.split(',').map(str => str.trimEnd());
   const resultString = resultArray.join(', ');
   console.log("Processed Array:", resultArray);
   console.log("Processed String:", resultString, resultString.length);

   showDiv.innerHTML = resultString;

})

trimStartBtn.addEventListener("click" , ()=>{
    
    const word = inputField.value
    console.log(word , word.length)
   // const startTrim = word.split(" ").join(" , ").trimStart()
   // console.log(startTrim , startTrim.length)

  const resultArray = word.split(',').map(str => str.trimStart());
   const resultString = resultArray.join(', ');
   console.log("Processed Array:", resultArray);
   console.log("Processed String:", resultString , resultString.length);

   showDiv.innerHTML = resultString;

})

trimBtn.addEventListener("click" , ()=>{
    const word= inputField.value
    console.log(word ,word.length)
    const trimWord = word.trim()
    showDiv.innerHTML=trimWord
    console.log(trimWord, trimWord.length)

    // const word = inputField.value;
    //         console.log("Original:", word, "Length:", word.length);

            
    //         const trimWord = word.trim().replace(/\s+/g, ' ');

    //         showDiv.innerHTML = trimWord;
    //         console.log("Processed:", trimWord, "Length:", trimWord.length);
})

repeatBtn.addEventListener("click" , ()=>{
    const word = inputField.value
    const targetNumber = parseInt(numberField.value);
    
    // if(word.length<=100){
    //     const repeatWord = word.repeat(word.length)
    //     showDiv.innerHTML=repeatWord
    //     console.log(repeatWord , repeatWord.length)}
   
        
        const targetLength = 100;

        if (word.length > 0) {
            // Repeat the word enough times and then slice to targetLength
            const repeatWord = (word.repeat(Math.ceil(targetLength / word.length))).slice(0, targetLength);
            showDiv.innerHTML = repeatWord;
            console.log(repeatWord, repeatWord.length);
        } else {
            alert("Please enter a non-empty word.");
        }
})

padendBtn.addEventListener("click", () => {
    const word = inputField.value;
    const targetNumber = parseInt(numberField.value);
    if (!isNaN(targetNumber) && targetNumber > 0) {
        const paddedWord = word.padEnd(targetNumber, ".");
        showDiv.innerHTML = paddedWord;
        console.log(paddedWord);
    } 
});


lengthBtn.addEventListener("click" , ()=>{
    const word = inputField.value.split('').join(" ").length;
    showDiv.innerHTML= word
})
unicodeBtn.addEventListener("click" , ()=>{
    // const word = inputField.value.split('').join(",")
    // for(let i = 0;i<word.length;i++){
    //     const code = word.charCodeAt(i)
    //     showDiv.innerHTML= code
    // }
    const Array = [];
    const word = inputField.value
     for(let i = 0;i<word.length;i++){
         const code = word.charCodeAt(i)
        Array.push(code);
    }
    showDiv.innerHTML = unicodeArray.join(", ");
})
capitalBtn.addEventListener("click" , ()=>{
    let result = " "
    const word = inputField.value;
    for(let i = 0; i<word.length ; i++){
        const capitalWord= word.at(i)
        if(i%2===1){
            result = result+capitalWord.toUpperCase()
        }else{
            result+=capitalWord
        }
       
    }
   showDiv.innerHTML = result;
})
substrBtn.addEventListener("click" , ()=>{
    const word = inputField.value
    if(word.length<5){
        showDiv.innerHTML=word
    }else{
        const lastChar = word.substr(word.length-5)
        showDiv.innerHTML=lastChar

    }

})


