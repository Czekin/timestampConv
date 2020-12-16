/**
 * @author Czekin (https://github.com/Czekin)
 * @name Simple-Date
 * @description Converts timestamp(e.g. 1608074687) to simple date.
 */

module.exports = class SimpleDate {
    constructor(timestamp = 1608074687) {
        timestamp = new Date(timestamp * 1000);

        this.getDay = () => {
            let day = timestamp.getDate();
            if (day < 10) day = '0' + day;

            return day;
        };
        this.getDayOfWeek = () => {
            return timestamp.getDay();
        };
        this.getMonth = () => {
            let month = timestamp.getMonth() + 1;
            if (month < 10) month = '0' + month;

            return month;
        };
        this.getYear = () => {
            return timestamp.getFullYear();
        };
        this.getHour = () => {
            let h = timestamp.getHours();
            if (h < 10) h = '0' + h;

            return h;
        };
        this.getMinute = () => {
            let m = timestamp.getMinutes();
            if (m < 10) m = '0' + m;

            return m;
        };
        this.getSeconds = () => {
            let sec = timestamp.getSeconds();
            if (sec < 10) sec = '0' + sec;

            return sec;
        };
        this.getMilliseconds = () => {
            let milli = timestamp.getMilliseconds();
            if (milli < 10) milli = '0' + milli;

            return milli;
        };

        this._getVariable = timestamp;

        this.formatDay = `${this.getDay()}.${this.getMonth()}.${this.getYear()}`;
        this.formatHour = `${this.getDay()}.${this.getMonth()}.${this.getYear()}, ${this.getHour()}:${this.getMinute()}`;
        this.formatSeconds = `${this.getDay()}.${this.getMonth()}.${this.getYear()}, ${this.getHour()}:${this.getMinute()}:${this.getSeconds()}`;
    };
};