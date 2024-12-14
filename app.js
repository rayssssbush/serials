import dotenv from 'dotenv';
import express, { request } from 'express';
import jwt from 'jsonwebtoken';
// Загрузка переменных окружения
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send('Hello world!');
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server running on port ${PORT}`);
    }
});
app.post('/auth/login',(req,res)=>{
   const token=jwt.sign(
      {
         email: req.body.email,
         fullname: 'QWERTY'
      },
      '123456'
   )
   console.log(req.body);
   res.json({
      success:true,
      token
   });
})