import { createCategoryService } from "../Services/Category";

export const createCategory = async(req, res)=>{
    const {name} = req.body
    try {
      const result = await createCategoryService(name)
        res.json(result)
      } catch (error) {
        console.log(error)
        res.send("Exist in dabatabase").status(500)
      }

}