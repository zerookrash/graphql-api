const House = require('../models/Casa'); 

const createHouse = (house) => {
    return new House(house).save();
};

const modHouse = house => {
    return new House(house).modifiedPaths();
}

module.exports = {
    createHouse,
    modHouse,
};