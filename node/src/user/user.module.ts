import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import EncryptionUtils from 'src/others/utils/encryption.utils';
import { User, UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserDao } from './user.dao';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, UserDao,EncryptionUtils],
  exports: [UserService],
})
export class UsersModule {}
