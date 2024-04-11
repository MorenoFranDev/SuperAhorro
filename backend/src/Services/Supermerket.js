import { Supermarket } from "../models/Supermarket.model";

export const CreateSupermarket = async (logo, name) => {
  try {
    const newSupermarket = new Supermarket({
      logo,
      name,
    });
    return await newSupermarket.save();
  } catch (error) {
    return null
  }
};

export const findSupermarketByName = async (name) => {
  const result = await Supermarket.findOne({
    where: { name },
  });
  if (result) return  {SupermarketId: result.id, name:result.name, logo:result.logo} ;
  return null;
};
