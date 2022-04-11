// function name addressMaker takes two properties city and state

// Conventional method
    function addressMaker1(city, state, number = 1) {
        const newAddress = { city:city, state: state, Number: number} 
        console.log(newAddress)
    }
    addressMaker1('Austin', 'Texas')

// Using ES6
    function addressMaker2(city, state, number = 2) {
        const newAddress = { city:city, state: state, Number: number} 
        console.log(newAddress)
    }
    addressMaker2('Austin', 'Texas')
