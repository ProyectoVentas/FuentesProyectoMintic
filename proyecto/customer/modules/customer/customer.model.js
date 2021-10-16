(function () {
    var mongoose = require('mongoose');
    const validator = require('validator');
    var Schema = mongoose.Schema;
    var bcrypt=require('bcrypt');
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
            require: [true, 'Enter an email address.'],
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
            required: [true, 'Enter a password.'],
            minLength: [4, 'Password should be at least four characters']
        },
        pswrepeat:{
            type: String,
            required: [true, 'Retype your password.'],
            validate: {
                validator: function(el) {
                    return el === this.psw;
                }, message: 'Passwords don\'t match.'
            }
        },
            
        roles:String
        }
       
    );

    CustomerSchema.pre('save', async function(next) {
    
        //hash the password, set hash cost to 12  
        this.password = await bcrypt.hash(this.password, 12);
    
        //remove the passwordConfirmed field 
        this.pswrepeat = undefined; 
        next();
    });
   
   
   
   


    module.exports = mongoose.model('customers', CustomerSchema);
})();