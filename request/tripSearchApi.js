const {tokenGeneration} = require('../request/tokengeneration')


async function tripSearchResponse(){
    console.log("Inside Trip search response function")

    const axios = require('axios')
    const token = await tokenGeneration()
    console.log("Token Value",token)
    return axios.get('https://travel-data-api.bcdtravel.com/v1/trips/dc3a33fe-6bf3-2a77-0154-09d091b3d443', {
    headers: {
        'Authorization': `Bearer ${token}`
    }
    })
    .then((res) => {
        // console.log(res.data)
        return res.data
    })
}
module.exports = { tripSearchResponse };

// export {tripSearchResponse};