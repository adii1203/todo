import { auth as middleware } from "@/auth";

import { apiAuthPrefix, authRoutes, publicRoutes } from "./routes";

export default middleware((req) => {
  const { nextUrl } = req;

  const isLoggedin = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return undefined;
  }

  if (isAuthRoute) {
    if (isLoggedin) {
      return Response.redirect(new URL("/today", nextUrl));
    }
    return undefined;
  }

  if (isLoggedin && isPublicRoute) {
    return Response.redirect(new URL("/today", nextUrl));
  }

  if (!isLoggedin && !isPublicRoute) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  return undefined;
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
