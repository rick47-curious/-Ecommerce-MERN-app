const { v4: uuidv4 } = require('uuid');
const model = require('../model/Model');

module.exports = {

    placeOrder: async(payload)=>{
        let modelBody = {
            "id": uuidv4(),
            "OrderDate": new Date().toLocaleDateString(),
            "PlacedBy":payload.registeredUser,
            "Status":"In-Process"
        }
        return await model.addOrder(modelBody);
    },
    getOrderHistory: async(payload)=>{
        return await model.getOrderList({"PlacedBy":payload.registeredUser});
    }
}