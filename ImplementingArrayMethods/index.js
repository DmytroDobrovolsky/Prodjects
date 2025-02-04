//Task 1 

const _push =  (arr,...arguments) => {


const newArray = [];

for (let i = 0; i<arr.length;i++ ){

    newArray[newArray.length]=arr[i];

}



for (let i = 0; i<arguments.length; i++){


    newArray[newArray.length]=arguments[i];

}

arr =newArray ;

 return arr;

}

let pushArray = ['cow', 'dog','cat','rat','monkey']; 

const pushMethod = _push(pushArray, 'bird','mouse');

console.log("task1:",pushMethod);


//Task 2


const _join =  (arr) => {

    let string = "";

    for(let ar of arr){

        string += ar;

        
        

    }



return string;
}

let joinArray = ['cow', 'dog','cat','rat','monkey']; 


const joinMethod = _join(joinArray);

console.log("task2:",joinMethod);

//Task 3

let popArray = ['cow', 'dog','cat','rat','monkey']; 


const _pop =  (arr) => {

    let newSupportArray = [];

    let popElement = arr[arr.length - 1];

    for (let i = 0; i < arr.length - 1; i++) {

        newSupportArray[newSupportArray.length]=arr[i];


    }

    arr = newSupportArray;

    return popElement;
}
const popMethod = _pop(popArray);

console.log("task3:",popMethod);

//Task 4

let unshiftArray = ['cow', 'dog','cat','rat','monkey']; 



const _unshift =  (arr,...elements) => {

    let arraySupport = [];


for (let i  = 0; i  < elements.length; i ++) {

    arraySupport[arraySupport.length]=elements[i];

    
}

for (let i = 0; i < arr.length; i++) {

    arraySupport[arraySupport.length]=arr[i];

}

arr = arraySupport;

return arr;

}

const unshiftMethod = _unshift(unshiftArray,'mouse','frog');

console.log("task4:",unshiftMethod);

//Task 5

let shiftArray= ['dog','cat','rat','monkey']; 

const _shift =  (arr) => {

 const startIndex = 1;

 const shiftElem = arr[0];

let supArr = [];

for (let i = startIndex; i <arr.length; i++){

    supArr[supArr.length]=arr[i];

}

arr = supArr;

return shiftElem;

}


const shiftMethod = _shift(shiftArray);

console.log("task5:",shiftMethod);

//Task 6 

let indexOfArray = ['cow', 'dog','cat','rat','monkey']; 

const word = 'cow';

const _indexOf =  (arr,element) => {

let indexNumber = 0;

for (let i = 0; i<arr.length;i++){

    indexNumber += 1;

if (arr[i]==word){

    return indexNumber;
}
else if(arr[i]!==word && indexNumber == arr.length){

indexNumber = -1;

}

}

return indexNumber;

}


const _indexOfMethod = _indexOf(indexOfArray,word);

console.log("task6:",_indexOfMethod);

//Task 7

let includesArray = ['cow', 'dog','cat','rat','monkey']; 

const elem = 'monkey';

const _includes =  (arr,element) => {

let includesResult = 0;

let includesNumber = 0;

for (let i = 0; i<arr.length;i++){

    includesNumber += 1;

if (arr[i]==elem){

    includesResult = true;

    return includesResult;
}
else if(arr[i]!==elem && includesNumber == arr.length){

includesResult = false;

}

}

return includesResult;

}


const _includesMethod = _includes(includesArray,elem);

console.log("task7:",_includesMethod);

//Task 8

let reverseArray = ['cow', 'dog','cat','rat','monkey']; 

const _reverse =  (arr) => {

    let supportArr = [];

    for(let i = arr.length - 1; i >= 0; i--){

        supportArr[supportArr.length]=arr[i];      
    }

arr = supportArr;

return arr;

}


const _reverseMethod = _reverse(reverseArray);

console.log("task8:",_reverseMethod);

//Task 9

let sliceArray = ['cow', 'dog','cat','rat','monkey']; 

const _slice =  (arr,elemStart,elemEnd) => {

    let resSliceArr = [];


    for (let i = elemStart;i<=elemEnd;i++ ){

resSliceArr[resSliceArr.length]=arr[i];      

    }

    return resSliceArr;
}


const _sliceMethod = _slice(sliceArray,0,2);

console.log(_sliceMethod);

//Task 10

 const wordsArr = [ "I", "love", "you", "so", "much", "honey"] ;

 const _lastIndexOf =  (arr,elem) => {

    let supportNumber = 0;

    let undef = -1 ;

for(let i = arr.length - 1; i >= 0; i--){

    supportNumber+=1;


    if(arr[i] == elem){

        

        return arr.length - supportNumber;
    }

    else if (arr[i] !== elem && i == 0) {

return undef;

    }
 }

 }

const _lastIndexOfMethod = _lastIndexOf(wordsArr,"love");

console.log("task9:",_lastIndexOfMethod);




