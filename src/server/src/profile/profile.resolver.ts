import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { Profile } from './entities/profile.entity';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => [Profile], { name: 'getAllProfiles' })
  findAll() {
    return this.profileService.findAll();
  }

  @Query(() => Profile, { name: 'getProfileByIdprofile' })
  findOne(@Args('id') id: string) {
    return this.profileService.findOne(id);
  }

  @Mutation(() => Profile)
  removeProfile(@Args('id') id: string) {
    return this.profileService.remove(id);
  }
}
