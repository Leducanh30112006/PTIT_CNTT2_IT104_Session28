"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myFilter = (callBack, targetValue, array) => {
    const filterArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === targetValue && array[i] !== undefined) {
            filterArr.push(array[i]);
        }
    }
    callBack(filterArr);
};
const displayValue = (items) => {
    console.log(`[${items}]`);
};
myFilter(displayValue, 3, [2, 5, 4, 7, 6, 1, 5, 2, 1, 2]);
