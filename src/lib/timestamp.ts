import Options from './types/interface.options';

/**
 * @typedef {Object} ConvertTimestamp
 * 
 * @property {string} getDay          - Day
 * @property {number} getDayOfWeek    - Day of the Week
 * @property {string} getMonth        - Month
 * @property {number} getYear         - Year
 * @property {string} getHour         - Hour
 * @property {string} getMinute       - Minutes
 * @property {string} getSeconds      - Seconds
 * @property {string} getMilliseconds - Milliseconds
 * @property {number} getDaysInMonth  - Days in month (1 to 31)
 * @property {string} formatDay       - Format time: DD.MM.YYYY
 * @property {string} formatHour      - Format time: DD.MM.YYYY, hh:mm
 * @property {string} formatSeconds   - Format time: DD.MM.YYYY, hh:mm:ss
 */

 export = class ConvertTimestamp {
    public readonly getDay: () => string;
    public readonly getDayOfWeek: () => number;
    public readonly getMonth: () => string;
    public readonly getYear: () => number;
    public readonly getHour: () => string;
    public readonly getMinute: () => string;
    public readonly getSeconds: () => string;
    public readonly getMilliseconds: () => string;
    public readonly getDaysInMonth: () => number;
    public readonly formatDay: string;
    public readonly formatHour: string;
    public readonly formatSeconds: string;

    constructor(date: any, options?: Options) {
        if (!options) options = {};
        options.forceTimezone ??= false;
        options.timezone ??= 0;

        if (date == undefined) {
            throw new Error('Provided timestamp is invalid or value equals `NaN` or `undefined`.\nCheck provided value.');
        }
        date = new Date(date);

        /**
         * @method getDay
         * @returns {string} Day
         */
        this.getDay = () => {
            let day = date.getDate();
            // if (day < 10) day = '0' + day;

            return String(day).padStart(2, '0');
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
         * @returns {string} Month
         */
        this.getMonth = () => {
            let month = date.getMonth() + 1;
            // if (month < 10) month = '0' + month;

            return String(month).padStart(2, '0');
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
         * @returns {string} Hour
         */
        this.getHour = () => {
            let hours;

            if (options?.forceTimezone == true) hours = date.getUTCHours() + options.timezone;
            else hours = date.getHours();

            // if (hours < 10) hours = '0' + hours;

            return String(hours).padStart(2, '0');
        };

        /**
         * @method getMinute
         * @returns {string} Minutes
         */
        this.getMinute = () => {
            let minutes = date.getMinutes();
            // if (minutes < 10) minutes = '0' + minutes;

            return String(minutes).padStart(2, '0');
        };

        /**
         * @method getSeconds
         * @returns {string} Seconds
         */
        this.getSeconds = () => {
            let sec = date.getSeconds();
            // if (sec < 10) sec = '0' + sec;

            return String(sec).padStart(2, '0');
        };

        /**
         * @method getMilliseconds
         * @returns {string} Milliseconds
         */
        this.getMilliseconds = () => {
            let milli = date.getMilliseconds();
            // if (milli < 10) milli = '0' + milli;

            return String(milli).padStart(2, '0');
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