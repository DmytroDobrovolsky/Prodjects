//Task 1 

let pushArray = ['cow', 'dog','cat','rat','monkey']; 



const _push =  (arr,...arguments) => {


const newArray = [];

for (let i = 0; i<arr.length;i++ ){

    newArray[newArray.length]=arr[i];

}



for (let i = 0; i<arguments.length; i++){


    newArray[newArray.length]=arguments[i];

}



 return newArray;

}

const pushMethod = _push(pushArray, 'bird','mouse');

console.log(pushMethod);


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

//Task 3

let popArray = ['cow', 'dog','cat','rat','monkey']; 

let newSupportArray = [];

const _pop =  (arr) => {

    for (let i = 0; i < popArray.length - 1; i++) {

        newSupportArray[newSupportArray.length]=popArray[i];


    }

    popArray = newSupportArray;

    return popArray;
}

const popMethod = _pop(popArray);

console.log(popMethod);

//Task 4

let unshiftArray = ['cow', 'dog','cat','rat','monkey']; 

let arraySupport = [];


const _unshift =  (arr,...elements) => {

for (let i  = 0; i  < elements.length; i ++) {

    arraySupport[arraySupport.length]=elements[i];

    
}

for (let i = 0; i < arr.length; i++) {

    arraySupport[arraySupport.length]=arr[i];

}

unshiftArray = arraySupport;

return unshiftArray;

}

const unshiftMethod = _unshift(unshiftArray,'mouse','frog');

console.log(unshiftMethod);

//Task 5

let shiftArray = ['cow', 'dog','cat','rat','monkey']; 

const startIndex = 1;

let supArr = [];

const _shift =  (arr) => {

for (let i = startIndex; i <shiftArray.length; i++){

    supArr[supArr.length]=shiftArray[i];

}

shiftArray = supArr;

return shiftArray;

}


const shiftMethod = _shift(shiftArray);

console.log(shiftMethod);

//Task 6 

let indexOfArray = ['cow', 'dog','cat','rat','monkey']; 

let indexNumber = 0;

const word = 'monkey';

const _indexOf =  (arr,element) => {

for (let i = 0; i<indexOfArray.length;i++){

    indexNumber += 1;

if (indexOfArray[i]==word){

    return indexNumber;
}
else if(indexOfArray[i]!==word && indexNumber == indexOfArray.length){

indexNumber = -1;

}

}

return indexNumber;

}


const _indexOfMethod = _indexOf(indexOfArray,word);

console.log(_indexOfMethod);

//Task 7

let includesArray = ['cow', 'dog','cat','rat','monkey']; 

let includesResult = 0;

let includesNumber = 0;

const elem = 'monkey';

const _includes =  (arr,element) => {

for (let i = 0; i<includesArray.length;i++){

    includesNumber += 1;

if (includesArray[i]==elem){

    includesResult = true;

    return includesResult;
}
else if(includesArray[i]!==elem && includesNumber == includesArray.length){

includesResult = false;

}

}

return includesResult;

}


const _includesMethod = _includes(includesArray,elem);

console.log(_includesMethod);

//Task 8

let reverseArray = ['cow', 'dog','cat','rat','monkey']; 

let supportArr = [];

const _reverse =  (arr) => {

    for(let i = arr.length - 1; i >= 0; i--){

        supportArr[supportArr.length]=reverseArray[i];      
    }

reverseArray = supportArr;

return reverseArray;

}


const _reverseMethod = _reverse(reverseArray);

console.log(_reverseMethod);

//Task 9

let sliceArray = ['cow', 'dog','cat','rat','monkey']; 

let resSliceArr = [];

const _slice =  (arr,elemStart,elemEnd) => {

    for (let i = elemStart;i<=elemEnd;i++ ){

resSliceArr[resSliceArr.length]=sliceArray[i];      

    }

    return resSliceArr;
}


const _sliceMethod = _slice(sliceArray,0,2);

console.log(_sliceMethod);

//Task 10

 const words = "I love you so much honey" ;

 let supportNumber = 0;

 const _lastIndexOf =  (str,elem) => {

for(let i = str.length - 1; i >= 0; i--){

    supportNumber+=1;

    if(str[i]==elem){

        return words.length - supportNumber;
    }
}

 }

const _lastIndexOfMethod = _lastIndexOf(words,"o");

console.log(_lastIndexOfMethod);




