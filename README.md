# http-response-status

HTTP Status Map


[![Build Status](https://travis-ci.org/arnaud-zg/http-response-status.svg?branch=master)](https://travis-ci.org/arnaud-zg/http-response-status)
[![codecov](https://codecov.io/gh/arnaud-zg/http-response-status/branch/master/graph/badge.svg)](https://codecov.io/gh/arnaud-zg/http-response-status)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Using npm:

```
npm i http-response-status
```

Using yarn:

```
yarn add http-response-status
```

## Usage

Here are examples of how you can use `http-response-status`.

### Check if it's a 200 OK

```ts
import { NHttpStatuses } from 'http-response-status'

const isOk = (httpCode: number) => {
  if (httpCode === NHttpStatuses.OK) {
    return true
  }

  return false
}
```

### Get http status name

```ts
import { getHttpStatusName } from 'http-response-status'

const isOk = (httpCode: number) => {
  if (getHttpStatusName(httpCode) === 'OK') {
    return true
  }

  return false
}
```

### Get http status category

```ts
import { HTTP_STATUS_SUCCESS, getHttpStatusCategory } from 'http-response-status'

const isSuccess = (httpCode: number) => {
  if (getHttpStatusCategory(httpCode) === HTTP_STATUS_SUCCESS) {
    return true
  }

  return false
}
```

## Running the tests

Tests are written with jest

### Type check

```
yarn run lint
```

### Unit tests

```
yarn run test
```

## Deployment

Deployment is done with Travis.

## Built With

* [TSDX](https://github.com/palmerhq/tsdx) - TSDX

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/arnaud-zg/http-response-status/tags).

## Authors

* **Arnaud Zheng** - *Initial work* - [arnaud-zg](https://github.com/arnaud-zg)

See also the list of [contributors](https://github.com/arnaud-zg/http-response-status/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
