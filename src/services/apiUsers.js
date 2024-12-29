import supabase from "./supabase";

export async function getUser() {
  let { data: users, error } = await supabase.from("users").select("*");

  console.log(users, error);
}
