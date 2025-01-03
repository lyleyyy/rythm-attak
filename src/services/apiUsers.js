import hashPlaintextPwd from "@/utils/hashPlaintextPassword";
import supabase from "./supabase";
import checkPwd from "@/utils/checkPwd";

export async function getUser(email, password) {
  try {
    const { data, error } = await supabase
      .schema("next_auth")
      .from("users")
      .select("*")
      .eq("email", email);

    if (error) throw new Error("Email not found");

    const user = data.at(0);
    const hashedPwd = user.password_hash;

    if (!checkPwd(password, hashedPwd))
      throw new Error("Passsword is incorrect.");

    return user;
  } catch (err) {
    console.error("Errors in getUser: ", err.message);
    throw err;
  }
}

export async function getAllEmails() {
  try {
    let { data: emails, error } = await supabase
      .schema("next_auth")
      .from("users")
      .select("email");

    if (error) throw error;

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
      .schema("next_auth")
      .from("users")
      .insert([{ email, password_hash: hashedPwd, name: name }])
      .select();

    if (error) throw error;

    return data;
  } catch (err) {
    console.error("Error in createUser:", err.message);
    throw err;
  }
}
