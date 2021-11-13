import { Test, TestingModule } from '@nestjs/testing';
import { ExpenceResolver } from './expence.resolver';
import { ExpenceService } from './expence.service';

describe('ExpenceResolver', () => {
  let resolver: ExpenceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpenceResolver, ExpenceService],
    }).compile();

    resolver = module.get<ExpenceResolver>(ExpenceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
