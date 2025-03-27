import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { readdirSync } from 'fs';
import path from 'path';
import http from 'http';
import 'dotenv/config';  // เพิ่มการใช้ dotenv

const app = express();

// ตั้งค่า MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Thirawut:2606020@cluster0.9urhi.mongodb.net/MAI?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('DB connected_System_mai'))
  .catch(err => {
    console.log('DB Connection Error:', err);
    process.exit(1); // ออกจากโปรเซสถ้าเชื่อมต่อ MongoDB ไม่สำเร็จ
  });

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Dynamic import for routes
const __dirname = path.dirname(new URL(import.meta.url).pathname);

readdirSync('./routes').map(async (r) => {
  const route = await import(`./routes/${r}`);
  app.use('/api', route.default);
});
readdirSync('./MC22').map(async (r) => {
  const route = await import(`./MC22/${r}`);
  app.use('/MC22', route.default);
});

// สร้าง HTTP Server
const server = http.createServer(app);

// Listen
const port = process.env.PORT || 5005;
server.listen(port, () => console.log(`Server is running on port ${port}`));


// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import { readdirSync } from 'fs';
// import path from 'path';
// import http from 'http';
// import 'dotenv/config';

// const app = express();

// // เชื่อมต่อ MongoDB ฐานข้อมูลที่ 1 (System_mai)
// mongoose.createConnection(process.env.MONGODB_URI_1 || 'mongodb+srv://Thirawut:2606020@cluster0.9urhi.mongodb.net/MAI?retryWrites=true&w=majority&appName=Cluster0')
//   .on('connected', () => console.log('✅ DB connected: System_mai'))
//   .on('error', err => {
//     console.error('❌ DB Connection Error (System_mai):', err);
//     process.exit(1);
//   });

// // เชื่อมต่อ MongoDB ฐานข้อมูลที่ 2 (Log_mai)
// mongoose.createConnection(process.env.MONGODB_URI_2 || 'mongodb+srv://Thirawut:2606020@cluster0.9urhi.mongodb.net/ContronMC22?retryWrites=true&w=majority&appName=Cluster0')
//   .on('connected', () => console.log('✅ DB connected: Log_mai'))
//   .on('error', err => {
//     console.error('❌ DB Connection Error (Log_mai):', err);
//     process.exit(1);
//   });

// // Middleware
// app.use(express.json());
// app.use(cors());
// app.use(express.urlencoded({ extended: false }));

// // Dynamic import for routes
// const __dirname = path.dirname(new URL(import.meta.url).pathname);
// readdirSync('./routes').map(async (r) => {
//   const route = await import(`./routes/${r}`);
//   app.use('/api', route.default);
// });

// // สร้าง HTTP Server
// const server = http.createServer(app);

// // Listen
// const port = process.env.PORT || 5050;
// server.listen(port, () => console.log(`🚀 Server is running on port ${port}`));

