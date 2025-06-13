const init = () => {

    const root = document.getElementById("start");



    if (!root) {

        console.error("no root element");

    }

    const startPage = createLogIn(root);

}

const createLogIn = (root) => {

    root.style.width = "100%";

    root.style.heigth = "100%";

    root.style.justifyContent = "center";

    root.style.display = "flex";

    root.style.alignItems = "center";

    root.style.flexDirection = "column";

    root.style.backgroundColor = "#d5def5";



   
    const header = document.createElement('header');

    header.style.position = "fixed";

    header.style.alignItems = "center";

    header.style.justifyContent = "center";

    header.style.top = '0'; // дізнатись більше інфи , як ми змінили позицію header

    header.style.left = '0';

    header.style.width = '350px';

    header.style.height = '100vh';

    header.style.color = '#333';

    header.style.display = 'flex';

    header.style.flexDirection = 'column';

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

    logIn.style.display = "flex";

    logIn.style.justifyContent = "center";

    logIn.textContent = "Log In";

    logIn.style.marginLeft = "5px";

    logIn.style.padding = "10px";

    logIn.style.fontSize = "30px";

    logIn.style.textDecoration = "none";

    logIn.style.border = " 2px solid #3674B5";

    logIn.style.borderRadius = "6px";

    logIn.style.backgroundColor = "#D2DAFF";




    logIn.href = "logIn.html";

    header.appendChild(logIn);


    const createAcc = document.createElement("a");

    createAcc.textContent = " Create Account";

     createAcc.style.display = "flex";

    createAcc.style.justifyContent = "center";

    createAcc.style.border = " 2px solid #3674B5";

    createAcc.style.borderRadius = "6px";

    createAcc.style.marginTop = "30px";

    createAcc.style.marginLeft = "5px";

    createAcc.style.padding = "10px";

    createAcc.style.backgroundColor = "#D2DAFF";

    createAcc.style.fontSize = "30px";

    createAcc.href = "createAcc.html";

    createAcc.style.textDecoration = "none";

    header.appendChild(createAcc);


    const homePage = document.createElement("a");

     homePage.style.display = "flex";

    homePage.style.justifyContent = "center";

    homePage.style.border = " 2px solid #3674B5";

    homePage.style.padding = "10px";

    homePage.style.borderRadius = "6px";

    homePage.style.marginTop = "30px";

    homePage.style.marginLeft = "5px";

    homePage.style.textDecoration = "none";

    homePage.textContent = "Home Page";

    homePage.style.fontSize = "30px";

     homePage.style.backgroundColor = "#D2DAFF";


    homePage.href = "index.html";

    header.appendChild(homePage);


    return root;

}

init();