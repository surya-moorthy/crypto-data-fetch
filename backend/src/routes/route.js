const express = require('express');
const axios = require("axios");
const router = express.Router();
require('dotenv').config()
const apikey = process.env.API_KEY;

router.post('/stats',async (req,res)=>{
    const request = req.params.coin;
    if(request == ""){
        res.status(411).json({
            msg : " Inputs required"

        })
    }
    try { 

            const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
                headers : {
                    accept : "application/json",
                    Authorization : `Bearer ${apikey}`
                }, 
                params : { 
                    vs_currency : "usd",
                    ids : request
                }
               }) 
             res.status(200).json({
                data : response.data
             })
            } catch(err) {
                console.error(err)
            res.status(403).json({
                msg : "error happened : " + err
            })
           }   
})

module.exports = {
    router
}