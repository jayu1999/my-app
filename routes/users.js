const express = require('express');
const router = express.Router();

// Login page
router.get('/login', (req ,res)=> res.render('Login'));

// Register page
router.get('/register', (req ,res)=> res.render('Register'));

// Register Handle
router.post('/register',(req,res)=>{
    const{ name, email, password, password2} = req.body;
   console.log(req.body)
   res.send("Successfully submitted");
});


module.exports = router;