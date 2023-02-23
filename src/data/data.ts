export interface CountryData {
    visa_support_level: VisaSupportLevel
    cost: string,
    savings_needed: string
    income_per_month_needed: string,
    last_updated: string
    comments: string
    official_url?: string,
}

enum VisaSupportLevel {
    SELFEMPLOYED, SUPPORTED, REVOKED, COMING, SPECIFIC_AREA,
}

export const countryData: { [c: string]: CountryData } = {
    // Anguilla - AIA - Checked
    "AIA": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "$2,000",
        savings_needed: "N/A",
        income_per_month_needed: "N/A",
        last_updated: "",
        comments: "",
        official_url: "https://ivisitanguilla.com/"
    },

    // Andorra - AND - Checked
    "AND": {
        visa_support_level: VisaSupportLevel.COMING,
        cost: "",
        savings_needed: "N/A",
        income_per_month_needed: "N/A",
        last_updated: "Feb, 23",
        comments: "Announced 2021, not yet implemented.",
        official_url: "https://www.exteriors.ad/en/travel-to-andorra"
    },

    // Antigua and Barbuda - ATG - Checked
    "ATG": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "USD $1500",
        savings_needed: "N/A",
        income_per_month_needed: "USD $4,167",
        last_updated: "Feb, 23",
        comments: "Valid for 2 years",
        official_url: "https://antigua-barbuda.com/nomaddigitalresidence"
    },

    // Argentina - ARG - Checked
    "ARG": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "ARS 3000",
        savings_needed: "",
        income_per_month_needed: "ARS 30,000",
        last_updated: "Feb, 23",
        comments: "You need to apply inside the country.",
        official_url: ""
    },

    // Aruba - ABW - Checked
    "ABW": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: "https://www.aruba.com/us/work-and-study"
    },

    // Bahamas - BHS - Checked
    "BHS": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "$1,000",
        savings_needed: "N/A",
        income_per_month_needed: "N/A",
        last_updated: "",
        comments: "",
        official_url: "https://www.bahamasbeats.com/"
    },

    // Barbados - BRB - checked
    "BRB": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "USD $4167",
        savings_needed: "",
        income_per_month_needed: "USD $2,000",
        last_updated: "Feb, 23",
        comments: "",
        official_url: "https://www.visitbarbados.org/welcome-stamp"
    },

    // Belize - BLZ - checked
    "BLZ": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "USD $6250",
        last_updated: "Feb, 23",
        comments: "",
        official_url: "https://www.travelbelize.org/work-where-you-vacation/"
    },

    // Bermuda - BMU - checked
    "BMU": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "USD $263",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: "https://forms.gov.bm/work-from-bermuda/Apply"
    },

    // Cabo Verde - CPV - checked
    "CPV": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "€54",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "",
        comments: "€1,500 minimum average bank balance on the last six months for an individual",
        official_url: ""
    },

    // Cayman Islands - CYM - checked
    "CYM": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "USD 1,469",
        savings_needed: "USD 4,000",
        income_per_month_needed: "USD 100,000",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // Croatia - HRV - checked
    "HRV": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "€2,300",
        last_updated: "Feb, 23",
        comments: "You need to prove that you have secured accommodation.",
        official_url: ""
    },

    // Curaçao - CUW - checked
    "CUW": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "€260",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "You need to prove that you have secured accommodation.",
        official_url: ""
    },

    // Cyprus - CYP - checked
    "CYP": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "EUR 85",
        savings_needed: "N/A",
        income_per_month_needed: "€3,500",
        last_updated: "Feb, 23",
        comments: "There is a limited number (500) of visas given.",
        official_url: ""
    },

    // Dominica - DMA - checked
    "DMA": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "USD $100",
        savings_needed: "",
        income_per_month_needed: "USD $4,167",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // Georgia - GEO - checked
    "GEO": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "N/A",
        income_per_month_needed: "USd $2000",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // Greece - GRC - checked
    "GRC": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "€225",
        savings_needed: "",
        income_per_month_needed: "€3,500",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // Hungary - HUN - checked
    "HUN": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "€110",
        savings_needed: "",
        income_per_month_needed: "€2,000",
        last_updated: "Feb, 23",
        comments: "",
        official_url: "https://enterhungary.com/"
    },

    // Germany - DEU - Checked
    "DEU": {
        visa_support_level: VisaSupportLevel.SELFEMPLOYED,
        cost: "€175",
        savings_needed: "",
        income_per_month_needed: "€750",
        last_updated: "Feb, 23",
        comments: "Germany does not have a Digital Nomad visa, you can however get a freelancer visa. The application process for this visa can take up to 4 months and you require a German address to apply."
    }, // Iceland - ISL - checked
    "ISL": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "ISK 12,200",
        savings_needed: "N/A",
        income_per_month_needed: "ISK 1,000,000",
        last_updated: "Feb, 23",
        comments: "",
        official_url: "https://island.is/en/get-long-term-visa-for-remote-workers"
    }, // Indonesia - IDN - checked
    "IDN": {
        visa_support_level: VisaSupportLevel.COMING,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "Announced 2022",
        official_url: "https://www.invest-islands.com/visa-2/"
    },

    // Italy - ITA - checked
    "ITA": {
        visa_support_level: VisaSupportLevel.COMING,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "",
        comments: "Visa announced March 28, 2022. It has benn approved and signed into law, its awaiting implementation.",
        official_url: "https://www.schengenvisainfo.com/digital-nomad-visa/italy/"
    },

    // Norway - NOR - Checked
    "NOR": {
        visa_support_level: VisaSupportLevel.SPECIFIC_AREA,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "€2,917",
        last_updated: "Feb, 23",
        comments: "Only available for Svalbard.",
        official_url: ""
    },

    // Montenegro - MNE - Checked
    "MNE": {
        visa_support_level: VisaSupportLevel.COMING,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "Launching in 2025",
        official_url: ""
    },

    // Latvia - LVA
    "LVA": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // Malta - MLT
    "MLT": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // Mexico - MEX
    "MEX": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },


    // North Macedonia - MKD
    "MKD": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    }, // Panama - PAN
    "PAN": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // Romania - ROU
    "ROU": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // Seychelles - SYC
    "SYC": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // Spain - ESP
    "ESP": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // Sri Lanka - LKA
    "LKA": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // Taiwan - TWN
    "TWN": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    }, // United Arab Emirates - ARE
    "ARE": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // Vanuatu - VUT
    "VUT": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // Wallis and Futuna - WLF
    "WLF": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // Zambia - ZMB
    "ZMB": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },


    // Czechia - CZE
    "CZE": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // Ecuador - ECU
    "ECU": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // Estonia - EST
    "EST": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // Mauritius - MUS
    "MUS": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },


    // Saint Lucia - LCA
    "LCA": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },

    // South Africa - ZAF
    "ZAF": {
        visa_support_level: VisaSupportLevel.SUPPORTED,
        cost: "",
        savings_needed: "",
        income_per_month_needed: "",
        last_updated: "Feb, 23",
        comments: "",
        official_url: ""
    },
}

