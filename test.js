const Conv = require('./src/index');
const date = new Conv.date(1608076029);
const timestamp = new Conv.timestamp('Tue, 15 Dec 2020 23:30:24 GMT');

console.log(date.getDayOfWeek(), date.getDay(), date.getMonth(), date.getYear(),
    date.getHour(), date.getMinute(), date.getSeconds(), date.getMilliseconds());

console.log(timestamp.getDayOfWeek(), timestamp.getDay(), timestamp.getMonth(), timestamp.getYear(),
    timestamp.getHour(), timestamp.getMinute(), timestamp.getSeconds(), timestamp.getMilliseconds());