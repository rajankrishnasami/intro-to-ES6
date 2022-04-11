function addressMaker(address) {

    /*  Conventional Method
    const newAddress = {
        city : address.city,
        state : address.state,
        country : 'United States'
    }; */

// Using ES6

    // Destructuring the object
        const {city, state} = address

        // Using Obect literal
            const newAddress = {
                city,
                state,
                country: 'United States'
            };

    // Printing city , state and Country
        console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)


}
// Calling the object
    addressMaker( {city: 'Austin', state:'Texas'} );
