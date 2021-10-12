(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var CustomerSchema = new Schema({
        fName: {
            type: String,
            required: true
        },
        lName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },

        bdate:Date,
            
        psw:String,
        pswrepeat:String,
        roles:String
        }
       
    );


   
   
   
   


    module.exports = mongoose.model('customers', CustomerSchema);
})();