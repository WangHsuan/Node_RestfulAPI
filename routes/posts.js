const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
router.get('/',(req,res)=>{
    res.send('We are on post');
})

router.get('/specific/:name',(req,res)=>{
    res.send(`${req.params.name} ${req.query.limit}`);
})

router.post('/',(req,res)=>{
    
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    console.log(post)

    post.save()
    .then(data =>{
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    });

});

module.exports = router;