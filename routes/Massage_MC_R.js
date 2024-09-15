import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// กำหนด Schema ของ Massage_MC_R ตามข้อมูลที่ปรากฏในภาพ
const Massage_MC_RSchema = new mongoose.Schema({
  name: String,
  operational: Number,
  pending: Number,
  maintenance: Number,
  // สามารถเพิ่มฟิลด์อื่น ๆ ตามที่จำเป็น
});

// สร้างโมเดล Massage_MC_R โดยเชื่อมโยงกับ collection 'Massage_MC_R'
const Massage_MC_R = mongoose.model('Massage_MC_R', Massage_MC_RSchema, 'Massage_MC_R');

// Route ที่ดึงข้อมูลจาก MongoDB
router.get('/msg', async (req, res) => {
  try {
    const alarms = await Massage_MC_R.find(); // ดึงข้อมูลทั้งหมดจาก collection
    res.json(alarms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route ที่บันทึกข้อมูลลง MongoDB
router.post('/msg', async (req, res) => {
  try {
    const { data } = req.body;
    console.log(data);
    const newAlarm = new Massage_MC_R(data); // สร้างเอกสารใหม่จากข้อมูลที่ได้รับใน req.body
    const savedAlarm = await newAlarm.save(); // บันทึกลงใน MongoDB

    res.status(201).json(savedAlarm); // ส่งข้อมูลที่บันทึกกลับไปยังไคลเอนต์
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// แทนที่ module.exports ด้วย export default
export default router;