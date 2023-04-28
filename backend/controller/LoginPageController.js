const model = require('../model/Model');

module.exports = {


    loginUser:async(loginRequest)=>{
       return await model.login(loginRequest);
    },
    registerUser: async(registerRequest)=>{
        let request = {
            "name":registerRequest.name,
            "email":registerRequest.email,
            "password":registerRequest.registerPassword
        }
        let res = await model.register(request);
        return res;
    }

}