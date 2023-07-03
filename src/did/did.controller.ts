import { Controller, Post, Body, Get } from '@nestjs/common';
import { DidService } from './did.service';
import { CreateDidDto } from './did.dto';
import { Did } from './did.model';

@Controller('dids')
export class DidController {
  constructor(private readonly didService: DidService) {}

  @Post()
  async create(@Body() createDidDto: CreateDidDto): Promise<Did> {
    return this.didService.create(createDidDto);
  }

  @Get()
  async findAll(): Promise<Did[]> {
    return this.didService.findAll();
  }
}

