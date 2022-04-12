// Challenge - For Of Loop

/* Using the For of Loop, iterate through the array and print 
into the console, a message like : Tom lives in Libson */
    const experts = [
        { name: "Rajan", city: "New York"},
        { name: "Krishna", city: "Paris"},
        { name: "Sami", city: "Sidney"}
    ];

// Solution
    for (const expert of experts) {
        console.log(`${expert.name} lives in ${expert.city}.`);
    }
