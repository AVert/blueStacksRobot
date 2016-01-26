'use strict';

const fs = require('fs');
const exec = require('child_process').exec;

const LOG_FILE_PATH = './log.txt';
const SCREEN_PATH = './pics';

module.exports = {

	getTimeStr() {
		const now = new Date();
		const year = now.getFullYear();
		const month = ('0' + (now.getMonth() + 1)).slice(-2);
		const date = ('0' + now.getDate()).slice(-2);
		const hours = ('0' + now.getHours()).slice(-2);
		const minutes = ('0' + now.getMinutes()).slice(-2);
		const seconds = ('0' + now.getSeconds()).slice(-2);
		return `${year}.${month}.${date} ${hours}:${minutes}:${seconds}`;
	},

	log(msg, params = {}) {
		return new Promise((resolve, reject) => {
			const time = this.getTimeStr();
			const logStream = fs.createWriteStream(LOG_FILE_PATH, {'flags': 'a'});

			logStream.end(`[${time}] ${msg} \n`, () => {
				if(params.isNeedScreen)
					exec(`screencapture ${SCREEN_PATH}/${time.replace(/ /g, '_')}.png`);
				resolve();
			});
		});
	}

}


