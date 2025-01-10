const express = require('express');
const axios = require("axios");
const  {router} = require('./routes/route');
require('dotenv').config()
const app = express()
app.use(express.json())
const port = 3000

app.use("/",router)

app.listen(port,()=>{
    console.log(`app is running at port ${port}`)
})

// async function fetchData(ids){
//     const apikey = process.env.API_KEY;
//     const url = "https://api.coingecko.com/api/v3/simple/price";

//     try {
//         const response = await axios.get(url,
//            { headers : {
//                 accept : "application/json",
//                 Authorization : `Bearer ${apikey}`
//             },
//             params : {
//                 ids : ids.join(","),
//                 vs_currencies : "usd",
//                 include_market_cap : true,
//                 include_24hr_vol : true,
//                 include_last_updated_at : true
//             },
            
//         })
//         console.log(response.data)
//     }
//     catch(e){
//         console.log("Error happened : ",e)
//     }
// }
// const ids = ["bitcoin","matic-network","ethereum"]
// setInterval(()=>{
//     fetchData(ids)
// },60000)