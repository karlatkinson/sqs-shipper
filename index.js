var logger = require('./lib/logger');
var messageHandler = require('./lib/messageHandler');
var consumerFactory = require('./lib/consumerFactory');
var producerFactory = require('./lib/producerFactory');

var consumer = consumerFactory.create(messageHandler);

consumer.on('error', function (err) {
    logger.error(err.message);
});

producerFactory.create(function () {
    consumer.start();
    logger.info('sqs-shipper started');
    producerFactory.publish('hello', function () {
        logger.info('message published');
    });

});
