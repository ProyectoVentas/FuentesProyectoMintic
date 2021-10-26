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

            required: true,

        
            unique: [true, 'That email address is taken.'],
            lowercase: true,
            validate: [validator.isEmail, 'Enter a valid email address.']

        },
        phone: {
            type: Number,
            required: true
        },

        bdate:Date,
            

        password:{
            type: String,
     
        },
        pswrepeat:{
            type: String,

            
        },

        roles:String
        }
       
    );




   
   
   
   


    module.exports = mongoose.model('customers', CustomerSchema);
})();