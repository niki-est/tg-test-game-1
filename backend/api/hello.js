export default function handler(req, res) {
  // Это чистая Vercel Serverless Function
  return res.status(200).json({
    message: "Привет, это твоя serverless-функция на Vercel!",
  });
}
