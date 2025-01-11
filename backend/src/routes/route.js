const express = require('express');
const axios = require("axios");
const router = express.Router();
require('dotenv').config()
const apikey = process.env.API_KEY;

async function fetchRecentData(request) {
     const url = `https://api.coingecko.com/api/v3/coins/markets`
     console.log(request)
     try {
        const response = await axios.get(url ,{
            headers : {
                accept : "application/json",
                Authorization : `Bearer ${apikey}`
            },
            params : { 

                vs_currency : "usd",
                ids : `${request}` 
            }
         } )
         console.log(response.data)
         return response.data
     }
     catch(err) {
        //  console.error(err);
         return "Error occured" + err.message
     }
}

router.post('/stats',async (req,res)=>{
    const request = req.query.coin;
    console.log(request
    )
    if(request == ""){
        res.status(411).json({
            msg : "Invalid onputs or inputs needed"
        })
    }

    try {
        const DataResponse = await fetchRecentData(request);
        res.status(200).json({
            data : DataResponse
        })
    }catch(err){
        res.status(403).json({
            msg : "error happened : " + err.message
        })
    }
})



module.exports = {
    router
}