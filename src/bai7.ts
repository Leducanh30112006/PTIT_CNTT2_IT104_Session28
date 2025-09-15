const myForEach = <T>(callBack : (currValue:T, index:number, array: Array<T>) => void, array : Array<T>) => {

    for (let i = 0; i < array.length; i++) {

        if (array[i] !== undefined) {
            callBack(array[i] as T, i, array)
        }
    }
}


const display = <T>(currValue:T, index:number, array: T[]) => {
    
    console.log(`Phần tử: ${currValue}  | Vị trí: ${index}  | Array: [${array}]`);

}

myForEach(display,[1,2,3,4,5,6,7,8])