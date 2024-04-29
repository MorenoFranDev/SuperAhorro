import express from "express";
import SupermarketRouter from "./router/supermarket";
import ProductMarketRouter from "./router/productmarket";
import ProductRegion from "./router/region";
import CategoryRouter from "./router/category";
import bodyParser from "body-parser";
import cors from "cors";


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/region", ProductRegion );
app.use("/supermarket", SupermarketRouter);
app.use("/product",ProductMarketRouter);
app.use("/category",CategoryRouter);

app.get("/hello",(req, res)=>{
    res.json("EXITOSO")
})

export default app;