import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDao } from './user.dao';
import { User } from './schema/user.schema';
import HelperUtils from 'src/others/utils/helper.utils';
import EncryptionUtils from 'src/others/utils/encryption.utils';
/**
 * Represents the business logic for users.
 * @constructor
 * @param {UserDao} userDao - contains the data access for users
 */
@Injectable()
export class UserService {
  constructor(
    private readonly userDao: UserDao,
    private readonly encryptionUtils: EncryptionUtils
    
    ) {}

  /**
   * validates a username and password, if there's a match returns the user
   * @param {string} username user's username
   * @param {string} password user's password
   * @return {User} the user that matched the criteria
   **/
  async validate(
    username: string,
    password: string,
  ): Promise<User | undefined> {
    password = await this.encryptionUtils.oneWayEncrypt(password);

    return this.userDao.findOneByUsernameAndPassword(username, password);
  }

  /**
   * a simple way to create user
   * @param {CreateUserDto} createUserDto the user that will be created
   * @return {User} The data of the db
   **/
  async create(createUserDto: CreateUserDto): Promise<User> {
    let {username="",password=""}=createUserDto;
    if(HelperUtils.isUserNameValid(username)==false){
      throw new Error("Invalid Username:"+username);
    }
    if(HelperUtils.isPasswordValid(password)==false){
      throw new Error("Invalid Password:"+password);
    }
    createUserDto.password = await this.encryptionUtils.oneWayEncrypt(createUserDto.password);

    return await this.userDao.create(createUserDto);
  }

  /**
   * a simple way to list users
   * @return {User[]} an array of users
   **/
  async findAll(): Promise<User[]> {
    return await this.userDao.findAll();
  }

  /**
   * find a user using it's id
   * @param {string} id user's identifier
   * @return {User} The data of the db
   **/

  async findOneById(id: string): Promise<User> {
    return await this.userDao.findOneById(id);
  }

  /**
   * delete a user using it's id
   * @param {string} id user's identifier
   **/
  async delete(id: string) {
    return await this.userDao.delete(id);
  }
}
