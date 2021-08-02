import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SneakersModule } from './sneakers/sneakers.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/sneakercity_dev'), SneakersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
