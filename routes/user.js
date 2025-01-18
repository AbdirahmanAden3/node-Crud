const express = require('express')
const connection = require('../connection');
const router = express.Router();  // Capital "R" for Router
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();
var auth =  require('../services/authentication');
var checkRole = require('../services/checkRole');

// Middleware to parse JSON bodies
router.post('/signup', (req, res) => {
    let user = req.body;
    const query = "SELECT email, password, role, status FROM user WHERE email = ?";
    // Check if the user already exists
    connection.query(query, [user.email], (error, results) => {
        if (!error) {
            if (results.length <= 0) {  // Use correct condition
                // Insert new user if they don't exist
                const insertQuery = "INSERT INTO user (name, contactnumber, email, password, status, role) VALUES (?, ?, ?, ?, 'false', 'user')";
                connection.query(insertQuery, [user.name, user.contactnumber, user.email, user.password], (err, results) => {
                    if(!err) {
                        return res.status(200).json({ message: "Successfully registered"});
                    } else {
                        return res.status(500).json(err);
                    }
                });
            } else {
                return res.status(400).json({ message: "User already exists"});
            }
        } else {
            return res.status(500).json(error);
        }
    });
});


router.post('/login', (req, res) => {
    const user = req.body;
    query = "select email,password,role,status from user where email=?";
    connection.query(query, [user.email], (err, results) => {
        if(!err) {
            if(results.length <= 0 || results[0].password != user.password) {
                return res.status(401).json({ message: "Incorect username or password" });
            }
            else if(results[0].status == 'false') {
                return res.status(401).json({ message: "wait for admn Abroval" });

            }
            else if (results[0].password = user.password) {
                const response = { email: results[0].email, role: results[0].role }
                const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, { expiresIn: '8h' })
                res.status(200).json({token: accessToken });
            }
            else {
                return res.status(400).json({ message: "something went wrong please try again later" })
            }

        }

        else {
            return res.status(5000).json(err);

        }
    })
});

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:process.env.EMAIL,
        pass : process.env.PASSWORD
    }
})

router.post('/forgetPassword', (req, res) => {
    const user = req.body;

    if (!user.email) {
        return res.status(400).json({ message: "Email is required" });
    }

    const query = "SELECT email, password FROM user WHERE email = ?";
    
    // Query the database to find the user
    connection.query(query, [user.email], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal server error" });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const { email, password } = results[0];

        // Configure mail transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Password Recovery - Cafe Management System',
            html: `
                <p>Your login details for Cafe Management System:</p>
                <b>Email:</b> ${email}<br>
                <b>Password:</b> ${password}<br>
                <p><a href="http://localhost:4200/">Click here to login</a></p>
            `,
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ message: "Failed to send email" });
            }

            return res.status(200).json({ message: "Password sent to your email" });
        });
    });
});



// router.get('/get',auth.authenticateToken,(req,res)=>{
//     var query = "Select id,name,email,contactnumber,status from user where role='user'";
//     connection.query(query,(err,results)=>{
//         if(!err){
//             return res.status(200).json(results)
//         }
//         else{
//             return res.status(500).json(err)
//         }
//     })
// });
//change the modifaction or update
router.get('/get',auth.authenticateToken, (req, res) => {
    const role = req.query.role || 'user'; // Set 'user' as a default role if none is provided

    const query = "SELECT id, name, email, contactnumber, status FROM user";
    connection.query(query, [role], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        return res.status(200).json(results);
    });
});



router.patch('/update',(req,res)=>{
    let user = req.body;
    console.log(user);
    var query = "UPDATE user SET name = ?, email = ?, password = ?, status = ?, role = ? WHERE id = ?";
    connection.query(query, [user.name, user.email, user.password, user.status, user.role, user.id], (err, results) => {
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message: "user id is not exists"}); 
            }
            return res.status(200).json({message: "user updated seccsfully"})
        }
        else{
            return res.status(500).json(err)
        }
    })

});

router.get('/checkToken',auth.authenticateToken,(req,res)=>{
    return res.json(200).json({message: "true"})
})
// 
router.post('/changePassword',auth.authenticateToken,(req,res)=>{
    const user = req.body;
    console.log(req.body);
    const email = res.locals.email;
    console.log(email);

    var query = "select * from  user where email=? and password=?";
    connection.query(query,[email, user.oldpassword],(err,results)=>{
        if(!err){
            if(results.length <=0){
                return res.status(400).json({message: "Incorect old password"})
            }
            else if(results[0].password == user.oldpassword){
                query = "update user  SET password=? where email=?";
                connection.query(query,[user.newPassword,email],(err,results)=>{
                    if(!err){
                        return res.status(200).json({message: "password updates Succesfuly"})
                    }
                })
            }
            else{
                return res.status(400).json({message: "something went wrong please try agian later"})
            }
        }else{
            return res.status(500).json(err)
        }
    })
    
})



module.exports = router;

// router.post('/forgetPassword', (req, res) => {
//     const user = req.body;
//     const query = "SELECT email, password FROM user WHERE email=?";
//     // Corrected query execution
//     connection.query(query, [user.email],(err, results) =>{
//         if (!err) {
//             if (results.length <= 0) {
//                 return res.status(400).json({message: "User not found"});
//             } else {
//                 var mailOptions = {
//                     from: process.env.EMAIL,
//                     to: results[0].email,
//                     subject: 'Password by Cafe Management System',
//                     html: <p>Your login details for Cafe Management System:</p>
//                            <b>Email:</b> ${results[0].email}<br>
//                            <b>Password:</b> ${results[0].password}<br>
//                            <a href="http://localhost:4200/">Click here to login</a>
//                 };
//                 var transporter = nodemailer.createTransport({
//                     service: "gmail",
//                     auth: {
//                       user: process.env.EMAIL,
//                       pass: process.env.PASSWORD,
//                     },
//                   });
//             }
//         } else {
//             return res.status(500).json(err);
//         }
//     });
// });