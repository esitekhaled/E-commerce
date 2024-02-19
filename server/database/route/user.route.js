const express=require('express')
const Route = express.Router()

const usrcontoler=require('../controler.js/user.controller')

Route.get('/useRole/:role',usrcontoler.findUserrole)
Route.put('/updateUser/:id',usrcontoler.updateuser)
Route.delete('/deleteUser/:id',usrcontoler.deleteuser)
Route.put('/updateUserRole/:id',usrcontoler.changeUserRole)
Route.post('/signup', usrcontoler.registerUser);
Route.post('/signin', usrcontoler.signInUser);

module.exports=Route