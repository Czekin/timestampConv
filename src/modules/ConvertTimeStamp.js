/**
 * @author Czekin (https://github.com/Czekin)
 * @name Timestamp-Convert
 * @description Converts date(e.g. Tue, 15 Dec 2020 23:30:24 GMT) to timestamp.
 */

module.exports = class ConvertTimeStamp {
    constructor(date = 'Tue, 15 Dec 2020 23:30:24 GMT') {
        date = new Date(Date.parse(date));

        this.getTimestamp = date;

        this.getDay = () => {
            let day = date.getDate();
            if (day < 10) day = '0' + day;

            return day;
        };
        this.getDayOfWeek = () => {
            return date.getDay();
        };
        this.getMonth = () => {
            let month = date.getMonth() + 1;
            if (month < 10) month = '0' + month;

            return month;
        };
        this.getYear = () => {
            return date.getFullYear();
        };
        this.getHour = () => {
            let h = date.getHours();
            if (h < 10) h = '0' + h;

            return h;
        };
        this.getMinute = () => {
            let m = date.getMinutes();
            if (m < 10) m = '0' + m;

            return m;
        };
        this.getSeconds = () => {
            let sec = date.getSeconds();
            if (sec < 10) sec = '0' + sec;

            return sec;
        };
        this.getMilliseconds = () => {
            let milli = date.getMilliseconds();
            if (milli < 10) milli = '0' + milli;

            return milli;
        };
    };
};