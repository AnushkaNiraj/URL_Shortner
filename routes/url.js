const express=require('express')
const {handleGenerateShortURL}=require('../controllers/url')
const {getURL,getAnalytics}=require('../controllers/url')
const router=express.Router()

router.post('/',handleGenerateShortURL)
router.get('/:shortID',getURL)
router.get('/analytics/:shortId',getAnalytics)
module.exports=router