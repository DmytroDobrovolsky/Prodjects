"use strict"

const init = () => {

const main = document.getElementById("start");

if(!main){

console.error("can't find root element!");

return;


}

const buttons = generateButtons(25);

const container = document.createElement("div");

container.classList.add("mainContainer");

main.appendChild(container);

addButtonsToDOM(container, buttons)

};

const generateButtons = (count) =>{

const preList = new Array(count).fill(null);

const buttons = preList.map((element) => {

const btn = document.createElement("button");

btn.classList.add("mainButton");

btn.style.backgroundColor = getRandomColor();

btn.onclick = handlerBtnClick;

setInterval(() => {


    btn.style.backgroundColor = getRandomColor();

}, 1000);

return btn;

});

return buttons;

};

const handlerBtnClick = (event) => {

event.target.classList.toggle("mainButtonClick");   
}

const addButtonsToDOM = (start, buttons) => {

buttons.forEach((btn) => {

 start.appendChild(btn);   
    
});

}


    //треба, аби Тарас пояснив, як сформувався код з кольором за допомогою циклу

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const getRanCol = getRandomColor();

   
    init();