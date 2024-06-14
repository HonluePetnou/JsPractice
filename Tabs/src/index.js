const tabs = document.querySelectorAll("#tabs a")
const contents = document.querySelectorAll("#contents div")

tabs.forEach((tab,index) => {
    tab.addEventListener('click',() =>{
        for (const tab of tabs) {
            for (const classe of tab.classList) {
                if(classe === "active"){
                    tab.classList.remove("active")
                    tab.classList.add("desactive")
                }
            }

        }
        for (const content of contents) {
            for (const classy of content.classList) {
                if(classy === "show"){
                    content.classList.remove("show")
                    content.classList.add("hidde")
                }
            }
        }
        tabs[index].classList.remove("desactive")
        contents[index].classList.remove("hidde")
        tabs[index].classList.add("active")
        contents[index].classList.add("show")
    })
})