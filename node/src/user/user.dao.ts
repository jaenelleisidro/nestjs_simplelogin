import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserDao {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  /**
   * a simple way to create user
   * @param {CreateUserDto} createUserDto the user that will be created
   * @return {User} The data of the db
   **/

  async create(createUserDto: CreateUserDto): Promise<User> {
    if (await this.findOneByUsername(createUserDto.username)) {
      throw new ConflictException('User already exist');
    }
    let user = await this.model.create(createUserDto);
    return user;
  }

  /**
   * a simple way to list users
   * @return {User[]} an array of users
   **/
  async findAll(params?: {
    limit: number;
    sortFieldName: string;
    sortDirection: string;
  }): Promise<User[]> {
    let {
      limit = 10,
      sortFieldName = 'createdAt',
      sortDirection = 'desc',
    } = params || {};

    return (
      this.model
        .find()
        .limit(limit)
        .sort({ [sortFieldName]: sortDirection == 'desc' ? -1 : 1 })
        .exec()
    );
  }

  /**
   * find a user using it's id
   * @param {string} id user's identifier
   * @return {User} The data of the db
   **/
  async findOneById(id: string): Promise<User> {
    return this.model.findOne({ _id: id }).exec();
  }

  /**
   * delete a user using it's id
   * @param {string} id user's identifier
   **/
  async delete(id: string) {
    return await this.model.findByIdAndRemove({ _id: id }).exec();
  }

  /**
   * finds the user that has the username and password
   * @param {string} username user's username
   * @param {string} password user's password
   * @return {User} the user that matched the criteria
   **/

  async findOneByUsernameAndPassword(
    username: string,
    password: string,
  ): Promise<User | undefined> {
    return await this.model.findOne({ username, password }).exec();
  }

  /**
   * finds the user that has the username
   * @param {string} username user's username
   * @return {User} the user that matched the criteria
   **/
  async findOneByUsername(username: string): Promise<User | undefined> {
    return await this.model.findOne({ username }).exec();
  }
}
