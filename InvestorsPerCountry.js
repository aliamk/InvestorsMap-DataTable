
//[{"date":"2020-01-22","list":[{"confirmed":0,"deaths":0,"recovered":0,"id":"TV"}]
const investors_WORLD_timeline = [
    {
        "date":"2020-01-22",
        "list":[
            {"totalCompanies":150, "pensionFund":120,"SovereignWealthFund":10, "Endowment":20, "id":"BR"},
            {"totalCompanies":1060, "pensionFund":1000,"SovereignWealthFund":50, "Endowment":10, "id":"CA"},
            {"totalCompanies":1310, "pensionFund":1020,"SovereignWealthFund":250, "Endowment":40, "id":"CN"},
            {"totalCompanies":3050, "pensionFund":2500,"SovereignWealthFund":500, "Endowment":50, "id":"US"} 
        ]
    },{
        "date":"2020-04-22",
        "list":[
            {"totalCompanies":253, "pensionFund":210,"SovereignWealthFund":18, "Endowment":25, "id":"BR"},
            {"totalCompanies":1229, "pensionFund":1100, "SovereignWealthFund":77, "Endowment":52, "id":"CA"},
            {"totalCompanies":1410, "pensionFund":1050,"SovereignWealthFund":300, "Endowment":60, "id":"CN"},
            {"totalCompanies":3665, "pensionFund":2800, "SovereignWealthFund":800, "Endowment":65, "id":"US"}            
        ]
    },{
        "date":"2020-10-22",
        "list":[
            {"totalCompanies":270, "pensionFund":220,"SovereignWealthFund":20, "Endowment":30, "id":"BR"},
            {"totalCompanies":1340, "pensionFund":1200, "SovereignWealthFund":80, "Endowment":60, "id":"CA"},
            {"totalCompanies":2340, "pensionFund":1850,"SovereignWealthFund":410, "Endowment":80, "id":"CN"},
            {"totalCompanies":3170, "pensionFund":2600, "SovereignWealthFund":500, "Endowment":70, "id":"US"}            
        ]
    },{
        "date":"2021-01-22",
        "list":[
            {"totalCompanies":390, "pensionFund":320,"SovereignWealthFund":30, "Endowment":40, "id":"BR"},
            {"totalCompanies":1905, "pensionFund":1200, "SovereignWealthFund":100, "Endowment":605, "id":"CA"},
            {"totalCompanies":3412, "pensionFund":2850,"SovereignWealthFund":480, "Endowment":82, "id":"CN"},
            {"totalCompanies":5695, "pensionFund":5000, "SovereignWealthFund":600, "Endowment":95, "id":"US"}            
        ]
    }
]

// [{"confirmed":557,"deaths":17,"recovered":30,"date":"2020-01-22"}, {"confirmed":96594427,"deaths":2067611,"recovered":53241716,"date":"2021-01-20"}]
const investors_TOTAL_timeline = [
    { "pensionFund":4640, "SovereignWealthFund":810, "Endowment":120, "date":"2020-01-22"},
    { "pensionFund":5160, "SovereignWealthFund":1195, "Endowment":202, "date":"2020-04-22"},
    { "pensionFund":5870, "SovereignWealthFund":1010, "Endowment":240, "date":"2020-10-22"},
    { "pensionFund":9370, "SovereignWealthFund":1210, "Endowment":822, "date":"2021-01-22"}
] // Total companies in world: 11402

const LP_Company_Domicile = [    
        { "fund": "U.S. International Development Finance Corporation", "id":"United States" },
        { "fund": "Apple", "id":"United States" },
        { "fund": "The Public Pension Fund", "id":"China" },
        { "fund": "IBM", "id":"United States" },
        { "fund": "California Public Employees' Retirement System", "id":"United States" },
        { "fund": "Google", "id":"United States" },
        { "fund": "National Council for Social Security Fund", "id":"China" },
        { "fund": "Canadian Pension Plan", "id":"Canada"},
        { "fund": "Canadian Investment Bank", "id":"Canada"},
        { "fund": "China Development Bank", "id":"China" },
        { "fund": "The Asian Infrastructure Investment Bank", "id":"China" },
        { "fund": "The Ontario Teachers Pension Plan", "id":"Canada"},
        { "fund": "The Alberta Investment Management Corp.", "id":"Canada"},
        { "fund": "Brazil Investment Bank",  "id":"Brazil"},
        { "fund": "Banco de Brasilia",  "id":"Brazil"},
        { "fund": "Brazilian Development Bank",  "id":"Brazil"}
]

// https://covid.amcharts.com/data/js/total_timeline.js

// https://covid.amcharts.com/data/js/world_timeline.js

// https://cdn.amcharts.com/lib/4/geodata/data/countries2.js#