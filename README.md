# express-api

## END POINTS

### Request ( Create a music.)

`POST api/addmusic/`

    body: {
        "name": "string",
        "writer": "string",
        "singer": "string",
        "genre": "string"
    }

### Response
    200 Ok

### Request ( Update a music.)

`PATCH api/updatemusic/{id}`
    
    parameter : id

    body: {
        "name": "updated string",
        "writer": "updated string",
        "singer": "updated string",
        "genre": "updated string"
    }

### Response
    200 Ok
    404 id not found


### Request ( Delete a music.)

`DELETE api/deletemusic/{id}`
    
    parameter : id

### Response
    200 Ok
    404 id not found


### Request ( Get a music based on id.)

`GET api/getmusic/{id}`
    
    parameter : id

### Response
    200 Ok
    404 id not found

### Request ( Get all music.)

`GET api/allmusic/`

### Response
    200 Ok


### Installation
1. `docker-compose build`
2. `docker-compose up -d`