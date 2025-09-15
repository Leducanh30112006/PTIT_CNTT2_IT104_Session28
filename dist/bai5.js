"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkCondition = (display, condition) => {
    display(condition);
};
const displayFunction = (condition) => {
    setTimeout(() => {
        console.log("Điều kiện trả về: ", condition);
    }, 1500);
};
checkCondition(displayFunction, true);
