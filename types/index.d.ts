declare module "timestamp-conv";

export { SimpleDate as date, ConvertTimestamp as timestamp };

type ConvertOptions = {
    forceTimezone: boolean;
    timezone: number;
};

declare class SimpleDate {
    constructor(timestamp: string | number, ConvertOptions?: ConvertOptions);

    public getDay(): number;
    public getDayOfWeek(): number;
    public getMonth(): number;
    public getYear(): number;
    public getHour(): number;
    public getMinute(): number;
    public getSeconds(): number;
    public getMilliseconds(): number;
    public getDaysInMonth(): number;
    public readonly formatDay: string;
    public readonly formatHour: string;
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
    constructor(date: string | Date, ConvertOptions?: ConvertOptions);

    public getDay(): number;
    public getDayOfWeek(): number;
    public getMonth(): number;
    public getYear(): number;
    public getHour(): number;
    public getMinute(): number;
    public getSeconds(): number;
    public getMilliseconds(): number;
    public getDaysInMonth(): number;
    public readonly formatDay: string;
    public readonly formatHour: string;
    public readonly formatSeconds: string;
}
