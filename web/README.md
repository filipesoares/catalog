# Catalog Web App

A web client to catalog api

## Environment

Fulfill the url of service on .env file in root

```properties
REACT_APP_BASE_URL=http://localhost:9000/v1
```

## Running

### Run with node

```bash
$ npm start
```

### Run with docker

```bash
$ docker build -t filipe/catalog-web:v1 .
```

```bash
$ docker run -p 3000:3000 filipe/catalog-web:v1
```