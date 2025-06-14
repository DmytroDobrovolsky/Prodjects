const init = () => {

    const root = document.getElementById("start");



    if (!root) {

        console.error("no root element");

    }

    const startPage = createLogIn(root);

}

const createLogIn = (root) => {

    root.style.width = "100%";

    root.style.heigth = "100vh";

    root.style.justifyContent = "center";

    root.style.display = "flex";

    root.style.alignItems = "center";

    root.style.flexDirection = "column";

    root.style.backgroundColor = "#d5def5";



   
    const header = document.createElement('header');

        header.classList.add("header");

    document.body.appendChild(header);


    const logInBox = document.createElement("div");

    logInBox.style.display = "flex";

    logInBox.style.flexDirection = "column";

    logInBox.style.width = "500px";

    logInBox.style.height = "250px";

    logInBox.style.padding = "10px";

   logInBox.style.marginTop = "210px"; // запитати в Тараса , як замінити ці марджини на root.style.width/heigth = 100%

    logInBox.style.marginBottom = "290px";

    logInBox.style.border = "3px inset #4f81c7 ";

    logInBox.style.borderRadius = "10px";

    const emailInput = document.createElement("input");

    emailInput.type = "text";

    const emailH2 = document.createElement("h2");

    emailH2.textContent = "Your Email";

        emailH2.style.color = "rgb(85, 26, 139)";


    const passwInput = document.createElement("input");

    passwInput.type = "text";

    const passwH2 = document.createElement("h2");

    passwH2.textContent = "Your Password";

        passwH2.style.color = "rgb(85, 26, 139)";


    const confirmButton = document.createElement("button");

    confirmButton.style.color = "rgb(85, 26, 139)";

    confirmButton.style.width = "70px";

    confirmButton.style.marginTop = "4px";

    confirmButton.style.marginLeft = "430px"

    confirmButton.innerText = "Confirm";


    logInBox.appendChild(emailH2);

    logInBox.appendChild(emailInput);

    logInBox.appendChild(passwH2)

    logInBox.appendChild(passwInput)

    logInBox.appendChild(confirmButton);


    root.appendChild(logInBox);

    root.appendChild(header);



    const logIn = document.createElement("a");

    logIn.textContent = "Log In";

    logIn.href = "logIn.html";

    logIn.classList.add("headerA");


    header.appendChild(logIn);


    const createAcc = document.createElement("a");

    createAcc.textContent = " Create Account";

    createAcc.style.marginTop = "30px";

    createAcc.href = "createAcc.html";

    createAcc.classList.add("headerA");

    header.appendChild(createAcc);


    const homePage = document.createElement("a");

    homePage.style.marginTop = "30px";

    homePage.textContent = "Home Page";

    homePage.href = "index.html";

    homePage.classList.add("headerA");


    header.appendChild(homePage);

    return root;

}

init();