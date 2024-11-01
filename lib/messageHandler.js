var logger = require('./logger');

/**
 * Handles an incoming message by logging its ID and body.
 * @param {Object} message - The message object to be handled
 * @param {function} done - Callback function to be called when handling is complete
 * @returns {void} This function does not return a value
 */
exports.handle = function (message, done) {
    var messageString = JSON.stringify(message);
    logger.info('handled message ' + message.MessageId);
    logger.info('message body: ' + message.Body);

    done();
};
