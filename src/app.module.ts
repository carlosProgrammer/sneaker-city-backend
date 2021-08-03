import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SneakersModule } from './sneakers/sneakers.module';

@Module({
  imports: [  SneakersModule,
              MongooseModule.forRoot('mongodb://localhost/sneakercity_dev')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
