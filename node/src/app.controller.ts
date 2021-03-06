import { AppService } from './app.service';
import { Controller, Get } from '@nestjs/common';
import HelperUtils from './others/utils/helper.utils';
import Constant from './others/constant';
const process = require('process');
@Controller()
export class AppController {
  id:number;
  serverStart:Date;
  constructor(private readonly appService: AppService,private readonly helperUtils:HelperUtils) {
    this.id=helperUtils.randomInt(1,10000);
    this.serverStart=new Date();
  }

  @Get()
  getWelcome() {
    let message=this.appService.getWelcome();
    let instanceId=this.id;
    return {message,instanceId,pid:process.pid,constant:{BCRYPT:Constant.BCRYPT,JWT:Constant.JWT,MONGODB:Constant.MONGODB,SERVER:Constant.SERVER,NODE:Constant.NODE,serverStart:this.serverStart}};
  }
}
