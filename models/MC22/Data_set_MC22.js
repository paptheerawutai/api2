import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// กำหนด Schema ของ Data_set_MC22
const Data_set_MC22Schema = new mongoose.Schema({
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

// สร้างโมเดล Data_set_MC22 โดยเชื่อมโยงกับ collection 'Data_set_MC22'
const Data_set_MC22 = mongoose.model('Data_set_MC22', Data_set_MC22Schema, 'Data_set_MC22');

// Route ที่ดึงข้อมูลจาก MongoDB
router.get('/Data_set_MC22', async (req, res) => {
  try {
    const alarms = await Data_set_MC22.find(); // ดึงข้อมูลทั้งหมดจาก collection
    res.json(alarms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/input_realtime', async (req, res) => {
  try {
    const { data } = req.body;
    console.log(data);
    const newAlarm = new Data_set_MC22(data); // สร้างเอกสารใหม่จากข้อมูลที่ได้รับใน req.body
    const savedAlarm = await newAlarm.save(); // บันทึกลงใน MongoDB

    res.status(201).json(savedAlarm); // ส่งข้อมูลที่บันทึกกลับไปยังไคลเอนต์
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// แทนที่ module.exports ด้วย export default
export default router;