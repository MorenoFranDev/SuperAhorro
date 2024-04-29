import  {Router} from "express" 
import { createCategory } from "../controller/category"
const router = Router()


router.post("/add", createCategory)


export default router