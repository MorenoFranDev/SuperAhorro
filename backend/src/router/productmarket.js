import { createProductList, createProductMarket, findArticles } from "../controller/productmarket";
import { Router } from "express";
import { findCartShop } from "../controller/supermarket";
import upload from "../libs/uploadsFile";
const router = Router();

router.post("/add", createProductMarket);
router.get("/find",findArticles)
// router.post("/add-json", upload.single('file'),createProductList)
router.post("/add-json",createProductList)
router.post("/cartshop/",findCartShop)
export default router;
