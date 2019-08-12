const actions = require('../actions');
const { authUserById } = require('../utils');

const signup = (_, { data }) => {
    return actions.signup(data)
                  .then( res => res)
                  .catch( err => err );
};

const login = (_, {email, password}) => {
    return actions.login(email, password)
                  .then(res => res)
                  .catch(err => err);
};

const createUser = async (_, { data }, context) => {
    const user = await authUserById(context);
    if (!user) throw new Error("No estás autenticado");
    return actions.createUser(data)
                  .then( newUser => newUser )
                  .catch( err => err);
};

const createHouse = async (_, { dataHouse }, context) => {
    const house = await authUserById(context);
    if(!house) throw new Error("No está autenticado");
    return actions.createHouse(dataHouse)
                  .then(newHouse => newHouse)
                  .catch( err => err );
};

const ModHouse = async (_, house, context) => {
    const actualHouse = await authUserById(context);
    console.log(house);
}

module.exports = {
    signup,
    login,
    createUser,
    createHouse,
    ModHouse,
};
