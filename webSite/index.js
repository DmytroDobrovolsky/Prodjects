const init = async () => {

    const root = document.getElementById("start");



    if (!root) {

        console.error("no root element");

    }


    const users = await getUsers();

    const photos = await getUsersPhoto();




    createUsersUi(root, users, photos);



}

const getUsers = async () => {

    try {

        const resp = await fetch("https://jsonplaceholder.typicode.com/users");


        const data = await resp.json();

        return data;




    } catch (error) {

        console.error("Cant get users", error);

    }
}





const createUsersUi = (root, users, photos) => {


    const header = document.createElement('header');

    header.style.position = "fixed";

    header.style.alignItems = "center";

    header.style.justifyContent = "center";

    header.style.top = '0';

    header.style.left = '0';

    header.style.width = '350px';

    header.style.height = '100vh';

    header.style.color = '#333';

    header.style.display = 'flex';

    header.style.flexDirection = 'column';

    document.body.appendChild(header);


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



    users.forEach(async (user) => {

        root.style.justifyContent = "center";

        root.style.display = "flex";

        root.style.justifyContent = "center";

        root.style.alignItems = "center";

        root.style.flexDirection = "column";

        root.style.backgroundColor = "#d5def5";


        const buttonsPostBox = document.createElement("div");

        buttonsPostBox.style.display = "flex";

        buttonsPostBox.style.alignItems = "center";

        buttonsPostBox.style.flexDirection = "column";



        const allPostsbutton = document.createElement("button");

        allPostsbutton.style.display = "flex";

        allPostsbutton.style.backgroundColor = "#578FCA";

        allPostsbutton.innerText = "Show all posts ";

        allPostsbutton.style.fontSize = "15px";

        allPostsbutton.style.width = "100px";

        allPostsbutton.style.height = "40px";

        allPostsbutton.style.borderRadius = "4px";

        allPostsbutton.style.marginBottom = "30px";



        const photoBox = document.createElement("div");

        photoBox.style.justifyContent = "center";

        photoBox.style.display = "flex";

        const img = creatUsersPhotos(photos);



        const getAllUssComm = await getUsersComments();


        const posts = await getUsersPosts(user.id);

        const firstPosts = createUsersFirstPost(posts, getAllUssComm);

        const postBox = document.createElement("div");

        postBox.style.justifyContent = "center";

        postBox.style.alignItems = "center";

        postBox.style.marginBottom = "30px";

        postBox.style.display = "flex";

        postBox.style.width = "350px";




        const textBox = document.createElement("div");

        textBox.style.justifyContent = "center";

        textBox.style.display = "flex";

        const title = document.createElement("h2");

        title.innerText = user.name;

        title.style.color = "#8594e4";



        photoBox.appendChild(img);

        textBox.appendChild(title);

        postBox.appendChild(firstPosts);

        buttonsPostBox.appendChild(allPostsbutton);







        root.appendChild(textBox);

        root.appendChild(photoBox);

        root.appendChild(postBox);

        root.appendChild(buttonsPostBox);


        let activePostBtn = true;

        const list = creatAllUsersPosts(posts, getAllUssComm);



        allPostsbutton.onclick = async () => {


            if (activePostBtn == true) {

                list.style.display = "flex";

                activePostBtn = false;

                allPostsbutton.innerText = "Close All Posts";


                buttonsPostBox.appendChild(list);

            }

            else {

                activePostBtn = true;

                allPostsbutton.innerText = "Show All Posts";

                list.style.display = "none";

            }












        }


    });



}



const getUsersPhoto = async () => {

    try {

        const resp = await fetch("https://jsonplaceholder.typicode.com/photos?albumId=1");


        const data = await resp.json();

        return data;




    } catch (error) {

        console.error("Cant get users photos", error);

    }
}


const creatUsersPhotos = (photos) => {

    const imgBox = document.createElement("div");

    const firstPhoto = document.createElement("img");

    firstPhoto.src = 'https://png.pngtree.com/png-vector/20190321/ourlarge/pngtree-vector-users-icon-png-image_854956.jpg';

    firstPhoto.style.width = "400px";

    firstPhoto.style.borderRadius = "5px";


    imgBox.appendChild(firstPhoto);




    return imgBox;

}


const getUsersPosts = async (userId) => {




    try {

        const resp = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,


        );


        const data = await resp.json();







        return data;


    } catch (error) {

        console.error("Cant get users posts", userId, error);

    }


};

const getUsersComments = async () => {




    try {

        const resp = await fetch("https://jsonplaceholder.typicode.com/comments",


        );


        const data = await resp.json();







        return data;


    } catch (error) {

        console.error("Cant get users comments", error);

    }

}

const createUsersFirstPost = (posts, getAllUssComm) => {



    const list = document.createElement("div");

    const post = posts[0];

    const item = document.createElement("li");

    item.style.display = "flex";

    item.style.justifyContent = "space-between";

    item.style.alignItems = "center";

    item.style.padding = "10px";

    item.style.backgroundColor = "#D2DAFF";


    item.innerText = post.body;


    item.style.fontSize = "20px";

    item.style.fontFamily = "arial";

    item.style.width = "400px";

    item.style.height = "200px";

    item.style.color = "#5f6769";

    item.style.border = "3px inset #4f81c7";

    item.style.borderRadius = "35px 45px 6px";



    const buttForAllPost = document.createElement("div");

    buttForAllPost.style.display = "flex";

    buttForAllPost.style.width = "100%";

    buttForAllPost.style.alignContent = "center";

    buttForAllPost.style.justifyContent = "center";


    const likePostButt = document.createElement("button");

    likePostButt.style.display = "flex";

    likePostButt.style.width = "60px";

    likePostButt.style.height = "50px";

    likePostButt.style.backgroundImage = 'url("image/like.jpg")';

    likePostButt.style.backgroundSize = 'cover';

    likePostButt.style.backgroundRepeat = 'no-repeat';

    likePostButt.style.backgroundPosition = "center";





    likePostButt.style.marginLeft = "200px";

    likePostButt.style.marginBottom = "0px";

    likePostButt.style.marginTop = "5px";


    likePostButt.style.borderRadius = "15px";

    let likeActiveBtn = true;

    likePostButt.onclick = () => {

        if (likeActiveBtn === true) {

            likeActiveBtn = false;

            likePostButt.style.backgroundImage = 'url("image/heart.png")';

        }

        else {

            likeActiveBtn = true;

            likePostButt.style.backgroundImage = 'url("image/like.jpg")';



        }

    }



    const commButtons = document.createElement("button");

    commButtons.style.display = "flex";

    commButtons.style.flexDirection = "column";

    commButtons.style.width = "100px";

    commButtons.style.paddingTop = "5px";

    commButtons.style.marginBottom = "0px";

    commButtons.style.marginRight = "20px";

    commButtons.style.marginTop = "5px";

    commButtons.style.borderRadius = "15px";

    commButtons.style.fontSize = "15px";

    commButtons.style.fontFamily = "arial";

    commButtons.style.backgroundColor = "#578FCA";

    commButtons.innerText = "Show comments";


    const leaveCommButt = document.createElement("button");

    leaveCommButt.innerText = "Leave Comments";

    leaveCommButt.style.fontSize = "15px";

    leaveCommButt.style.backgroundColor = "#578FCA";

    leaveCommButt.style.borderRadius = "6px";

    leaveCommButt.style.display = "flex";

    leaveCommButt.style.flexDirection = "column";

    leaveCommButt.style.marginBottom = "10px";


    leaveCommButt.onclick = () => {

        const commInput = document.createElement("input");

        commInput.type = "text";

        commInput.style.borderRadius = "4px";

        const submitButt = document.createElement("button");

        submitButt.innerText = "Submit";

        submitButt.style.backgroundColor = "#578FCA";

        submitButt.style.fontSize = "14px";

        submitButt.style.width = "70px";

        submitButt.style.marginLeft = "350px";

        submitButt.style.marginTop = "3px";

        submitButt.style.marginBottom = "3px";

        submitButt.style.borderRadius = "3px";

        leaveCommButt.disabled = true;

        submitButt.disabled = true;

        commInput.addEventListener("input", function () {

            submitButt.disabled = commInput.value.trim() === "";

        });



        submitButt.addEventListener("click", function () {

            submitButt.disabled = true;


            const commValue = "\n" + commInput.value;

            const myComment = document.createElement("p");

            myComment.style.marginTop = "5px";

            myComment.style.padding = "15px";

            myComment.style.backgroundColor = "#D2DAFF";

            myComment.style.borderRadius = "7px";

            myComment.style.border = "3px solid #4f81c7";

            const myAccForm = document.createElement("p");

            myAccForm.innerText = "ID: My account";

            myAccForm.style.margin = "0px";

            myAccForm.style.fontSize = "18px";

            myAccForm.style.width = "150px";

            myComment.appendChild(myAccForm);

            myCommentValue = document.createElement("p");

            myCommentValue.style.margin = "0px";

            myCommentValue.innerText = commValue;

            myComment.appendChild(myCommentValue);



            const deleteBtn = document.createElement("button");

            deleteBtn.style.display = "flex";

            deleteBtn.style.alignItems = "center";

            deleteBtn.style.width = "30px";

            deleteBtn.style.height = "30px";

            deleteBtn.style.marginLeft = "390px"

            deleteBtn.style.borderRadius = "5px";

            deleteBtn.style.backgroundImage = 'url("image/delete.png")';

            deleteBtn.style.backgroundSize = 'cover';

            deleteBtn.style.backgroundRepeat = 'no-repeat';

            deleteBtn.style.backgroundPosition = "center";

            deleteBtn.onclick = () => {



                myComment.style.display = "none";

                deleteBtn.style.display = "none";


            }

            comments.appendChild(deleteBtn);

            comments.appendChild(myComment);

            comments.prepend(myComment);

            comments.prepend(deleteBtn);

            comments.prepend(leaveCommButt);

            commInput.value = "";





            console.log(myComment);
        });



        leaveCommButt.appendChild(commInput);

        leaveCommButt.appendChild(submitButt);


    }






    const comments = document.createElement("div")

    comments.appendChild(leaveCommButt);

    comments.style.display = "flex";

    comments.style.flexDirection = "column";

    comments.style.backgroundColor = "#d5def5";


    getAllUssComm.forEach(comm => {

        if (comm.postId === post.id) {

            const comment = document.createElement("p");

            comment.style.border = "3px solid #4f81c7";

            comment.style.backgroundColor = "#D2DAFF";

            comment.style.borderRadius = "7px";

            const commId = document.createElement("p");

            commId.innerText = "ID: " + comm.email;

            commId.style.margin = "0px";

            const commText = document.createElement("p");

            commText.innerText = "\n" + comm.body;

            comment.appendChild(commId);

            comment.appendChild(commText);

            comment.style.marginTop = "5px";

            comment.style.padding = "15px";

            const deleteBtn = document.createElement("button");

            deleteBtn.style.display = "flex";

            deleteBtn.style.alignItems = "center";

            deleteBtn.style.marginLeft = "390px"

            deleteBtn.style.width = "30px";

            deleteBtn.style.height = "30px";

            deleteBtn.style.borderRadius = "5px";

            deleteBtn.style.backgroundImage = 'url("image/delete.png")';

            deleteBtn.style.backgroundSize = 'cover';

            deleteBtn.style.backgroundRepeat = 'no-repeat';

            deleteBtn.style.backgroundPosition = "center";

            comments.appendChild(deleteBtn);

            comments.appendChild(comment);


            deleteBtn.onclick = async () => {


                await deleteComment(comm.postId);

                comment.style.display = "none";

                deleteBtn.style.display = "none";


            }


        }

    });

    let activeButton = true;


    commButtons.onclick = async () => {

        if (activeButton == false) {

            commButtons.innerText = "Show comments";

            comments.style.display = "none";

            activeButton = true;


        }

        else {

            activeButton = false;

            comments.style.display = "flex";

            buttForAllPost.appendChild(comments);

            buttForAllPost.style.flexWrap = "wrap";

            commButtons.style.marginBottom = "10px";

            likePostButt.style.marginBottom = "10px";

            comments.style.width = "100%";

            commButtons.innerText = "Close comments";

        }


    }





    list.appendChild(item);

    list.appendChild(buttForAllPost);

    buttForAllPost.appendChild(commButtons);

    buttForAllPost.appendChild(likePostButt);





    return list;

};

const creatAllUsersPosts = (posts, getAllUssComm) => {

    const list = document.createElement("div");

    list.style.display = "flex";

    list.style.marginTop = "50px";

    list.style.flexDirection = "column";

    list.style.alignItems = "center";

    posts.forEach(async (post) => {


        const item = document.createElement("p");

        item.style.backgroundColor = "#D2DAFF";

        item.style.width = "400px";

        item.style.alignContent = "center";

        item.style.borderRadius = "10px";

        item.innerText = post.body;

        item.style.border = "3px solid #4f81c7"

        item.style.paddingRight = "5px";

        item.style.paddingLeft = "5px";

        item.style.marginBottom = "4px";


        const itemText = document.createElement("p");

        itemText.innerText = post.body;

        item.appendChild(itemText);



        const buttForAllPost = document.createElement("div");

        buttForAllPost.style.display = "flex";

        buttForAllPost.style.width = "400px";

        buttForAllPost.style.height = "auto";

        buttForAllPost.style.alignContent = "center";

        buttForAllPost.style.justifyContent = "center";


        const likeButtons = document.createElement("button");

        likeButtons.style.width = "40px";

        likeButtons.style.height = "40px";

        likeButtons.style.borderRadius = "6px";


        likeButtons.style.display = "flex";

        likeButtons.style.backgroundImage = 'url("image/like.jpg")';

        likeButtons.style.backgroundSize = 'cover';

        likeButtons.style.backgroundRepeat = 'no-repeat';

        likeButtons.style.backgroundPosition = "center";



        let likeActiveBtn = true;

        likeButtons.onclick = () => {

            if (likeActiveBtn === true) {

                likeActiveBtn = false;

                likeButtons.style.backgroundImage = 'url("image/heart.png")';

            }

            else {

                likeActiveBtn = true;

                likeButtons.style.backgroundImage = 'url("image/like.jpg")';



            }

        }



        const commButtons = document.createElement("button");

        commButtons.style.display = "flex";

        commButtons.style.flexDirection = "column";



        commButtons.style.backgroundColor = "#578FCA";

        commButtons.innerText = "Show comments";

        commButtons.style.marginRight = "230px";

        commButtons.style.borderRadius = "6px";

        const leaveCommButt = document.createElement("button");

        leaveCommButt.innerText = "Leave Comments";

        leaveCommButt.style.backgroundColor = "#578FCA";

        leaveCommButt.style.borderRadius = "6px";

        leaveCommButt.style.display = "flex";

        leaveCommButt.style.flexDirection = "column";

        leaveCommButt.style.marginTop = "10px";

        leaveCommButt.style.marginBottom = "15px";


        leaveCommButt.onclick = () => {

            const commInput = document.createElement("input");

            commInput.type = "text";

            const submitButt = document.createElement("button");

            submitButt.innerText = "Submit";

            leaveCommButt.disabled = true;

            submitButt.disabled = true;


            commInput.addEventListener("input", function () {

                submitButt.disabled = commInput.value.trim() === "";

            });



            submitButt.addEventListener("click", function () {

                submitButt.disabled = true;


                const commValue = commInput.value;

                const myComment = document.createElement("p");

                myComment.style.border = "3px solid #4f81c7";

                myComment.innerText = "ID: My account" + "\n" + "\n" + commValue;

                myComment.style.backgroundColor = "#D2DAFF";

                myComment.style.borderRadius = "7px";

                myComment.style.marginTop = "5px";

                myComment.style.paddingLeft = "5px";

                myComment.style.borderRadius = "7px";




                const deleteBtn = document.createElement("button");

                deleteBtn.style.display = "flex";

                deleteBtn.style.alignItems = "center";

                deleteBtn.style.width = "30px";

                deleteBtn.style.height = "30px";

                deleteBtn.style.borderRadius = "5px";


                deleteBtn.style.marginLeft = "320px";

                deleteBtn.style.backgroundImage = 'url("image/delete.png")';

                deleteBtn.style.backgroundSize = 'cover';

                deleteBtn.style.backgroundRepeat = 'no-repeat';

                deleteBtn.style.backgroundPosition = "center";

                deleteBtn.onclick = () => {



                    myComment.style.display = "none";

                    deleteBtn.style.display = "none";


                }

                comments.appendChild(deleteBtn);

                comments.appendChild(myComment);

                comments.prepend(myComment);

                comments.prepend(deleteBtn);

                comments.prepend(leaveCommButt);

                commInput.value = "";






                console.log(myComment);
            });


            leaveCommButt.appendChild(commInput);

            leaveCommButt.appendChild(submitButt);


        }



        const comments = document.createElement("div");

        comments.appendChild(leaveCommButt);

        comments.style.display = "flex";

        comments.style.flexDirection = "column";

        comments.style.backgroundColor = "#d5def5";


        getAllUssComm.forEach(comm => {

            if (comm.postId === post.id) {

                const comment = document.createElement("p");

                comment.style.border = "3px solid #4f81c7";

                comment.style.marginTop = "5px";

                comment.style.paddingLeft = "5px";

                comment.style.borderRadius = "7px";


                comment.style.backgroundColor = "#D2DAFF";

                const commId = "ID:" + comm.email;

                const commHTML = comm.body;

                const commText = commId + "\n" + "\n" + commHTML;


                comment.innerText = commText;

                const deleteBtn = document.createElement("button");

                deleteBtn.style.display = "flex";

                deleteBtn.style.borderRadius = "5px";

                deleteBtn.style.alignItems = "center";

                deleteBtn.style.width = "30px";

                deleteBtn.style.height = "30px";

                deleteBtn.style.marginLeft = "320px";

                deleteBtn.style.backgroundImage = 'url("image/delete.png")';

                deleteBtn.style.backgroundSize = 'cover';

                deleteBtn.style.backgroundRepeat = 'no-repeat';

                deleteBtn.style.backgroundPosition = "center";


                comments.appendChild(deleteBtn);

                comments.appendChild(comment);


                deleteBtn.onclick = async () => {


                    await deleteComment(comm.postId);

                    comment.style.display = "none";

                    deleteBtn.style.display = "none";


                }


            }

        });

        let activeButton = true;


        commButtons.onclick = async () => {

            if (activeButton == false) {

                commButtons.innerText = "Show comments";

                comments.style.display = "none";

                activeButton = true;

            }

            else {

                activeButton = false;

                comments.style.display = "flex";

                buttForAllPost.appendChild(comments);

                buttForAllPost.style.flexWrap = "wrap";

                comments.style.width = "350px";

                commButtons.innerText = "Close comments";


            }

        }
        list.appendChild(item);

        list.appendChild(buttForAllPost);

        buttForAllPost.appendChild(commButtons);

        buttForAllPost.appendChild(likeButtons);

    });

    return list;

}




const deleteComment = async (commpostId) => {

    try {

        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${commpostId}`, {

            method: "DELETE",

        }


        );


        const data = await resp.json();

        return data;



    } catch (error) {

        console.error("Cant delete comment with id", comment.Id, error);

    }

}



init();