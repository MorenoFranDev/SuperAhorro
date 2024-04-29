import { createRegion, getRegions } from "../controller/Regions";
import { Router } from "express";
const router = Router();

router.post("/add",createRegion)
router.get("/",getRegions)
export default router;
