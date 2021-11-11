import { Test, TestingModule } from '@nestjs/testing';
import { UserHasEventService } from './user-has-event.service';

describe('UserHasEventService', () => {
  let service: UserHasEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHasEventService],
    }).compile();

    service = module.get<UserHasEventService>(UserHasEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
