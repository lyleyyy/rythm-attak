import hashPlaintextPwd from "@/utils/hashPlaintextPassword";
import supabase from "./supabase";
import checkPwd from "@/utils/checkPwd";
import uploadFile from "./uploadFile";
import sanitizedFilePathName from "@/utils/sanitizedFilePathName";

export async function getUser(email, password) {
  try {
    const { data, error } = await supabase
      .schema("next_auth")
      .from("users")
      .select("*")
      .eq("email", email);

    // if (error) throw new Error("Internal error when getting user");
    // if (data.length === 0) throw new Error("Email not founded.");

    const user = data.at(0);
    const hashedPwd = user.password_hash;

    if (!checkPwd(password, hashedPwd)) return null;
    // throw new Error("Passsword is incorrect.");

    return user;
  } catch (err) {
    console.error("Errors in getUser: ", err.message);
    throw err;
  }
}

export async function getUserByEmail(email) {
  try {
    const { data, error } = await supabase
      .schema("next_auth")
      .from("users")
      .select("*")
      .eq("email", email);

    if (error) throw new Error("Email not found");

    const user = data.at(0);

    return user;
  } catch (err) {
    console.error("Errors in getUserByEmail: ", err.message);
    throw err;
  }
}

export async function getUserById(id) {
  try {
    const { data, error } = await supabase
      .schema("next_auth")
      .from("users")
      .select("*")
      .eq("id", id);

    if (error) throw new Error("getUserById issue: " + error);

    const user = data[0];

    return user;
  } catch (err) {
    console.error(err);
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
  const { email, password, name, biography, artist } = userData;

  try {
    const registeredEmails = await getAllEmails();

    const isEmailRegistered = registeredEmails
      .map((registeredEmail) => registeredEmail.email)
      .includes(email);

    if (isEmailRegistered) throw new Error("This email is already registered.");

    const hashedPwd = hashPlaintextPwd(password);

    const isArtist = artist === "true" ? true : false;

    const { data, error } = await supabase
      .schema("next_auth")
      .from("users")
      .insert([
        {
          email,
          password_hash: hashedPwd,
          name: name,
          biography: biography,
          is_artist: isArtist,
        },
      ])
      .select();

    if (error) throw error;

    return data;
  } catch (err) {
    console.error("Error in createUser:", err.message);
    throw err;
  }
}

export async function updateArtistBanner(bannerFile, id) {
  try {
    // delete previous banner in storage
    await removeBannerFile(id);

    // upload to storage
    const bannerPathName = sanitizedFilePathName(bannerFile, "banner");
    const bannerUrl = await uploadFile(
      "artist_banners",
      bannerFile,
      bannerPathName,
    );

    // write into database
    const { data, error } = await supabase
      .schema("next_auth")
      .from("users")
      .update({ banner_url: bannerUrl, banner_path_name: bannerPathName })
      .eq("id", id)
      .select();

    if (error) throw new Error("Write into database issue: " + error);

    return bannerUrl;
  } catch (err) {
    // need to check and operate:
    // if (coverUrl) delete uploaded cover
  }
}

async function removeBannerFile(id) {
  try {
    const { data, error } = await supabase
      .schema("next_auth")
      .from("users")
      .select("banner_url,banner_path_name")
      .eq("id", id);

    const { banner_url: bannerUrl, banner_path_name: bannerPathName } = data[0];

    if (!(bannerUrl && bannerPathName)) return;
    await supabase.storage.from("artist_banners").remove([bannerPathName]);

    if (error) throw new Error("deleteBanner issue: " + error);

    // return data;
  } catch (err) {
    console.error(err);
  }
}

export async function updateBiography(id, biography) {
  try {
    // write into database
    const { data, error } = await supabase
      .schema("next_auth")
      .from("users")
      .update({ biography: biography })
      .eq("id", id)
      .select();

    if (error) throw new Error("updateBiography issue: " + error);

    const updatedBiography = data[0].biography;
    return updatedBiography;
  } catch (err) {
    console.error(err);
  }
}

export async function updateAvatar(id, avatarFile) {
  try {
    // delete previous banner in storage
    await removeAvatarFile(id);

    // upload to storage
    const avatarPathName = sanitizedFilePathName(avatarFile, "avatar");
    const avatarUrl = await uploadFile(
      "user_avatars",
      avatarFile,
      avatarPathName,
    );

    // write into database
    const { data, error } = await supabase
      .schema("next_auth")
      .from("users")
      .update({ image: avatarUrl, avatar_path_name: avatarPathName })
      .eq("id", id)
      .select();

    if (error) throw new Error("Write into database issue: " + error);

    return avatarUrl;
  } catch (err) {
    // need to check and operate:
    // if (coverUrl) delete uploaded cover
  }
}

async function removeAvatarFile(id) {
  try {
    const { data, error } = await supabase
      .schema("next_auth")
      .from("users")
      .select("image,avatar_path_name")
      .eq("id", id);

    const { image: avatarUrl, avatar_path_name: avatarPathName } = data[0];

    if (!(avatarUrl && avatarPathName)) return;

    await supabase.storage.from("user_avatars").remove([avatarPathName]);

    if (error) throw new Error("deleteAvatar issue: " + error);

    // return data;
  } catch (err) {
    console.error(err);
  }
}
