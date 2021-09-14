const logo = document.getElementById("logo");
const container = document.getElementById("container");
const exit = document.querySelector("div.title-bar p");

logo.addEventListener("click", ()=> {
    container.style.visibility = "visible";
    logo.style.visibility = "hidden";

});

exit.addEventListener("click", ()=> {
    container.style.visibility = "hidden";
    logo.style.visibility = "visible";

});