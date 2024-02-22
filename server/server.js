import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', (req, res) => {
    res.json({ message: "Welcome to DiversityCodes" });
});

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
});
