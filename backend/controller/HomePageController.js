const model = require('../model/Model');

module.exports = {

    getAllBooks: async(category)=>{
        if (category){
            return model.fetchAllBooks(category);
        }else{
            return model.fetchAllBooks("All");
        }
        return null;
    },
    searchResult: async(query)=>{
        return model.fetchSearchResult(query);
    }
}