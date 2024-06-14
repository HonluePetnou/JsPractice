let form = document.getElementById("form");
let input = document.getElementById("input");
let content = document.getElementById("content");

form.addEventListener("submit" , (e)=> {
e.preventDefault();
formvalide();
})

let formvalide = () =>{
    if (input.value != "") {
       getData();
    } else {
        alert("we don't accept empty field");
    }
};
let data={};
let getData = () => {
     data["text"]= input.value;
     createContent();
};
let createContent = () =>{
    content.innerHTML += `
    <div class="flex my-4 items-center">
    <p class="w-full text-grey-darkest">${data.text}</p>
    <button onClick="edithEl(this)"  class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green-500 hover:bg-green-500"><i class="fa-solid fa-file-pen"></i></button>
    <button onClick="deleteEl(this) "  class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-400 border-red-500 hover:text-white hover:bg-red-500"><i class="fa-solid fa-trash"></i></button>
    </div>`;

    input.value = "";
};

let deleteEl = (e) =>{
    e.parentElement.remove();
}
let edithEl = (e) =>{
  input.value = e.previousElementSibling.innerHTML;
  e.parentElement.remove();
}