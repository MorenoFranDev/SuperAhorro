import { createProductMarket, findArticles } from "../controller/productmarket";
import { Router } from "express";
import { findCartShop } from "../controller/supermarket";
const router = Router();

router.post("/add", createProductMarket);
router.get("/find",findArticles)
router.post("/cartshop/",findCartShop)
export default router;
