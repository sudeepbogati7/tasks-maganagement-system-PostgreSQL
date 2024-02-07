import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";


class User extends Model {
    public id! : number; 
    public username! : string; 
    public email! : string; 
    public password! : string; 
}

User.init({
    id : {
        type : DataTypes.INTEGER, 
        primaryKey : true, 
        autoIncrement: true, 
    },
    username: {
        type : DataTypes.STRING,
        allowNull : false, 
        unique: true, 
    },
    email : {
        type : DataTypes.STRING, 
        unique : true,
        allowNull : false, 
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false,
    }
}, {
    sequelize, 
    tableName : 'users'
});

export default User;