import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DidModule } from './did/did.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DidModule,
  ],
})
export class AppModule {}
