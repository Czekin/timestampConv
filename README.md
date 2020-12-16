# Timestamp Converter
Simple converter.

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
```js
// import module
const Converter = require('timestamp-conv');

// set date to: 1608076029
const Date = new Converter.date(1608076029);

console.log(Date.getDay());
// returns day of the month (16)
```

```js
// import module
const Converter = require('timestamp-conv');

// set date to: Tue, 15 Dec 2020 23:30:24 GMT
const Date = new Converter.timestamp('Tue, 15 Dec 2020 23:30:24 GMT');

console.log(Date.getDay());
// returns day of the month (15)
```

```js
// import module
const Converter = require('timestamp-conv');

// set date to: 2020-07-03T14:28:13.955Z
const Date = new Converter.discordTimestamp('2020-07-03T14:28:13.955Z');

console.log(Date.getDay());
// returns day of the month (03)
```

```js
// import module
const Converter = require('timestamp-conv');

// set date to: Tue, 15 Dec 2020 23:30:24 GMT
const Date = new Converter.timestamp('Tue, 15 Dec 2020 23:30:24 GMT');

console.log(Date.formatDay);
// returns: 15.12.2020
```