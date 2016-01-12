const robot = require("robotjs");
const utils = require("./utils");

module.exports = {

	open() {
		utils.click({x: 499, y: 867})

		return utils.waitUntil({x: 884, y: 38}, 'b46464', 'Opening launchpad')
			.then(() => robot.typeString('BlueStacks'))
			.then(() => utils.waitUntil({x: 802, y: 110}, '7eb034', 'Searching BlueStacks'))
			.then(() => robot.keyTap("enter"))
			.then(() => utils.waitUntil({x: 381, y: 371}, '000000', 'Opening BlueStacks'));
	},

	launchClashOfClans() {
		utils.click({x: 745, y: 498});

		return utils.waitUntil({x: 100, y: 655}, 'fbddca', 'Searching castle clash')
			.then(() => utils.click({x: 100, y: 655}))
			// Close window that usually appears on app start
			.then(() => utils.waitUntil({x: 681, y: 390}, 'ff8e00', 'Waiting castle clash loading'))
			.then(() => utils.click({x: 681, y: 390}));
	},

	collectDailyReward() {
		utils.click({x: 20, y: 370});
		// rang daily reward
		return utils.delay(500)
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
		// scroll to top left corner
		robot.moveMouseSmooth(374, 602);
		robot.scrollMouse(200, 'up')
		return utils.delay(500)
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
	}

}