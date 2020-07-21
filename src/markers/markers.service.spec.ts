import { Test, TestingModule } from '@nestjs/testing';
import { MarkersService } from './markers.service';

describe('Markers', () => {
  let provider: MarkersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarkersService],
    }).compile();

    provider = module.get<MarkersService>(MarkersService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
