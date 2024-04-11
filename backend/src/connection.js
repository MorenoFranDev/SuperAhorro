import { Sequelize } from "sequelize";

const sequelize = new Sequelize("SuperAhorro", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize