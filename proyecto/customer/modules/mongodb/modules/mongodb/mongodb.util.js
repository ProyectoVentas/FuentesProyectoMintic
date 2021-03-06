(function () {
    'use strict';

    module.exports = {
        init: init
    };

    var mongoose = require('mongoose');


    var mongodbConfig = require('../../config/mongodb/mongodb-config').mongodb;
    require('dotenv').config();

    const SERVER = process.env.SERVER;
    const DATABASE = process.env.DATABASE;
    const USER = process.env.USER;
    const PASSWORD = process.env.PASSWORD;
    function init() {
        var options = {
            promiseLibrary: require('bluebird'),
            useNewUrlParser: true
        };

        var connectionString = prepareConnectionString(mongodbConfig);

        mongoose.connect(connectionString, options)
            .then(function (result) {
                console.log("MongoDB connection successful. DB: " + connectionString);
            })
            .catch(function (error) {
                console.log(error.message);
                console.log("Error occurred while connecting to DB: : " + connectionString);
            });
    }

    function prepareConnectionString() {
        var connectionString = 'mongodb+srv://';
        //mongodb+srv://proyectoventas:<password>@cluster0.f7ac6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

        if (USER) {
            connectionString += USER + ':' + PASSWORD + '@';
        }

        connectionString += SERVER + '/' + DATABASE;

        return connectionString;
    }

})();



