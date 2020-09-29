class UserHandler{
    constructor(){
        this.users = []
    }

    addUser(name){
        this.users.push(name)
    }

    getAllUsers(){
        return this.users
    }

    isUserExist(userName){
        return this.users.some( user => user.name === userName)
    }

    getUser(name){
        var user = this.users.find((user) => {
            if (user.name == name){
                return user;
            }
        })
        if (user === undefined || user === null) {

            return null;
        }
        return user

    }
}

module.exports = {UserHandler};
