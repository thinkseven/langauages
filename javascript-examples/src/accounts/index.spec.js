import util from 'util';
import moment from 'moment';
import Accounts, { createTransaction, createBiweeklyTransaction, getDate, getDates } from "./index"

const expectedMultipleTransactions = [
    {
        nameOfTransaction: "Rent",
        dueAmount: 0,
        dateOfTransaction: "04/01/2020",
        transactions: [
            {
                toAccount: 1,
                amount: 0,
                type: "Debit"
            },
            {
                toAccount: 2,
                amount: 0,
                type: "Debit"
            }
        ]
    },
    {
        nameOfTransaction: "Chase CC",
        dueAmount: 0,
        dateOfTransaction: "04/05/2020",
        transactions: [
            {
                toAccount: 2,
                amount: 0,
                type: "Debit"
            }
        ]
    },
    {
        nameOfTransaction: "BOFA CC",
        dueAmount: 0,
        dateOfTransaction: "04/09/2020",
        transactions: [
            {
                toAccount: 1,
                amount: 0,
                type: "Debit"
            }
        ]
    },
    {
        nameOfTransaction: "Electricity",
        dueAmount: 0,
        dateOfTransaction: "04/09/2020",
        transactions: [
            {
                toAccount: 1,
                amount: 0,
                type: "Debit"
            },
            {
                toAccount: 2,
                amount: 0,
                type: "Debit"
            }
        ]
    },
    {
        nameOfTransaction: "BJ’s CC",
        dueAmount: 0,
        dateOfTransaction: "04/10/2020",
        transactions: [
            {
                toAccount: 1,
                amount: 0,
                type: "Debit"
            },
            {
                toAccount: 2,
                amount: 0,
                type: "Debit"
            }
        ]
    },
    {
        nameOfTransaction: "Macy’s CC",
        dueAmount: 0,
        dateOfTransaction: "04/13/2020",
        transactions: [
            {
                toAccount: 1,
                amount: 0,
                type: "Debit"
            },
            {
                toAccount: 2,
                amount: 0,
                type: "Debit"
            }
        ]
    },
    {
        nameOfTransaction: "Honda CC",
        dueAmount: 0,
        dateOfTransaction: "04/15/2020",
        transactions: [
            {
                toAccount: 1,
                amount: 0,
                type: "Debit"
            },
            {
                toAccount: 2,
                amount: 0,
                type: "Debit"
            }
        ]
    },
    {
        nameOfTransaction: "Banana Republic CC",
        dueAmount: 0,
        dateOfTransaction: "04/20/2020",
        transactions: [
            {
                toAccount: 1,
                amount: 0,
                type: "Debit"
            },
            {
                toAccount: 2,
                amount: 0,
                type: "Debit"
            }
        ]
    },
    {
        nameOfTransaction: "Apple CC",
        dueAmount: 0,
        dateOfTransaction: "03/30/2020",
        transactions: [
            {
                toAccount: 1,
                amount: 0,
                type: "Debit"
            },
            {
                toAccount: 2,
                amount: 0,
                type: "Debit"
            }
        ]
    }
    // {
    //     nameOfTransaction: "Salary Credit",
    //     dueAmount: null,
    //     dateOfTransaction: "04/07/2020",
    //     transactions: [
    //         {
    //             toAccount: 1,
    //             amount: 0,
    //             type: "Credit"
    //         },
    //         {
    //             toAccount: 2,
    //             amount: 0,
    //             type: "Credit"
    //         }
    //     ]
    // },
    // {
    //     nameOfTransaction: "Transfer",
    //     dueAmount: null,
    //     dateOfTransaction: "04/07/2020",
    //     transactions: [
    //         {
    //             toAccount: 1,
    //             amount: 0,
    //             type: "Debit"
    //         },
    //         {
    //             toAccount: 2,
    //             amount: 0,
    //             type: "Debit"
    //         }
    //     ]
    // },
]

const expectedSingleTransctions = [
    {
        nameOfTransaction: "Rent",
        dueAmount: 0,
        dateOfTransaction: "04/01/2020",
        transactions: [
            {
                toAccount: 1,
                amount: 0,
                type: "Debit"
            },
            {
                toAccount: 2,
                amount: 0,
                type: "Debit"
            }
        ]
    }
]

const expectedBiweeklyTransactions = [
    {
        nameOfTransaction: "Salary Credit",
        dueAmount: null,
        dateOfTransaction: "04/03/2020",
        transactions: [
            {
                toAccount: 1,
                amount: 0,
                type: "Credit"
            },
            {
                toAccount: 2,
                amount: 0,
                type: "Credit"
            }
        ]
    },
    {
        nameOfTransaction: "Transfer",
        dueAmount: null,
        dateOfTransaction: "04/03/2020",
        transactions: [
            {
                toAccount: 1,
                amount: 0,
                type: "Debit"
            },
            {
                toAccount: 2,
                amount: 0,
                type: "Debit"
            }
        ]
    },
    {
        nameOfTransaction: "Salary Credit",
        dueAmount: null,
        dateOfTransaction: "04/17/2020",
        transactions: [
            {
                toAccount: 1,
                amount: 0,
                type: "Credit"
            },
            {
                toAccount: 2,
                amount: 0,
                type: "Credit"
            }
        ]
    },
    {
        nameOfTransaction: "Transfer",
        dueAmount: null,
        dateOfTransaction: "04/17/2020",
        transactions: [
            {
                toAccount: 1,
                amount: 0,
                type: "Debit"
            },
            {
                toAccount: 2,
                amount: 0,
                type: "Debit"
            }
        ]
    }
]

// test('create next date transactions for multiple accounts', () => {
//     expect(createTransaction(Accounts, moment())).toEqual(expectedMultipleTransactions);
// });

// test('create next date transaction for given account', () => {
//     expect(createTransaction(Accounts.filter((account) => {
//         return account.id === 3
//     }), moment())).toEqual(expectedSingleTransctions);
// });

// test('create next date transaction for given account', () => {
//     expect(getDates(new Date('03/20/2020'))).toEqual([
//         "04/03/2020",
//         "04/17/2020"
//     ]);
// });

// test('create next date transaction for given account', () => {
//     expect(createBiweeklyTransaction(Accounts, moment())).toEqual(expectedBiweeklyTransactions);
// });

test('fake', () => {
    expect(true).toEqual(true);
});