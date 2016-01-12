const robot = require("robotjs");

const TIMEOUT = 30000;

const SCROLL_DELAY = 1000;

module.exports = {

	waitUntil(coords, color, action) {
		const start = Date.now();
		return new Promise((resolve, reject) => {
			(function check() {
				if(robot.getPixelColor(coords.x, coords.y) === color)
					resolve();
				else if(Date.now() - start < TIMEOUT)
					setTimeout(check, 500);
				else
					reject(`Error ${action}, wait for ${coords} ${color}`);
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
	}

}