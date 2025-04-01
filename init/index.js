const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");

async function main() { 
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
    console.log("DB is connected");
    await initDB();
  } catch (err) {
    console.error("Error connecting to DB:", err);
  }
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
      ...obj, owner: "67db95802009077a42c096e7",
    }));
    await Listing.insertMany(initData.data);
    
    console.log("Data was initialized");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error initializing DB:", err);
  }
};

main();
