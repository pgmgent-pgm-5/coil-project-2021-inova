import { Test, TestingModule } from '@nestjs/testing';
import { UserHasEventResolver } from './user-has-event.resolver';
import { UserHasEventService } from './user-has-event.service';

describe('UserHasEventResolver', () => {
  let resolver: UserHasEventResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHasEventResolver, UserHasEventService],
    }).compile();

    resolver = module.get<UserHasEventResolver>(UserHasEventResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
