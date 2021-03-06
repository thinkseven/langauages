const util = require('util');
import moment from 'moment';

const transactions = [
    {
        "transactionId": 8,
        "accountId": 1,
        "name": "Salary Credit",
        "transactionDate": "2020-04-03T04:00:00.000+0000",
        "amount": 1900.0,
        "transactionType": false,
        "comments": "Salary Credit",
        "createdDate": "2020-03-27T01:34:03.000+0000",
        "modifiedDate": "2020-03-27T03:15:38.000+0000"
    },
    {
        "transactionId": 9,
        "accountId": 9,
        "name": "Salary Credit",
        "transactionDate": "2020-04-03T04:00:00.000+0000",
        "amount": 1500.0,
        "transactionType": false,
        "comments": "Salary Credit",
        "createdDate": "2020-03-27T01:34:12.000+0000",
        "modifiedDate": "2020-03-29T14:22:48.000+0000"
    },
    {
        "transactionId": 10,
        "accountId": 1,
        "name": "Transfer",
        "transactionDate": "2020-04-03T04:00:00.000+0000",
        "amount": 700.0,
        "transactionType": true,
        "comments": "Transfer to GS",
        "createdDate": "2020-03-27T01:35:23.000+0000",
        "modifiedDate": "2020-03-29T14:12:19.000+0000"
    },
    {
        "transactionId": 11,
        "accountId": 9,
        "name": "Transfer",
        "transactionDate": "2020-04-03T04:00:00.000+0000",
        "amount": 500.0,
        "transactionType": true,
        "comments": "Transfer to GS",
        "createdDate": "2020-03-27T01:35:32.000+0000",
        "modifiedDate": "2020-03-27T01:35:32.000+0000"
    },
    {
        "transactionId": 6,
        "accountId": 9,
        "name": "Rent 04/01",
        "transactionDate": "2020-04-04T04:00:00.000+0000",
        "amount": 1178.78,
        "transactionType": true,
        "comments": "Rent 04/01",
        "createdDate": "2020-03-27T00:09:14.000+0000",
        "modifiedDate": "2020-03-29T04:41:23.000+0000"
    },
    {
        "transactionId": 5,
        "accountId": 1,
        "name": "Rent 04/01",
        "transactionDate": "2020-04-04T04:00:00.000+0000",
        "amount": 1178.78,
        "transactionType": true,
        "comments": "Rent 04/01",
        "createdDate": "2020-03-27T00:09:06.000+0000",
        "modifiedDate": "2020-03-29T04:41:18.000+0000"
    },
    {
        "transactionId": 35,
        "accountId": 19,
        "name": "Saving Credit",
        "transactionDate": "2020-04-04T04:00:00.000+0000",
        "amount": 550.0,
        "transactionType": false,
        "comments": "Payment Received",
        "createdDate": "2020-03-29T14:11:14.000+0000",
        "modifiedDate": "2020-03-29T14:18:00.000+0000"
    },
    {
        "transactionId": 36,
        "accountId": 21,
        "name": "Saving Credit",
        "transactionDate": "2020-04-04T04:00:00.000+0000",
        "amount": 550.0,
        "transactionType": false,
        "comments": "Payment Received",
        "createdDate": "2020-03-29T14:11:19.000+0000",
        "modifiedDate": "2020-03-29T14:12:48.000+0000"
    },
    {
        "transactionId": 37,
        "accountId": 20,
        "name": "Saving Credit",
        "transactionDate": "2020-04-04T04:00:00.000+0000",
        "amount": 100.0,
        "transactionType": false,
        "comments": "Payment Received",
        "createdDate": "2020-03-29T14:11:25.000+0000",
        "modifiedDate": "2020-03-29T14:18:26.000+0000"
    },
    {
        "transactionId": 12,
        "accountId": 9,
        "name": "Chase CC",
        "transactionDate": "2020-04-05T04:00:00.000+0000",
        "amount": 535.12,
        "transactionType": true,
        "comments": "Payment to Chase Credit Card",
        "createdDate": "2020-03-27T01:36:19.000+0000",
        "modifiedDate": "2020-03-29T02:35:06.000+0000"
    },
    {
        "transactionId": 38,
        "accountId": 17,
        "name": "Payment Received",
        "transactionDate": "2020-04-05T04:00:00.000+0000",
        "amount": 535.12,
        "transactionType": false,
        "comments": "Payment Received",
        "createdDate": "2020-03-29T14:14:14.000+0000",
        "modifiedDate": "2020-03-29T14:14:14.000+0000"
    },
    {
        "transactionId": 13,
        "accountId": 1,
        "name": "Bofa CC",
        "transactionDate": "2020-04-09T04:00:00.000+0000",
        "amount": 140.82,
        "transactionType": true,
        "comments": "Payment to BOFA Credit Card",
        "createdDate": "2020-03-27T01:36:51.000+0000",
        "modifiedDate": "2020-03-28T22:46:04.000+0000"
    },
    {
        "transactionId": 39,
        "accountId": 15,
        "name": "Payment Received",
        "transactionDate": "2020-04-09T04:00:00.000+0000",
        "amount": 140.82,
        "transactionType": false,
        "comments": "Payment Received",
        "createdDate": "2020-03-29T14:15:17.000+0000",
        "modifiedDate": "2020-03-29T14:15:17.000+0000"
    },
    {
        "transactionId": 14,
        "accountId": 1,
        "name": "BJ's CC",
        "transactionDate": "2020-04-10T04:00:00.000+0000",
        "amount": 327.18,
        "transactionType": true,
        "comments": "Payment to BJ's Credit Card",
        "createdDate": "2020-03-27T01:37:38.000+0000",
        "modifiedDate": "2020-03-29T14:22:45.000+0000"
    },
    {
        "transactionId": 41,
        "accountId": 14,
        "name": "Payment Received",
        "transactionDate": "2020-04-10T04:00:00.000+0000",
        "amount": 327.18,
        "transactionType": false,
        "comments": "Payment Received",
        "createdDate": "2020-03-29T14:16:31.000+0000",
        "modifiedDate": "2020-03-29T14:22:55.000+0000"
    },
    {
        "transactionId": 15,
        "accountId": 1,
        "name": "Electricity",
        "transactionDate": "2020-04-11T04:00:00.000+0000",
        "amount": 173.31,
        "transactionType": true,
        "comments": "national grid electricitiy bill",
        "createdDate": "2020-03-27T01:38:11.000+0000",
        "modifiedDate": "2020-03-29T14:54:39.000+0000"
    },
    {
        "transactionId": 17,
        "accountId": 1,
        "name": "Honda CC",
        "transactionDate": "2020-04-15T04:00:00.000+0000",
        "amount": 476.49,
        "transactionType": true,
        "comments": "Payment for car loan",
        "createdDate": "2020-03-27T01:39:45.000+0000",
        "modifiedDate": "2020-03-29T14:20:25.000+0000"
    },
    {
        "transactionId": 42,
        "accountId": 11,
        "name": "Payment Received",
        "transactionDate": "2020-04-15T04:00:00.000+0000",
        "amount": 476.49,
        "transactionType": false,
        "comments": "Payment Received",
        "createdDate": "2020-03-29T14:17:25.000+0000",
        "modifiedDate": "2020-03-29T14:53:34.000+0000"
    },
    {
        "transactionId": 19,
        "accountId": 9,
        "name": "Salary Credit",
        "transactionDate": "2020-04-17T04:00:00.000+0000",
        "amount": 1500.0,
        "transactionType": false,
        "comments": "Salary Credit",
        "createdDate": "2020-03-27T01:40:17.000+0000",
        "modifiedDate": "2020-03-29T04:35:13.000+0000"
    },
    {
        "transactionId": 18,
        "accountId": 1,
        "name": "Salary Credit",
        "transactionDate": "2020-04-17T04:00:00.000+0000",
        "amount": 1900.0,
        "transactionType": false,
        "comments": "Salary Credit",
        "createdDate": "2020-03-27T01:40:08.000+0000",
        "modifiedDate": "2020-03-29T04:35:19.000+0000"
    },
    {
        "transactionId": 21,
        "accountId": 9,
        "name": "Transfer",
        "transactionDate": "2020-04-17T04:00:00.000+0000",
        "amount": 500.0,
        "transactionType": true,
        "comments": "Transfer to GS",
        "createdDate": "2020-03-27T01:41:23.000+0000",
        "modifiedDate": "2020-03-29T04:35:33.000+0000"
    },
    {
        "transactionId": 20,
        "accountId": 1,
        "name": "Transfer",
        "transactionDate": "2020-04-17T04:00:00.000+0000",
        "amount": 700.0,
        "transactionType": true,
        "comments": "Transfer to GS",
        "createdDate": "2020-03-27T01:41:16.000+0000",
        "modifiedDate": "2020-03-29T04:35:26.000+0000"
    },
    {
        "transactionId": 32,
        "accountId": 19,
        "name": "Saving Credit",
        "transactionDate": "2020-04-18T04:00:00.000+0000",
        "amount": 550.0,
        "transactionType": false,
        "comments": "Transfer",
        "createdDate": "2020-03-29T14:09:35.000+0000",
        "modifiedDate": "2020-03-29T14:18:47.000+0000"
    },
    {
        "transactionId": 33,
        "accountId": 20,
        "name": "Saving Credit",
        "transactionDate": "2020-04-18T04:00:00.000+0000",
        "amount": 100.0,
        "transactionType": false,
        "comments": "Transfer",
        "createdDate": "2020-03-29T14:09:44.000+0000",
        "modifiedDate": "2020-03-29T14:19:00.000+0000"
    },
    {
        "transactionId": 34,
        "accountId": 21,
        "name": "Saving Credit",
        "transactionDate": "2020-04-18T04:00:00.000+0000",
        "amount": 550.0,
        "transactionType": false,
        "comments": "Transfer",
        "createdDate": "2020-03-29T14:09:51.000+0000",
        "modifiedDate": "2020-03-29T14:19:08.000+0000"
    },
    {
        "transactionId": 22,
        "accountId": 1,
        "name": "Banana Republic",
        "transactionDate": "2020-04-20T04:00:00.000+0000",
        "amount": 30.13,
        "transactionType": true,
        "comments": "Payment to Banana CC",
        "createdDate": "2020-03-27T01:41:44.000+0000",
        "modifiedDate": "2020-03-29T04:40:08.000+0000"
    },
    {
        "transactionId": 31,
        "accountId": 16,
        "name": "Payment Received",
        "transactionDate": "2020-04-20T04:00:00.000+0000",
        "amount": 30.13,
        "transactionType": false,
        "comments": "Payment Received",
        "createdDate": "2020-03-29T14:07:20.000+0000",
        "modifiedDate": "2020-03-29T14:07:20.000+0000"
    },
    {
        "transactionId": 24,
        "accountId": 1,
        "name": "Apple CC",
        "transactionDate": "2020-04-30T04:00:00.000+0000",
        "amount": 321.79,
        "transactionType": true,
        "comments": "Payment to Apple CC",
        "createdDate": "2020-03-27T01:42:27.000+0000",
        "modifiedDate": "2020-03-29T14:52:55.000+0000"
    },
    {
        "transactionId": 29,
        "accountId": 10,
        "name": "Payment Received",
        "transactionDate": "2020-04-30T04:00:00.000+0000",
        "amount": 321.79,
        "transactionType": false,
        "comments": "Payment Received",
        "createdDate": "2020-03-29T14:05:28.000+0000",
        "modifiedDate": "2020-03-29T14:52:59.000+0000"
    }
]

const sanitize = (transactions) => {
    return transactions.map((transaction) => {
        const modifiedTransaction = {
            transactionDate: moment(transaction.transactionDate).format("MM/DD/YYYY")
        }
        return { ...transaction, ...modifiedTransaction }
    })
}

const updateBalance = (transactions) => {
    const newTransactions = [...transactions];
    return newTransactions.map((entry, x) => {

        let rolloverBalance1 = newTransactions.reduce((accumulator, current, y) => {
            if (y <= x) {
                if (current.accountId === 1 && current.transactionType) {
                    accumulator = accumulator - current.amount
                }
                if (current.accountId === 1 && !current.transactionType) {
                    accumulator = accumulator + current.amount
                }
            }
            return accumulator;
        }, 1702.87);

        let rolloverBalance2 = newTransactions.reduce((accumulator, current, y) => {
            if (y <= x) {
                if (current.accountId === 9 && current.transactionType) {
                    accumulator = accumulator - current.amount;
                }
                if (current.accountId === 9 && !current.transactionType) {
                    accumulator = accumulator + current.amount;
                }
            }
            return accumulator;
        }, 1218.6);

        return Object.assign(entry, {
            rolloverBalance1,
            rolloverBalance2
        });
    })
}

const groupByAnyProperty = (objectArray, property) => {
    return objectArray.reduce(function (acc, obj, index) {
        let key = obj[property]
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(obj);
        return acc
    }, {})
}

const subGroupByAnyProperty = (objectArray, property) => {
    let keys = Object.keys(objectArray);
    keys.forEach((element) => {
        let groupByTransactions = groupByAnyProperty(objectArray[element], property);
        objectArray[element] = [];
        Object.entries(groupByTransactions).forEach(([key, value]) => {
            objectArray[element].push({
                [key]: value.map((item) => {
                    return item
                })
            });
        })
    });
    return objectArray;
}

const groupTransactionsByProperties = () => {
    let firstGrouping = groupByAnyProperty(updateBalance(sanitize(transactions)), "transactionDate");
    let secondGrouping = subGroupByAnyProperty(firstGrouping, "name");
    return secondGrouping;
}
export default groupTransactionsByProperties();
