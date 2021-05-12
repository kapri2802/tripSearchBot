function tripSearchResponse(){
    console.log("Inside Trip search response function")


    const axios = require('axios')
    const token = 'eyJraWQiOiJUcUtvQ3FtdEd1ZGp3NWlwb2FCQVkwTVV6U2tjVW5lcTJGajNRUHR4d0JzPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1ZmlicW11MXQxZ3JvOHRianRyNWwxbXIwNCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiaHR0cHM6XC9cL2JjZGFwaVwvZGVmYXVsdCIsImF1dGhfdGltZSI6MTYyMDgxNjc5NywiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfOHlnUDZPaWU1IiwiZXhwIjoxNjIwODIwMzk3LCJpYXQiOjE2MjA4MTY3OTcsInZlcnNpb24iOjIsImp0aSI6ImVlMDRiZWUxLWI2ODktNDEzNC04MWM5LTI5ZjFhZDlmNTE1NyIsImNsaWVudF9pZCI6IjVmaWJxbXUxdDFncm84dGJqdHI1bDFtcjA0In0.HXfIDO83STIVwfNNKwAe5uphM4F3C-4G1Jx_w9DCEPXcyVBXw2eK3RAUGgE8xbNnAu-9BIyUC4kLibNt_mJ_AOSOZWcDX0dUQFLyjcpQwPhWi5JusLRocMFk9wX_glIRWQTXpWutGQlwHKL1Z6OGCy1Ppi8mqgWHMBz4-IpxlYnSZFfKao9Plwc1fSZ6szDQrXM6MnFIPn9eJuAY4Rn4tbcH4l15hXjTQbrBcdL1klMqoMrEbqJ46Dr1oeL5hekOOGVML5_BHS5rNKwyHtw8fDt0tcdRJ2svfqTIVhEMsTcbwj9hZIW-EVS1j06oWJ_SSXXx7n18NOis3tczr1nS_A'


    axios.get('https://travel-data-api.bcdtravel.com/v1/trips/f72e1c68-5441-6557-51a7-fb57b59add52', {
    headers: {
        'Authorization': `Bearer ${token}`
    }
    })
    .then((res) => {
    console.log(JSON.stringify(res.data))
    })
    .catch((error) => {
    console.error(error)
    })



    return "This is response"
}
module.exports = { tripSearchResponse };

// export {tripSearchResponse};