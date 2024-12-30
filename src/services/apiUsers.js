import hashPlaintextPwd from "@/utils/hashPlaintextPassword";
import supabase from "./supabase";
import checkPwd from "@/utils/checkPwd";

export async function getUser(email, password) {
  try {
    const res = await supabase.from("users").select("*").eq("email", email);

    console.log(res, typeof res.status);

    if (res.status !== 200) throw new Error();

    const user = res.data.at(0);
    const hashedPwd = user.password_hash;

    const isPwdCorrect = checkPwd(password, hashedPwd);

    if (!isPwdCorrect) throw new Error();

    return user;
    // console.log(user, error);
    // console.log(user.at(0).password_hash);
    // console.log(checkPwd("!Nnoy590923", user.at(0).password_hash), "waya");
  } catch (err) {
    console.error("Errors in getUser: ", err.message);
    throw err;
  }
}

export async function getAllEmails() {
  try {
    let { data: emails, error } = await supabase.from("users").select("email");

    return emails;
  } catch (err) {
    console.error("Errors in getAllEmails: ", err.message);
    throw err;
  }
}

export async function createUser(userData) {
  const { email, password, name } = userData;

  try {
    const registeredEmails = await getAllEmails();

    const isEmailRegistered = registeredEmails
      .map((registeredEmail) => registeredEmail.email)
      .includes(email);

    if (isEmailRegistered) throw new Error("This email is already registered.");

    const hashedPwd = hashPlaintextPwd(password);

    const { data, error } = await supabase
      .from("users")
      .insert([{ email, password_hash: hashedPwd, user_name: name }])
      .select();

    return { data, error };
  } catch (err) {
    console.error("Error in createUser:", err.message);
    throw err;
  }
}
