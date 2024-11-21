

const pushArray = ['cow', 'dog','cat','rat','monkey']; 

const psh =  (arr, element) => {

 for (let i = 0; i <= element.length; i++) {

    arr[arr.length]=element;


 }

 return pushArray;

}

const pushMethod = psh(pushArray, 'bird');

console.log(pushMethod);
