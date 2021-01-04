import jwt from "jsonwebtoken";

export const generateToken = (data) => {
  const privateJWTKey = process.env.PRIVATE_JWT_KEY;
  const token = jwt.sign(data, privateJWTKey); //get the private key from the config file -> environment variable
  return token;
};
