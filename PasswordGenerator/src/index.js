const outputOfnumber = document.querySelector("#number")
const copy = document.querySelector("#copy")
const button = document.querySelector("#validate")
const results = document.querySelector("#results")
const weak = document.querySelector("#weak")
const numberOfchararter = document.querySelector("#default-range")
const lists = document.querySelectorAll("ul input")


// data to generate random password

const RandomChar = {
    Uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    Lowercase:"abcdefghijklmnopqrstuvwxyz",
    Numbers:"0123456789",
    Special:"@`&é'()§è!çà)-_%:/=+;.,?#{}[]°$*€£"

}
// value of slider

numberOfchararter.addEventListener('input',() =>{
    outputOfnumber.innerHTML= numberOfchararter.value
})
// generate the password

function random(){

    let LongPassword = ""
    let password=""
    let count = 0

    for (const list of lists) {
        if (list.checked) {
            LongPassword += RandomChar[list.id]
            count++
        }
    }
   if (count != 0) {
       for (let i = 0; i < (numberOfchararter.value); i++) {
           password +=  LongPassword[Math.floor(Math.random() * (LongPassword.length))]
        }
        
        results.value = password
    } else {
       alert("please check a box ")
   }
}

function passwordStatues(){
    if ((numberOfchararter.value) == 8) {
        weak.innerHTML = "This password is medium"
        weak.classList.add("bg-yellow-500")
    }else if((numberOfchararter.value) > 8){
        weak.innerHTML = "This password is stong"
        weak.classList.add("bg-green-500")
    } else {
        weak.innerHTML = "This password is not good"
        weak.classList.add("bg-red-500")
    }
}

button.addEventListener('click',() =>{
    random()
    passwordStatues()
    copy.addEventListener('click',() =>{
        navigator.clipboard.writeText(results.value)
        copy.innerHTML="copied..."
        copy.classList.add("bg-gray-500")
        copy.classList.remove("hover:bg-green-700")
    })
})
