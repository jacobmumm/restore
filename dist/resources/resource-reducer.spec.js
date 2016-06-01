"use strict";
const resource_reducer_1 = require('./resource-reducer');
require('angular-mocks');
const constants_1 = require('./constants');
let type = 'CASE';
let reducer;
describe('defaultReducer', () => {
    beforeEach(() => {
        reducer = resource_reducer_1.defaultReducer(type);
    });
    it('returns a default state', () => {
        expect(reducer(undefined, {})).toEqual({
            result: [],
            loadingMany: false,
            loadingOne: false,
            deleting: false,
            patching: false,
            adding: false,
            items: {}
        });
    });
    it('should handle FINDING_CASE', () => {
        expect(reducer(undefined, {
            type: `${constants_1.FINDING}_${type}`
        })).toEqual({
            result: [],
            loadingMany: true,
            loadingOne: false,
            deleting: false,
            patching: false,
            adding: false,
            items: {}
        });
    });
    it('should handle FINDING_ONE_CASE', () => {
        expect(reducer(undefined, {
            type: `${constants_1.FINDING_ONE}_${type}`,
        })).toEqual({
            result: [],
            loadingMany: false,
            loadingOne: true,
            deleting: false,
            patching: false,
            adding: false,
            items: {}
        });
    });
    it('should handle DESTROYING_CASE', () => {
        expect(reducer(undefined, {
            type: `${constants_1.DESTROYING}_${type}`
        })).toEqual({
            result: [],
            loadingMany: false,
            loadingOne: false,
            deleting: true,
            patching: false,
            adding: false,
            items: {}
        });
    });
    it('should handle PATCHING_CASE', () => {
        expect(reducer(undefined, {
            type: `${constants_1.PATCHING}_${type}`
        })).toEqual({
            result: [],
            loadingMany: false,
            loadingOne: false,
            deleting: false,
            patching: true,
            adding: false,
            items: {}
        });
    });
    it('should handle ADDING_CASE', () => {
        expect(reducer(undefined, {
            type: `${constants_1.ADDING}_${type}`
        })).toEqual({
            result: [],
            loadingMany: false,
            loadingOne: false,
            deleting: false,
            patching: false,
            adding: true,
            items: {}
        });
    });
    it('should handle FIND_CASE', () => {
        expect(reducer(undefined, {
            type: `${constants_1.FIND}_${type}`,
            payload: {
                result: ['/cases/1'],
                items: {
                    '/cases/1': {
                        _links: { self: { href: '/cases/1' } }, _embedded: { entries: [{}] }
                    }
                }
            }
        })).toEqual({
            result: ['/cases/1'],
            loadingMany: false,
            loadingOne: false,
            deleting: false,
            patching: false,
            adding: false,
            items: {
                '/cases/1': {
                    _links: { self: { href: '/cases/1' } }, _embedded: { entries: [{}] }
                }
            },
            meta: {}
        });
    });
});
//# sourceMappingURL=resource-reducer.spec.js.map