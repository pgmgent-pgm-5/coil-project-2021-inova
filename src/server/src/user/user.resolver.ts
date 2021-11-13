import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateProfileInput } from 'src/profile/dto/create-profile.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly usersService: UserService) {}

  // @UseGuards(JwtAuthGuard)
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

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => String)
  removeUser(@Args('id') id: string) {
    this.usersService.remove(id);
    return id;
  }
}
