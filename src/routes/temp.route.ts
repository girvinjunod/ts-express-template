import { Router } from "express";
import verifyJWT  from "../middleware/jwtAuth";
import temp from "../controller/temp.controller";

const tempRoute = Router();

tempRoute.get("/tes", verifyJWT, temp.tes);

export default tempRoute;