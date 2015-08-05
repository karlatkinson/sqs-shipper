var rabbit = require('wascally');
var config = require('config');
var logger = require('./logger');

function Producer() {
    this.rabbit = rabbit;
    this.settings = config.util.extendDeep({}, config.get('RabbitMQ'));

    this.rabbit.on('connected', function (connection) {
        logger.info('connected to rabbitmq');
    });

    this.rabbit.on('default.connection.closed', function () {
        logger.info('closed to rabbitmq');
    });

    this.rabbit.on('default.failed', function (err) {
        logger.info('error with rabbitmq: ' + err);
    });
};

Producer.prototype.connect = function (success, error) {
    this.rabbit.configure(this.settings)
        .then(success)
        .catch(error);
};

Producer.prototype.publish = function (message, success, error) {
    logger.info('publishing message');
    this.rabbit.publish("config-ex.1", {
            body: message
        })
        .then(success)
        .catch(error);
};

module.exports.create = function () {
    return new Producer();
};
