require("dotenv").config();

export const conf = {
  port: Number(process.env.PORT) || 3000,
  dbUrl: String(process.env.DB_URL),
};
