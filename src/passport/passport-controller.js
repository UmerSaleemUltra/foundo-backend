import catchAsyncErrors from "../../middleware/catchAsyncErrors.js";
import sendResponse from "../../middleware/response.js";
import ErrorHandler from "../../utils/ErrorHandler.js";
import fs from "fs";
import Passport from "./passport-model.js";


export const uploadPassport = catchAsyncErrors(async (req, res, next) => {
    try {
        const { member_id } = req.body;

        console.log(req.file)

        const passport = req.file?.filename;

        const memberExist = await Passport.findOne({ member_id: member_id });

        if (memberExist) {
            fs.unlink(`uploads/passports/${memberExist?.passport}`, (error) => {
                if (error) {
                    // return next(new ErrorHandler(error.message, 500));
                } else {
                    console.log("file deleted");
                }
            })

            memberExist.passport = passport;
            await memberExist.save();

            return sendResponse(res, 200, "Passport Updated Successfully", memberExist);
        }

        const newPassport = await Passport.create({ member_id, passport });

        sendResponse(res, 200, "Passport Uploaded Successfully", newPassport);
    }
    catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
});

export const getPassport = catchAsyncErrors(async (req, res, next) => {
    try {
        const { id } = req.params;

        const passport = await Passport.findOne({ member_id: id });

        if (!passport) {
            return res.status(404).json({ message: "Passport Not Found" });
        }

        sendResponse(res, 200, "Passport Found Successfully", passport);
    }
    catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
})