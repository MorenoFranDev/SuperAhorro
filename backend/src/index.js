import app from "./app.js";
import sequelize from "./connection.js";

const main = () => {
  app.listen(3000, () => {
    console.log("Server on port 3000");
  });
  try {
    sequelize.sync();
  } catch (error) {
    console.log("Error in db")
  }
};

main()