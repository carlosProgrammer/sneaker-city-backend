import { Module } from '@nestjs/common';
import { SneakersService } from './sneakers.service';
import { SneakersController } from './sneakers.controller';
import { Sneaker, SneakerSchema } from './schemas/sneaker.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
  MongooseModule.forFeature([{ name: Sneaker.name, schema: SneakerSchema }])],
  controllers: [SneakersController],
  providers: [SneakersService]
})
export class SneakersModule {}
