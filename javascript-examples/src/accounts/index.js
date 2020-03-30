import moment from 'moment';

const Accounts = [
    {
        id: 1,
        name: "Bank of America",
        bill: false
    },
    {
        id: 2,
        name: "Chase",
        bill: false
    },
    {
        id: 3,
        name: "Rent",
        billingDay: 1,
        billedTo: [1, 2]
    },
    {
        id: 4,
        name: "Chase CC",
        billedTo: 2,
        billingDay: 5
    },
    {
        id: 5,
        name: "BOFA CC",
        billedTo: 1,
        billingDay: 9
    },
    {
        id: 6,
        name: "Electricity",
        billingDay: 9,
        billedTo: [1, 2]
    },
    {
        id: 7,
        name: "BJ’s CC",
        billingDay: 10,
        billedTo: [1, 2]
    },
    {
        id: 8,
        name: "Macy’s CC",
        billingDay: 13,
        billedTo: [1, 2]
    },
    {
        id: 9,
        name: "Honda CC",
        billingDay: 15,
        billedTo: [1, 2]
    },
    {
        id: 10,
        name: "Banana Republic CC",
        billingDay: 20,
        billedTo: [1, 2]
    },
    {
        id: 11,
        name: "Apple CC",
        billingDay: 30,
        billedTo: [1, 2]
    },
    {
        id: 12,
        name: "Salary Credit",
        startDate: new Date('03/20/2020'),
        biweekly: true,
        billedTo: [1, 2]
    },
    {
        id: 13,
        name: "Transfer",
        startDate: new Date('03/20/2020'),
        biweekly: true,
        billedTo: [1, 2]
    }
]

export const getDate = (currentDate, billingDay) => {
    let transactionDate = moment(currentDate).date(billingDay);
    if (moment(transactionDate).isBefore(moment())) {
        transactionDate = moment(currentDate).add(1, 'month').date(billingDay);
    }
    return transactionDate.format("MM/DD/YYYY");
}

export const getDates = (startDate) => {
    let biweeklyDates = [];
    let nextBiweeklyDate = moment(startDate).add(14, 'days');
    biweeklyDates = [...biweeklyDates, nextBiweeklyDate.format("MM/DD/YYYY")]

    if (startDate.month() === nextBiweeklyDate.add(14, 'days').month()) {
        // get next date
        biweeklyDates = [...getDates(transactionDate)]
    }

    return biweeklyDates;
}

export const createTransaction = (accounts, currentDate) => {
    return accounts.filter((account) => {
        return account.bill && !account.biweekly
    }).map((account) => {
        let transactions = [];
        if (Array.isArray(account.billedTo)) {
            transactions = account.billedTo.map((billingTo) => ({
                toAccount: billingTo,
                amount: 0,
                type: "Debit"
            }))
        }
        else {
            transactions.push({
                toAccount: account.billedTo,
                amount: 0,
                type: "Debit"
            });
        }
        return {
            nameOfTransaction: account.name,
            dueAmount: 0,
            dateOfTransaction: getDate(currentDate, account.billingDay),
            transactions
        }
    })
}

export const createBiweeklyTransaction = (accounts, currentDate) => {
    return accounts.filter((account) => {
        return account.bill && account.biweekly
    }).map((account) => {
        let biweeklyDates = getDates(currentDate, account.startDate);
        return biweeklyDates.map((biweeklyDate) => {
            let transactions = [];
            if (Array.isArray(account.billedTo)) {
                transactions = account.billedTo.map((billingTo) => ({
                    toAccount: billingTo,
                    amount: 0,
                    type: "Debit"
                }))
            }
            else {
                transactions.push({
                    toAccount: account.billedTo,
                    amount: 0,
                    type: "Debit"
                });
            }
            return {
                nameOfTransaction: account.name,
                dueAmount: 0,
                dateOfTransaction: biweeklyDate,
                transactions
            }
        })
    })
}

export default Accounts.map((account) => {
    return Object.assign({
        biweekly: false,
        bill: true
    }, account);
})