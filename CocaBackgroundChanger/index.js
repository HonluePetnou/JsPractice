const canette1 = document.querySelector(".im1");
const canette2 = document.querySelector(".im2");
const canette3 = document.querySelector(".im3");
const container = document.querySelector(".section");

function ChangeColor(element,color){
    element.addEventListener("mouseover", () =>{
        container.style.backgroundColor = color;
        element.style.animation = "bounceEffect 1.5s";
    })
    element.addEventListener("mouseout", function() {
        element.style.animation = "";
      });
}

ChangeColor(canette1, "rgb(15, 100, 187)");
ChangeColor(canette2, "rgb(212, 12, 42)");
ChangeColor(canette3, "rgb(0, 0, 0)");