// names array
    let names = [ 'Rajan', 'Blockchain Expert', 'online' , 'United States']

// Similar to destructuring objects
    let [ firstName , level , planet ,  status , region ] = [ 'Rajan Krishnasami', 'Blockchain Expert', 'World' , 'online' , 'United States']

// Change in the region
    region = 'European Union'

// retrieving values
    console.log(firstName)
    console.log(level)
    console.log(status)
    console.log(region)
    console.log('')

// template literals

    let statement = `${firstName} is one of the ${level} in the ${planet} who always stays ${status} to receive mails from ${region}.`
    console.log(statement)
