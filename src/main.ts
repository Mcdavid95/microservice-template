import { BadRequestException, INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './app.errors';
import { AppModule } from './app.module';
import { EnvironmentService } from './configs';

class Server {
  public static async start(): Promise<void> {
    const app = await NestFactory.create(AppModule);

    Server.mountMiddlewares(app);
    Server.swaggerSetup(app);

    await app.listen(EnvironmentService.getValue('PORT'));
  }

  private static swaggerSetup(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle('Account Service APIs (Zigah)')
      .setDescription('The Zigah Account Service API Documentation')
      .setVersion('1.0')
      .addTag('account-service', 'Zigah Account Service APIs')
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('docs', app, document);
  }

  private static mountMiddlewares(app: INestApplication): void {
    app.useGlobalFilters(new AllExceptionsFilter());
    app.useGlobalPipes(new ValidationPipe());
  }
}

Server
  .start()
  .then();
