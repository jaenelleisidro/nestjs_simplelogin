export default class Constant {
  public static JWT = {
    secret: process.env.SIMPLELOGIN_JWT_SECRET || 'secretKey',
    expiresIn: process.env.SIMPLELOGIN_JWT_EXPIRESIN || '24h',
  };
  public static BCRYPT = {
    salt:
      process.env.SIMPLELOGIN_BCRYPT_SALT || '$2b$10$UqELXfQTOAdhqAO33dWJBO',
  };
  public static MONGODB = {
    URI:
      process.env.SIMPLELOGIN_MONGODB_URI ||
      'mongodb://localhost:27017/simplelogin',
  };
}
