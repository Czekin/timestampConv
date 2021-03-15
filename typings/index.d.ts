export class date {
    public getDay: () => number | string;
    public getDayOfWeek: () => number;
    public getMonth: () => number | string;
    public getYear: () => number;
    public getHour: () => number | string;
    public getMinute: () => number | string;
    public getSeconds: () => number | string;
    public getMilliseconds: () => number | string;

    public formatDay: string;
    public formatHour: string;
    public formatSeconds: string;

    public constructor(timestamp: number);
}

export class timestamp {
    public getDay: () => number | string;
    public getDayOfWeek: () => number;
    public getMonth: () => number | string;
    public getYear: () => number;
    public getHour: () => number | string;
    public getMinute: () => number | string;
    public getSeconds: () => number | string;
    public getMilliseconds: () => number | string;

    public formatDay: string;
    public formatHour: string;
    public formatSeconds: string;

    public constructor(date: string | Date);
}
