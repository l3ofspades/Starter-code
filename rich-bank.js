const accounts = [
    {id: 1, owner: "Alice", balance: 500},
    {id: 2, owner: "Bob", balance: 300}
];

function getAccountById(id) {
    if (!Number.isFinite(id) || id <= 0) {
        throw new Error("Invalid value for account ID: The ID must be a positive number.");
    }
    return accounts.find(account => account.id === id);
}

function createAccount(newAccountId, newAccountOwner) {
    if (accounts.some(account => account.id === newAccountId)) {
        throw new Error("Account with this ID already exists.");
    }

    if (!Number.isFinite(newAccountId) || newAccountId <= 0) {
        throw new Error("Invalid value for account ID: The ID must be a positive number.");
    }

    accounts.push({
        id: newAccountId,
        owner: newAccountOwner,
        balance: 0
    });
}

function depositMoney(accountId, amount) {
    const account = getAccountById(accountId);

    if (!account) {
        throw new Error("Account not found.");
    }

    if (!Number.isFinite(amount) || amount <= 0) {
        throw new Error("Invalid value for deposit amount: The amount must be a positive number.");
    }

    account.balance += amount;
}

function withdrawMoney(accountId, amount) {
    const account = getAccountById(accountId);

    if (!account) {
        throw new Error("Account not found.");
    }

    if (!Number.isFinite(amount) || amount <= 0) {
        throw new Error("Invalid value for withdrawal amount: The amount must be a positive number.");
    }

    if (account.balance < amount) {
        throw new Error("Insufficient funds.");
    }

    account.balance -= amount;
}

function transferMoney(fromAccountId, toAccountId, amount) {
    const fromAccount = getAccountById(fromAccountId);
    const toAccount = getAccountById(toAccountId);

    if (!fromAccount) {
        throw new Error("Source account not found.");
    }

    if (!toAccount) {
        throw new Error("Destination account not found.");
    }

    if (!Number.isFinite(amount) || amount <= 0) {
        throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
    }

    if (fromAccount.balance < amount) {
        throw new Error("Insufficient funds.");
    }

    fromAccount.balance -= amount;
    toAccount.balance += amount;
}
// 2 definitions of the getaccoutnById function
// started writing an ID validation check but left it incomplete. function was missing curly braces.
// The transfer amount was added twice to the toAccount. This led to a bug where the transfer was failing to execute.

// Hints:

getAccountById("1");

createAccount(1, "Alice");
createAccount("3", "Charlie");
createAccount(-3, "Charlie");
createAccount(3, ["Charlie"]);
createAccount(3, "");
createAccount(3, "  ");

depositMoney(1, "300")
depositMoney(1, -300)
depositMoney(1, 0)
depositMoney(1, Infinity)
depositMoney(4, 100)
transferMoney(1, 2, 100);
withdrawMoney(1, -100)
withdrawMoney(1, 0)
withdrawMoney(1, 501);
