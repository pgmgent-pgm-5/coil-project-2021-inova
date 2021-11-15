import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async create(createProfileInput: CreateProfileInput): Promise<Profile> {
    const profile = this.profileRepository.create(createProfileInput);
    return this.profileRepository.save(profile);
  }

  save(profile: Profile) {
    this.profileRepository.save(profile);
  }

  findAll(): Promise<Profile[]> {
    return this.profileRepository.find();
  }

  findOne(userId: string) {
    const options: FindOneOptions<Profile> = { where: { userId: userId } };
    return this.profileRepository.findOne(options);
  }

  update(id: string, updateProfileInput: UpdateProfileInput) {
    const profile: Profile = this.profileRepository.create(updateProfileInput);
    profile.id = id;
    return this.profileRepository.save(profile);
  }

  remove(id: string) {
    return this.profileRepository.delete(id);
  }
}
