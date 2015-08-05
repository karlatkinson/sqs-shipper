var assert = require('assert');
var MessageHandler = require('../lib/messageHandler');

describe('sqs consumer', function () {

    describe('message handler', function () {

        it('should call done when message handled', function (done) {

            var message = {
                MessageId: 132131,
                Body: 'test message'
            };

            var handler = MessageHandler.create({
                publish: function () {}
            });
            handler.handle(message, done);
        });

        it('should publish message when message handled', function (done) {

            var message = {
                MessageId: 132131,
                Body: 'test message'
            };

            var handler = MessageHandler.create({
                publish: function () {
                	done();
                }
            });
            handler.handle(message, function() {});
        });

        it('should publish message body when message handled', function (done) {

            var expectedMessage = {
                MessageId: 132131,
                Body: 'test message'
            };

            var handler = MessageHandler.create({
                publish: function (message) {
                	assert.equal(expectedMessage.Body, message);
                	done();
                }
            });
            handler.handle(expectedMessage, function() {});
        });

    });

});
