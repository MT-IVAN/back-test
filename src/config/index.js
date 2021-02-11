if(process.env.NODE_ENV !== "production"){
    //Load my variables if I'm not on pdn
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    APPLICATION_NAME: process.env.APPLICATION_NAME,
}