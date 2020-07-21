import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { Marker } from './schemas/marker.schema';
import { MarkersService } from './markers.service';
import { CreateMarkerDTO } from './dto/create-marker.dto';

@Controller('markers')
export class MarkersController {
  constructor(private markerService: MarkersService) {}

  @Get()
  find(): Promise<Marker[]> {
    return this.markerService.find();
  }

  @Post()
  create(@Body() createMarkerDTO: CreateMarkerDTO): Promise<Marker> {
    return this.markerService.create(createMarkerDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Marker> {
    return this.markerService.delete(id);
  }
}
