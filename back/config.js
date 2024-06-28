module.exports = {
  port: process.env.PORT || 3000,
  db: {
    user: 'postgres', 
    host: 'localhost',
    database: 'navik', 
    password: 'minja', 
    port: 5432,
  }, 
  dburi : 'navik://navik:navik@localhost:5432/navik', 
  serverSecretKey : 'AAAA'
};