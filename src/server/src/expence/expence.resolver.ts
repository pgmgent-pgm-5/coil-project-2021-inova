import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExpenceService } from './expence.service';
import { Expence } from './entities/expence.entity';
import { CreateExpenceInput } from './dto/create-expence.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUserFromToken';

@Resolver(() => Expence)
export class ExpenceResolver {
  constructor(private readonly expenceService: ExpenceService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Expence)
  createExpence(
    @Args('createExpenceInput') createExpenceInput: CreateExpenceInput,
    @GetUser() user,
  ) {
    return this.expenceService.create(createExpenceInput, user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Expence], { name: 'getAllExpences' })
  findAll(@Args('eventId') eventId: string) {
    return this.expenceService.findAll(eventId);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => Expence, { name: 'expence' })
  findOne(@Args('id') id: string) {
    return this.expenceService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Expence)
  removeExpence(@Args('id') id: string) {
    return this.expenceService.remove(id);
  }
}
