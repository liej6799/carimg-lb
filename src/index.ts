import {CarimgLbApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {CarimgLbApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new CarimgLbApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
