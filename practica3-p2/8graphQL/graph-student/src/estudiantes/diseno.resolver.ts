import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { DisenoService } from './diseno.service';
import { Diseno } from './entities/diseno.entity';
import { UpdateDisenoInput, CreateDisenoInput } from './dto/inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Diseno)
export class DisenoResolver {
  constructor(private readonly disenoService: DisenoService) {}

  @Mutation(() => Diseno)
  async createDiseno(@Args('createDisenoInput') createDisenoInput: CreateDisenoInput)
  :Promise<Diseno> {
    return this.disenoService.create(createDisenoInput);
  }

  @Query(() => [Diseno], { name: 'diseno' })
  async findAll():Promise<Diseno[]> {
    return this.disenoService.findAll();
  }

  @Query(() => Diseno, { name: 'diseno' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Diseno> {
    return this.disenoService.findOne(id);
  }

  @Mutation(() => Diseno)
  updateDiseno(@Args('updateDisenoInput') updateDisenoInput: UpdateDisenoInput): Promise<Diseno> {
    return this.disenoService.update(updateDisenoInput.id, updateDisenoInput);
  }

  @Mutation(() => Diseno)
  removeDiseno(@Args('id', { type: () => ID }) id: string): Promise<Diseno> {
    return this.disenoService.remove(id);
  }
}
