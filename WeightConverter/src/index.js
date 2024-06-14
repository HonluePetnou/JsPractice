const kg = document.querySelector("#kg")
const lb = document.querySelector("#lb")
const oz = document.querySelector("#oz")


kg.addEventListener('input', () =>{
    lb.value= ((kg.value) * 2.205).toFixed(2)
    oz.value= ((kg.value) * 35.274).toFixed(2)
})
oz.addEventListener('input', () =>{
    kg.value= ((oz.value) / 35.274).toFixed(2)
    lb.value= ((oz.value) / 16).toFixed(2)
})
lb.addEventListener('input', () =>{
    kg.value= ((lb.value) / 2.205).toFixed(2)
    oz.value= ((lb.value) * 16).toFixed(2)
})