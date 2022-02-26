import { AppService } from './app.service';
import { Controller, Get } from '@nestjs/common';
import HelperUtils from './others/utils/helper.utils';

@Controller()
export class AppController {
  id:number;
  constructor(private readonly appService: AppService,private readonly helperUtils:HelperUtils) {
    this.id=helperUtils.randomInt(1,10000);
  }

  @Get()
  getWelcome(): string {
    return this.appService.getWelcome()+":"+this.id;
  }
}
