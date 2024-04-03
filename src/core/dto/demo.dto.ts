import { IsString, NotContains } from 'class-validator';

export class DemoDto {
  @IsString({ message: 'truyen sring di ban' })
  @NotContains('123')
  content: string;
}
