import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SneakerDocument = Sneaker & Document;

@Schema()
export class Sneaker {
  @Prop()
  brand: string;

  @Prop()
  model: string;

  @Prop()
  image: string;

  @Prop()
  brandLogo: string;

  @Prop()
  release_date: Date;

  @Prop()
  price: number;

  @Prop([Number])
  size: string[];

  @Prop()
  gender_category: string;
}

export const SneakerSchema = SchemaFactory.createForClass(Sneaker)