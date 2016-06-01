"use strict";
const utils_1 = require('../utils');
const resource_adapter_config_1 = require('./resource-adapter-config');
/*
* Base Adapter for an API. The adapter handles
*/
class ResourceAdapter {
    constructor($http, $q, config = new resource_adapter_config_1.ResourceAdapterConfig()) {
        this.$http = $http;
        this.$q = $q;
        this.config = config;
        // Base URL for the API
        this.baseUrl = "/";
        // Do or don't remove trailing slash 
        this.removeTrailingSlash = true;
        // Date pattern to be used to find dates in returns from the API
        this.datePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
        if (!this.interceptors) {
            this.interceptors = [];
        }
    }
    generateSlug(entity) {
        return entity.id;
    }
    // Execute request based on given DsResourceAdapterConfig
    execute(config) {
        let requestConfig = this.config.extend(config).build();
        return this.doRequest(requestConfig);
    }
    // Default reviver (override this)
    reviver(key, value) {
        return value;
    }
    doRequest(config) {
        return utils_1.generateConfig(this.$q, this, config)
            .then(config => this.$http(config)
            .then(config.interceptor.response, config.interceptor.responseError));
    }
    // Default response transform
    transformResponse(data, headers) {
        return utils_1.parseJson(this.datePattern, this.reviver, data, headers);
    }
    // Default request transform
    transformRequest(data, headers) {
        return JSON.stringify(data, (key, value) => {
            if (['@viewModel', '@descriptor'].indexOf(key) == -1) {
                return value;
            }
        });
    }
}
exports.ResourceAdapter = ResourceAdapter;
//# sourceMappingURL=resource-adapter.js.map