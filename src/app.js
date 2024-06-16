import express from "express"
import { Route } from "./Routes/User.route.js"
const app =express()
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use("/api/v1/users",Route)

export {app}