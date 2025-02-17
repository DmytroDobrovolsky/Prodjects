"use strict"

const init = () => {

    const musicOne = new Audio('music/em.mp3');

    const musicTwo = new Audio("music/pac.mp3");

    const main = document.getElementById("start");

    if (!main) {

        console.error("can't find root element!");

        return;

    }

    const container = document.createElement("div");

    container.classList.add("mainContainer");

    main.appendChild(container);

    const btn1 = document.createElement("button");

    btn1.classList.add("mainButton1");

    container.appendChild(btn1);


    const btn2 = document.createElement("button");

    btn2.classList.add("mainButton2");

    container.appendChild(btn2);


    const btn3 = document.createElement("button");

    btn3.classList.add("mainButton3");

    container.appendChild(btn3);


    const btn4 = document.createElement("button");

    btn4.classList.add("mainButton4");

    container.appendChild(btn4);

    let isActive = false;

    btn1.onclick = () => {

       if (isActive === false) {
        
        musicOne.play();

        isActive = true;

        btn1.style.borderColor = 'blue';
       }
        
    else  {

            musicOne.pause();

            isActive = false;

            btn1.style.borderColor =  "buttonborder";

        }
    }


    btn2.onclick = () => {

        if (isActive === false) {
         
         musicTwo.play();
 
         isActive = true;
 
         btn2.style.borderColor = 'blue';
        }
         
     else  {
 
             musicTwo.pause();
 
             isActive = false;
 
             btn2.style.borderColor =  "buttonborder";
 
         }
     }
    


    document.addEventListener("keydown", (event) => {

        switch (event.code) {

            case "KeyE":

                musicOne.play();

                btn1.style.borderColor = 'blue';



                break;

            case "KeyR":

                musicOne.pause();

                btn1.style.borderColor =  "buttonborder";


                break;
        }

    });

}

init();