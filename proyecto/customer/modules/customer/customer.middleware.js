(function () {
    'use strict';

    module.exports = {
        addCustomer: addCustomer,
        getCustomers: getCustomers,
        getCustomerById: getCustomerById,
        modifyCustomer: modifyCustomer,
        removeCustomer: removeCustomer
    };

    var CustomerService = require('./customer.module')().CustomerService;

    function addCustomer(req, res, next) {

        CustomerService.createCustomer(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
<<<<<<< HEAD
            req.response = data;
=======
            
            req.response = data;
            console.log(req.response)
>>>>>>> 67d5b702dec92062ff0ff5c045751d7ad4c99c3e
            next();
        }

        function failure(error) {
<<<<<<< HEAD
            next(error);
=======
         console.log(error)
            req.response=({error:'001', message:"Really"});
            next(error.json());
>>>>>>> 67d5b702dec92062ff0ff5c045751d7ad4c99c3e
        }

    }

    function getCustomers(req, res, next) {

        CustomerService.fetchCustomers()
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

    function getCustomerById(req, res, next) {

        CustomerService.fetchCustomerById(req.params.customerId)
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

    function modifyCustomer(req, res, next) {
        CustomerService.updateCustomer(req.params.customerId, req.body)
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

    function removeCustomer(req, res, next) {

        CustomerService.deleteCustomer(req.params.customerId)
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
