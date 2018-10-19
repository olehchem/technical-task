# Technical Task

## How to run

You can get the project up and running using Docker or without Docker.

**Important:** Node.js > 8.x.x is required.

### With docker

The project runs a Node server (**server** service) and a react app (**ui** service) via two separate containers, using Docker Compose.

There are 2 more services:

- **ui-unit-tests** - runs unit tests for UI
- **ui-e2e-tests** - runs end-to-end tests for UI using [Pupperteer](https://github.com/GoogleChrome/puppeteer)

If you want build and run all the services run:
`docker up`

To stop:
`docker down`

#### Notes

- The client server is spun up at http://localhost:3000.
- The api server is spun up at http://localhost:4000

### Without docker

- Run backend:

`cd backend`

`npm install`

`npm start`

- Run ui

`cd frontend`

`npm install` or `yarn`

`npm start` or `yarn start`

- Run ui tests

`npm test` or `yarn test`

- Run end-to-end tests

`npm run test:e2e` or `yarn test:e2e`
