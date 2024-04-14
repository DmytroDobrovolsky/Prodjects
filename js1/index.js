const iphone = 15.678;
const samsung = 123.965;
const fly = 90.2345;

const maxPrice = Math.max(iphone, samsung, fly);
console.log('maxPrice:', maxPrice); //максимальна ціна//

const minPrice = Math.min(iphone, samsung, fly);
console.log('minPrice:', minPrice); //мінімальна ціна//

const sum = iphone + samsung + fly;
console.log('sum:', sum); //сума цін//

const iphoneFloor = Math.floor(iphone);
console.log('iphoneFloor', iphoneFloor); //округлення ціни айфона//

const samsungFloor = Math.floor(samsung);
console.log('samsungFloor', samsungFloor); //округлення ціни самсунга//

const flyFloor = Math.floor(fly);
console.log('flyFloor', flyFloor); //округлення ціни флай//

const floorSum = flyFloor + samsungFloor + iphoneFloor;
console.log('floorSum', floorSum); //сума округлених товарів//

const floorPrice = Math.ceil(floorSum/100)*100;
console.log('floorPrice',floorPrice); //округлення суми товарів до більшої частини//

const evenNumber = floorSum/2;
console.log('evenNumber',evenNumber); //визначення парності суми округлених товарів//

const yourRest = 500 - sum;
console.log('yourRest',yourRest); //сума решти //

const iphoneTwo = iphone.toFixed(2);
console.log('iphoneTwo:',iphoneTwo); //округлення суми айфона до двох знаків після коми//

const samsungTwo = samsung.toFixed(2);
console.log('samsungTwo:',samsungTwo); //округлення суми самсунга до двох знаків після коми//

const flyTwo = fly.toFixed(2);
console.log('flyTwo:',flyTwo); //округлення суми флай до двох знаків після коми//

const allElements = [iphoneTwo,samsungTwo,flyTwo];
const averageValue = allElements.reduce(flyTwo, samsungTwo, iphoneTwo);
console.log('averageValue:',averageValue);
