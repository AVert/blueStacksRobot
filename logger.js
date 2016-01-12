'use strict';

const fs = require('fs');

const LOG_FILE_PATH = './log.txt';

module.exports = {

	getLogStr(msg) {
		let now = new Date();
		let year = now.getFullYear();
		let month = ('0' + (now.getMonth() + 1)).slice(-2);
		let date = ('0' + now.getDate()).slice(-2);
		let hours = ('0' + now.getHours()).slice(-2);
		let minutes = ('0' + now.getMinutes()).slice(-2);
		let seconds = ('0' + now.getSeconds()).slice(-2);
		return `[${year}.${month}.${date} ${hours}:${minutes}:${seconds}] ${msg} \n`;
	},

	log(msg) {
		return new Promise((resolve, reject) => {
			let logStream = fs.createWriteStream(LOG_FILE_PATH, {'flags': 'a'});
			logStream.end(this.getLogStr(msg));
		});
	}

}


