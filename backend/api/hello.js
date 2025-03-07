import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/hello", (req, res) => {
    res.json({ message: "Привет, это твой API на Vercel!" });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
