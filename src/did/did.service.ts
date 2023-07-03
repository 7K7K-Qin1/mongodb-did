import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Did, DidSchema } from './did.model';
import { CreateDidDto } from './did.dto';

@Injectable()
export class DidService {
  constructor(@InjectModel(Did.name) private readonly didModel: Model<Did>) {}

  async create(createDidDto: CreateDidDto): Promise<Did> {
    const createdDid = new this.didModel(createDidDto);
    return createdDid.save();
  }

  async findAll(): Promise<Did[]> {
    return this.didModel.find().exec();
  }
}

