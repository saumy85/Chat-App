import express from "express";
import { registerUser } from "../controller/registerUser.js";
import { checkEmail } from "../controller/checkEmail.js";
import checkPassword from "../controller/checkPassword.js";
import userDetails from "../controller/userDetails.js";
import { logout } from "../controller/logout.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/email", checkEmail);
router.post("/password", checkPassword);
router.get("/user-details", userDetails);
router.get("/logout", logout);

export default router;
