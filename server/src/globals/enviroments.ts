export default () => ({
  port: parseInt(process.env.PORT_APP, 10) || 3000,
  database: {
    host: process.env.DATABASE_URL,
  },
  api: {
    opencage: process.env.OPENCAGE_API_KEY,
  },
});
