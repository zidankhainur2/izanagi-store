import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  apiKey: "pk_test_d2lyZWQta2l0ZS04OS5jbGVyay5hY2NvdW50cy5kZXYk",
  secretKey: "sk_test_RiM7GWf9dbvhfoQAKZohhh9Mv7dnX2dDovjj8q4Nsf",
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
