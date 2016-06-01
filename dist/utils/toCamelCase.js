"use strict";
const tokenize_1 = require('./tokenize');
function toCamelCase(string) {
    if (!string) {
        return;
    }
    string = tokenize_1.tokenize(string).replace(/[ ](\w)/g, (g0, g1, g2) => g1.toUpperCase());
    return string = string[0].toLowerCase() + string.slice(1);
}
exports.toCamelCase = toCamelCase;
//# sourceMappingURL=toCamelCase.js.map