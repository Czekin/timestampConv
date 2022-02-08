declare module "timestamp-conv";

export { SimpleDate as date, ConvertTimestamp as timestamp };

type ConvertOptions = {
    forceTimezone: boolean;
    timezone: number;
};

declare class SimpleDate {
    /**
     *
     * @param {string|number} timestamp - Timestamp
     * @param {object} [param1] - Convert Options
     * @param {boolean} param1.forceTimezone - Force Timezone
     * @param {number} param1.timezone - Add Hours to timezone
     */
    constructor(timestamp: string | number, ConvertOptions?: ConvertOptions);

    /**
     * @method getDay
     * @returns {number} Day
     */
    public getDay(): number;
    /**
     * @method getDayOfWeek
     * @returns {number} Day of the Week
     */
    public getDayOfWeek(): number;
    /**
     * @method getMonth
     * @returns {number} Month
     */
    public getMonth(): number;
    /**
     * @method getYear
     * @returns {number} Year
     */
    public getYear(): number;
    /**
     * @method getHour
     * @returns {number} Hour
     */
    public getHour(): number;
    /**
     * @method getMinute
     * @returns {number} Minutes
     */
    public getMinute(): number;

    /**
     * @method getSeconds
     * @returns {number} Seconds
     */
    public getSeconds(): number;
    /**
     * @method getMilliseconds
     * @returns {number} Milliseconds
     */
    public getMilliseconds(): number;
    /**
     * @method getDaysInMonth
     * @returns {number} Days in month (1 to 31)
     */
    public getDaysInMonth(): number;
    /**
     * formatDay
     * @returns {string} Format time: DD.MM.YYYY
     */
    public readonly formatDay: string;
    /**
     * formatHour
     * @returns {string} Format time: DD.MM.YYYY, hh:mm
     */
    public readonly formatHour: string;
    /**
     * formatSeconds
     * @returns {string} Format time: DD.MM.YYYY, hh:mm:ss
     */
    public readonly formatSeconds: string;
}

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

declare class ConvertTimestamp {
    /**
     * @constructor
     * @type {ConvertTimestamp}
     *
     * @param {Date | string} date        - Date
     * @param {object} [param1] - Convert Options
     * @param {boolean} param1.forceTimezone - Force Timezone
     * @param {number} param1.timezone - Add Hours to timezone
     */
    constructor(date: string | Date, ConvertOptions?: ConvertOptions);

    /**
     * @method getDay
     * @returns {number} Day
     */
    public getDay(): number;
    /**
     * @method getDayOfWeek
     * @returns {number} Day of the Week
     */
    public getDayOfWeek(): number;
    /**
     * @method getMonth
     * @returns {number} Month
     */
    public getMonth(): number;
    /**
     * @method getYear
     * @returns {number} Year
     */
    public getYear(): number;
    /**
     * @method getHour
     * @returns {number} Hour
     */
    public getHour(): number;
    /**
     * @method getMinute
     * @returns {number} Minutes
     */
    public getMinute(): number;
    /**
     * @method getSeconds
     * @returns {number} Seconds
     */
    public getSeconds(): number;
    /**
     * @method getMilliseconds
     * @returns {number} Milliseconds
     */
    public getMilliseconds(): number;
    /**
     * @method getDaysInMonth
     * @returns {number} Days in month (1 to 31)
     */
    public getDaysInMonth(): number;
    /**
     * formatDay
     * @returns {string} Format time: DD.MM.YYYY
     */
    public readonly formatDay: string;
    /**
     * formatHour
     * @returns {string} Format time: DD.MM.YYYY, hh:mm
     */
    public readonly formatHour: string;
    /**
     * formatSeconds
     * @returns {string} Format time: DD.MM.YYYY, hh:mm:ss
     */
    public readonly formatSeconds: string;
}
