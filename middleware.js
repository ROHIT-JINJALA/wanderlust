let Listing = require("./models/listing");
let Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");


module.exports.isLoggedIn = (req, res, next)=>{
   if(!req.isAuthenticated()){
      req.session.redirectUrl = req.originalUrl;
      req.flash("error", "You must be logged in to create listing");
      return res.redirect("/login");
   }
   next();
}

module.exports.saveRedirectUrl = (req, res, next) =>{
   if(req.session.redirectUrl){
      res.locals.redirectUrl = req.session.redirectUrl;
   }
   next();
};

module.exports.validateListing = (req, res, next)=>{
   let {error} = listingSchema.validate(req.body);
   if(error){
     let errMsg = error.details.map((el)=> el.message).join(",");
     console.log(error);
     throw(new ExpressError(400, errMsg));
   }else{
     next();
   }
};

module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    console.log(error);
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

module.exports.isOwner = async (req, res, next)=>{
  let { id } = req.params;
  let listing = await Listing.findById(id);
   // ✅ Check if the current user is the owner
   if (!listing.owner.equals(res.locals.currUser._id)) {
     req.flash("error", "You are not the owner to this listing");
     return res.redirect(`/listings/${id}`);
   }
   next();
}

module.exports.isReviewAuthor = async (req, res, next)=>{
  let {id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
   // ✅ Check if the current user is the owner
   if (!review.author.equals(res.locals.currUser._id)) {
     req.flash("error", "You are not the author to this review");
     return res.redirect(`/listings/${id}`);
   }
   next();
}