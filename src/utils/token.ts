import crypto from "crypto";

const tokenGenerator = (length: number) => {
  return crypto.randomBytes(length).toString("hex");
};

export default tokenGenerator;
