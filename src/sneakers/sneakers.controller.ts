import { Controller, Get, Post, Body, Patch, Param, Delete, Res, NotFoundException, HttpStatus } from '@nestjs/common';
import { SneakersService } from './sneakers.service';
import { CreateSneakerDto } from './dto/create-sneaker.dto';
import { UpdateSneakerDto } from './dto/update-sneaker.dto';
import { ValidateObjectId } from 'src/shared/pipes/validate-object-id.pipes';

@Controller('sneakers')
export class SneakersController {
  constructor(private readonly sneakersService: SneakersService) {}

  @Post()
  create(@Body() createSneakerDto: CreateSneakerDto) {
    return this.sneakersService.create(createSneakerDto);
  }

  @Get()
  findAll() {
    return this.sneakersService.findAll();
  }

  @Get(':sneakerID')
  async findById(@Param('sneakerID') _id: number) {
    return this.sneakersService.findOne(_id)
  }

  @Get('category/:gender_category')
  findBycategory(@Param('gender_category') gender_category: string) {
    return this.sneakersService.findByCategory(gender_category);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSneakerDto: UpdateSneakerDto) {
    return this.sneakersService.update(+id, updateSneakerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sneakersService.remove(+id);
  }
}
