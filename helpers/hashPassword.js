import { pbkdf2 } from "crypto";

export let hashPassword = async (password) => {
  return new Promise((resolve, reject) => {
    pbkdf2(password, "salt", 1, 32, "sha512", (err, derivedKey) => {
      if (err) {
        reject(err);
      }
      resolve(derivedKey.toString("hex"));
    });
  });
};
