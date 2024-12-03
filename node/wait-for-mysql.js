const mysql = require('mysql2');

console.log('Starting wait-for-mysql script...');

const config = {
  host: 'mysql',
  user: 'user',
  password: 'password',
  database: 'fullcycle'
};

function waitForMysql(retries = 30, interval = 5000) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const tryConnect = () => {
      console.log(`Attempt ${attempts + 1} to connect to MySQL...`);
      const connection = mysql.createConnection(config);

      connection.connect((err) => {
        if (err) {
          console.log('MySQL connection failed:', err.message);
          connection.end();

          if (attempts >= retries) {
            console.log('Max retries reached. Exiting...');
            return reject(new Error('Max retries reached'));
          }

          attempts++;
          console.log(`Retrying in ${interval / 1000} seconds...`);
          setTimeout(tryConnect, interval);
        } else {
          console.log('MySQL connection successful!');
          connection.end();
          resolve();
        }
      });
    };

    tryConnect();
  });
}

waitForMysql()
  .then(() => {
    console.log('MySQL is ready. Starting Node.js application...');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });