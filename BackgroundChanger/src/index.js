function myfunction(){
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    document.body.style.backgroundImage = "none";
    }

function myfonction(){
    const newGradient  = gradient();
    document.body.style.backgroundImage = newGradient;
    document.body.style.backgroundColor = "none";
}
const gradient = () =>{
    const side = ["top","bottom","left","right"];
    const i = Math.floor(Math.random() * 4);
    console.log(i);
    return `linear-gradient(to ${side[i]} , ${randomColor()},${randomColor()})`; 
}
const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;}