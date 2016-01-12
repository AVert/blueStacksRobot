const schedule = require('node-schedule');
const utils = require('./utils');
const blueStacks = require('./blueStacks');
const logger = require('./logger');

logger.log('Process started');

utils.initKeyPressLogger();

// Every day at 00:00 and 06:00
schedule.scheduleJob('* * 0,6,13 * * *', () => {
	logger.log('Startings...');
	blueStacks.open()
		.then(() => blueStacks.launchClashOfClans())
		.then(() => blueStacks.collectDailyReward())
		.then(() => blueStacks.collectDragon())
		.catch((err) => logger.log(`ERROR: ${err}`))
		.then(() => blueStacks.close());
});