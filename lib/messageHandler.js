var logger = require('./logger');

exports.handle = function (message, done) {
    var messageString = JSON.stringify(message);
    logger.info('handled message ' + message.MessageId);
    logger.info('message body: ' + message.Body);

    done();
};
