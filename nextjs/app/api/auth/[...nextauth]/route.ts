import User from "@models/user";
import { connectToDB } from "@utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user?.email });
      session.user = {
        ...session.user,
        name: sessionUser._id.toString(),
      };
      return session;
    },

    async signIn({ profile }) {
      if (!profile) {
        console.log("Failed to get profile ", profile);
        return false;
      }

      try {
        await connectToDB();
        const userExists = await User.findOne({ email: profile.email });
        if (!userExists) {
          if (!profile.name) {
            console.log("Profile has no name: ", profile.name);
            return false;
          }

          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            // For Google provider, image is in picture field
            image: profile.image ?? (profile as any).picture,
          });
        }
        return true;
      } catch (err: any) {
        console.log("Error checking if user exists: ", err.message);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
