import User from "../models/User.js";
import UserService from "../services/UserService.js";

class UserController {
    async register(req, res) {
        try {
            const user = await UserService.register(req.body);
            res.json(user);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await UserService.login(email, password);
            res.json(user);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async checkUser(req, res) {
        try {
            const { id, token } = req.body;
            const user = await UserService.checkUser(id, token);
            res.json(user);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

export default new UserController();