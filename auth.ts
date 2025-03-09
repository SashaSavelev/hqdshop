import NextAuth from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from 'next-auth/providers/credentials';
import { User } from './model/user-model';
import bcrypt from 'bcryptjs';
import { authConfig } from './auth.config';

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
        CredentialProvider({
            async authorize(credentials) {
                if (credentials === null) return null;

                try {
                    const user = await User.findOne({
                        email: credentials?.email,
                    });

                    if (user) {
                        const isMatch = await bcrypt.compare(credentials.password, user.password);

                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error('Email or Password is not correct');
                        }
                    } else {
                        throw new Error('User not found');
                    }
                } catch (error) {
                    throw new Error(error);
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            try {
                const userExist = await User.findOne({ email: user.email });

                if (!userExist) {
                    await User.create({
                        email: user.email,
                        name: user.name,
                        password: process.env.GOOGLE_CLIENT_SECRET,
                        favorites: [],
                        cart: []
                    });
                }
            } catch (error) {
                console.log(error);
                return false;
            }
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                const currentUser = await User.findOne({ email: user.email });
                token.sub = currentUser._id;
            }

            return token;
        },
    },
});
