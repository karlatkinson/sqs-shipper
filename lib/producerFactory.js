var rabbit = require('wascally');
var config = require('config');
var logger = require('./logger');

exports.create = function (callback) {
    var settings = config.util.extendDeep({}, config.get('RabbitMQ'));
    rabbit.configure(settings).then(function () {
        logger.info('rabbit is ready to go!');
        callback();
    });
};

exports.publish = function (message, callback) {
	logger.info('publishing message');
    rabbit.publish("config-ex.1", {
        body: message
    }).then(callback);
};
