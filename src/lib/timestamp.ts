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

class ConvertTimestamp {
    readonly formatDay: string;
    readonly formatHour: string;
    readonly formatSeconds: string;
    private date: Date;
    private options: Options;

    constructor(date: any, options?: Options) {
        if (!options) options = {};
        options.forceTimezone ??= false;
        options.timezone ??= 0;

        if (date == undefined) {
            throw new Error('Provided timestamp is invalid or value equals `NaN` or `undefined`.\nCheck provided value.');
        }
        this.date = new Date(date);
        this.options = options;

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

        /**
         * @method getDay
         * @returns {string} Day
         */
         getDay = (): string => {
            let day = this.date.getDate();
            // if (day < 10) day = '0' + day;

            return String(day).padStart(2, '0');
        };

        /**
         * @method getDayOfWeek
         * @returns {number} Day of the Week
         */
        getDayOfWeek = (): number => {
            return this.date.getDay();
        };

        /**
         * @method getMonth
         * @returns {string} Month
         */
        getMonth = (): string => {
            let month = this.date.getMonth() + 1;
            // if (month < 10) month = '0' + month;

            return String(month).padStart(2, '0');
        };

        /**
         * @method getYear
         * @returns {number} Year
         */
        getYear = (): number => {
            return this.date.getFullYear();
        };

        /**
         * @method getHour
         * @returns {string} Hour
         */
        getHour = (): string => {
            let hours;

            // @ts-ignore
            if (this.options?.forceTimezone == true) hours = this.date.getUTCHours() + this.options.timezone;
            else hours = this.date.getHours();

            // if (hours < 10) hours = '0' + hours;

            return String(hours).padStart(2, '0');
        };

        /**
         * @method getMinute
         * @returns {string} Minutes
         */
        getMinute = (): string => {
            let minutes = this.date.getMinutes();
            // if (minutes < 10) minutes = '0' + minutes;

            return String(minutes).padStart(2, '0');
        };

        /**
         * @method getSeconds
         * @returns {string} Seconds
         */
        getSeconds = (): string => {
            let sec = this.date.getSeconds();
            // if (sec < 10) sec = '0' + sec;

            return String(sec).padStart(2, '0');
        };

        /**
         * @method getMilliseconds
         * @returns {string} Milliseconds
         */
        getMilliseconds = (): string => {
            let milli = this.date.getMilliseconds();
            // if (milli < 10) milli = '0' + milli;

            return String(milli).padStart(2, '0');
        };

        /**
         * @method getDaysInMonth
         * @returns {number} Days in month (1 to 31)
         */
        getDaysInMonth = (): number => {
            return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        };
};

export = ConvertTimestamp;