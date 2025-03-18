import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) // ✅ Ensure the entity is injected correctly
    private usersRepository: Repository<User>,
  ) {}

  getAllUsers() {
    return this.usersRepository.find();
  }

  async createUser(name: string) {
    const user = this.usersRepository.create({ name });
    return this.usersRepository.save(user);
  }
}
