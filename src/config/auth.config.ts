import dotenv from 'dotenv';
dotenv.config();

const authConfig = {
    token_secret: process.env.TOKEN_SECRET,
    salt: 10,
    token_expire: 15*60*1000
  };
  
  export default authConfig;