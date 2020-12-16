const Converter = require('./src/index');
const date = new Converter.date(1608076029);
const timestamp = new Converter.timestamp('Tue, 15 Dec 2020 23:30:24 GMT');
const discordTimestamp = new Converter.discordTimestamp();

console.log(date.getDayOfWeek(), date.getDay(), date.getMonth(), date.getYear(),
    date.getHour(), date.getMinute(), date.getSeconds(), date.getMilliseconds());

console.log(timestamp.getDayOfWeek(), timestamp.getDay(), timestamp.getMonth(), timestamp.getYear(),
    timestamp.getHour(), timestamp.getMinute(), timestamp.getSeconds(), timestamp.getMilliseconds());

console.log(date.formatDay, date.formatHour, date.formatSeconds);
console.log(timestamp.formatDay, timestamp.formatHour, timestamp.formatSeconds);