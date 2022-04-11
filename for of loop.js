// incomes is an array which is iterable
    let incomes = [5321000, 7532100, 11753210, 131175321];
    let total = 0;

// Iterating incomes array using for of loop
    for (const income of incomes) {
        console.log('Receiced '+ income +' Dollars');
        total += income;
}

console.log('')

// Printing my Total income with Template literal
    console.log(`My Total income for year 2023 will be ${total/1000000}Mn US Dollars`);


