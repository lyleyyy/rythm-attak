import bcrypt from "bcryptjs";

function checkPwd(plaintextPwd, hashedPwd) {
  return bcrypt.compareSync(plaintextPwd, hashedPwd);
}

export default checkPwd;
