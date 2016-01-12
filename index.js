const keypress = require('keypress');
const schedule = require('node-schedule');
const BlueStacks = require('./BlueStacks');
const robot = require("robotjs");

// schedule.scheduleJob('*/2 * * * * *', function(){
//   console.log('The answer to life, the universe, and everything!');
//   console.log(new Date())
// });

robot.setMouseDelay(100);

BlueStacks.open()
	.then(() => BlueStacks.launchClashOfClans())
	.then(() => BlueStacks.collectDailyReward())
	.then(() => BlueStacks.collectDragon())
	.catch((err) => console.log(err))
	.then(() => BlueStacks.close());

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
	var coords = robot.getMousePos();
	console.log(coords, robot.getPixelColor(coords.x, coords.y));
	if (key && key.ctrl && key.name == 'c') {
	    process.stdin.pause();
	  }
});

process.stdin.setRawMode(true);
process.stdin.resume();