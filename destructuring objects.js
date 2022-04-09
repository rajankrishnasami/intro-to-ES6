// Player is an object 
    const member = {
        name: 'Rajan .K',
        team: 'Washington Wings',
        address : {
            city1: 'Washington D.C.',
            city2: 'Los Angeles'
        }
    };

// Conventional method
    console.log(member.name);
    console.log(member.team);
    console.log(member.address.city1);
    console.log('');

// object destructuring allows us to grab these keys of your object without having access all the time object name

    const {name, team , address: {city2} } = member;
    console.log(name);  // equivalent to console.log(member.name);
    console.log(team);  // equivalent to console.log(team.name);
    console.log(city2);
    console.log('')

// With template literal
    console.log(`${name} plays for ${team}`);
    console.log(`${name} lives in ${city2}`);
