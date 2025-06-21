import mongoose from "mongoose";
import { Schema } from "mongoose";

const documentSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    },
    company_id: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        default: null,
    },
    name: {
        type: String,
        trim: true,
        default: ""
    },
    file: {
        type: String,
        trim: true,
        default: ""
    },
    type: {
        type: String,
        trim: true,
        default: ""
    },
    category: {
        type: String,
        trim: true,
        default: ""
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    }
});

documentSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const Document = mongoose.model('Document', documentSchema);

export default Document;