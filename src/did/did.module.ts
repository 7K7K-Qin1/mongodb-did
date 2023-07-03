import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DidController } from './did.controller';
import { DidService } from './did.service';
import { Did, DidSchema } from './did.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Did.name, schema: DidSchema }]),
  ],
  controllers: [DidController],
  providers: [DidService],
})
export class DidModule {}
