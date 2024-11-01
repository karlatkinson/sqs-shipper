module.exports = {
	/**
	 * Logs a message to the console.
	 * @param {string} message - The message to be logged.
	 * @returns {void} This function does not return a value.
	 */
	info: function(message) {
		console.log(message);
	},
	error: function(message) {
		console.log('Error occured: ' + message);
	}
};