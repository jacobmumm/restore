"use strict";
const action_1 = require('./action');
const constants_1 = require('../resources/constants');
const splitSchema_1 = require('../utils/splitSchema');
// TODO: Implement this function. Need to configure what to do after destroying server-side.
function destroy(config, id, args) {
    return (dispatch, store) => {
        dispatch(action_1.action(constants_1.DESTROYING, config.className));
        return config.adapter.execute({
            url: id,
            method: 'DELETE'
        })
            .then(res => {
            alert("Need to implement what to do after delete (remove from store)");
            dispatch(splitSchema_1.splitSchema(config.schema, config.className, res.data));
            return res.data;
        }, error => {
            dispatch(action_1.action(constants_1.ERROR, config.className, error));
            return config.$q.reject(error);
        });
    };
}
exports.destroy = destroy;
//# sourceMappingURL=destroy.js.map