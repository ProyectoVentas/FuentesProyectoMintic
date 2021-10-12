(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var VentasMiddleware = require('./ventas.module')().VentasMiddleware;

    router.post('/',
        VentasMiddleware.addVentas,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        VentasMiddleware.getVentas,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:ventasId',
        VentasMiddleware.getVentasById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:ventasId',
        VentasMiddleware.modifyVentas,
        function (req, res) {
            res.status(200).json(req.response);
        });
    
    router.delete('/:ventasId',
        VentasMiddleware.removeVentas,
        function (req, res) {
            res.status(200).json(req.response);
        });
    module.exports = router;

})();