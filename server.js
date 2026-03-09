const express = require("express");
const dotenv = require("dotenv");
const connect = require("./config/db");
const categRoutes = require("./routers/categ.router");
const supcateRoutes = require("./routers/supcateg.router")
const errorMiddleware = require("./middleware/error_middleware"); // تم تعديل الاسم
const ApiError = require("./utils/ApiError");

dotenv.config({ path: ".env" });

const app = express();

app.use(express.json());

connect();

app.use("/api/category", categRoutes);
app.use("/api/supcateg",supcateRoutes);

// لأي راوت غير موجود
// لأي راوت غير موجود
app.all(/(.*)/, (req, res, next) => {
  next(new ApiError(`Can't find ${req.originalUrl} on this server`, 404));
});

// استخدام الميديلوير بتاع الأخطاء
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// التعامل مع أي Promise مرفوضة بدون معالجة
process.on("unhandledRejection", (err) => {
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});




