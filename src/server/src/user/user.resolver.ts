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

  @UseGuards(JwtAuthGuard)
  @Query(() => [User], { name: 'getAllUsers' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'getUserById' })
  findOne(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => String)
  removeUser(@Args('id') id: string) {
    this.usersService.remove(id);
    return id;
  }

  // @UseGuards(LocalAuthGuard)
  // @Mutation(() => User, { name: 'login' })
  // login(@Args('loginInput') loginInput: LoginInput) {
  //   return this.authService.login(loginInput);
  // }

  // @Mutation(() => UserToken)
  // login(@Args({ name: 'input', type: () => AuthLoginInput }) input: AuthLoginInput) {
  //   return this.service.login(input)
  // }

  // @Mutation(() => User, { name: 'createUser' })
  // createUser(
  //   @Args('createUserInput') createUserInput: CreateUserInput,
  //   @Args('createProfileInput') createProfileInput: CreateProfileInput,
  // ) {
  //   return this.usersService.create(createUserInput, createProfileInput);
  // }
}
