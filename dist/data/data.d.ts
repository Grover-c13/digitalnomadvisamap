export interface CountryData {
    visa_support_level: 'NOT_GREAT' | 'GREAT' | 'REVOKED' | 'COMING';
    cost: string;
    savings_needed: string;
    income_per_month_needed: string;
    last_updated: string;
    comments: string;
    official_url?: string;
}
export declare const countryData: {
    [c: string]: CountryData;
};
