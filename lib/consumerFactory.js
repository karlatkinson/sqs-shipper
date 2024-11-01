var Consumer = require('sqs-consumer');
var sqsConfig = require('config').get('SQS');

/**
 * Creates a new SQS Consumer.
 * @param {Object} handler - An object containing a handle method for processing messages.
 * @returns {Object} A new Consumer instance configured with the specified parameters.
 */
exports.create = function (handler) {
    return Consumer.create({
        queueUrl: sqsConfig.queueUrl,
        region: sqsConfig.region,
        batchSize: sqsConfig.batchSize,
        handleMessage: handler.handle
    });
};
