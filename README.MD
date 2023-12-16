


## Welcome to Flights Service

## Project Setup

  --clone the project on your local
  --execute npm install on the same path as root directory to install all dependencies
  --Create a '.env' file and add the following environment variables:
       -'PORT'=3000
  --inside src/config create a new file config.json and add the following json code:

  ```
  {
  "development": {
    "username": "root",
    "password": "your DB password",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  }
  ```

  --once you hv setup the db-configuration details, go to src folder from ur terminal and execute `npx sequelize db:create`
