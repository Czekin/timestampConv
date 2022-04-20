# Timestamp Converter
#### A simple converter designed for DiscordJS timestamps.
[![npm](https://img.shields.io/npm/v/timestamp-conv)](https://www.npmjs.com/package/timestamp-conv)
[![npm](https://img.shields.io/npm/dt/timestamp-conv)](https://www.npmjs.com/package/timestamp-conv)
[![GitHub last commit](https://img.shields.io/github/last-commit/Czekin/timestampConv)](https://github.com/Czekin/timestampConv)
[![GitHub](https://img.shields.io/github/license/Czekin/timestampConv?color=blue)](https://github.com/Czekin/timestampConv/blob/stable/LICENSE)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FCzekin%2FtimestampConv.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FCzekin%2FtimestampConv?ref=badge_shield)

[![NPM](https://nodei.co/npm/timestamp-conv.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/timestamp-conv/)

Sometimes for some reasons module [`moment`](npmjs.com/package/moment) doesn't work properly with [discord.js](https://www.npmjs.com/package/discord.js) timestamps, so if you have some issues, this module is for you.

---

## date
#### Simple-Date | **`date(Number, {forceTimezone: Boolean, timezone: Number}?)`**
#### Converts unix timestamp to human date.
• `getDayOfWeek()` Returns day of the week.

• `getDay()` Returns day of the month.

• `getMonth()` Returns month.

• `getYear()` Returns year.

• `getHour()` Returns hours.

• `getMinute()` Returns minutes.

• `getSeconds()` Returns seconds.

• `getMilliseconds()` Returns milliseconds.

• `getDaysInMonth()` Returns days in the month.

• `formatDay` Returns formatted human time in: `DD.MM.YYYY`.

• `formatHour` Returns formatted human time in: `DD.MM.YYYY, hh:mm`.

• `formatSeconds` Returns formatted human time in: `DD.MM.YYYY, hh:mm:ss`.

---

## timestamp
#### Timestamp-Convert | **`timestamp(Date | String, {forceTimezone: Boolean, timezone: Number}?)`**
#### Converts timestamp to human date.
#### This class can convert [DiscordJS](https://www.npmjs.com/package/discord.js) timestamps.
• `getDayOfWeek()` Returns day of the week.

• `getDay()` Returns day of the month.

• `getMonth()` Returns month.

• `getYear()` Returns year.

• `getHour()` Returns hours.

• `getMinute()` Returns minutes.

• `getSeconds()` Returns seconds.

• `getMilliseconds()` Returns milliseconds.

• `getDaysInMonth()` Returns days in the month.

• `getTimestamp` Returns timestamp.

• `formatDay` Returns formatted human time in: `DD.MM.YYYY`.

• `formatHour` Returns formatted human time in: `DD.MM.YYYY, hh:mm`.

• `formatSeconds` Returns formatted human time in: `DD.MM.YYYY, hh:mm:ss`.

---

## Examples:
#### `date()` example
```js
// import module
const Converter = require('timestamp-conv');

// set date to: 1608076029
const Date = new Converter.date(1608076029);

console.log(Date.getDay());
// returns day of the month (in UTC 15)

console.log(`${Date.getDay()}.${Date.getMonth()}.${Date.getYear()}, ${Date.getHour()}:${Date.getMinute()}`);
// returns: 15.12.2020, 11:47

console.log(Date.formatDay);
// returns: 15.12.2020
```
#### `timestamp()` example
```js
// import module
const Converter = require('timestamp-conv');

// set date to: Tue, 15 Dec 2020 23:30:24 UTC
const Date = new Converter.timestamp('Tue, 15 Dec 2020 23:30:24 UTC');

console.log(Date.getDay());
// returns day of the month (15)

console.log(`${Date.getDay()}.${Date.getMonth()}.${Date.getYear()}, ${Date.getHour()}:${Date.getMinute()}`);
// returns: 15.12.2020, 23:30

console.log(Date.formatDay);
// returns: 15.12.2020
```
#### `timestamp()` example with forceTimezone
```js
// import module
const Converter = require('timestamp-conv');

// set date to: 2020-07-03T14:28:13.955Z and force timezone to UTC+1
const Date = new Converter.timestamp('2020-07-03T14:28:13.955Z', {forceTimezone: true, timezone: 1});

console.log(Date.getDay());
// returns day of the month (03)

console.log(`${Date.getDay()}.${Date.getMonth()}.${Date.getYear()}, ${Date.getHour()}:${Date.getMinute()}`);
// returns: 03.07.2020, 15:28 (in UTC: 03.07.2020, 14:28)

console.log(Date.formatDay);
// returns: 03.07.2020
```
#### `timestamp()` example with [DiscordJS](https://www.npmjs.com/package/discord.js)
```js
const Converter = require('timestamp-conv');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('ready');
});

client.on('message', async (message) => {
    if(message.content === '!creationDate'){
        message.reply(`Your creation date is: ${new Converter.timestamp(message.author.createdAt).formatHour}`);
    }
});

client.login('token');
```