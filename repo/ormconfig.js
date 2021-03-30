module.exports = {
   "type": "mysql",
   "host": process.env.MYSQL_HOST,
   "port": 3306,
   "username": process.env.MYSQL_USER,
   "password": process.env.MYSQL_PASSWORD,
   "database": process.env.MYSQL_DATABASE,
   "runMigrations": process.env.RUN_MIGRATIONS === "1",
   "dropSchema": process.env.DROP_SCHEMA === "1",
   "synchronize": true,
   "logging": false,

   "entities": [
      "dist/entities/**/*.js"
   ],
   "migrations": [
      "dist/migrations/**/*.js"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ]
}
