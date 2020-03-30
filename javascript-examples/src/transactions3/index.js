const util = require('util');

const accounts = [
    {
        "accountId": 10,
        "name": "Apple CC",
        "initialBalance": 8500.0,
        "currentBalance": 321.79,
        "accountType": "Credit Card",
        "paymentDueDay": "2020-02-29T05:00:00.000+0000",
        "statementClosingDay": "2020-02-29T05:00:00.000+0000",
        "installmentAmount": 0.0,
        "comments": "Apple Credit Card",
        "createdDate": "2020-03-27T21:51:16.000+0000",
        "modifiedDate": "2020-03-29T03:57:06.000+0000"
    },
    {
        "accountId": 17,
        "name": "Chase CC",
        "initialBalance": 2000.0,
        "currentBalance": 594.04,
        "accountType": "Credit Card",
        "paymentDueDay": "2020-03-05T00:00:00.000+0000",
        "statementClosingDay": "2020-03-08T05:00:00.000+0000",
        "installmentAmount": 0.0,
        "comments": "Chase Credit Card",
        "createdDate": "2020-03-27T21:58:01.000+0000",
        "modifiedDate": "2020-03-29T04:29:48.000+0000"
    },
    {
        "accountId": 15,
        "name": "BOFA CC",
        "initialBalance": 10500.0,
        "currentBalance": 212.59,
        "accountType": "Credit Card",
        "paymentDueDay": "2020-03-09T04:00:00.000+0000",
        "statementClosingDay": "2020-03-12T04:00:00.000+0000",
        "installmentAmount": 0.0,
        "comments": "Bank of America Credit Card",
        "createdDate": "2020-03-27T21:57:41.000+0000",
        "modifiedDate": "2020-03-29T04:33:57.000+0000"
    },
    {
        "accountId": 14,
        "name": "BJ's CC",
        "initialBalance": 22000.0,
        "currentBalance": 482.25,
        "accountType": "Credit Card",
        "paymentDueDay": "2020-03-10T04:00:00.000+0000",
        "statementClosingDay": "2020-03-20T00:00:00.000+0000",
        "installmentAmount": 0.0,
        "comments": "BJ's Credit Card",
        "createdDate": "2020-03-27T21:57:29.000+0000",
        "modifiedDate": "2020-03-29T04:00:39.000+0000"
    },
    {
        "accountId": 18,
        "name": "Macy's CC",
        "initialBalance": 1700.0,
        "currentBalance": 0.0,
        "accountType": "Credit Card",
        "paymentDueDay": "2020-03-12T04:00:00.000+0000",
        "statementClosingDay": "2020-03-17T00:00:00.000+0000",
        "installmentAmount": 0.0,
        "comments": "Macy’s American Express® Card",
        "createdDate": "2020-03-27T21:58:09.000+0000",
        "modifiedDate": "2020-03-29T04:00:57.000+0000"
    },
    {
        "accountId": 11,
        "name": "2016 CRV",
        "initialBalance": 5733.18,
        "currentBalance": 5733.18,
        "accountType": "Loan",
        "paymentDueDay": "2020-03-15T04:00:00.000+0000",
        "statementClosingDay": "2020-03-24T04:00:00.000+0000",
        "installmentAmount": 476.49,
        "comments": "Honda Financial Loan",
        "createdDate": "2020-03-27T21:56:55.000+0000",
        "modifiedDate": "2020-03-29T04:03:17.000+0000"
    },
    {
        "accountId": 16,
        "name": "Banana CC",
        "initialBalance": 5100.0,
        "currentBalance": 30.13,
        "accountType": "Credit Card",
        "paymentDueDay": "2020-03-20T04:00:00.000+0000",
        "statementClosingDay": "2020-03-27T00:00:00.000+0000",
        "installmentAmount": 0.0,
        "comments": "Banana Republic Credit Card",
        "createdDate": "2020-03-27T21:57:48.000+0000",
        "modifiedDate": "2020-03-29T04:02:43.000+0000"
    },
    {
        "accountId": 9,
        "name": "Chase",
        "initialBalance": 1218.6,
        "currentBalance": 891.45,
        "accountType": "Checking",
        "paymentDueDay": "2049-03-09T05:00:00.000+0000",
        "statementClosingDay": "2020-03-09T00:00:00.000+0000",
        "installmentAmount": 0.0,
        "comments": "Chase Checking Account",
        "createdDate": "2020-03-24T00:14:21.000+0000",
        "modifiedDate": "2020-03-29T03:59:24.000+0000"
    },
    {
        "accountId": 1,
        "name": "Bank of America",
        "initialBalance": 1702.87,
        "currentBalance": 1375.72,
        "accountType": "Checking",
        "paymentDueDay": "2049-03-11T05:00:00.000+0000",
        "statementClosingDay": "2020-03-11T00:00:00.000+0000",
        "installmentAmount": 0.0,
        "comments": "Bank of America Checking Account",
        "createdDate": "2020-03-22T00:00:00.000+0000",
        "modifiedDate": "2020-03-29T03:59:45.000+0000"
    },
    {
        "accountId": 19,
        "name": "Saving x5240 - Aviral",
        "initialBalance": 36093.55,
        "currentBalance": 36093.55,
        "accountType": "Saving",
        "paymentDueDay": "2050-03-01T05:00:00.000+0000",
        "statementClosingDay": "2020-03-01T00:00:00.000+0000",
        "installmentAmount": 0.0,
        "comments": "Aviral Fund",
        "createdDate": "2020-03-27T21:58:17.000+0000",
        "modifiedDate": "2020-03-29T14:08:44.000+0000"
    },
    {
        "accountId": 20,
        "name": "Saving x6282 - Extra",
        "initialBalance": 631.29,
        "currentBalance": 631.29,
        "accountType": "Saving",
        "paymentDueDay": "2050-03-01T05:00:00.000+0000",
        "statementClosingDay": "2020-03-01T00:00:00.000+0000",
        "installmentAmount": 0.0,
        "comments": "Extra Fund",
        "createdDate": "2020-03-27T21:58:26.000+0000",
        "modifiedDate": "2020-03-29T14:08:51.000+0000"
    },
    {
        "accountId": 21,
        "name": "Saving x9975 - Vagmi",
        "initialBalance": 47162.67,
        "currentBalance": 47162.67,
        "accountType": "Saving",
        "paymentDueDay": "2050-03-01T05:00:00.000+0000",
        "statementClosingDay": "2020-03-01T00:00:00.000+0000",
        "installmentAmount": 0.0,
        "comments": "Vagmi Fund",
        "createdDate": "2020-03-27T23:59:07.000+0000",
        "modifiedDate": "2020-03-29T14:08:56.000+0000"
    },
    {
        "accountId": 12,
        "name": "401K - Fidelity",
        "initialBalance": 59695.38,
        "currentBalance": 59695.38,
        "accountType": "401K",
        "paymentDueDay": "2050-03-27T04:00:00.000+0000",
        "statementClosingDay": "2020-03-28T00:00:00.000+0000",
        "installmentAmount": 0.0,
        "comments": "401 K Fidelity",
        "createdDate": "2020-03-27T21:57:07.000+0000",
        "modifiedDate": "2020-03-29T03:29:14.000+0000"
    },
    {
        "accountId": 13,
        "name": "401K - Vanguard",
        "initialBalance": 11102.57,
        "currentBalance": 11102.57,
        "accountType": "401K",
        "paymentDueDay": "2050-03-27T04:00:00.000+0000",
        "statementClosingDay": "2020-03-28T00:00:00.000+0000",
        "installmentAmount": 0.0,
        "comments": "401K Vanguard",
        "createdDate": "2020-03-27T21:57:15.000+0000",
        "modifiedDate": "2020-03-29T03:29:23.000+0000"
    }
]

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

const getTransactions = (accounts, transactions) => {
    return transactions.map((transaction, x) => {

        const transactionAccount = accounts.filter((account) => {
            return account.accountId === transaction.accountId
        })

        if (transactionAccount && transactionAccount.length > 0) {

            const [account] = transactionAccount

            const updatedTransaction = {
                rolloverBalance: transactions.reduce((acc, trans, y) => {
                    let balance = acc + 0;
                    if (account.accountId === trans.accountId) {
                        if (y <= x) {
                            switch (account.accountType) {
                                case "Credit Card":
                                case "Loan":
                                    balance = trans.transactionType ? (acc + trans.amount) : (acc - trans.amount)
                                    break;
                                case "Checking":
                                case "Saving":
                                    balance = trans.transactionType ? (acc - trans.amount) : (acc + trans.amount)
                                    break;
                                default:
                                    balance = acc + 0;
                            }
                        }
                    }
                    return parseFloat(parseFloat(balance).toFixed(2))
                }, account.currentBalance)
            }

            return { ...transaction, ...updatedTransaction }
        }

        return transaction
    })
}

export default getTransactions(accounts,transactions);
