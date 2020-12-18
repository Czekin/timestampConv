# Timestamp Converter
#### A simple converter designed for DiscordJS timestamps.
[![npm](https://img.shields.io/npm/v/timestamp-conv)](https://www.npmjs.com/package/timestamp-conv)
[![npm](https://img.shields.io/npm/dt/timestamp-conv)](https://www.npmjs.com/package/timestamp-conv)
[![GitHub last commit](https://img.shields.io/github/last-commit/Czekin/timestampConv)](https://github.com/Czekin/timestampConv)
[![Travis](https://img.shields.io/travis/com/Czekin/timestampConv)](https://travis-ci.com/github/Czekin/timestampConv)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FCzekin%2FtimestampConv.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FCzekin%2FtimestampConv?ref=badge_shield)

[![NPM](https://nodei.co/npm/timestamp-conv.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/timestamp-conv/)

Sometimes for some reasons module `moment` doesn't work properly with discord.js timestamps, so if you have some issues, this module is for you.

---

## date
#### Simple-Date | **`date(Number)`**
• `getDayOfWeek()` Returns day of the week.

• `getDay()` Returns day of the month.

• `getMonth()` Returns month.

• `getYear()` Returns year.

• `getHour()` Returns hours.

• `getMinute()` Returns minutes.

• `getSeconds()` Returns seconds.

• `getMilliseconds()` Returns miliseconds.

• `formatDay` Returns formated human time in: `DD.MM.YYYY`.

• `formatHour` Returns formated human time in: `DD.MM.YYYY, hh:mm`.

• `formatSeconds` Returns formated human time in: `DD.MM.YYYY, hh:mm:ss`.

• `_getVariable` Returns Date object.

---

## discordTimestamp
#### Discord-Timestamp | **`discordTimestamp(String)`**
#### Converter for time: ISO 8601
• `getDayOfWeek()` Returns day of the week.

• `getDay()` Returns day of the month.

• `getMonth()` Returns month.

• `getYear()` Returns year.

• `getHour()` Returns hours.

• `getMinute()` Returns minutes.

• `getSeconds()` Returns seconds.

• `getMilliseconds()` Returns miliseconds.

• `formatDay` Returns formated human time in: `DD.MM.YYYY`.

• `formatHour` Returns formated human time in: `DD.MM.YYYY, hh:mm`.

• `formatSeconds` Returns formated human time in: `DD.MM.YYYY, hh:mm:ss`.

• `_getVariable` Returns Date object.

---

## timestamp
#### Timestamp-Convert | **`timestamp(String)`**
• `getDayOfWeek()` Returns day of the week.

• `getDay()` Returns day of the month.

• `getMonth()` Returns month.

• `getYear()` Returns year.

• `getHour()` Returns hours.

• `getMinute()` Returns minutes.

• `getSeconds()` Returns seconds.

• `getMilliseconds()` Returns miliseconds.

• `getTimestamp` Returns timestamp.

• `formatDay` Returns formated human time in: `DD.MM.YYYY`.

• `formatHour` Returns formated human time in: `DD.MM.YYYY, hh:mm`.

• `formatSeconds` Returns formated human time in: `DD.MM.YYYY, hh:mm:ss`.

---

## Examples:
#### `date()` Class example
```js
// import module
const Converter = require('timestamp-conv');

// set date to: 1608076029 (time is in UTC)
const Date = new Converter.date(1608076029);

console.log(Date.getDay());
// returns day of the month (15)

console.log(`${Date.getDay()}.${Date.getMonth()}.${Date.getYear}, ${Date.getHour()}:${Date.getMinute}`);
// returns: 15.12.2020, 11:47

console.log(Date.formatDay);
// returns: 15.12.2020
```
#### `timestamp()` Class example
```js
// import module
const Converter = require('timestamp-conv');

// set date to: Tue, 15 Dec 2020 23:30:24 GMT
const Date = new Converter.timestamp('Tue, 15 Dec 2020 23:30:24 GMT');

console.log(Date.getDay());
// returns day of the month (15)

console.log(`${Date.getDay()}.${Date.getMonth()}.${Date.getYear}, ${Date.getHour()}:${Date.getMinute}`);
// returns: 15.12.2020, 23:30

console.log(Date.formatDay);
// returns: 15.12.2020
```
#### `discordTimestamp()` Class example
```js
// import module
const Converter = require('timestamp-conv');

// set date to: 2020-07-03T14:28:13.955Z
const Date = new Converter.discordTimestamp('2020-07-03T14:28:13.955Z');

console.log(Date.getDay());
// returns day of the month (03)

console.log(`${Date.getDay()}.${Date.getMonth()}.${Date.getYear}, ${Date.getHour()}:${Date.getMinute}`);
// returns: 03.07.2020, 14:28

console.log(Date.formatDay);
// returns: 03.07.2020
```


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FCzekin%2FtimestampConv.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FCzekin%2FtimestampConv?ref=badge_large)