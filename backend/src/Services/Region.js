import { Region } from "../models/Region";

export const createRegion = async (name) => {
  try {
    const newRegion = new Region.create({ name });
    return await newRegion.save();
  } catch (error) {
    return error;
  }
};

export const findRegionByName = async (name) => {
  const result = await Region.findOne({
    where: { name }
  });
  if(result) return { name: result.name, RegionId: result.id };
  return null
};
