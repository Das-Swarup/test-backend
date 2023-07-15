const mysql = require("mysql")

const sqlconnect = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6632974",
    password: "7FPwLMtspy",
    database: "sql6632974",
    multipleStatements: true
})

sqlconnect.connect((err)=>{
    if(!err){
        console.log("Database Connected");
    }else(
        console.log(err)
    )
})

module.exports= sqlconnect