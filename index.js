const schedule = require('node-schedule');
const utils = require('./utils');
const blueStacks = require('./blueStacks');
const logger = require('./logger');

logger.log('process started');

utils.initKeyPressLogger();

// Every day at 00:00 and 06:00
schedule.scheduleJob('* * 0,6 * * *', () => {
	logger.log('startings...');
	blueStacks.open()
		.then(() => blueStacks.launchClashOfClans())
		.then(() => blueStacks.collectDailyReward())
		.then(() => blueStacks.collectDragon())
		.catch((err) => console.log(err))
		.then(() => blueStacks.close());
});