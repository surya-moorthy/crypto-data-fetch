const express = require('express');
const axios = require("axios")
require('dotenv').config()
const app = express()
const port = 3000

async function fetchData(){
    const id = "bitcoin";
    const apikey = process.env.API_KEY;
    const url = "https://api.coingecko.com/api/v3/simple/price";

    try {
        const response = await axios.get(url,
           { headers : {
                accept : "application/json",
                Authorization : `Bearer ${apikey}`
            },
            params : {
                ids : id,
                vs_currencies : "usd",
                include_market_cap : true,
                include_24hr_vol : true,
                include_last_updated_at : true
            },
            
        })
        console.log(response.data)
    }
    catch(e){
        console.log("Error happened : ",e)
    }
}

fetchData()