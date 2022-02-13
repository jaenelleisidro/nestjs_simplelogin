import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import Constant from '../constant';

@Injectable()
export default class EncryptionUtils {
  async oneWayEncrypt(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, Constant.BCRYPT.salt);
    return hash;
  }
}
