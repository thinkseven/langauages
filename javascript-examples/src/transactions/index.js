const util = require('util');

const accounts = [
    {
        Id: 1,
        Name: "Bank of America",
        Bill: false
    },
    {
        Id: 2,
        Name: "Chase",
        Bill: false
    },
    {
        Id: 3,
        Name: "Chase CC",
        Bill: true
    },
    {
        Id: 4,
        Name: "BOFA CC",
        Bill: true
    },
    {
        Id: 5,
        Name: "Electricity",
        Bill: true
    },
    {
        Id: 6,
        Name: "BJ’s CC",
        Bill: true
    },
    {
        Id: 7,
        Name: "Macy’s CC",
        Bill: true
    },
    {
        Id: 8,
        Name: "Honda CC",
        Bill: true
    },
    {
        Id: 9,
        Name: "Banana Republic CC",
        Bill: true
    },
    {
        Id: 10,
        Name: "Apple CC",
        Bill: true
    }
]

const transactions = [
    {
        ToAccount: 1,
        NameOfTransaction: "balance as of",
        DueAmount: null,
        Amount: 1116.47,
        DateOfTransaction: "01/30/2020",
        Type: "Credit"
    },
    {
        ToAccount: 2,
        NameOfTransaction: "balance as of",
        DueAmount: null,
        Amount: 969.85,
        DateOfTransaction: "01/30/2020",
        Type: "Credit"
    },
    {
        ToAccount: 1,
        NameOfTransaction: "Adjustments",
        DueAmount: null,
        Amount: 167.59,
        DateOfTransaction: "01/31/2020",
        Type: "Credit"
    },
    {
        ToAccount: 2,
        NameOfTransaction: "Adjustments",
        DueAmount: null,
        Amount: 841.8,
        DateOfTransaction: "01/31/2020",
        Type: "Credit"
    },
    {
        ToAccount: 1,
        NameOfTransaction: "Rent",
        DueAmount: 2368.12,
        Amount: 1184.06,
        DateOfTransaction: "02/01/2020",
        Type: "Debit"
    },
    {
        ToAccount: 2,
        NameOfTransaction: "Rent",
        DueAmount: 2368.12,
        Amount: 1184.06,
        DateOfTransaction: "02/01/2020",
        Type: "Debit"
    },
    {
        ToAccount: 2,
        NameOfTransaction: "Chase CC",
        DueAmount: 527.59,
        Amount: 527.59,
        DateOfTransaction: "02/05/2020",
        Type: "Debit"
    },
    {
        ToAccount: 1,
        NameOfTransaction: "Salary Credit",
        DueAmount: null,
        Amount: 1728.49,
        DateOfTransaction: "02/07/2020",
        Type: "Credit"
    },
    {
        ToAccount: 2,
        NameOfTransaction: "Salary Credit",
        DueAmount: null,
        Amount: 1500,
        DateOfTransaction: "02/07/2020",
        Type: "Credit"
    },
    {
        ToAccount: 1,
        NameOfTransaction: "Transfer",
        DueAmount: null,
        Amount: 700,
        DateOfTransaction: "02/07/2020",
        Type: "Debit"
    },
    {
        ToAccount: 2,
        NameOfTransaction: "Transfer",
        DueAmount: null,
        Amount: 550,
        DateOfTransaction: "02/07/2020",
        Type: "Debit"
    },
    {
        ToAccount: 1,
        NameOfTransaction: "Bofa CC",
        DueAmount: 134.66,
        Amount: 134.66,
        DateOfTransaction: "02/09/2020",
        Type: "Debit"
    },
    {
        ToAccount: 1,
        NameOfTransaction: "Rent",
        DueAmount: 2358.41,
        Amount: 1100,
        DateOfTransaction: "03/05/2020",
        Type: "Debit"
    },
    {
        ToAccount: 2,
        NameOfTransaction: "Rent",
        DueAmount: 2358.41,
        Amount: 1100,
        DateOfTransaction: "03/05/2020",
        Type: "Debit"
    }
]

function groupByAnyProperty(objectArray, property) {
    return objectArray.reduce(function (acc, obj, index) {
        let key = obj[property]
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(obj);
        return acc
    }, {})
}

function subGroupByAnyProperty(objectArray, property) {
    let keys = Object.keys(objectArray);
    keys.forEach((element) => {
        let groupByTransactions = groupByAnyProperty(objectArray[element], property);
        objectArray[element] = [];
        Object.entries(groupByTransactions).forEach(([key, value]) => {
            objectArray[element].push({
                [key]: value.map((item) => {
                    return {
                        Amount: item.Amount,
                        DueAmount: item.DueAmount,
                        ToAccount: item.ToAccount,
                        Type: item.Type
                    }
                })
            });
        })
    });
    return objectArray;
}

const groupTransactionsByProperties = () => {
    let firstGrouping = groupByAnyProperty(transactions, "DateOfTransaction");
    let secondGrouping = subGroupByAnyProperty(firstGrouping, "NameOfTransaction");
    return secondGrouping;
}
export default groupTransactionsByProperties();
