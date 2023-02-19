
export interface CountryData {
    visa_level: 0 | 1
    cost: string,
    savings_needed: string
    income_per_month_needed: string,
    last_updated: string
    comments: string
    official_url?: string,
}

export const countryData: { [c: string]: CountryData } = {
    // Iceland - ISL
    "ISL": {
        visa_level: 1,
        cost: "ISK 12,200",
        savings_needed: "N/A",
        income_per_month_needed: "ISK 1,000,000",
        last_updated: "Feb, 23",
        comments: "Living in Iceland offers a unique cultural experience and stunning natural beauty, but also comes with challenges such as high cost of living.",
        official_url: "https://island.is/en/get-long-term-visa-for-remote-workers"
    },
    // Germany - DEU
    "DEU": {
        visa_level: 0,
        cost: "€175",
        savings_needed: "",
        income_per_month_needed: "€750",
        last_updated: "Feb, 23",
        comments: "Germany does not have a Digital Nomad visa, you can however get a freelancer visa. The application process for this visa can take up to 4 months and you require a German address to apply."
    }
}

