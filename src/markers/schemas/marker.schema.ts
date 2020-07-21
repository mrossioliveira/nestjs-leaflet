import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface Geometry {
  type: string;
  coordinates: number[];
}

@Schema()
export class Marker extends Document {
  @Prop()
  type: string;

  @Prop()
  geometry: Geometry;
}

export const MarkerSchema = SchemaFactory.createForClass(Marker);
