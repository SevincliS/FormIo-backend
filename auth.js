import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  let { path } = req._parsedUrl;
  console.log({ path });
  let splittedPath = path.split("/");

  let reqType = splittedPath[splittedPath.length - 1];
  if (
    reqType === "login" ||
    reqType === "createMembership" ||
    reqType === "createUser"
  ) {
    next();
  } else {
    const token = req.headers["x-auth-token"] || req.headers["authorization"];
    //if no token found, return response (without going to the next middelware)
    if (!token)
      return res.status(401).send("Access denied. No token provided.");
    try {
      //if can verify the token, set req.user and pass to next middleware
      const decoded = jwt.verify(token, process.env.PRIVATE_JWT_KEY);
      req.user = decoded;
      next();
    } catch (ex) {
      //if invalid token
      res.status(400).send("Invalid token.");
    }
  }
};

export default auth;
