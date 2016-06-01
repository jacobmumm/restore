"use strict";
const utils_1 = require('../utils');
describe('flattenEmbedded', () => {
    it('flattens embedded data', () => {
        let value = 'some value';
        let data = {
            _embedded: {
                p: value
            }
        };
        let flattened = utils_1.flattenEmbedded(data);
        expect(flattened.p).toBe(value);
    });
});
//# sourceMappingURL=flattenEmbedded.spec.js.map