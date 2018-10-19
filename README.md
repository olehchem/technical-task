# Technical Task

## Get it up and running

You can get the project up and running using Docker or without Docker.

### With Docker

**Important:** You cannot run end-to-end tests with docker because of some issues with [Pupperteer](https://github.com/GoogleChrome/puppeteer) and Docker.

See instuctions how to run end-to-end tests in the next section!

The project runs a Node server (**server** service) and a react app (**ui** service) via two separate containers, using Docker Compose.

There are 1 more service for running UI unit tests:

- **ui-unit-tests** - runs unit tests for UI

If you want build and run all the services run:
`docker-compose up`

To stop:
`docker-compose down`

You can run each service separately.
* ```docker-compose up server```
* ```docker-compose up ui```
* ```docker-compose up ui-unit-tests```

#### Notes

- The client is spun up at http://localhost:3000.
- The api server is spun up at http://localhost:4000

### Without docker

**Important:** Node.js > 8.x.x is required.

- Run backend:

`cd backend`

`npm install`

`npm start`

- Run ui. **Note:** You need run backend first

   `cd frontend`

   `npm install` or `yarn`

   `npm start` or `yarn start`

- Run ui tests

   `npm test` or `yarn test` in the frontend folder

- Run end-to-end tests. **Important:**  You need run backend and ui first. And then:

   `npm run test:e2e` or `yarn test:e2e` in the frontend folder
