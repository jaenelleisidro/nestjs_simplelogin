import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getModelToken } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Document, Model } from 'mongoose';
import { UserDao } from './user.dao';

const mockUser = {
  username: 'jay',
  password: 'secret',
};

describe('UserDao', () => {
  let userDao: UserDao;
  let model: Model<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserDao,
        {
          provide: getModelToken('User'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockUser),
            constructor: jest.fn().mockResolvedValue(mockUser),
            find: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),
            findOne: jest.fn(),
            limit:jest.fn()
          },
        },
      ],
    }).compile();

    userDao = module.get<UserDao>(UserDao);
    model = module.get<Model<User>>(getModelToken('User'));
  });

  it('should be defined', () => {
    expect(userDao).toBeDefined();
  });

  const mockedUsers = [mockUser, { username: 'jay2', password: 'secret' }];

  it('should return all users', async () => {
    jest.spyOn(model, 'find').mockReturnValueOnce({
      limit:jest.fn().mockReturnValueOnce({
        sort:jest.fn().mockReturnValueOnce({
          exec:jest.fn().mockResolvedValueOnce(mockedUsers)
        })
      })
    } as any);
    const users = await userDao.findAll();
    expect(users).toEqual(mockedUsers);
  });

  it('should insert a new user', async () => {
    jest
      .spyOn(model, 'create')
      .mockImplementationOnce(() =>
        Promise.resolve({ username: 'jay', password: 'secret' }),
      );

    jest
      .spyOn(model, 'findOne')
      .mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(null),
      } as any);
    const user = await userDao.create({ username: 'jay', password: 'secret' });
    expect(user).toEqual(mockUser);
  });
});
