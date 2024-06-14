const apikey = "3iAAsQX5fNcGc1fkn0UzQQ==6fSgpBY40Sn76bOd"
const button = document.querySelector("#btn")
const result = document.querySelector("#result")

let options = {
    method: "GET",
    headers: { 'X-Api-Key': apikey},
}

let url = "https://api.api-ninjas.com/v1/facts?limit=1"
const facts = () =>{
    fetch(url, options)
    .then((response) => response.json())
    .then((data) => result.innerHTML = `" ${data[0].fact} "`
)
}

button.addEventListener('click',facts)
window.addEventListener('load', facts)


