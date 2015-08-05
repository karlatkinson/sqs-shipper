var Consumer = require('sqs-consumer');
var sqsConfig = require('config').get('SQS');

exports.create = function (handler) {
    return Consumer.create({
        queueUrl: sqsConfig.queueUrl,
        region: sqsConfig.region,
        batchSize: sqsConfig.batchSize,
        handleMessage: handler.handle
    });
};
