"use strict"

const init = () => {

    const musicOne = new Audio('music/em.mp3');

    const musicTwo = new Audio("music/pac.mp3");

    const musicThree = new Audio("music/fif.mp3");

    const musicFour = new Audio("music/dr.mp3");

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

    let isActive1 = false;

    let isActive2 = false;

    let isActive3 = false;

    let isActive4 = false;


    btn1.onclick = () => {

        if (isActive1 === false) {

            musicOne.play();


            musicTwo.pause();

            isActive2 = false;

            btn2.style.borderColor = "buttonborder";


            musicThree.pause();

            isActive3 = false;

            btn3.style.borderColor = "buttonborder";


            musicFour.pause();

            isActive4 = false;

            btn4.style.borderColor = "buttonborder";


            btn1.style.borderColor = 'blue';

            isActive1 = true;

        }



        else if (isActive1 === true) {

            musicOne.pause();

            isActive1 = false;

            btn1.style.borderColor = "buttonborder";

        }
    }


    btn2.onclick = () => {

        if (isActive2 === false) {

            musicTwo.play();


            musicOne.pause();

            isActive1 = false;

            btn1.style.borderColor = "buttonborder";


            musicThree.pause();

            isActive3 = false;

            btn3.style.borderColor = "buttonborder";


            musicFour.pause();

            isActive4 = false;

            btn4.style.borderColor = "buttonborder";


            btn2.style.borderColor = 'blue';

            isActive2 = true;

        }

        else if (isActive2 === true) {

            musicTwo.pause();

            btn2.style.borderColor = "buttonborder";

            isActive2 = false;


        }
    }

    btn3.onclick = () => {

        if (isActive3 === false) {

            musicThree.play();


            musicOne.pause();

            isActive1 = false;

            btn1.style.borderColor = "buttonborder";


            musicTwo.pause();

            isActive2 = false;

            btn2.style.borderColor = "buttonborder";


            musicFour.pause();

            isActive4 = false;

            btn4.style.borderColor = "buttonborder";


            btn3.style.borderColor = 'blue';

            isActive3 = true;



        }



        else if (isActive3 === true) {

            musicThree.pause();

            btn3.style.borderColor = "buttonborder";

            isActive3 = false;


        }
    }

    btn4.onclick = () => {

        if (isActive4 === false) {

            musicFour.play();


            musicOne.pause();

            isActive1 = false;

            btn1.style.borderColor = "buttonborder";


            musicTwo.pause();

            isActive2 = false;

            btn2.style.borderColor = "buttonborder";


            musicThree.pause();

            isActive3 = false;

            btn3.style.borderColor = "buttonborder";


            btn4.style.borderColor = 'blue';

            isActive4 = true;

        }



        else if (isActive4 === true) {

            musicFour.pause();

            isActive4 = false;

            btn4.style.borderColor = "buttonborder";

        }
    }





    document.addEventListener("keydown", (event) => {

        switch (event.code) {

            case "KeyE":                                         // button - 1//

                musicOne.play();


                musicTwo.pause();

                isActive2 = false;

                btn2.style.borderColor = "buttonborder";


                musicThree.pause();

                isActive3 = false;

                btn3.style.borderColor = "buttonborder";


                musicFour.pause();

                isActive4 = false;

                btn4.style.borderColor = "buttonborder";


                btn1.style.borderColor = 'blue';

                isActive1 = true;


                break;

            case "KeyR":

                musicOne.pause();

                isActive1 = false;

                btn1.style.borderColor = "buttonborder";


                break;

            case "KeyT":                                     // button - 2//

                musicTwo.play();


                musicOne.pause();

                isActive1 = false;

                btn1.style.borderColor = "buttonborder";


                musicThree.pause();

                isActive3 = false;

                btn3.style.borderColor = "buttonborder";


                musicFour.pause();

                isActive4 = false;

                btn4.style.borderColor = "buttonborder";


                btn2.style.borderColor = 'blue';

                isActive2 = true;

                break;

                case "KeyY":

                musicTwo.pause();

                isActive2 = false;

            btn2.style.borderColor = "buttonborder";


            break;

            case "KeyF":                                      // button - 3//

            musicThree.play();


            musicOne.pause();

            isActive1 = false;

            btn1.style.borderColor = "buttonborder";


            musicTwo.pause();

            isActive2 = false;

            btn2.style.borderColor = "buttonborder";


            musicFour.pause();

            isActive4 = false;

            btn4.style.borderColor = "buttonborder";


            btn3.style.borderColor = 'blue';

            isActive3 = true;

            break;

            case "KeyG":

            musicThree.pause();

            btn3.style.borderColor = "buttonborder";

            isActive3 = false;

            break;

            case "KeyD":                                              // button - 4//

            musicFour.play();


            musicOne.pause();

            isActive1 = false;

            btn1.style.borderColor = "buttonborder";


            musicTwo.pause();

            isActive2 = false;

            btn2.style.borderColor = "buttonborder";


            musicThree.pause();

            isActive3 = false;

            btn3.style.borderColor = "buttonborder";


            btn4.style.borderColor = 'blue';

            isActive4 = true;

            break;

            case "KeyS":

            musicFour.pause();

            isActive4 = false;

            btn4.style.borderColor = "buttonborder";

            break;

        }

    });

}

init();         

//keyMap: button1 - Eminem (start-"E", pause-"R"),  button2 - Tupac (start-"T", pause-"Y"),  button3 - 50cent (start-"F", pause-"G"),  button4 - Dr.Dre (start-"D", pause-"S"). 