import app from "./app.js";
import sequelize from "./connection.js";

const main = () => {
  app.listen(process.env.PORT  || 4000);
  try {
    sequelize.sync();
  } catch (error) {
    console.log("Error in db")
  }
};

main()