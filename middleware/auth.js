import jwt from 'jsonwebtoken'
import User from '../src/users/users-model.js';
import ErrorHandler from '../utils/ErrorHandler.js';
import SuperAdmin from '../src/super-admin/super-admin-model.js';

const authenticate = async (req, res, next) => {
    try {
        let token = req.header("Authorization");

        token = token.split(' ')[1]

        if (!token) {
            next(new ErrorHandler("Please login to continue", 400));
        }

        const decoded = jwt.verify(token, "SMHAU171175");
        if (!decoded) {
            next(new ErrorHandler("Please login to continue", 400));
        }

        const user = await User.findOne({ _id: decoded.id });

        const superAdmin = await SuperAdmin.findOne({ _id: decoded.id });

        if (user) {
            req.user = user;
        }

        if (superAdmin) {
            req.user = superAdmin;
        }

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ status: false, message: 'User Not Authorized' })
    }
}

export default authenticate;