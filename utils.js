'use strict';

const robot = require("robotjs");
const keypress = require('keypress');
const logger = require("./logger");


const TIMEOUT = 30000;
const SCROLL_DELAY = 1000;

module.exports = {

	waitUntil(coords, color, action) {
		const start = Date.now();
		return new Promise((resolve, reject) => {
			(function check() {
				if(robot.getPixelColor(coords.x, coords.y) === color) {
					logger.log(`Success: ${action}`)
					resolve();
				} else if(Date.now() - start < TIMEOUT) {
					setTimeout(check, 500);
				} else {
					reject(`Error ${action}, wait for ${coords} ${color}`);
				}
			})();
		});
	},

	click(coords) {
		robot.moveMouseSmooth(coords.x, coords.y);
		robot.mouseToggle("down");
		robot.mouseToggle("up");
	},

	delay(time) {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(), time);
		});
	},

	initKeyPressLogger() {
		keypress(process.stdin);

		// listen for the "keypress" event
		process.stdin.on('keypress', (ch, key) => {
			let coords = robot.getMousePos();
			console.log(coords, robot.getPixelColor(coords.x, coords.y));
			if(key && key.ctrl && key.name == 'c')
				process.exit();
		});

		process.stdin.setRawMode(true);
		process.stdin.resume();
	}
}


