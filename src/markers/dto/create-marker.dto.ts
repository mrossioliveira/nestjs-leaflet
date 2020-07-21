import { Geometry } from '../schemas/marker.schema';

export interface CreateMarkerDTO {
  type: string;
  geometry: Geometry;
}
