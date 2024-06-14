const R = document.querySelector("#R")
const G = document.querySelector("#G")
const B = document.querySelector("#B")
const btn = document.querySelector("#btn")
const body = document.querySelector("#body")

const setBackground = function setBackground(){
 btn.innerHTML=`RGB(${R.value},${G.value},${B.value})`
 body.style.backgroundColor= btn.innerHTML
}

R.addEventListener('input',setBackground)
G.addEventListener('input',setBackground)
B.addEventListener('input',setBackground)
window.addEventListener('load',setBackground)