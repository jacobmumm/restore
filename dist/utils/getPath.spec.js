"use strict";
const getPath_1 = require('./getPath');
describe('getPath', () => {
    it('pulls data from the base of an object', () => {
        let obj = {
            id: 101
        };
        expect(getPath_1.getPath(obj));
    });
});
//# sourceMappingURL=getPath.spec.js.map