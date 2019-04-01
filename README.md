# Union

This is the core repository for Union.

*Note: Very early stage work in progress.*

## Development

### Project setup
```
yarn install
```

Create a PostgreSQL database for Union and setup a `.env` file with the database connection properties. Example:
```
DB_CLIENT='pg'
DB_HOST='127.0.0.1'
DB_USER='union'
DB_PASSWORD='XXXXX'
DB_NAME='union_development'
```

Run the migrations
```
yarn run migrate
```

### Run
```
yarn run dev
```