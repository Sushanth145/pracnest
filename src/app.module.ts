import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity'; // ✅ Import User correctly

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',  // Update with your DB username
      password: '9441984210',  // Update with your DB password
      database: 'testnest',  // Update with your DB name
      entities: [User],  // ✅ Use capitalized "User", not "user"
      synchronize: true,  // ⚠️ Set to false in production
    }),
    UsersModule,
  ],
})
export class AppModule {}



