const init = async () => {  

    const root = document.getElementById("start");

    if (!root) {

        console.error("no root element");

    }


    const users = await getUsers();

    createUsersUi(root, users);

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

const createUsersUi = (root, users) => {

    users.forEach((user) => {

        const title = document.createElement("h2");

        title.innerText = user.name;

        const box = document.createElement("div");

        const deleteBtn = document.createElement("button");

        const postsBtn = document.createElement("button");




        deleteBtn.innerText = "delete";
        postsBtn.innerText = "Show posts";


        box.style.display = "flex";

        box.style.gap = "30px";

        deleteBtn.onclick = async () => {

            box.style.background = "#ccc";

            await deleteUser(user.id);

            box.style.display = "none";

        }


        postsBtn.onclick = async () => {

            box.style.background = "#cca";

            const posts = await getUsersPosts(user.id);            

            const list = createUsersPosts(posts);

            box.appendChild(list);

            box.style.background = "#fff";

            postsBtn.style.display = "none";


        }


        box.appendChild(title);

        box.appendChild(deleteBtn);

        box.appendChild(postsBtn);



        root.appendChild(box);

    });
}

const deleteUser = async (userId) => {

    try {

        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {

            method: "DELETE",

        }


        );


        const data = await resp.json();

        return data;



    } catch (error) {

        console.error("Cant delete user with id", userId, error);

    }

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
    



    const createUsersPosts = (posts) => {

        const list = document.createElement("ul");

        posts.forEach((post) => {

            const item = document.createElement("li");

            item.innerText = post.body;

            list.appendChild(item);

        });

        return list;

    };




init();