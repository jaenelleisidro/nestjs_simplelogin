import { Injectable } from '@nestjs/common';
import { UserService as UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * validate if username and password has a matching user for it
   * @param {string} username user's username
   * @param {string} password user's password
   * @return {User} returns the user that matched the criteria
   **/
  async validate(username: string, password: string): Promise<any> {
    const user = await this.userService.validate(username, password);
    return user;
  }

  /**
   * create a user
   * @param {CreateUserDto} user the user that will be created
   * @return {access_token} returns the token for after successfull login
   **/
  async login(user: any) {
    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
    };
  }

  /**
   * create a user and hash it's password along the way
   * @param {CreateUserDto} user the user that will be created
   * @return {User} the user that matched the criteria
   **/

  async register(user: CreateUserDto) {
    return await this.userService.create(user);
  }
}
