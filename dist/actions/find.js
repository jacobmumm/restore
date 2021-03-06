"use strict";
const action_1 = require('./action');
const constants_1 = require('../resources/constants');
const splitSchema_1 = require('../utils/splitSchema');
function find(config, args) {
    return (dispatch, store) => {
        dispatch(action_1.action(constants_1.FINDING, config.className));
        // TODO: This should not be tied to an HTTP request. What if the 
        // data needs to be stored in local storage? Should simply tell 
        // the adapter to load something and pass config data.
        return config.adapter.execute(config)
            .then(res => {
            dispatch(splitSchema_1.splitSchema(config.schema, config.className, res.data));
            return res.data;
        }, error => {
            dispatch(action_1.action(constants_1.ERROR, config.className, error));
            return config.$q.reject(error);
        });
    };
}
exports.find = find;
//# sourceMappingURL=find.js.map