import { DataTypes } from "sequelize";
import sequelize from "../connection";
import { ProductMarket } from "./ProductMarket.module";
import { Product } from "./Product.model";
import { Region } from "./Region";
sequelize.sync()

export const Supermarket = sequelize.define("Supermarket", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  logo: {
    type: DataTypes.STRING,
  },
});

Supermarket.hasMany(ProductMarket)
Product.hasMany(ProductMarket)
Region.hasMany(ProductMarket)

ProductMarket.belongsTo(Supermarket)
ProductMarket.belongsTo(Product)