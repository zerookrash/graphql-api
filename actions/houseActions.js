const House = require('../models/Casa'); 

const createHouse = (house) => {
    return new House(house).save();
};

const ModHouse = house => {
    return new House(house).modifiedPaths();
}

const upHouse = (_id) => {
    console.log(_id)
}

const deleteHouse = (_id) => {
    console.log(_id)
}


module.exports = {
    createHouse,
    ModHouse,
    upHouse,
    deleteHouse,
};