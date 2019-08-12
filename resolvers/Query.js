const actions = require('../actions');

const hello = (_, args) => {
    return actions.hello();
}

const upHouse = (_, args) => {
    return actions.upHouse();
}

module.exports = {
    hello,
}
