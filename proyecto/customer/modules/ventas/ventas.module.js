(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            VentasController: require('./ventas.controller'),
            VentasMiddleware: require('./ventas.middleware'),
            VentasService: require('./ventas.service'),
            VentasModel: require('./ventas.model')
        }
    }

})();