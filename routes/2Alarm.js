import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// กำหนด Schema ของ list_count_input ตามข้อมูลที่ปรากฏในภาพ
const listAlarmMCSchema = new mongoose.Schema({
  name: String,
  operational: Number,
  pending: Number,
  maintenance: Number,
  // สามารถเพิ่มฟิลด์อื่น ๆ ตามที่จำเป็น
});

// สร้างโมเดล list_count_input โดยเชื่อมโยงกับ collection 'list_count_input'
const list_count_input = mongoose.model('list_count_input', listAlarmMCSchema, 'list_count_input');

// Route ที่ดึงข้อมูลจาก MongoDB
router.get('/Alarm', async (req, res) => {
  try {
    const alarms = await list_count_input.find(); // ดึงข้อมูลทั้งหมดจาก collection
    res.json(alarms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//ข้อมูลใช้รวมได้ create card

// แทนที่ module.exports ด้วย export default
export default router;
