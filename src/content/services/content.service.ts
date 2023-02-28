import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm";
import {ContentEntity} from "../models/content.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ContentService {
    constructor(
        @InjectRepository(ContentEntity)
        private readonly contentRepository:Repository<ContentEntity>
    ) {}
    createPost(){

    }
}
