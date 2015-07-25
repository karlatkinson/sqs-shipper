var Consumer = require('sqs-consumer');
var logger = require('./logger');
var sqsConfig = require('config').get('SQS');

var app = Consumer.create({
  queueUrl: sqsConfig.queueUrl,
  region: sqsConfig.region,
  batchSize: sqsConfig.batchSize,
  handleMessage: function (message, done) {
  	var messageString = JSON.stringify(message);
  	logger.info('handled message ' + message.MessageId);
  	logger.info('message body: ' + message.Body);

    done();
  }
});

app.on('error', function (err) {
  logger.error(err.message);
});

app.start();
logger.info('sqs-shipper started');