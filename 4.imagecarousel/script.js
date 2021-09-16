const image = document.querySelectorAll("img");
console.log(image.length);
const move = document.getElementById("move");
let index = 0;
setInterval(()=>{
    index++;
    if(index >= image.length)
        index = 0;
    move.style.transform = `translateX(${-index*90}%)`;
    move.style.transition = `transform 2s`;
},3000);