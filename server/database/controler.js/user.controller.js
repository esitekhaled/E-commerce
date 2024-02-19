// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config()
const secretKey = process.env.JWT_SECRET;
console.log("secret",secretKey)

const db = require('../../database/index')

const User = db.models.user


const findUserrole = async (req, res) => {
    try {
        const role = req.params.role
        const user = await User.findAll({ where: { role: role } });

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send('Internal Server Error');
    }
};

const updateuser = async (req, res) => {
    try {
        const obj = req.body;
        const id = req.params.id;
        await User.update(obj, {
            where: {
                user_id: id
            }
        });
        res.status(200).send('User updated successfully');
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('Internal Server Error');
    }
};

const deleteuser = async (req, res) => {
    try {
        const id = req.params.id;
        await User.destroy({ where: {  user_id: id } });
        res.status(200).send('User deleted successfully');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Internal Server Error');
    }
};

const changeUserRole = async (req, res) => {
    try {
        const id = req.params.id;
        const role = req.body.role;
        await User.update({ role: role }, { where: {  user_id: id } });
        res.status(200).send('User role changed successfully');
    } catch (error) {
        console.error('Error changing user role:', error);
        res.status(500).send('Internal Server Error');
    }
};




const registerUser = async (req, res) => {
    try {
        const { username, password, email, role } = req.body

    const newUser = await User.create({
        username:username,
        password: password,
        email:email,
        role: role
        })
        return res.status(200).json(newUser)
    } catch (err) {
        console.error('Error in registering user:', err);;
    }
}
const signInUser = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({
            where: { email: email,password:password }
        });

        if (!user) {
            return res.status(404).json('Email not found');
        }

        // const hashedPassword = user.password;
        // const passwordValid = await bcrypt.compare(password, hashedPassword);

        // if (!passwordValid) {
        //     return res.status(401).json('Incorrect email or password');
        // }

        const token = await jwt.sign(user, secretKey);
        return res.status(200).json(token)
    } catch (err) {
        console.error('Error in signing in user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};





module.exports = {signInUser,registerUser,  findUserrole, updateuser, changeUserRole, deleteuser };
