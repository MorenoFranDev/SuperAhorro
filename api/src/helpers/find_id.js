import { Product } from "../models/Product.model";
import { ProductMarket } from "../models/ProductMarket.module";
import { Region } from "../models/Region";
import { Supermarket } from "../models/Supermarket.model";

export const findProductSupermarket_id = async (ProductId, SupermarketId) => {
 
};

export const findRegion_id = async (name) => {
  const result = await Region.findOne({
    where: { name },
  });
  return result.id
};

