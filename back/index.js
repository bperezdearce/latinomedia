require('dotenv').config();
const {PORT} = process.env;

const dbConnect = require("./src/config/dbConnect");
const app = require('./src/server');

dbConnect()
.then((res) => {
    app.listen(PORT, function () {
        console.log(`Server listening on port ${PORT}`);
    }); 
})
.catch(() => {
    console.log("Error connecting to the database");
});
