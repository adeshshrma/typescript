"use strict";
const voidFunction = () => {
    console.log('void function');
};
voidFunction();
const addAndHandle = (n1, n2, cb) => {
    const result = n1 + n2;
    cb(result);
};
addAndHandle(43, 22, (result) => {
    console.log(result);
});
// never type function
const throwError = (msg, code) => {
    throw { msg: msg, code: code };
};
throwError('something went wrong', 500);
