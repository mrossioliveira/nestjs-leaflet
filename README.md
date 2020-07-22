## Description

This is a [Nest](https://github.com/nestjs/nest) backend for [react-leaflet](https://github.com/mrossioliveira/react-leaflet) client and is intended for study and future reference.

It uses a MongoDB with mongoose to store GeoJSON points.

## Running with docker-compose

If you just want to spin up the backend you can use _docker-compose_:

```bash
$ docker-compose up --build -d
```

You can check how to setup Docker Compose [here](https://docs.docker.com/compose/install/) in case you haven't done it yet.

If you want to modify/improve/test the app follow the instructions bellow:

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
