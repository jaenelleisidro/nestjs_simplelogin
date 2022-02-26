import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';

import { join } from 'path';
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import Constant from './others/constant';
import HelperUtils from './others/utils/helper.utils';
@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(Constant.MONGODB.URI),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService,HelperUtils],
})
export class AppModule {}
