(function () {
    var mongoose = require('mongoose');
<<<<<<< HEAD

    var Schema = mongoose.Schema;

=======
    const validator = require('validator');
    var Schema = mongoose.Schema;
    var bcrypt=require('bcrypt');
>>>>>>> 67d5b702dec92062ff0ff5c045751d7ad4c99c3e
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
<<<<<<< HEAD
            required: true
=======
            require: [true, 'Enter an email address.'],
            unique: [true, 'That email address is taken.'],
            lowercase: true,
            validate: [validator.isEmail, 'Enter a valid email address.']
>>>>>>> 67d5b702dec92062ff0ff5c045751d7ad4c99c3e
        },
        phone: {
            type: Number,
            required: true
        },

        bdate:Date,
            
<<<<<<< HEAD
        psw:String,
        pswrepeat:String,
=======
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
            
>>>>>>> 67d5b702dec92062ff0ff5c045751d7ad4c99c3e
        roles:String
        }
       
    );

<<<<<<< HEAD

=======
    CustomerSchema.pre('save', async function(next) {
    
        //hash the password, set hash cost to 12  
        this.password = await bcrypt.hash(this.password, 12);
    
        //remove the passwordConfirmed field 
        this.pswrepeat = undefined; 
        next();
    });
>>>>>>> 67d5b702dec92062ff0ff5c045751d7ad4c99c3e
   
   
   
   


    module.exports = mongoose.model('customers', CustomerSchema);
})();