import { namesOne, namesTwo } from "./names.js";   

const initApp = () => {
    document.getElementById("submit-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const names = namegenerator();
        displaySuggestion(names);
    })
}



document.addEventListener("DOMContentLoaded", initApp);


const namegenerator = () => {
    const namesArr = [];
    for(let i=0;i<5;) {
        let randomNum1 = Math.floor(Math.random()*5);
        let randomNum2 = Math.floor(Math.random()*5);
        let name = namesOne[randomNum1] + namesTwo[randomNum2];
        if(namesArr.includes(name)) continue;
        namesArr.push(namesOne[randomNum1] + namesTwo[randomNum2]);
        i++;
    }
    return namesArr;
}

const displaySuggestion = (names) => {
    const userKeyword = document.getElementById("keyword-input").value;
    const displaylist = document.getElementById("list");
    let list = "";
    names.forEach(name => {
         list += `<li>${name}-with-${userKeyword}</li>`;
    });
    displaylist.innerHTML = list;
}