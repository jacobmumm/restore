"use strict";
const action_1 = require('./action');
const constants_1 = require('../resources/constants');
const splitSchema_1 = require('../utils/splitSchema');
function findOne(config, args) {
    return (dispatch, store) => {
        dispatch(action_1.action(constants_1.FINDING_ONE, config.className));
        return config.adapter.execute({
            url: config.url,
            method: 'GET'
        })
            .then(res => {
            dispatch(splitSchema_1.splitSchema(config.schema, config.className, res.data));
            return res.data;
        }, error => {
            dispatch(action_1.action(constants_1.ERROR, config.className, error));
            return config.$q.reject(error);
        });
    };
}
exports.findOne = findOne;
//# sourceMappingURL=findOne.js.map