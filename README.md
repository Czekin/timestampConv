# Timestamp Converter
Simple converter.

---

## Simple-Date: date
• `getDayOfWeek()` Returns day of the week.

• `getDay()` Returns day of the month.

• `getMonth()` Returns month.

• `getYear()` Returns year.

• `getHour()` Returns hours.

• `getMinute()` Returns minutes.

• `getSeconds()` Returns seconds.

• `getMilliseconds()` Returns miliseconds.

• `_getVariable` Returns Date object.

---

## Timestamp-Convert: timestamp
• `getTimestamp` Returns timestamp.

• `getDayOfWeek()` Returns day of the week.

• `getDay()` Returns day of the month.

• `getMonth()` Returns month.

• `getYear()` Returns year.

• `getHour()` Returns hours.

• `getMinute()` Returns minutes.

• `getSeconds()` Returns seconds.

• `getMilliseconds()` Returns miliseconds.

---

## Examples:
```js
// import module
const Converter = require('timestamp-conv');

// set date
const Date = new Converter.date(1608076029);

console.log(Date.getDay());
// returns day of the month (16)
```

```js
// import module
const Converter = require('timestamp-conv');

// set date
const Date = new Converter.date('Tue, 15 Dec 2020 23:30:24 GMT');

console.log(Date.getDay());
// returns day of the month (15)
```