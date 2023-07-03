import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateDidDto {
  @IsString()
  @IsNotEmpty()
  domain: string;

  @IsString()
  @IsNotEmpty()
  owner: string;

  @IsString()
  @IsNotEmpty()
  tradeHash: string;

  @IsDateString()
  tradeTime: Date;

  @IsDateString()
  expirationDate: Date;
}
