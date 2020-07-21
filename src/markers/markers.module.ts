import { Module } from '@nestjs/common';
import { MarkersController } from './markers.controller';
import { MarkersService } from './markers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Marker, MarkerSchema } from './schemas/marker.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Marker.name, schema: MarkerSchema }]),
  ],
  controllers: [MarkersController],
  providers: [MarkersService],
})
export class MarkersModule {}
