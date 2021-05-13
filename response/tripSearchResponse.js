//Reading response from temp file

async function tripResponse(userIntent , apiResponse){
    if(userIntent == "SEARCH_Agent"){
        return await tripAgentResponse(userIntent , apiResponse)
    }
    else if(userIntent == "SEARCH_Airport"){
        return await tripAirportResponse(userIntent , apiResponse);
    }
    else if(userIntent == "SEARCH_TerminalDepart"){
        return await tripDepartResponse(userIntent , apiResponse);
    }
    else if(userIntent == "SEARCH_TerminalArrival"){
        return await tripArrivalResponse(userIntent , apiResponse);
    }
    else if(userIntent == "SEARCH_FlightNumber"){
        return await tripFlightNumberResponse(userIntent , apiResponse);
    }
    else if(userIntent == "SEARCH_Meal"){
        return await tripMealResponse(userIntent , apiResponse);
    }
    else if(userIntent == "SEARCH_Seat"){
        return await tripSeatResponse(userIntent , apiResponse);
    }
    else if(userIntent == "SEARCH_Equipment"){
        return await tripEquipResponse(userIntent , apiResponse);
    }
    else if(userIntent == "SEARCH_ClassType"){
        return await tripClassResponse(userIntent , apiResponse);
    }
    else if(userIntent == "SEARCH_FlightJourney"){
        return await tripFlightResponse(userIntent , apiResponse);
    }
    else if(userIntent == "SEARCH_Fare"){
        return await tripFareResponse(userIntent , apiResponse);
    }
    else if(userIntent == "SEARCH_Ticketed"){
        return await tripTicketedResponse(userIntent , apiResponse);
    }
    else if(userIntent == "SEARCH_TicketNumber"){
        return await tripTicketNumberResponse(userIntent , apiResponse);
    }
    else if(userIntent == "SEARCH_TicketType"){
        return await tripTicketTypeResponse(userIntent , apiResponse);
    }
    else{
        return "Please enter a proper utterence.."
    }

}

async function tripAgentResponse(userIntent , apiResponse ){
    console.log("Inside userIntent response",userIntent)
    let finalresp =  `To make this change I will need to pass you through to an agent.Please choose Yes or No`
    console.log("This is finalresp",finalresp)
    return finalresp
}

async function tripAirportResponse(userIntent , apiResponse ){
    console.log("Inside userIntent response",userIntent)
    const resJSON = JSON.stringify(apiResponse);
    const resObject = await JSON.parse(resJSON);
    let departairportname = resObject.result.segments[0].departureAirport.airport.name;
    let departairportaddress = resObject.result.segments[0].departureAirport.airport.address.city.name;
    let departairportterminal = resObject.result.segments[0].departureAirport.terminal;
    let arriveairportname = resObject.result.segments[0].arrivalAirport.airport.name;
    let arriveairportaddress = resObject.result.segments[0].arrivalAirport.airport.address.city.name;
    let finalresp =  `Your flight is departing from ${departairportname},${departairportaddress} at ${departairportterminal} and arriving at ${arriveairportname}, ${arriveairportaddress} `
    console.log("This is finalresp",finalresp)
    return finalresp
}

async function tripDepartResponse(userIntent , apiResponse ){
    console.log("Inside userIntent response",userIntent)
    const resJSON = JSON.stringify(apiResponse);
    const resObject = await JSON.parse(resJSON);
    let departairportterminal = resObject.result.segments[0].departureAirport.terminal;
    let finalresp =  `You are departing from terminal ${departairportterminal}`
    console.log("This is finalresp",finalresp)
    return finalresp
}

async function tripArrivalResponse(userIntent , apiResponse ){
    console.log("Inside userIntent response",userIntent)
    const resJSON = JSON.stringify(apiResponse);
    const resObject = await JSON.parse(resJSON);
    let arrivalairportterminal = resObject.result.segments[0].arrivalAirport.terminal;
    let finalresp =  `You are arriving from terminal ${arrivalairportterminal}`
    console.log("This is finalresp",finalresp)
    return finalresp
}

async function tripFlightNumberResponse(userIntent , apiResponse ){
    console.log("Inside userIntent response",userIntent)
    const resJSON = JSON.stringify(apiResponse);
    const resObject = await JSON.parse(resJSON);
    let flightnumber = resObject.result.segments[0].marketingFlight.flightNumber;
    let finalresp =  `Your flight number is ${flightnumber}`
    console.log("This is finalresp",finalresp)
    return finalresp
}

async function tripMealResponse(userIntent , apiResponse ){
    console.log("Inside userIntent response",userIntent)
    const resJSON = JSON.stringify(apiResponse);
    const resObject = await JSON.parse(resJSON);
    let mealPreferences = resObject.result.segments[0].mealPreferences;
    console.log(typeof(mealPreferences))
    if(Object.keys(mealPreferences).length == 0){
        mealPreferences = "None";
    }
    let hasSpecialMeal = resObject.result.segments[0].meal.hasSpecialMeal;
    let finalresp =  `Your meal selection is ${mealPreferences} and ${hasSpecialMeal} special meal`
    console.log("This is finalresp",finalresp)
    return finalresp
}

async function tripSeatResponse(userIntent , apiResponse ){
    console.log("Inside userIntent response",userIntent)
    const resJSON = JSON.stringify(apiResponse);
    const resObject = await JSON.parse(resJSON);
    let seatPreferences = resObject.result.segments[0].seatSelections.location;
    let finalresp =  `Your seat selection is ${seatPreferences} `
    console.log("This is finalresp",finalresp)
    return finalresp
}


async function tripEquipResponse(userIntent , apiResponse ){
    console.log("Inside userIntent response",userIntent)
    const resJSON = JSON.stringify(apiResponse);
    const resObject = await JSON.parse(resJSON);
    let equipment = resObject.result.segments[0].equipment.code;
    let finalresp =  `You currently have ${equipment} added to your booking`
    console.log("This is finalresp",finalresp)
    return finalresp
}


async function tripClassResponse(userIntent , apiResponse ){
    console.log("Inside userIntent response",userIntent)
    const resJSON = JSON.stringify(apiResponse);
    const resObject = await JSON.parse(resJSON);
    let classofservice = resObject.result.segments[0].classOfService.description;
    let finalresp =  `You ar flying in class ${classofservice}`
    console.log("This is finalresp",finalresp)
    return finalresp
}

async function tripFlightResponse(userIntent , apiResponse ){
    console.log("Inside userIntent response",userIntent)
    const resJSON = JSON.stringify(apiResponse);
    const resObject = await JSON.parse(resJSON);
    let departairport = resObject.result.segments[0].departureAirport.airport.name;
    let arriveairport = resObject.result.segments[0].arrivalAirport.airport.name;
    let flightdistance = resObject.result.segments[0].flightDistance;
    let finalresp =  `Your flight from ${departairport} to ${arriveairport} is ${flightdistance}`
    console.log("This is finalresp",finalresp)
    return finalresp
}

async function tripFareResponse(userIntent , apiResponse ){
    console.log("Inside userIntent response",userIntent)
    const resJSON = JSON.stringify(apiResponse);
    const resObject = await JSON.parse(resJSON);
    let currency = resObject.result.fareInfos[0].estimatedTotalFare.currency;
    let amount = resObject.result.fareInfos[0].estimatedTotalFare.amount;
    let finalresp =  `The cost of the flight reservation was ${currency}:${amount}`
    console.log("This is finalresp",finalresp)
    return finalresp
}

async function tripTicketedResponse(userIntent , apiResponse ){
    console.log("Inside userIntent response",userIntent)
    const resJSON = JSON.stringify(apiResponse);
    const resObject = await JSON.parse(resJSON);
    let isticketed = resObject.result.segments[0].ticket.isTicketed;
    let finalresp =  `The status of your flight is ${isticketed}`
    console.log("This is finalresp",finalresp)
    return finalresp
}

async function tripTicketNumberResponse(userIntent , apiResponse ){
    console.log("Inside userIntent response",userIntent)
    const resJSON = JSON.stringify(apiResponse);
    const resObject = await JSON.parse(resJSON);
    let ticket = resObject.result.segments[0].ticket.ticketNumber;
    let finalresp =  `Your ticket number is ${ticket}`
    console.log("This is finalresp",finalresp)
    return finalresp
}

async function tripTicketTypeResponse(userIntent , apiResponse ){
    console.log("Inside userIntent response",userIntent)
    const resJSON = JSON.stringify(apiResponse);
    const resObject = await JSON.parse(resJSON);
    let isticketless = resObject.result.segments[0].ticket.isTicketless;
    let finalresp =  `Your ticket type is ${isticketless}`
    console.log("This is finalresp",finalresp)
    return finalresp
}



module.exports = {tripResponse};