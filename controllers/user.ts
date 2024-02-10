import { Express, Request, Response } from "express";
import User from '../models/users';


//create/register a new user 
interface RegisterUserBody {
    username : string, 
    email : string, 
    password : string
};

const registerUser = async (req: Request<any, any, RegisterUserBody>, res: Response) => {
    const { username, email, password} = req.body;
    const user = await User.findOne({where: {email}});
    if (user) return res.status(401).json({ error : "Email already exists !"});
    const newUser = User.create({
        username, 
        email , 
        password
    });
    res.status(201).json({ 
        success : true, 
        user : newUser,
        message : "User created successfully !",
    })
}


// login the user
const loginUser = async (req: Request<any, any, RegisterUserBody>, res: Response) => {
    const { email, password} = req.body;
    const user = User.findOne({ where : {email}})
}


