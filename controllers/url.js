const{ nanoid }=require('nanoid')
const URL=require('../modules/url')

async function handleGenerateShortURL(req,res){
    const shortId=nanoid(8)
    const body=req.body

    if(!body.url)
        return res.status(400).json({error:'url is required'})
    await URL.create({
        shortId:shortId,
        originalURL:body.url,
        visited:[]
    })

    return res.render('body',{
        id:shortId
    })
}

async function getURL(req,res) {
    const shortid=req.params.shortId

    const entry=await URL.findOneAndUpdate({shortid},
        {$push:{
            visited:{timestamp:Date.now()}
        }
    })
    res.redirect(entry.originalURL)
}

async function getAnalytics(req,res) {
    const shortId=req.params.shortId

    const count=await URL.findOne({shortId})
    if (!count) {
        return res.status(404).json({
            error: "Short URL not found"
        })
    }
    return res.json({
        totalClicks:count.visited.length,
        Analytics:count.visited
        })
}

module.exports={
    handleGenerateShortURL,
    getURL,
    getAnalytics
}