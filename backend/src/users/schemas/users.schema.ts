// src/users/schemas/users.schema.ts
import { Schema } from 'mongoose';

export const UsersSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
