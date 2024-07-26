// import connectDB from "@/utils/db.js";


export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}


// const express = require('express');
// const app = express();
// const PORT = 3000;

// Database connection
// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/mydatabase', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//   } catch (err) {
//     console.error(`Error connecting to MongoDB: ${err}`);
//   }
// };

// app.use(express.json());

// // Add your routes here
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // ...

// const server = app.listen(PORT, async () => {
//   try {
//     await connectDB();
//     console.log(`Server running at port ${PORT}`);
//   } catch (err) {
//     console.error(`Error connecting to database: ${err}`);
//   }
// });