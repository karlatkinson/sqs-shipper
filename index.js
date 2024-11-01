var logger = require('./lib/logger');
var messageHandler = require('./lib/messageHandler');
var consumerFactory = require('./lib/consumerFactory');

var consumer = consumerFactory.create(messageHandler);

/**
 * Registers an error handler for the consumer
 * @param {string} event - The event to listen for ('error')
 * @param {function} callback - The function to be called when an error occurs
 * @param {Error} callback.err - The error object passed to the callback
 * @returns {void}
 * @throws {Error} If an error occurs during consumer operation
 */
consumer.on('error', function (err) {
    logger.error(err.message);
});

consumer.start();
logger.info('sqs-shipper started');
