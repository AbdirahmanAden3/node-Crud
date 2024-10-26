// require('dotenv').config();
// const jwt = require('jsonwebtoken');


// function authenticateToken(req, res, next){
//     const authHeader = req.header['authorization'];
//     const token = authHeader && authHeader.split('')[1]
//     if(token == null)
//         return res.sendStatus(401);
//     jwt.verify(token, process.env.ACCESS_TOKEN, (err, response) => {
//         if(err)
//             return res.sendStatus(403);
//         res.locals = response
//         next()
//     })

// }

// module.exports = {authenticateToken: authenticateToken }

require('dotenv').config();
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    // Correctly extract the token from the authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    // If no token is provided, return a 401 status
    if (token == null) return res.sendStatus(401);
    
    // Verify the token
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden if token is invalid
        res.locals.user = user; // Store user info (from token) in res.locals for later use
        next(); // Proceed to the next middleware/route handler
    });
}

module.exports = { authenticateToken: authenticateToken };
