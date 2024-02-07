import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config();

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_DIALECT,
} = process.env;



const sequelize = new Sequelize(DB_NAME!, DB_USER!, DB_PASSWORD!,{
    host : DB_HOST, 
    port : parseInt(DB_PORT!),
    dialect: DB_DIALECT as any,
    logging : console.log  
});

export default sequelize;