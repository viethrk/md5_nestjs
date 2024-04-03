import { IsString, NotContains } from 'class-validator';

export class MessageDto {
  @IsString({ message: 'truyen sring di ban' })
  content: string;
}
