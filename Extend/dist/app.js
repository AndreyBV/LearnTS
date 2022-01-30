"use strict";
const btn = document.querySelector('#btn');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
    console.log('ddd');
});
let anyFlag;
const glb = 'msg';
function logInfo(data, _a) {
    console.log(data);
    anyFlag = true;
    console.log(anyFlag);
}
logInfo('test');
function multiple(a, b) {
    if (a && b) {
        return a * b;
    }
    return a;
}
//# sourceMappingURL=app.js.map