const menu = [
    {
    title: "Food Item 1",
    desc: "one Lorem ipsum dolor, sit amet consectetur adipisicing.",
    image: "images/img1.jpg",
    name: "Hotel Name 1",
    info: "one Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ad.",
    },
    {
    title: "Food Item 2",
    desc: "two Lorem ipsum dolor, sit amet consectetur adipisicing.",
    image: "images/img2.jpg",
    name: "Hotel Name 2",
    info: "two Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ad.",
    },
    {
    title: "Food Item 3",
    desc: "three Lorem ipsum dolor, sit amet consectetur adipisicing.",
    image: "images/img3.jpg",
    name: "Hotel Name 3",
    info: "three Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ad.",
    },
    {
    title: "Food Item 4",
    desc: "four Lorem ipsum dolor, sit amet consectetur adipisicing.",
    image: "images/img4.jpg",
    name: "Hotel Name 4",
    info: "four Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ad.",
    },
    {
    title: "Food Item 5",
    desc: "five Lorem ipsum dolor, sit amet consectetur adipisicing.",
    image: "images/img5.jpg",
    name: "Hotel Name 5",
    info: "five Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ad.",
    },
]

const menuTitle = document.getElementById("menu__title");
const menuDescription = document.getElementById("menu__description");
const menuImage = document.getElementById("menu__img");

const hotelName = document.getElementById("hotel");
const hotelInfo = document.getElementById("hotel__description");
const previous = document.getElementById("prev");
const random = document.getElementById("random");
const next = document.getElementById("next");
let item = 0;

window.addEventListener("DOMContentLoaded", displayMenu(item));

previous.addEventListener("click",()=> {
    item--;
    if(item<0)
        item = menu.length -1;
    displayMenu(item);
});

next.addEventListener("click",()=> {
    item++;
    if(item>=menu.length)
        item = 0;
    displayMenu(item);
});

random.addEventListener("click",()=> {
    item = Math.floor(Math.random()*menu.length);
    displayMenu(item);
});

function displayMenu(index) {
    menuTitle.innerHTML = menu[index].title;
    menuDescription.innerHTML = menu[index].desc;
    hotelName.innerHTML = menu[index].name;
    hotelInfo.innerHTML = menu[index].info;  
    menuImage.setAttribute("src",menu[index].image);
}