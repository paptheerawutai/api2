import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// กำหนด Schema ของ status_count_input ตามข้อมูลที่ปรากฏในภาพ
const listAlarmMCSchema = new mongoose.Schema({
  name: String,
  operational: Number,
  pending: Number,
  maintenance: Number,
  // สามารถเพิ่มฟิลด์อื่น ๆ ตามที่จำเป็น
});

// สร้างโมเดล status_count_input โดยเชื่อมโยงกับ collection 'status_count_input'
const status_count_input = mongoose.model('status_count_input', listAlarmMCSchema, 'status_count_input');

// Route ที่ดึงข้อมูลจาก MongoDB
router.get('/sta_c', async (req, res) => {
  try {
    const alarms = await status_count_input.find(); // ดึงข้อมูลทั้งหมดจาก collection
    res.json(alarms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// แทนที่ module.exports ด้วย export default
export default router;