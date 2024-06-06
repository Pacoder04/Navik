module.exports = {
  port: process.env.PORT || 3000,
  db: {
    user: 'postgres', // update the user if necessary
    host: 'localhost',
    database: 'navik', // update the database name
    password: 'minja', // update the password if necessary
    port: 5432,
  }, 
  dburi : 'navik://navik:navik@localhost:5432/navik', // update the URI
  serverSecretKey : 'AAAA'
};