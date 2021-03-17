const Converter = require('./src/index');
const date = new Converter.date(1608076029);
const dateTimezone = new Converter.date(1608076029, { forceTimezone: true, timezone: 1 });
const timestamp = new Converter.timestamp('Tue, 14 Dec 2020 23:30:24 UTC');
const discordTimestamp = new Converter.timestamp('2020-07-03T14:28:13.955Z');
const discordTimestampTimezone = new Converter.timestamp('2020-07-03T14:28:13.955Z', { forceTimezone: true, timezone: 1 });

console.log(date.getDayOfWeek(), date.getDay(), date.getMonth(), date.getYear(),
    date.getHour(), date.getMinute(), date.getSeconds(), date.getMilliseconds());

console.log(dateTimezone.getDayOfWeek(), dateTimezone.getDay(), dateTimezone.getMonth(), dateTimezone.getYear(),
    dateTimezone.getHour(), dateTimezone.getMinute(), dateTimezone.getSeconds(), dateTimezone.getMilliseconds());

console.log(timestamp.getDayOfWeek(), timestamp.getDay(), timestamp.getMonth(), timestamp.getYear(),
    timestamp.getHour(), timestamp.getMinute(), timestamp.getSeconds(), timestamp.getMilliseconds());

console.log(discordTimestamp.getDayOfWeek(), discordTimestamp.getDay(), discordTimestamp.getMonth(), discordTimestamp.getYear(),
    discordTimestamp.getHour(), discordTimestamp.getMinute(), discordTimestamp.getSeconds(), discordTimestamp.getMilliseconds());

console.log(discordTimestampTimezone.getDayOfWeek(), discordTimestampTimezone.getDay(), discordTimestampTimezone.getMonth(), discordTimestampTimezone.getYear(),
    discordTimestampTimezone.getHour(), discordTimestampTimezone.getMinute(), discordTimestampTimezone.getSeconds(), discordTimestampTimezone.getMilliseconds());

console.log(date.formatDay, date.formatHour, date.formatSeconds);
console.log(dateTimezone.formatDay, dateTimezone.formatHour, dateTimezone.formatSeconds);

console.log(timestamp.formatDay, timestamp.formatHour, timestamp.formatSeconds);

console.log(discordTimestamp.formatDay, discordTimestamp.formatHour, discordTimestamp.formatSeconds);
console.log(discordTimestampTimezone.formatDay, discordTimestampTimezone.formatHour, discordTimestampTimezone.formatSeconds);