import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect"; // Adjust the path as needed
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await dbConnect();
          console.log("Database connected for login");

          const user = await User.findOne({ email });
          console.log("User found:", user);

          if (!user) {
            console.error("No user found with the provided email.");
            throw new Error("Invalid email or password.");
          }

          const isPasswordValid = await bcrypt.compare(password, user.password);
          console.log("Password valid:", isPasswordValid);

          if (!isPasswordValid) {
            console.error("Password mismatch.");
            throw new Error("Invalid email or password.");
          }

          return { id: user._id, email: user.email, role: user.role };
        } catch (error) {
          console.error("Authorization error:", error.message);
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 }, // 30 days
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/signin" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
      }
      console.log("JWT token:", token); // Debug token contents
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email,
          role: token.role,
        };
      }
      console.log("Session data:", session); // Debug session contents
      return session;
    },
  },
  debug: true, // Enable debug for better logging in development
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
