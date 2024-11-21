//Task 1 

let pushArray = ['cow', 'dog','cat','rat','monkey']; 



const _push =  (arr,elem,elem1) => {

let string = "";

const newArray = [];

for (let i = 0; i<=arguments.length; i++){



    console.log(i);
    
    //newArray[newArray.length]=ar;
   // arr[arr.length]=element;


}


console.log(newArray);

 return pushArray;

}

const pushMethod = _push(pushArray, 'bird','mouse');


//Task 2

let joinArray = ['cow', 'dog','cat','rat','monkey']; 


const _join =  (arr) => {

    let string = "";

const newArray = [];

    for(let ar of arr){

        string += ar;

        
        

    }

    newArray[newArray.length]=string;

joinArray = newArray;

return joinArray;
}

const joinMethod = _join(joinArray);

console.log(joinMethod);

