export interface CountryData {
    visa_support_level: VisaSupportLevel;
    cost: string;
    savings_needed: string;
    income_per_month_needed: string;
    last_updated: string;
    comments: string;
    official_url?: string;
}
declare enum VisaSupportLevel {
    SELFEMPLOYED = 0,
    SUPPORTED = 1,
    REVOKED = 2,
    COMING = 3,
    SPECIFIC_AREA = 4
}
export declare const countryData: {
    [c: string]: CountryData;
};
export {};
