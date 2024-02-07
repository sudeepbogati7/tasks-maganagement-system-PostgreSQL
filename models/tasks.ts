import { Model ,DataTypes } from "sequelize";
import sequelize from "../config/database";
//user-model
import User from "./users";

class Task extends Model {
    public id! : number; 
    public title! : string;
    public description! : string;
    public status! : string ; 
    public readonly createdAt! : Date; 
    public readonly updatedAt! : Date; 
}


Task.init({
    id : {
        type : DataTypes.INTEGER, 
        primaryKey : true, 
        autoIncrement : true, 
    },
    title : {
        type : DataTypes.STRING, 
        allowNull : false, 
    },
    description: {
        type : DataTypes.STRING, 
        allowNull : false, 
    },
    status : {
        type : DataTypes.STRING,
        allowNull : false, 
    }
}, {
    sequelize, 
    tableName : 'tasks',
});



Task.belongsTo(User, { foreignKey : 'userId'});


export default Task; 