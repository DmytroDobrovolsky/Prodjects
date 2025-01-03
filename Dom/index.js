"use strict"

const startElement = document.getElementById("start");

const commonClassName = {

mainBtn: "mainButton",

};

const generateBlocks = () => {

const btn1 = document.createElement("button");

startElement.appendChild(btn1);

btn1.classList.add("commonClassName.mainButton");

btn1.innerText = "sho ty";


}

const gnrtBlc = generateBlocks ();