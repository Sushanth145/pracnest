import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // ✅ Register the User entity
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // ✅ Ensure UsersService can be used elsewhere
})
export class UsersModule {}
