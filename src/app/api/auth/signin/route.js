// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// export async function GET() {
//   const cookieStore = await cookies();
//   const token = cookieStore.get("authjs.session-token");

//   if (!token) {
//     return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//   }

//   return NextResponse.json({ token, status: 200 });
// }

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const secret = process.env.NEXT_PUBLIC_AUTH_SECRET;

export async function GET(req, res) {
  try {
    const token = await getToken({ req, secret });

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log("Decoded Token:", token);

    // 返回解码后的 token
    // res.status(200).json({ message: "Token is valid", token });
    return NextResponse.json(
      { message: "Token is valid", token },
      { status: 200 },
    );
  } catch (err) {
    return null;
  }
}
