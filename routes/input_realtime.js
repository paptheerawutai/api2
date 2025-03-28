import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// กำหนด Schema ของ status_realtime
const status_realtimeSchema = new mongoose.Schema({
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

// สร้างโมเดล status_realtime โดยเชื่อมโยงกับ collection 'status_realtime'
const status_realtime = mongoose.model('status_realtime', status_realtimeSchema, 'status_realtime');

// Route ที่ดึงข้อมูลจาก MongoDB
router.get('/input_realtime/22', async (req, res) => {
  try {
    const alarms = await status_realtime.find({ MC_id: "22" }); // ดึงข้อมูลทั้งหมดจาก collection
    res.json(alarms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get('/input_realtime/30', async (req, res) => {
  try {
    const alarms = await status_realtime.find({ MC_id: "30" }); // ดึงข้อมูลทั้งหมดจาก collection
    res.json(alarms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// แทนที่ module.exports ด้วย export default
export default router;