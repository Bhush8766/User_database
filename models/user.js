const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

setTimeout(() => {
  mongoose.connect("mongodb+srv://bhush8766:Bhush%402328@cluster0.yawkujz.mongodb.net/userData?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));
}, 3000);
