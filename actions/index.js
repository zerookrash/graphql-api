const testActions = require('./testActions');
const authActions = require('./authActions');
const userActions = require('./userActions');
const houseActions = require('./houseActions');

module.exports = {
    ...testActions,
    ...authActions,
    ...userActions,
    ...houseActions,
};