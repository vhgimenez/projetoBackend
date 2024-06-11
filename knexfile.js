const path = require("path");

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/database.db'
    },
      migrations: {
        directory: path.resolve(__dirname, "src", "database", "migrations")
      },
    useNullAsDefault: true
    },
};