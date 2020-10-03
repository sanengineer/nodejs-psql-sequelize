module.exports = {
  HOST: "localhost",
  USER: "metalbee",
  PASSWORD: "",
  DB: "tutorial_psql_1", // name database
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
