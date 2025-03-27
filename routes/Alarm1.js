import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// กำหนด Schema ของ Realtime_All
const Realtime_AllSchema = new mongoose.Schema({
  input_1: Number,
  input_2: Number,
  input_3: Number,
  input_4: Number,
  input_5: Number,
  input_6: Number,
  input_7: Number,
  input_8: Number,
  input_9: Number,
  input_10: Number,
  input_11: Number,
  input_12: Number,
  input_13: Number,
  input_14: Number,
  input_15: Number,
  input_16: Number,
  Machine: String,
  Robot3Axis: String,
  Robot6Axis: String,
  MC_id: String,
  // สามารถเพิ่มฟิลด์อื่น ๆ ตามที่จำเป็น
});

// สร้างโมเดล Realtime_All โดยเชื่อมโยงกับ collection 'Realtime_All'
const Realtime_All = mongoose.model('Realtime_All', Realtime_AllSchema, 'Realtime_All');

// Route ที่ดึงข้อมูลจาก MongoDB
router.get('/Alarm1', async (req, res) => {
  try {
    const alarms = await Realtime_All.find(); // ดึงข้อมูลทั้งหมดจาก collection
    res.json(alarms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get('/Alarm1/22', async (req, res) => {
  try {
    const alarms = await Realtime_All.find({ MC_id: "22" }); // ดึงข้อมูลทั้งหมดจาก collection MC_id 22
    res.json(alarms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get('/Alarm1/30', async (req, res) => {
  try {
    const alarms = await Realtime_All.find({ MC_id: "30" }); // ดึงข้อมูลทั้งหมดจาก collection MC_id 22
    res.json(alarms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// แทนที่ module.exports ด้วย export default
export default router;
