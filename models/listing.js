const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const Review = require("./review");
const { required } = require("joi");
 
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String, 
  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default: "https://www.thewall360.com/uploadImages/ExtImages/images1/def-638240706028967470.jpg",
      // default: "https://w.wallhaven.cc/full/p9/wallhaven-p9qr89.png",
      set: (v) => v === "" ? "https://www.thewall360.com/uploadImages/ExtImages/images1/def-638240706028967470.jpg" : v,
    },
  }, 
  price: { type: Number, default: 0 },
  location: String, 
  country: String,
  reviews:[
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner:{
    type: Schema.Types.ObjectId,
    ref:"User",
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"], 
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    }, 
  },

});


listingSchema.post("findOneAndDelete", async(listing)=>{
  if(listing){
    await Review.deleteMany({_id: {$in :listing.reviews }});
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;