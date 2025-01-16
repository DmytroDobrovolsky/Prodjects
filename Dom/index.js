"use strict"

const startElement = document.getElementById("start");

const commonClassName = {

mainBtn: "mainButton",

mainBtnClc: "mainButtonClick",

mainCont: "mainContainer",



};

const generateBlocks = () => {

const contnr = document.createElement("div");

startElement.appendChild(contnr);

contnr.classList.add(commonClassName.mainCont);




const btn1 = document.createElement("button");

startElement.appendChild(btn1);

btn1.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn1);



const btn2 = document.createElement("button");

startElement.appendChild(btn2);

btn2.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn2);


const btn3 = document.createElement("button");

startElement.appendChild(btn3);

btn3.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn3);


const btn4 = document.createElement("button");

startElement.appendChild(btn4);

btn4.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn4);


const btn5 = document.createElement("button");

startElement.appendChild(btn5);

btn5.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn5);


const btn6 = document.createElement("button");

startElement.appendChild(btn6);

btn6.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn6);


const btn7 = document.createElement("button");

startElement.appendChild(btn7);

btn7.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn7);


const btn8 = document.createElement("button");

startElement.appendChild(btn8);

btn8.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn8);


const btn9 = document.createElement("button");

startElement.appendChild(btn9);

btn9.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn9);


const btn10 = document.createElement("button");

startElement.appendChild(btn10);

btn10.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn10);


const btn11 = document.createElement("button");

startElement.appendChild(btn11);

btn11.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn11);


const btn12 = document.createElement("button");

startElement.appendChild(btn12);

btn12.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn12);


const btn13 = document.createElement("button");

startElement.appendChild(btn13);

btn13.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn13);


const btn14 = document.createElement("button");

startElement.appendChild(btn14);

btn14.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn14);


const btn15 = document.createElement("button");

startElement.appendChild(btn15);

btn15.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn15);


const btn16 = document.createElement("button");

startElement.appendChild(btn16);

btn16.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn16);

const btn17 = document.createElement("button");

startElement.appendChild(btn17);

btn17.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn17);



const btn18 = document.createElement("button");

startElement.appendChild(btn18);

btn18.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn18);


const btn19 = document.createElement("button");

startElement.appendChild(btn19);

btn19.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn19);

const btn20 = document.createElement("button");

startElement.appendChild(btn20);

btn20.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn20);


const btn21 = document.createElement("button");

startElement.appendChild(btn21);

btn21.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn21);


const btn22 = document.createElement("button");

startElement.appendChild(btn22);

btn22.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn22);


const btn23 = document.createElement("button");

startElement.appendChild(btn23);

btn23.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn23);


const btn24 = document.createElement("button");

startElement.appendChild(btn24);

btn24.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn24);


const btn25 = document.createElement("button");

startElement.appendChild(btn25);

btn25.classList.add(commonClassName.mainBtn);

contnr.appendChild(btn25);

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

const buttonArray = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn10,btn11,btn12,btn13,btn14,btn15,btn16,btn17,btn18,btn19,btn20,btn21,btn22,btn23,btn24,btn25];


function setRandomColor(array) {

    for (let i = 0; i < array.length; i++) {

        array[i].style.backgroundColor = getRandomColor();
    }
}

const setRanCol =  setRandomColor(buttonArray);


function generateBlocksInterval(array) {
console.log(array);

    for (let i = 0; i < array.length; i++) {

        

        array[i].style.backgroundColor = getRandomColor();

        
    }
}

const genBlkIntr =  generateBlocksInterval(buttonArray);


const intervalId = setInterval(() => generateBlocksInterval(buttonArray), 1000);


const handlerClick = (buttonArray) => {

    for (let i = 0; i < buttonArray.length; i++) {

        

        buttonArray[i].classList.toggle("mainButtonClick");


    }
    
  
}

const handClick = handlerClick (buttonArray);

const personalClick = (buttonArray) => {

    for (let i = 0; i < buttonArray.length; i++) {

        
        buttonArray[i].onclick = handlerClick;

    }

}

const prsnlClck = personalClick (buttonArray);

}


const gnrtBlc = generateBlocks ();
