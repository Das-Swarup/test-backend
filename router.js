const express = require("express")
const router = express.Router();
const sqlconnect = require("./db")
const bodyParser = require("body-parser")

router.get("/", (req,res)=>{
    sqlconnect.query("SELECT * FROM User", (err,rows)=>{
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
})

// Create User API Endpoint
router.post('/users',bodyParser.urlencoded(), (req, res) => {
    // Assuming you have a database to store user data, you can connect and insert the user here
    const { username, email, password } = req.body;

    console.log(username);
  
    // Validation - Check if all required fields are provided
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Please provide username, email, and password' });
    }
    const newUser = {
        username,
        email,
        password,
      };
    
      // Insert user into the User table
      const sql = 'INSERT INTO User (username, email, password) VALUES (?, ?, ?)';
      sqlconnect.query(sql, [newUser.username, newUser.email, newUser.password], (err, result) => {
        if (err) {
          console.error('Error inserting user: ', err);
          return res.status(500).json({ error: 'Failed to create user' });
        }
        console.log('User created successfully');
    
        // Return a success response
        return res.status(201).json({ message: 'User created successfully', user: newUser });
      });
    });


module.exports = router