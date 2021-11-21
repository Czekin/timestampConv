/**
 * @author Czekin (https://github.com/Czekin)
 * @name Timestamp-Convert
 * @description Converts date(e.g. Tue, 15 Dec 2020 23:30:24 GMT) to timestamp.
 */

/**
 * @typedef {Object} ConvertTimestamp
 * 
 * @property {number} getDay          - Day
 * @property {number} getDayOfWeek    - Day of the Week
 * @property {number} getMonth        - Month
 * @property {number} getYear         - Year
 * @property {number} getHour         - Hour
 * @property {number} getMinute       - Minutes
 * @property {number} getSeconds      - Seconds
 * @property {number} getMilliseconds - Milliseconds
 * @property {string} formatDay       - Format time: DD.MM.YYYY
 * @property {string} formatHour      - Format time: DD.MM.YYYY, hh:mm
 * @property {string} formatSeconds   - Format time: DD.MM.YYYY, hh:mm:ss
 */

/**
 * @class ConvertTimestamp
 */
module.exports = class {

    /**
     * @constructor
     * @type {ConvertTimestamp}
     * 
     * @param {Date | string} date        - Date
     * @param {object} [param1] - Convert Options
     * @param {boolean} param1.forceTimezone - Force Timezone
     * @param {number} param1.timezone - Add Hours to timezone
     */
    constructor(date = null, { forceTimezone, timezone } = { forceTimezone: false, timezone: 0 }) {
        if (date == null) {
            throw new Error('Provided timestamp is invalid or value equals `NaN` or `undefined`.\nCheck provided value.');
        }
        date = new Date(date);

        /**
         * @method getDay
         * @returns {number} Day
         */
        this.getDay = () => {
            let day = date.getDate();
            if (day < 10) day = '0' + day;

            return day;
        };

        /**
         * @method getDayOfWeek
         * @returns {number} Day of the Week
         */
        this.getDayOfWeek = () => {
            return date.getDay();
        };

        /**
         * @method getMonth
         * @returns {number} Month
         */
        this.getMonth = () => {
            let month = date.getMonth() + 1;
            if (month < 10) month = '0' + month;

            return month;
        };

        /**
         * @method getYear
         * @returns {number} Year
         */
        this.getYear = () => {
            return date.getFullYear();
        };

        /**
         * @method getHour
         * @returns {number} Hour
         */
        this.getHour = () => {
            let hours;

            if (forceTimezone == true) hours = date.getUTCHours() + timezone;
            else hours = date.getHours();

            if (hours < 10) hours = '0' + hours;

            return hours;
        };

        /**
         * @method getMinute
         * @returns {number} Minutes
         */
        this.getMinute = () => {
            let minutes = date.getMinutes();
            if (minutes < 10) minutes = '0' + minutes;

            return minutes;
        };

        /**
         * @method getSeconds
         * @returns {number} Seconds
         */
        this.getSeconds = () => {
            let sec = date.getSeconds();
            if (sec < 10) sec = '0' + sec;

            return sec;
        };

        /**
         * @method getMilliseconds
         * @returns {number} Milliseconds
         */
        this.getMilliseconds = () => {
            let milli = date.getMilliseconds();
            if (milli < 10) milli = '0' + milli;

            return milli;
        };

        /**
         * @method getDaysInMonth
         * @returns {number} Days in month (1 to 31)
         */
        this.getDaysInMonth = () => {
            return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        };

        /**
         * formatDay 
         * @returns {string} Format time: DD.MM.YYYY
         */
        this.formatDay = `${this.getDay()}.${this.getMonth()}.${this.getYear()}`;

        /**
         * formatHour
         * @returns {string} Format time: DD.MM.YYYY, hh:mm
         */
        this.formatHour = `${this.getDay()}.${this.getMonth()}.${this.getYear()}, ${this.getHour()}:${this.getMinute()}`;

        /**
         * formatSeconds
         * @returns {string} Format time: DD.MM.YYYY, hh:mm:ss
         */
        this.formatSeconds = `${this.getDay()}.${this.getMonth()}.${this.getYear()}, ${this.getHour()}:${this.getMinute()}:${this.getSeconds()}`;
    };
};