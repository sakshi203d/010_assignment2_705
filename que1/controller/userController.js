const express = require('express');
const User = require('../model/userModel');
const { check,validationResult } = require('express-validator');

const viewHome = (req,res)=>{
    res.render('home');
}

const viewRegister = (req,res)=>{
    res.render('register');
}

const registerValidation = [
    check('name').isLength({min:2}).withMessage('Username Must be 2 OR more character'),
    check('password').notEmpty().withMessage('Please Enter The Password'),
    check('dob').notEmpty().withMessage('Please Select The Date Of Birth'),
    check('mobileNo').isLength({min:10}).withMessage('Please Enter Valid Mobile No.'),
    check('email').isEmail().withMessage('Please Enter Valid Email')
];
const register = async(req,res)=>{
    try{
        const Errors = validationResult(req);

        if(!Errors.isEmpty())
        {
            res.send(Errors);
        }
        else
        {
            const name = req.body.name;
            const password = req.body.password;
            const dob = req.body.dob;
            const mobileNo = req.body.mobileNo
            const email = req.body.email;
            const images = req.files;
            
            const u = new User({name:name,Password:password,DOB:dob,email:email,mobileNo:mobileNo,image:images.map(file=>file.filename)});
            const result = await u.save();
    
            if(result)
            {
                // res.render('home');
                res.send('success');
            }
        }
    }
    catch(err)
    {
        console.log(err);
        res.send(err);
    }
}


module.exports = {
    viewHome,
    viewRegister,
    register,
    registerValidation
}