import express from 'express'; 
import mongoose from 'mongoose';

const router = express.Router();

// กำหนด Schema ของ Data_set
const Data_setSchema = new mongoose.Schema({
  Type: String,
  input_ID: Number,
  Data: String,
  time_Start: String,
  time_Stop: String,
  time_End: String,
  // เพิ่มฟิลด์อื่น ๆ ตามที่จำเป็น
});

// สร้างโมเดล Data_set โดยเชื่อมโยงกับ collection 'Data_set'
const Data_set = mongoose.model('Data_set', Data_setSchema, 'Data_set');

// Route ที่ดึงข้อมูลจาก MongoDB และกรองข้อมูลที่มี Type เป็น 'Input'   Data_Alarm
router.get('/Data_Alarm', async (req, res) => {
  try {
    const alarms = await Data_set.find({ Type: 'Alarm' }); // กรองเฉพาะเอกสารที่มี Type เป็น 'Input'
    res.json(alarms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Route ที่ดึงข้อมูลจาก MongoDB และกรองข้อมูลที่มี Type เป็น 'Input'
router.get('/Data_Input', async (req, res) => {
  try {
    const alarms = await Data_set.find({ Type: 'Input' }); // กรองเฉพาะเอกสารที่มี Type เป็น 'Input'
    res.json(alarms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});








// router.post('/Data_Alarm', async (req, res) => {
//   try {
//     const { data } = req.body;
//     console.log(data);
//     const newAlarm = new Data_set(data); // สร้างเอกสารใหม่จากข้อมูลที่ได้รับใน req.body
//     const savedAlarm = await newAlarm.save(); // บันทึกลงใน MongoDB

//     res.status(201).json(savedAlarm); // ส่งข้อมูลที่บันทึกกลับไปยังไคลเอนต์
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

export default router;
