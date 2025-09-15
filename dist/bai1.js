"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculate = (a, b, callBack) => {
    const result = a + b;
    callBack(result);
};
const handleLogTotal = (result) => {
    console.log("Tổng: ", result);
};
calculate(5, 10, handleLogTotal);
