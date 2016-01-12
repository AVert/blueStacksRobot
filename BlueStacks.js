const robot = require("robotjs");
const utils = require("./utils");
const logger = require("./logger");

module.exports = {

	open() {
		return Promise.resolve()
			.then(() => logger.log('Opening BlueStacks'))
			.then(() => utils.click({x: 499, y: 867}))
			.then(() => utils.waitUntil({x: 884, y: 38}, 'b46464', 'Opening launchpad'))
			.then(() => robot.typeString('BlueStacks'))
			.then(() => utils.waitUntil({x: 802, y: 110}, '7eb034', 'Searching BlueStacks'))
			.then(() => robot.keyTap("enter"))
			.then(() => utils.waitUntil({x: 381, y: 371}, '000000', 'Opening BlueStacks'))
	},

	launchClashOfClans() {
		return Promise.resolve()
			.then(() => logger.log('Launching Castle Clash'))
			.then(() => utils.click({x: 745, y: 498}))
			.then(() => utils.waitUntil({x: 100, y: 655}, 'fbddca', 'Searching Castle Clash'))
			.then(() => utils.click({x: 100, y: 655}))
			.then(() => utils.waitUntil({x: 681, y: 390}, 'ff8e00', 'Waiting castle clash loading'))
			// Close window that usually appears on app start
			.then(() => utils.click({x: 681, y: 390}));
	},

	collectDailyReward() {
		return Promise.resolve()
			.then(() => logger.log('Collecting daily reward'))
			.then(() => utils.click({x: 20, y: 370}))
			.then(() => utils.delay(500))
			.then(() => utils.click({x: 20, y: 370}))
			// rank daily reward
			.then(() => utils.click({x: 20, y: 370}))
			.then(utils.waitUntil({x: 579, y: 644}, 'f7cf84', 'Opening rang daily reward'))
			.then(() => utils.click({x: 446, y: 745}))
			.then(() => utils.click({x: 663, y: 386}))
			// daily reward
			.then(() => utils.click({x: 33, y: 475}))
			.then(() => utils.waitUntil({x: 248, y: 391}, '942c29', 'Opening daily reward dlg'))
			.then(() => utils.click({x: 248, y: 391}))
			.then(() => utils.waitUntil({x: 639, y: 648}, '42385a', 'Daily reward dlg tab changed'))
			.then(() => utils.click({x: 604, y: 694}))
			.then(() => utils.click({x: 679, y: 394}));
	},

	collectDragon() {
		return Promise.resolve()
			.then(() => robot.moveMouseSmooth(374, 602))
			// scroll to top left corner
			.then(() => robot.scrollMouse(200, 'up'))
			.then(() => utils.delay(500))
			.then(() => robot.scrollMouse(200, 'up'))
			.then(() => utils.delay(500))
			.then(() => robot.scrollMouse(200, 'up'))
			.then(() => utils.delay(500))
			.then(() => robot.scrollMouse(200, 'up'))
			.then(() => utils.delay(500))
			.then(() => robot.scrollMouse(200, 'up'))
			.then(() => utils.delay(500))
			.then(() => robot.scrollMouse(200, 'up'))
			.then(() => utils.delay(500))
			.then(() => robot.scrollMouse(200, 'up'))
			.then(() => robot.keyToggle('z', 'down', 'shift'))
			.then(() => utils.delay(500))
			.then(() => robot.scrollMouse(200, 'up'))
			.then(() => utils.delay(500))
			.then(() => robot.scrollMouse(200, 'up'))
			.then(() => utils.delay(500))
			.then(() => robot.scrollMouse(200, 'up'))
			.then(() => utils.delay(500))
			.then(() => robot.scrollMouse(200, 'up'))
			.then(() => utils.delay(500))
			.then(() => robot.scrollMouse(200, 'up'))
			.then(() => utils.delay(500))
			.then(() => robot.scrollMouse(200, 'up'))
			.then(() => utils.delay(1000))
			.then(() => robot.keyToggle('z', 'up', 'shift'))
			// click to portal
			.then(() => utils.click({x: 291, y: 616}))
			.then(() => utils.delay(1000))
			// choose dragon
			.then(() => utils.click({x: 402, y: 618}))
			.then(() => utils.waitUntil({x: 570, y: 538}, '181810', 'Dragon section choose dlg appears'))
			// choose N
			.then(() => utils.click({x: 570, y: 538}))
			// click skip
			.then(() => utils.click({x: 405, y: 737}))
			.then(() => utils.delay(1000))
			.then(() => utils.click({x: 325, y: 787}))
			.then(() => utils.delay(1000))
			.then(() => utils.click({x: 325, y: 787}))
			.then(() => utils.delay(1000))
			.then(() => utils.click({x: 325, y: 787}))
			.then(() => utils.delay(1000))
			.then(() => utils.click({x: 325, y: 787}))
			.then(() => utils.delay(1000))
			.then(() => utils.click({x: 325, y: 787}));
	},

	close() {
		utils.click({x: 14, y: 343});
		logger.log('Closing BlueStacks');
	}

}