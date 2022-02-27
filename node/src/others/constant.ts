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
      process.env.SIMPLELOGIN_MONGODB_URI || 'mongodb://mongo_host:27017/simplelogin'//'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
  };
  public static NODE={
    ENV:process.env.NODE_ENV||'development'
  };

  public static SERVER={
    port:process.env.SIMPLELOGIN_SERVER_PORT||3000
  };

}
