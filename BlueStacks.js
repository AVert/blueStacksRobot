const robot = require("robotjs");
const utils = require("./utils");
const logger = require("./logger");

module.exports = {

	open() {
		return Promise.resolve()
			.then(() => logger.log('Opening BlueStacks'))
			.then(() => utils.click({x: 474, y: 870}))
			.then(() => utils.waitUntil({x: 884, y: 38}, 'b46464', 'Opening launchpad'))
			.then(() => robot.typeString('BlueStacks'))
			.then(() => utils.waitUntil({x: 802, y: 110}, '7eb034', 'Searching BlueStacks'))
			.then(() => robot.keyTap("enter"))
			.then(() => utils.waitUntil({x: 381, y: 371}, '000000', 'Opening BlueStacks'))
	},

	launchClashOfClans() {
		return Promise.resolve()
			.then(() => logger.log('Launching Castle Clash'))
			.then(() => utils.click({x: 747, y: 497}))
			.then(() => utils.delay(1000))
			.then(() => utils.click({x: 747, y: 497}))
			.then(() => utils.waitUntil({x: 100, y: 655}, 'fbddca', 'Searching Castle Clash'))
			.then(() => utils.click({x: 100, y: 655}))
			.then(() => utils.waitUntil({x: 681, y: 390}, 'ff8e00', 'Waiting castle clash loading'))
			// Close window about attacks and  that usually appears on app start
			.then(() => utils.click({x: 664, y: 406}))
			.then(() => utils.delay(500))
			.then(() => utils.click({x: 664, y: 406}))
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
			.then(() => utils.delay(500))
			.then(() => utils.click({x: 663, y: 386}))
			// daily reward
			.then(() => utils.click({x: 33, y: 475}))
			.then(() => utils.waitUntil({x: 248, y: 391}, '942c29', 'Opening daily reward dlg'))
			// if daily reward exists, receive it
			.then(() => {
				if(robot.getPixelColor(626, 470) === '7382bd')
					return utils.click({x: 624, y: 476})
				else
					return Promise.resolve();
			})
			.then(() => utils.click({x: 248, y: 391}))
			.then(() => utils.waitUntil({x: 639, y: 648}, '42385a', 'Daily reward dlg has been tab changed'))
			.then(() => utils.click({x: 604, y: 694}))
			.then(() => utils.delay(1000))
			.then(() => utils.click({x: 679, y: 394}));
	},

	collectDungeons() {
		return Promise.resolve()
			.then(() => logger.log('Collecting dunfeons'))
			.then(() => utils.click({x: 40, y: 789}))
			.then(() => utils.delay(1000))
			.then(() => utils.click({x: 150, y: 759}))
			.then(() => utils.waitUntil({x: 306, y: 398}, 'a53031', 'Dungeon dlg has been opened'))
			.then(() => utils.scrollRight())
			.then(() => utils.click({x: 589, y: 630}))
			.then(() => utils.waitUntil({x: 566, y: 390}, '942421', 'Dungeon dlg category has been changed'))
			.then(() => robot.moveMouseSmooth(406, 451))
			.then(() => utils.scrollRight())
			.then(() => utils.delay(1000))
			.then(() => utils.click({x: 447, y: 544}))
			.then(() => utils.click({x: 463, y: 776}))
			.then(() => {
				return Array(20).fill().reduce((previous, item) => {
					return previous
						.then(() => utils.delay(1000))
						.then(() => utils.click({x: 322, y: 787}))
				}, Promise.resolve());
			})
			// or click close button if 'use entry map' dlg appears
			.then(() => utils.delay(1000))
			.then(() => utils.click({x: 555, y: 488}))
			// close dungeon dlg
			.then(() => utils.delay(1000))
			.then(() => utils.click({x: 680, y: 387}))
	},

	collectDragon() {
		return Promise.resolve()
			.then(() => logger.log('Collecting dragons'))
			.then(() => robot.moveMouseSmooth(374, 602))
			// scroll to top left corner
			.then(() => {
				return Array(7).fill().reduce((previous, item) => {
					return previous
						.then(() => robot.scrollMouse(200, 'up'))
						.then(() => utils.delay(500))
				}, Promise.resolve());
			})
			.then(() => robot.keyToggle('z', 'down', 'shift'))
			.then(() => {
				return Array(7).fill().reduce((previous, item) => {
					return previous
						.then(() => utils.delay(500))
						.then(() => robot.scrollMouse(200, 'up'))
				}, Promise.resolve());
			})
			.then(() => utils.delay(1000))
			.then(() => robot.keyToggle('z', 'down'))
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
			.then(() => {
				return Array(6).fill().reduce((previous, item) => {
					return previous
						.then(() => utils.delay(1000))
						.then(() => utils.click({x: 325, y: 787}))
				}, Promise.resolve());
			})
			// close dlg
			.then(() => utils.click({x: 661, y: 390}))	
	},

	collectBlueCrystals() {
		return Promise.resolve()
			.then(() => logger.log('Collecting blue crystals'))
			.then(() => robot.moveMouseSmooth(374, 602))
			// scroll to top right corner
			.then(() => utils.scrollTop())
			.then(() => utils.scrollRight())
			// click to portal
			.then(() => utils.click({x: 627, y: 638}))
			.then(() => utils.waitUntil({x: 755, y: 385}, 'f77108', 'Blue crystal dungeon has been opened'))
			// zoom out to max
			.then(() => utils.zoomOut())
			// scroll to top left corner
			.then(() => utils.scrollTop())
			.then(() => utils.scrollLeft())
			// collect crystals
			.then(() => {
				const coords = [{x:390,y:468}, {x:351,y:494}, {x:280,y:494}, {x:279,y:552}, {x:277,y:605}, {x:356,y:607}, {x:431,y:603}, {x:501,y:546}, {x:465,y:470}, {x:540,y:466}, {x:539,y:524}, {x:579,y:604}];
				return coords.reduce((previous, item) => {
					return previous
						.then(() => utils.delay(1000))
						.then(() => utils.click({x: item.x, y: item.y}))
				}, Promise.resolve());
			})
			.then(() => utils.click({x: 755, y: 385}))
	},

	close() {
		utils.click({x: 14, y: 343});
		logger.log('Closing BlueStacks\n\n');
	}

}