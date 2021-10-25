(function () {
    'use strict';

    module.exports = {
        addVentas: addVentas,
        getVentas: getVentas,
        getVentasById: getVentasById,
        modifyVentas: modifyVentas,
        removeVentas: removeVentas
    };

    var VentasService = require('./ventas.module')().VentasService;

    function addVentas(req, res, next) {

        VentasService.createVentas(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }

    }

    function getVentas(req, res, next) {

        VentasService.fetchVentas()
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function getVentasById(req, res, next) {

        VentasService.fetchVentasById(req.params.ventasId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function modifyVentas(req, res, next) {
        VentasService.updateVentas(req.params.ventasId, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function removeVentas(req, res, next) {

        VentasService.deleteVentas(req.params.ventasId)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }

    }

})();