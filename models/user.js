const { MongoClient, ServerApiVersion } = require('mongodb');

// Replace these placeholders with actual values
const username = "bhush8766";
const password = encodeURIComponent("Bhush%402328%40"); // URL encode if special characters are present
const dbName = "userData";

// MongoDB Atlas URI
const uri = `mongodb+srv://bhush8766:Bhush%402328%40@cluster0.yawkujz.mongodb.net/userData?retryWrites=true&w=majority&appName=Cluster0`;

// MongoDB client with API versioning options
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect(); // Connect to the cluster
    await client.db("admin").command({ ping: 1 }); // Test connection
    console.log("✅ Successfully connected to MongoDB Atlas!");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  } finally {
    await client.close(); // Always close the connection
  }
}

run();
