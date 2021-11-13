import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProfileInput } from 'src/profile/dto/create-profile.input';
import { ProfileService } from 'src/profile/profile.service';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserHasEventService } from 'src/user-has-event/user-has-event.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private profileService: ProfileService,
    private userHasEventService: UserHasEventService,
    private configService: ConfigService,
  ) {}

  async create(
    createUserInput: CreateUserInput,
    createProfileInput: CreateProfileInput,
  ): Promise<User> {
    const user = this.userRepository.create(createUserInput);
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(createUserInput.password, salt);
    user.profile = await this.profileService.create(createProfileInput);
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['profile'] });
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne({
      relations: ['userHasEvent'],
      where: { id: id },
    });
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOne({ where: { email: email } });
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const user: User = this.userRepository.create(updateUserInput);
    if (updateUserInput.profile) {
      user.profile = await this.profileService.create(updateUserInput.profile);
    }
    user.id = id;
    console.log(JSON.stringify(user));
    return this.userRepository.save(user);
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
