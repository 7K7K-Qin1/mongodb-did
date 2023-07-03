import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Did extends Document {
  @Prop({ required: true })
  domain: string;

  @Prop({ required: true })
  owner: string;

  @Prop({ required: true })
  tradeHash: string;

  @Prop({ required: true })
  tradeTime: Date;

  @Prop({ required: true })
  expirationDate: Date;
}

export const DidSchema = SchemaFactory.createForClass(Did);
