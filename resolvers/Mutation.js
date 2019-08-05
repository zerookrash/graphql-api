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

const createNewHouse = async (_, { data }, context) => {
    const hosue = await authUserById(context);
    if(!user) throw new Error("No está autenticado");
    return actions.createHouse(data)
                  .then(newHouse => newHouse)
                  .catch( err => err );
};

module.exports = {
    signup,
    login,
    createUser,
    createNewHouse,
};
