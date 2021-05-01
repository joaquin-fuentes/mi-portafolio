
const express = require("express")
const app = express()

const mainRoutes = require("./src/routes/mainRoutes")


app.listen(process.env.PORT || 3000,()=>{
    console.log("servidor corriendo en puerto 3000")
})


app.set("view engine", "ejs")
app.set("views", "src/views")
app.use(express.static("public"))



app.use("/",mainRoutes)




app.use((req,res,next) => {
    res.status(404).render("Error404/not-found")
})


