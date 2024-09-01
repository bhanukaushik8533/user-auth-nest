import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { User } from "./schema/user.schema";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
         private userModel: mongoose.Model<User>
        ) {}

   async create(user:User): Promise<User>{
       const res = await this.userModel.create(user)
       return res
   }

   async findOne(email: string): Promise<User> {
       const users = await this.userModel.find()
       return users.find(user => user.email === email)
   }
}
