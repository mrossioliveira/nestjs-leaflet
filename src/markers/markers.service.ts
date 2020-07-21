import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Marker } from './schemas/marker.schema';
import { Model } from 'mongoose';
import { CreateMarkerDTO } from './dto/create-marker.dto';

@Injectable()
export class MarkersService {
  constructor(@InjectModel(Marker.name) private markerModel: Model<Marker>) {}

  /**
   * Returns all markers in order of creation
   */
  async find(): Promise<Marker[]> {
    return this.markerModel.find();
  }

  /**
   * Creates a new marker
   * @param createMarkerDTO Payload
   */
  async create(createMarkerDTO: CreateMarkerDTO): Promise<Marker> {
    const createdMarker = new this.markerModel(createMarkerDTO);
    return await createdMarker.save();
  }

  /**
   * Deletes and returns the marker for the provided documentId
   * @param documentId The ID of the document for deletion
   */
  async delete(documentId: string): Promise<Marker> {
    return await this.markerModel.findOneAndDelete({ _id: documentId });
  }
}
