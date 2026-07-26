const express= require("express");
const app = express();
require("./routes/authRoutes");
app.use(express.json());
app.post("/login",(req,res)=> {
    console.log(req.body);
    res.send("Login Request Received");
});
app.get("/",(req, res)=> {
    console.log(req.url);
    res.send("Home Page");
});
app.get("/products",(req, res)=> {
    const products=[
        {
            id:1,
            name:"Laptop",
            price:60000
        },
        {
            id:2,
            name:"House",
            price:800
        }
    ];
    res.json(products);
});
// app.get("/",(req, res)=> {
//     res.send("Welcome to my e-commerce website");
// });
// app.get("/about",(req, res)=> {
//     res.send("This website is buit using express");
// });
// app.get("/contact",(req, res)=> {
//     res.send("Email:asthagoyal0104@gmail.com");
// });
// app.get("/help",(req, res)=> {
//     res.send("How can i help u?");
// });
app.listen(3000);