import { Expose } from 'class-transformer';

export class UserDto {
  id?: number;

  @Expose()
  name: string;

  @Expose()
  age: number;
}
