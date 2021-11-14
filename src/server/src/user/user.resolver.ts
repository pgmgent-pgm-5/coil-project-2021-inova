import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateProfileInput } from 'src/profile/dto/create-profile.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly usersService: UserService) {}

  @Mutation(() => User, { name: 'createUser' })
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
    @Args('createProfileInput') createProfileInput: CreateProfileInput,
  ) {
    return this.usersService.create(createUserInput, createProfileInput);
  }

  @Query(() => [User], { name: 'getAllUsers' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'getUserById' })
  findOne(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => String)
  removeUser(@Args('id') id: string) {
    this.usersService.remove(id);
    return id;
  }
}
