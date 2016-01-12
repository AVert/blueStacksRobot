const schedule = require('node-schedule');
const utils = require('./utils');
const BlueStacks = require('./BlueStacks');

utils.initKeyPressLogger();

// Every day at 00:00 and 06:00
schedule.scheduleJob('* * 0,6 * * *', () => {
	BlueStacks.open()
		.then(() => BlueStacks.launchClashOfClans())
		.then(() => BlueStacks.collectDailyReward())
		.then(() => BlueStacks.collectDragon())
		.catch((err) => console.log(err))
		.then(() => BlueStacks.close());
});