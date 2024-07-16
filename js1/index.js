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

const evenNumber = floorSum %2;
console.log('evenNumber',evenNumber); //визначення парності суми округлених товарів//

const yourRest = 500 - sum;
console.log('yourRest',yourRest); //сума решти //

const averageValue = (iphone + samsung + fly)/3;
console.log('averageValue:',averageValue); //середнє значеня цін товарів//

const floorValue = averageValue.toFixed(2);
console.log("floorValue:",floorValue); //округлене середнє значеня до сотих//

const personalDiscont = Math.random () * 10 + 1;
console.log("personalDiscont:",personalDiscont); //персональна знижка - 9%//

const discont = 20.688975; //знижка (9%)//

const sumWithDiscont = sum - discont;
console.log("sumWithDiscont:",sumWithDiscont); //сума до оплати з врахуванням знижки//

const sumWithDiscontFloor = sumWithDiscont.toFixed(2);
console.log('sumWithDiscontFloor:',sumWithDiscontFloor); //сума до оплати з врахуванням знижки округлена до сотих//

const markUp = floorPrice /2;
console.log('markUp:',markUp); //націнка//

const discontFloor = discont.toFixed(2);
console.log('discontFloor:',discontFloor); //округлення числа знижки//

const profit = markUp - discontFloor;
console.log('profit:',profit); //чистий прибуток//

//Мінімальна ціна:15.678 , максимальна ціна:123.965 , сума товарів:229.8775 , сума округлених товарів:228 , сума товарів округлена до сотень:300 , чи є сума товарів парним числом:так(0) , сума решти при оплаті клієнтом 500 грн:270.1225, середнє значення цін округлене до сотих:76.63 , випадкова знижка:9% ,сума до оплати зі знижкою округлена до сотих:209.19 , чистий прибуток:129.31 .//
