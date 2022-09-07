const express = require('express')
const router = express.Router()


router.get('/',async(req,res)=>{
    try{
    return res.status(200).json({code:1 , message: 11,data:1})
    }catch(ex){
    console.log(ex)
    }
})




module.exports = router
