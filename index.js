var logger = require('./lib/logger');
var messageHandler = require('./lib/messageHandler');
var consumerFactory = require('./lib/consumerFactory');

var consumer = consumerFactory.create(messageHandler);

consumer.on('error', function (err) {
    logger.error(err.message);
});

consumer.start();
logger.info('sqs-shipper started');
