const numbers : number[] = [1,2,3,4,5,6,7]

const processArray = (callback : (item:number) => void, array : (number | undefined)[]) => {

    for (let i = 0; i < array.length; i++) {

        if (array[i] !== undefined) {
            callback(array[i]!);
        }
    }
}
const callbackFunction = (item : number) => {

    setTimeout(()=>{

        console.log(`Phần tử thứ : ${item}`);

    },1000)

}

processArray(callbackFunction, numbers)