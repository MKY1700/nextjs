import {connectDB} from "@/utils/database.js";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    providers : [
        GithubProvider({
            clientId : 'Ov23lik1r3dPlfRDRRri',
            clientSecret : 'f6bce9611df1d249b0fada0d63c9bbb539d80786'
        }),
    ],
    secret : 'qwer1234',
    adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions);