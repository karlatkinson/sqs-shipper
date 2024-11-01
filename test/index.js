var assert = require('assert');
var handler = require('../lib/messageHandler');

/**
 * Defines a test suite for an SQS consumer's message handler.
 * @param {string} description - The description of the test suite.
 * @param {Function} testFunction - The function containing the test cases.
 * @returns {void} This function does not return a value.
 */

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
