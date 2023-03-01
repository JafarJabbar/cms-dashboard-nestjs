import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(`api/${process.env.API_VERSION}`);

  const options = new DocumentBuilder()
      .setTitle('Dashboard')
      .setDescription('Dashboard Api service with NEST js')
      .setVersion('1.0')
      .setBasePath('api')
      .addBearerAuth()
      .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/show/docs', app, document);

  await app.listen(3000);
}
bootstrap();
