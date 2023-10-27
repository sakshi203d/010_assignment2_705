const router = require('express').Router();
const path = require('path');
const userController = require('../controller/userController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req,file,res)=>{
        res(null,'../que1/public/uploads');
    },
    filename:(req,file,res)=>{
        res(null,Date.now()+'-'+file.originalname);
    }
});

const upload = multer({storage:storage});

router.get('',userController.viewHome);

router.get('/register',userController.viewRegister);
router.post('/register',upload.array('image',10),userController.registerValidation,userController.register);

module.exports = router;