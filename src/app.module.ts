import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarkersModule } from './markers/markers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { dbConfig } from './config/db';

@Module({
  imports: [
    MarkersModule,
    MongooseModule.forRoot(`mongodb://${dbConfig.host}/${dbConfig.name}`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
