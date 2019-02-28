# prisma-example

- Prisma exercise project

## Prisma Setup

### Install

```bash
# Need to have Docker installed
yarn global add prisma
```

### Setup and connect Prisma with a Database

```bash
mkdir prisma-example
cd prisma-example
touch docker-compose.yml
```

```yml
# docker-compose.yml
version: "3"
services:
  prisma:
    image: prismagraphql/prisma:1.27
    restart: always
    ports:
      - "4466:4466"
    environment:
      PRISMA_CONFIG: |
        port: 4466
        databases:
          default:
            connector: postgres
            host: postgres
            port: 5432
            user: prisma
            password: prisma
            migrations: true
  postgres:
    image: postgres:11
    restart: always
    environment:
      POSTGRES_USER: prisma
      POSTGRES_PASSWORD: prisma
    volumes:
      - postgres:/var/lib/postgresql/data
volumes: postgres:
```

```bash
docker-compose up -d
prisma init --endpoint http://localhost:4466
```

### Deploy the Prisma datamodel

```bash
prisma deploy
```

### Generate Prisma client

- Append the following lines to the end of prisma.yml

```yml
(...)
generate:
  - generator: javascript-client
    output: ./generated/prisma-client/
```

```bash
prisma generate
```

### Install Prisma client library

```bash
yarn add prisma-client-lib
```

## Prisma Deploy on demo server

```bash
prisma deploy -n

# After then choose `Demo server` to set up a new Prismas server
# It need to Authenticate in https://app.prisma.io through login
```
