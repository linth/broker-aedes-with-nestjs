import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import aedes, { Aedes, Client } from 'aedes';
import { createServer } from 'net';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 1883;

  // TODO: 升級aedes版本, 
  // const aedesInstance: Aedes = aedes();

  /** 
   * CommonJS舊版node.js
   * ES6 modules: `import xxx from xxx`
   */
  const aedesInstance = require('aedes')();

  const server = createServer(aedesInstance.handle);  

  await app.listen(3000);
  await server.listen(port, () => {
    console.log('server started and listening on port ', port)
  });
}
bootstrap();
