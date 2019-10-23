# Catalog API
API to catalog discs

## Disc Resource

```json
{
    "id": 0,
    "name": "Disc Name",
    "artist": "Artist Name",
    "year": 2011,
    "tracks": 12,
    "gender": "Gender"
}
```

## RESTful Endpoints

|  HTTP  | Endpoint      | Description   |
| ------ | ------------- | ------------- |
| GET    | /discs        | List All Discs (Paginate)
| GET    | /discs/:id    | Fetch Disc
| POST   | /discs        | Create new Disc
| PUT    | /discs/:id    | Update Disc By Id
| DELETE | /discs/:id    | Delete Disc By Id
| GET    | /health       | Health Check
| GET    | /             | Info

## Examples

### List Discs

>Request
```bash
curl -X GET \
  'http://[host]:9000/v1/discs?page=1&size=2&name=Bla' \
  -H 'Accept: application/json' 
```

> Response - 200 (OK)

```json
{
    "prev": "",
    "next": "",
    "total": 6,
    "data": [
        {
            "id": 3,
            "name": "Resolution",
            "artist": "Metalica"
        },
        {
            "id": 4,
            "name": "One",
            "artist": "Metalica"
        }
    ]
}
```

### Fetch Disc

>Request
```bash
curl -X GET \
  http://[host]:9000/v1/discs/3 \
  -H 'Accept: application/json'
```

> Response - 200 (OK)

```json
{
    "id": 3,
    "name": "Black",
    "artist": "Metalica",
    "year": 2011,
    "tracks": 12,
    "gender": "Rock"
}
```

### Create Disc

>Request
```bash
curl -X POST \
  http://[host]:9000/v1/discs \
  -H 'Content-Type: application/json' \
  -d '{
	"name": "Live In Paris",
	"artist": "Diana Krall",
	"year": 2012,
	"tracks": 12,
	"gender": "Jazz"
    }'
```

> Response - 201 (Created)

### Update Disc

>Request
```bash
curl -X PUT \
  http://[host]:9000/v1/discs/9 \
  -H 'Content-Type: application/json' \
  -d '{
    "id": 9,
    "name": "Live In Paris",
    "artist": "Diana Krall",
    "year": 2011,
    "tracks": 12,
    "gender": "Jazz"
    }'
```

> Response - 200 (OK)

```json
{
    "id": 9,
    "name": "Live In Paris",
    "artist": "Diana Krall",
    "year": 2011,
    "tracks": 12,
    "gender": "Jazz"
}
```

### Delete Disc

>Request
```bash
curl -X DELETE \
  http://[host]:9000/v1/discs/9 \
  -H 'Accept: application/json' \
```

> Response - 204 (No Content)

## Environment

Fulfill the database informations on .env file in root

```properties
CONNECTION_LIMIT=10 # Max of connections
DB_HOST=localhost   # Host of MySQL
DB_USER=root        # username 
DB_PASSWORD=''      # password
DATABASE=catalog    # Database name
```

## Running

**Important! Before you run start the MySQL instance**

### Run with node

```bash
$ npm start
```

### Run with docker

```bash
$ docker build -t filipe/catalog-api:v1 .
```

```bash
$ docker run -p 9000:9000 filipe/catalog-api:v1
```