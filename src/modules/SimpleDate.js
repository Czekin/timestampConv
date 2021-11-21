/**
 * @author Czekin (https://github.com/Czekin)
 * @name Simple-Date
 * @description Converts timestamp(e.g. 1608074687) to simple date.
 */

/**
 * @typedef {Object} SimpleDate
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

module.exports = class SimpleDate {

    /**
     * 
     * @param {string|number} timestamp - Timestamp
     * @param {object} [param1] - Convert Options
     * @param {boolean} param1.forceTimezone - Force Timezone
     * @param {number} param1.timezone - Add Hours to timezone
     */
    constructor(timestamp = null, { forceTimezone, timezone } = { forceTimezone: false, timezone: 0 }) {
        if (timestamp == null) {
            throw new Error('Provided timestamp is invalid or value equals `NaN` or `undefined`.\nCheck provided value.');
        }
        timestamp = new Date(timestamp * 1000);

        /**
         * @method getDay
         * @returns {number} Day
         */
        this.getDay = () => {
            let day = timestamp.getDate();
            if (day < 10) day = '0' + day;

            return day;
        };

        /**
         * @method getDayOfWeek
         * @returns {number} Day of the Week
         */
        this.getDayOfWeek = () => {
            return timestamp.getDay();
        };

        /**
         * @method getMonth
         * @returns {number} Month
         */
        this.getMonth = () => {
            let month = timestamp.getMonth() + 1;
            if (month < 10) month = '0' + month;

            return month;
        };

        /**
         * @method getYear
         * @returns {number} Year
         */
        this.getYear = () => {
            return timestamp.getFullYear();
        };

        /**
         * @method getHour
         * @returns {number} Hour
         */
        this.getHour = () => {
            let hours;

            if (forceTimezone == true) hours = timestamp.getUTCHours() + timezone;
            else hours = timestamp.getHours();

            if (hours < 10) hours = '0' + hours;

            return hours;
        };

        /**
         * @method getMinute
         * @returns {number} Minutes
         */
        this.getMinute = () => {
            let minutes = timestamp.getMinutes();
            if (minutes < 10) minutes = '0' + minutes;

            return minutes;
        };

        /**
         * @method getSeconds
         * @returns {number} Seconds
         */
        this.getSeconds = () => {
            let sec = timestamp.getSeconds();
            if (sec < 10) sec = '0' + sec;

            return sec;
        };

        /**
         * @method getMilliseconds
         * @returns {number} Milliseconds
         */
        this.getMilliseconds = () => {
            let milli = timestamp.getMilliseconds();
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