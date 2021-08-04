import { Injectable } from '@nestjs/common';
import { CreateSneakerDto } from './dto/create-sneaker.dto';
import { UpdateSneakerDto } from './dto/update-sneaker.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Sneaker, SneakerDocument } from './schemas/sneaker.schema';

@Injectable()
export class SneakersService {
  constructor(@InjectModel(Sneaker.name) private sneakerModel: Model<SneakerDocument>) {}

  async create(createSneakerDto: CreateSneakerDto): Promise<Sneaker> {
    const createdSneaker = new this.sneakerModel(createSneakerDto);
    return createdSneaker.save();
  }

  async findAll(): Promise<Sneaker[]> {
    return this.sneakerModel.find({}).sort({release_date: 'desc'}).exec();
  }
  
  async findByCategory(gender_category: string): Promise<Sneaker[]> {
    return this.sneakerModel.find({ gender_category });
  }

  async findOne(_id: number): Promise<Sneaker> {
    return await this.sneakerModel.findById({ _id });
  }

  update(id: number, updateSneakerDto: UpdateSneakerDto) {
    return `This action updates a #${id} sneaker`;
  }

  remove(id: number) {
    return `This action removes a #${id} sneaker`;
  }
}
