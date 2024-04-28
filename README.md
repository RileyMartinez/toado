# todo
Todo list web app built with Postgres, NestJS, Angular, and Node.

## Prereqs
1. Docker

## Setup
1. Populate the following .env files (see .env.sample at each path):
   * /.env
   * /todo-ui/.env
   * /todo-api/.env
3. Recommend setting `DB_AUTOLOAD_ENTITIES` to true for local dev schema creation
4. From project root, run `docker compose up`
5. Login to pgadmin (i.e. http://localhost:5050)
6. Register a server name
7. Configure connection host, username, password, then save
