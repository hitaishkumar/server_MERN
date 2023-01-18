import express from 'express';

const router = express.Router()


// here localhost:5000/posts

// http://localhost:5000/posts
router.get('/' , (req,res)=>{
    res.send("this works")
})

export default router