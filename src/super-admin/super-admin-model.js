import mongoose from "mongoose";
import { Schema } from "mongoose";
import jwt from "jsonwebtoken";

const superAdminSchema = new Schema({
    name: {
        type: String,
        trim: true,
        default: "",
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        default: "",
    },
    password: {
        type: String,
        trim: true,
        default: "",
    },
    otp: {
        type: String,
        trim: true,
        default: ""
    },
    is_super_admin: {
        type: Boolean,
        default: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
});


superAdminSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, "SMHAU171175", {
        expiresIn: "20d",
    });
};

superAdminSchema.pre('save', function (next) {
    this.updated_at = Date.now();
    next();
});

// Create the model from the schema
const SuperAdmin = mongoose.model('SuperAdmin', superAdminSchema);

export default SuperAdmin;