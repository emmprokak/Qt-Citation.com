const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const AppError = require("./utils/AppError");
const PORT = 3000;

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


// routes
app.get("/", (req, res) => {
    res.redirect("/home")
})

app.get("/home", (req, res) => {
    res.render("home");
})

app.get("/download", (req, res) => {
    const q = req.query.view;
    res.render("download", { q });
})

app.get("/how-to-use", (req, res) => {
    res.render("how-to");
})

app.get("/about", (req, res) => {
    res.render("about");
})

// error handling
app.all("*", (req, res, next) => {
    next(new AppError("page not found", 404));
})

app.use((err, req, res, next) => {
    const { status = 500 } = err;
    if (!err.message) err.message = "Something went wrong";
    res.status(status).render("error", { err });
})

app.listen(PORT, () => {
    console.log(`serving on port ${PORT}`);
})
