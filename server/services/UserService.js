import User from "../models/User.js";
import bcrypt from 'bcrypt';

class UserService {
    async register(user) {
        const candidate = await User.findOne({ email: user.email });

        if (candidate) {
            throw new Error('User already exist');
        }

        const hashedPassword = await bcrypt.hash(user.password, 3);
        const token = String(Date.now());
        const hashedToken = await bcrypt.hash(token, 3);

        const createdUser = await User.create({ ...user, password: hashedPassword, token: hashedToken, nonhashedToken: token });

        return createdUser;
    }

    async login(email, password) {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('User not found')
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Wrong password')
        }

        return user;
    }

    async checkUser(id, token) {
        const user = await User.findOne({ _id: id });

        if (!user) {
            throw new Error('User not found')
        }

        const isTokenValid = await bcrypt.compare(token, user.token);
        if (!isTokenValid) {
            throw new Error('Auth error')
        }

        return user;
    }
}

export default new UserService();