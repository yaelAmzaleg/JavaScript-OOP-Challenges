//Problem 1
const readline = require("readline-sync")
class MediaItem {
    constructor(tytle, year, genre) {
        this.tytle = tytle;
        this.year = year;
        this.genre = genre;
    }
    getSummary() {
        return (`tytle:${this.tytle},year:${this.year},gener:${thid.genre}`)
    }
}
class Book extends MediaItem {
    constructor(tytle, year, genre, author, pageCount) {
        super(tytle, year, genre)
        this.author = author;
        this.pageCount = pageCount;
    }
    getSummary() {
        return (`${this.tytle} by ${this.author} ${this.pageCount} pages`)
    }
}
class Movie extends MediaItem {
    constructor(tytle, year, genre, director, durationMinutes) {
        super(tytle, year, genre)
        this.director = director;
        this.durationMinutes = durationMinutes;
    }
    getSummary() {
        return (`Movie:${this.tytle} directed by ${this.director}, ${this.durationMinutes} min`)
    }
}
class Library {
    constructor() {
        this.arr = [];
    }
    addItem(item) {
        this.arr.push(item)
    }
    search(term) {
        return this.arr.filter(x => x.tytle.toLowerCase().includes(term.toLowerCase()))
    }
    listByGenre(genre) {
        return this.arr.filter(x => x.genre === genre)
    }
}
const lib = new Library();
lib.addItem(new Book("Dune", "Frank Herbert", 1965, "Sci-Fi", 412));
lib.addItem(new Movie("Dune", "Denis Villeneuve", 2021, "Sci-Fi", 155));

console.log(lib.search("dune"));
console.log(lib.listByGenre("Sci-Fi"));
class BankAccount {
    constructor(Properties, owner, balance) {
        this.Properties = Properties
        this.owner = owner
        this.balance = balance
    }
    deposit(amount) {
        this.balance += amount
    }
    withdraw(amount) {
        if (amount <= this.balance)
            this.balance -= amount
        else
            console.log("the balance does not allow for a withdrawal")
    }
}
class Bank {

    constructor() {
        this.arr = []
    }
    menu() {
        let userChoice = readline.question("Hello! what do you want to do today? \n 1. Create Account! \n 2. Transfer Money! \n 3. Show Balance \n Please enter your choice... \n")
        if (userChoice === "1") {
            let properties = readline.question("Enter your propeties! ")
            let owner = readline.question('Enter your name! ')
            let balance = readline.question('Enter your balance! ')
            this.addAccount(new BankAccount(properties, owner, balance))
            console.log('Account has created successfuly!')
            console.log(properties, owner, balance)
        }
        else if (userChoice === "2") {
            let yourAccount = readline.question('Enter your name! ')
            let toAccount = readline.question('Enter account name to transfer! ')
            let amount = readline.question('Enter the amount of money to transfer! ')
            this.transfer(yourAccount, toAccount, amount)
        
        }
        else if (userChoice === "3"){
            let yourAccount = readline.question("Enter your name to watch your balnce! ")
            this.showOneBalance(yourAccount)
        }
        else {
            console.log("wrong input")
        }
    }
    addAccount(account) {
        this.arr.push(account)
    }
    transfer(fromName, toName, amount) {
        this.arr.map(x => {
            if (x.owner === fromName) {
                x.withdraw(amount)
                console.log(x.balance)
            }
            if (x.owner === toName)
                x.deposit(amount)
        }
        )
    }
    showAllBalance() {
        this.arr.forEach(x => {
            console.log(`name:${x.owner},balance:${x.balance}`)
        })
    }
    showOneBalance(ownerName) {
        const account =  this.arr.find(x => x.owner === ownerName)
        console.log(account.balance)
    }
}
const b1 = new BankAccount("junior", "yael", 1000)
const b2 = new BankAccount("senior", "itamar", 2000)
const bank = new Bank();
// bank.addAccount(b1)
// bank.addAccount(b2)

// bank.showAllBalance();
// bank.transfer("yael", "itamar", 500);
// bank.showAllBalance();
bank.menu();