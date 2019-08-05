const House = require('../models/Casa'); 

const createHouse = (house) => {
    return new House(house).save();
};

module.exports = {
    createHouse,
};