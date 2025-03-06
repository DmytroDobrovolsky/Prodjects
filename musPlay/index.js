"use strict" //40:50 continue video

const buttons = [
    {

        keyCode: "KeyE",

        audio: "music/em.mp3",

        image: "img/em.jfif",

    },

    {

        keyCode: "KeyT",

        audio: "music/pac.mp3",

        image: "img/pac.webp",

    },

    {

        keyCode: "KeyF",

        audio: "music/fif.mp3",

        image: "img/gg.jpg",

    },

    {

        keyCode: "KeyD",

        audio: "music/dr.mp3",

        image: "img/dr.jpg",

    }
];
        

let isActiveMusic = null;

const normalizeBtns = (btns) => btns.map(el => ({...el, audio: new Audio(el.audio)}))

const init = () => {

    const root = document.getElementById("start");

    if (!root) {

        console.error("No root element in DOM");


    }

    const normalizedBtns =  normalizeBtns(buttons);

    const btns = genereteButtons(normalizedBtns);

    createKeyDownListener(normalizedBtns);

    addBtnsToDom(root, btns);

    windowHellow();

}

const windowHellow = ()=> {

    window.alert("Playlist: E- Eminem, T- 2Pac, F-50cent, D- Dr.Dre If you want see playlist again just reloud page!");

}

const addBtnsToDom = (root, btns) => {

    btns.forEach(btn => {

        root.appendChild(btn);

    });



}


const genereteButtons = (btnData) => {

    const btns = btnData.map((el) => {

        const btn = document.createElement("button");

        const id = getIdByKeyCode(el.keyCode);


        btn.onclick = () => {

            handlerPlayStop(el.audio, el.keyCode);



        }

        btn.classList.add("musicBtn");

        btn.id = id;

        btn.style.backgroundImage = `url(${el.image})`;

        return btn;

    });

    return btns;

}

const getIdByKeyCode = (keyCode) => `my-btn-${keyCode}`;


const handlerPlayStop = (audio, keyCode) => {

    const id = getIdByKeyCode(keyCode);

    const activeBtn = document.getElementById(id);

    const className = "activeBtn";

    if (isActiveMusic) {

        isActiveMusic.audio.pause();

        isActiveMusic.curruntBtn.classList.remove(className);
    }

    if (isActiveMusic && isActiveMusic.audio === audio) {

        isActiveMusic = null;
        
        return;
    }

    activeBtn.classList.add(className);

    isActiveMusic = { audio, curruntBtn: activeBtn };

    isActiveMusic.audio.play();

}

const createKeyDownListener = (btns) => {

    document.addEventListener("keydown", (event) => {

const activeBtn = btns.find(el => el.keyCode === event.code);

if (!activeBtn) return;
    
handlerPlayStop(activeBtn.audio, activeBtn.keyCode);

    });

};

init();
