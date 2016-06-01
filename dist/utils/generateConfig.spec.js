"use strict";
const resource_adapter_1 = require('../resources/resource-adapter');
const utils_1 = require('../utils');
var $http;
var $q;
var adapter;
var config;
var $rootScope;
describe('generateConfig', () => {
    beforeEach(inject(function (_$http_, _$httpBackend_, _$q_, _$rootScope_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        adapter = new resource_adapter_1.ResourceAdapter($http, $q);
        config = {
            method: 'GET',
            url: '/foo/bar'
        };
    }));
    it('is defined', () => {
        expect(utils_1.generateConfig).toBeDefined();
    });
    it('returns a promise', () => {
        let request = utils_1.generateConfig($q, adapter, config);
        expect(request.then).toBeDefined();
    });
    it('adds default transforms', () => {
        utils_1.generateConfig($q, adapter, config).then((config) => {
            expect(config.transformResponse).toBeDefined();
            expect(config.transformRequest).toBeDefined();
        });
        $rootScope.$digest();
    });
    it('sets up default interceptors', () => {
        utils_1.generateConfig($q, adapter, config).then((config) => {
            expect(config.interceptor.response).toBeDefined();
            expect(config.interceptor.responseError).toBeDefined();
        });
        $rootScope.$digest();
    });
});
//# sourceMappingURL=generateConfig.spec.js.map