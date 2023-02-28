import { Module } from '@nestjs/common';
import { ContentService } from './services/content.service';
import { ContentController } from './controllers/content.controller';
import {Content} from "./models/content.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports:[
      TypeOrmModule.forFeature([Content])
  ],
  providers:[ContentService]
})
export class ContentModule {}
