import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateProfileInput } from 'src/profile/dto/create-profile.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUserFromToken';

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

  @UseGuards(JwtAuthGuard)
  @Query(() => User, { name: 'getUserById' })
  findOne(@GetUser() user) {
    const userId = user.id;
    return this.usersService.findOne(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => User)
  updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
    @GetUser() user,
  ) {
    return this.usersService.update(user.id, updateUserInput);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => String)
  removeUser(@Args('id') id: string) {
    this.usersService.remove(id);
    return id;
  }
}
