# Union

This is the core repository for Union.

_Note: Very early stage work in progress._

## Development

### Project setup

```
yarn install
```

Create a PostgreSQL database for Union and setup a `.env` file with the database connection properties. Example:

```
$ psql postgres
postgres=# CREATE DATABASE union_development;
```

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

## Project board

You can keep track of what is happening on this project by heading over to our [project board](https://github.com/orgs/meetunion/projects/1) here on github.

## Roadmap

To get an overview of our quarterly status head over to [our roadmap](https://www.notion.so/donesunday/0e521376ccd94e3db36ddce44e115abd?v=9f78a1eb5e3e45558d91620772d2ace1)
