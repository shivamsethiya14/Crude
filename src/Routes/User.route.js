import { Router } from "express";
import {createUsercontroller,getAllUserCOntroller,updateusercontroller,deleteusercontroller,getuserbyidcontroller} from "../Controller/user.controller.js"
const Route=Router()
Route.route("/").get(getAllUserCOntroller).post(createUsercontroller)
Route.route("/:id").
get(getuserbyidcontroller)
.patch(updateusercontroller)
.delete(deleteusercontroller)
// Route.post("/",createUsercontroller)

export {Route}