import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// กำหนด Schema ของ MC_USER
const MC_USERSchema = new mongoose.Schema({
  // สามารถเพิ่มฟิลด์อื่น ๆ ตามที่จำเป็น
});

// สร้างโมเดล MC_USER โดยเชื่อมโยงกับ collection 'MC_USER'
const MC_USER = mongoose.model('MC_USER', MC_USERSchema, 'MC_USER');

// Route ที่ดึงข้อมูลจาก MongoDB
router.get('/user_mc', async (req, res) => {
  try {
    const alarms = await MC_USER.find(); // ดึงข้อมูลทั้งหมดจาก collection
    res.json(alarms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/user_mc', async (req, res) => {
  try {
    const { data } = req.body;
    console.log(data);
    const newAlarm = new MC_USER(data); // สร้างเอกสารใหม่จากข้อมูลที่ได้รับใน req.body
    const savedAlarm = await newAlarm.save(); // บันทึกลงใน MongoDB

    res.status(201).json(savedAlarm); // ส่งข้อมูลที่บันทึกกลับไปยังไคลเอนต์
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// แทนที่ module.exports ด้วย export default
export default router;