# 🧭 Wanderlust

A full-stack web application for listing, exploring, and reviewing travel destinations or rental properties, built using the MERN stack.
Live demo on : https://wanderlust-kztr.onrender.com/listings

## 🚀 Features

- 🏘️ Add, edit, and delete listings (properties/villas)
- 📸 Image upload using Cloudinary
- 💬 Add and manage reviews
- 👤 User authentication with Passport.js
- 🌐 RESTful routing and EJS templating
- 🔒 Flash messages and error handling

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, Bootstrap, EJS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** Passport.js (local strategy)
- **Image Hosting:** Cloudinary
- **Other:** Method-Override, Express-Session, Connect-Flash

## 📂 Folder Structure

wanderlust/
├── models/ # Mongoose models (User, Listing, Review)
├── routes/ # Express route handlers
├── public/ # Static assets (CSS, JS, images)
├── views/ # EJS templates
├── utils/ # Utility classes (ExpressError, middleware)
├── app.js # Main Express app
├── .env # Environment variables
├── package.json
