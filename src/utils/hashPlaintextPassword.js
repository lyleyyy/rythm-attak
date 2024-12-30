import bcrypt from "bcryptjs";

const saltRounds = 10;

function hashPlaintextPwd(plaintextPwd) {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(plaintextPwd, salt);

  return hash;
}

export default hashPlaintextPwd;
