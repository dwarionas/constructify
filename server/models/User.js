import mongoose from 'mongoose';

const User = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nonhashedToken: { type: String, required: true },
    token: { type: String, required: true }
});

export default mongoose.model('User', User);