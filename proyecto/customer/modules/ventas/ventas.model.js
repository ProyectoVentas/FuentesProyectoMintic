(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var VentasSchema = new Schema({
        fechaCreacion: {
            type: Date,
            required: true
        },
        embalaje: {
            type: String,
            required: true
        },
        despachoRuta: {
            type: String,
            required: true
        },
        ubicacion: {
            type: String,
            required: true
        },

        estado:String,
            
        ruta:String,
        medioPago:String,
        vendedor:String,
        cliente:String
        }
       
    );


   
   
   
   


    module.exports = mongoose.model('ventas', VentasSchema);
})();