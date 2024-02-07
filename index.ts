import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { Sequelize} from 'sequelize';

import sequelize from './config/database';


// loading environment variables 
dotenv.config();

const app = express();

//middlewares 
app.use(bodyParser.json());


// starting the server : 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on port %s ", PORT);
});



//sync models to db 
sequelize.sync({force : true})
    .then(() => console.log("Database synchronized successfully ! "))
    .catch(error => console.log("Error while syncrhonizing the database !!"));


/*test database connection 
sequelize.authenticate()
    .then(() => {
        console.log("Successfully connected to database ........");
    })
    .catch(err => console.log("Failed to connect to the database........", err));
*/