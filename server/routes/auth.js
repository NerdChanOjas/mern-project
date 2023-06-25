/**
@fileoverview This file defines the router for handling login-related routes.
It imports the Express framework and the login controller from the auth module.
The router is responsible for handling the "/login" route and invoking the login controller function.

Handles the POST request to "/login" route.
Invokes the login controller function to authenticate user login.
@name POST /login
*/

import express from "express";
import { login } from "../controllers/auth.js"

const router = express.Router();

router.post("/login", login);

export default router;