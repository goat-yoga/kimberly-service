# Project Name

> We build a product page clone of aloyoga.com as a student project!

## Related Projects

  - https://github.com/goat-yoga/wilson_proxy
  - https://github.com/goat-yoga/rizwan-service-actual
  - https://github.com/goat-yoga/russell-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

This repo is meant to be used with the associated repos to produce a product display component within a mock webpage.
- To get a new item, refresh the page
- To seed with mock data from the website use mock-seed script and change
    in client/src/components/App.jsx
    line  43 .get(`http://localhost:3005/products/${randomProduct}`) to  .get(`http://localhost:3005/products/100`)
- If you need to run this component seperately from other modules change
    in client/src/components/App.jsx
    line  43 .get(`http://localhost:3005/products/${randomProduct}`) to  .get(`products/${randomProduct}`)
## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

> To use this repo please use npm to install webpack and dependencies
- Run npm start to start server
- Run npm run react-dev to build bundle via webpack
- Seed items into mongodb using npm run seed