"use strict";
const transform_1 = require('./transform');
describe('transform', () => {
    it('transforms a nested object', () => {
        var data = {
            foo: {
                bar: 'fizz'
            }
        };
        let callback = (key, value) => {
            if (key === 'bar' && value === 'fizz') {
                return 'buzz';
            }
            return value;
        };
        let transformed = transform_1.transform(data, callback);
        expect(transformed.foo.bar).toBe('buzz');
    });
});
//# sourceMappingURL=transform.spec.js.map