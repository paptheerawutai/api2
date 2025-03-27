import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// กำหนด Schema ของ Cyctime
const CyctimeSchema = new mongoose.Schema({
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

// สร้างโมเดล Cyctime โดยเชื่อมโยงกับ collection 'Cyctime'
const Cyctime = mongoose.model('Cyctime', CyctimeSchema, 'Cyctime');

// Route ที่ดึงข้อมูลจาก MongoDB
router.get('/Cyctime', async (req, res) => {
  try {
    const alarms = await Cyctime.find(); // ดึงข้อมูลทั้งหมดจาก collection
    res.json(alarms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get('/Cyctime/30', async (req, res) => {
  try {
    const alarms = await Cyctime.find({ id_mc: "30" }); // แก้เป็น string
    res.json(alarms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/Cyctime/22', async (req, res) => {
  try {
    const alarms = await Cyctime.find({ id_mc: "22" }); // แก้เป็น string
    res.json(alarms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// แทนที่ module.exports ด้วย export default
export default router;