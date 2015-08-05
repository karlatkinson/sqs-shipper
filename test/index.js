var assert = require('assert');
var handler = require('../lib/messageHandler');

describe('sqs consumer', function () {

    describe('message handler', function () {

        it('should call done when message handled', function (done) {
            var message = {
                MessageId: 132131,
                Body: 'test message'
            };

            handler.handle(message, done);
        });

    });

});
