(function () {
    'use strict';

    module.exports = {
        createVentas: createVentas,
        fetchVentas: fetchVentas,
        fetchVentasById: fetchVentasById,
        updateVentas: updateVentas,
        deleteVentas: deleteVentas
    };

    var VentasModel = require('./ventas.module')().VentasModel;

    function createVentas(ventas) {
        return VentasModel.create(ventas);
    }

    function fetchVentas() {
        return VentasModel.find({})
            .exec();
    }

    function fetchVentasById(ventasId) {
        return VentasModel.findById(ventasId)
            .exec();
    }

    function updateVentas(ventasId, ventas) {
        return VentasModel
            .findByIdAndUpdate(ventasId, ventas, {new: true})
            .exec();
    }

    function deleteVentas(ventasId) {
        return VentasModel
            .findByIdAndRemove(ventasId)
            .exec();
    }

})();