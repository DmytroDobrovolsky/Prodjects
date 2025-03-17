const getRandomChinese = async (length) => {

    let chinString = "";

    let i = 0;

    while (i < length) {

        const prom = await new Promise((resolve, reject) => {

            setTimeout(() => {

                i += 1;

                let dataInfo = Date.now();


                const toStr = dataInfo.toString();

                let string = toStr.slice(-5);

                let number = +string;

                let chinWord = String.fromCharCode(number);

                resolve(chinWord);



            }, 50);

        });

        chinString += prom ;
    }

    return chinString;

}



const init = async () => {

    const chinString = await getRandomChinese(5);

    console.log(chinString);


}


init();