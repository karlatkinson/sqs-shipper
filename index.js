var logger = require('./lib/logger');
var MessageHandler = require('./lib/messageHandler');
var Consumer = require('./lib/consumerFactory');
var Producer = require('./lib/producerFactory');

var producer = Producer.create();
var handler = MessageHandler.create(producer);
var consumer = Consumer.create(handler);

consumer.on('error', function (err) {
    logger.error(err.message);
});

consumer.on('message_received', function (message) {
    logger.info('message_received');
});

consumer.on('message_processed', function (message) {
    logger.info('message_processed');
});

producer.connect(function () {
    logger.info('producer connected, starting consumer....');
    consumer.start();
}, handleError);

logger.info('sqs-shipper started');

function handleError(err) {
    logger.error(err);
};