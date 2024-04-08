import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/core/dto/user.dto';
import { UserEntity } from 'src/core/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async findAll() {
    return await this.userRepo.find();
  }

  async createUser(userNew: UserDto) {
    const user = this.userRepo.create(userNew);
    return await this.userRepo.save(user);
  }
}
