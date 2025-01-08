import { auth } from "@/lib/auth";
import { NextRequest } from "next/server";

export interface NextRequestExt extends NextRequest {
  auth?: { role?: string; user?: { id?: string; email?: string | null } };
}

export const withAuth = (
  handler: (req: NextRequestExt) => Promise<Response>
) => {
  return async function (req: NextRequestExt) {
    try {
      const session = await auth();
      if (!session) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
      }

      // Add session to request for use in handler
      req.auth = session;

      return handler(req);
    } catch (error) {
      console.error(error);
      return Response.json({ error: "Internal server error" }, { status: 500 });
    }
  };
};
