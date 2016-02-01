#!/usr/local/bin/node --harmony_destructuring --harmony_default_parameters

const schedule = require('node-schedule');
const utils = require('./utils');
const blueStacks = require('./blueStacks');
const logger = require('./logger');

logger.log('Process started');

utils.initKeyPressLogger();

// Every day at 00:00 and 06:00
schedule.scheduleJob('0 0 0,6 * * *', () => {
	logger.log('Startings...');
	blueStacks.open()
		.then(() => blueStacks.launchClashOfClans())
		.then(() => blueStacks.collectDailyReward())
		.then(() => blueStacks.collectDungeons())
		.then(() => blueStacks.collectDragon())
		.then(() => blueStacks.collectBlueCrystals())
		.then(() => logger.log(`SUCCESS!!`))
		.catch((err) => logger.log(`ERROR: ${err}`, {isNeedScreen: true}))
		.then(() => blueStacks.close());
});