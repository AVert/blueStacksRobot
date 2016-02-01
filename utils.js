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
					reject(`Error ${action}, wait for ${JSON.stringify(coords)} ${color}`);
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

	scrollTop() {
		return Promise.resolve()
			.then(() => robot.keyToggle('z', 'down'))
			// scroll to top left corner
			.then(() => {
				return Array(7).fill().reduce((previous, item) => {
					return previous
						.then(() => robot.scrollMouse(200, 'up'))
						.then(() => this.delay(500))
				}, Promise.resolve());
			});
	},

	scrollLeft() {
		return Promise.resolve()
			.then(() => robot.keyToggle('z', 'down', 'shift'))
			.then(() => {
				return Array(10).fill().reduce((previous, item) => {
					return previous
						.then(() => robot.scrollMouse(200, 'up'))
						.then(() => this.delay(500))
				}, Promise.resolve());
			})
			.then(() => robot.keyToggle('z', 'down'))
	},

	scrollRight() {
		return Promise.resolve()
			.then(() => robot.keyToggle('z', 'down', 'shift'))
			.then(() => {
				return Array(10).fill().reduce((previous, item) => {
					return previous
						.then(() => robot.scrollMouse(200, 'down'))
						.then(() => this.delay(500))
				}, Promise.resolve());
			})
			.then(() => robot.keyToggle('z', 'down'))
	},

	zoomOut() {
		return Promise.resolve()
			.then(() => robot.keyToggle('z', 'down', 'control'))
			.then(() => {
				return Array(10).fill().reduce((previous, item) => {
					return previous
						.then(() => this.delay(500))
						.then(() => robot.scrollMouse(200, 'up'))
				}, Promise.resolve());
			})
			.then(() => robot.keyToggle('z', 'down'))
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


