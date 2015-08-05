var logger = require('./logger');

function Handler(producer) {
    var producer = producer;

    this.handle = function (message, done) {
        logger.info('handled message ' + message.MessageId);
        producer.publish(message.Body, function () {
            logger.info('message published with MessageId: ' + message.MessageId);
            done();
        }, handleError);
    };
};

module.exports.create = function (producer) {
    return new Handler(producer);
};

function handleError(err) {
    logger.error(err);
};
