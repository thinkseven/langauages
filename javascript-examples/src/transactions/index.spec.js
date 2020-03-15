import util from 'util';
import transactions from "./index"

const mergedTransactions = {
    "01/30/2020": [
        {
            "balance as of": [
                { "Amount": 1116.47, "DueAmount": null, "ToAccount": 1, "Type": "Credit" },
                { "Amount": 969.85, "DueAmount": null, "ToAccount": 2, "Type": "Credit" }
            ]
        }
    ],
    "01/31/2020": [
        {
            "Adjustments": [
                { "Amount": 167.59, "DueAmount": null, "ToAccount": 1, "Type": "Credit" },
                { "Amount": 841.8, "DueAmount": null, "ToAccount": 2, "Type": "Credit" }
            ]
        }
    ],
    "02/01/2020": [
        {
            "Rent": [
                { "Amount": 1184.06, "DueAmount": 2368.12, "ToAccount": 1, "Type": "Debit" },
                { "Amount": 1184.06, "DueAmount": 2368.12, "ToAccount": 2, "Type": "Debit" }
            ]
        }
    ],
    "02/05/2020": [
        {
            "Chase CC": [
                { "Amount": 527.59, "DueAmount": 527.59, "ToAccount": 2, "Type": "Debit" }
            ]
        }
    ],
    "02/07/2020": [
        {
            "Salary Credit": [
                { "Amount": 1728.49, "DueAmount": null, "ToAccount": 1, "Type": "Credit" },
                { "Amount": 1500, "DueAmount": null, "ToAccount": 2, "Type": "Credit" }
            ]
        },
        {
            "Transfer": [
                { "Amount": 700, "DueAmount": null, "ToAccount": 1, "Type": "Debit" },
                { "Amount": 550, "DueAmount": null, "ToAccount": 2, "Type": "Debit" }
            ]
        }
    ],
    "02/09/2020": [
        {
            "Bofa CC": [
                { "Amount": 134.66, "DueAmount": 134.66, "ToAccount": 1, "Type": "Debit" }
            ]
        }
    ],
    "03/05/2020": [
        {
            "Rent": [
                { "Amount": 1100, "DueAmount": 2358.41, "ToAccount": 1, "Type": "Debit" },
                { "Amount": 1100, "DueAmount": 2358.41, "ToAccount": 2, "Type": "Debit" }
            ]
        }
    ]
}

test('transactions match', () => {
    console.log(util.inspect(transactions, false, null, true /* enable colors */))
    expect(transactions).toEqual(mergedTransactions);
});