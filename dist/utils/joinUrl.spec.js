"use strict";
const joinUrl_1 = require('./joinUrl');
describe('joinUrl', () => {
    let baseUrl = '/base-url';
    it('does not join with a slash if the URL begins with a special character', () => {
        let url = '.json';
        let joined = joinUrl_1.joinUrl(url, baseUrl, undefined);
        expect(joined).toEqual('/base-url.json');
    });
    it('joins a URL', () => {
        let url = 'resources/';
        let joined = joinUrl_1.joinUrl(url, baseUrl, undefined);
        expect(joined).toEqual('/base-url/resources');
    });
    it('allows the trailing slash to be preserved', () => {
        let url = 'resources/';
        let removeTrailingSlash = false;
        let joined = joinUrl_1.joinUrl(url, baseUrl, removeTrailingSlash);
        expect(joined).toEqual('/base-url/resources/');
    });
});
//# sourceMappingURL=joinUrl.spec.js.map