"use server";

import { AppwriteException, ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
} = process.env;

export const signIn = async ({ email, password }: SignInProps) => {
  try {
    const { account } = await createAdminClient();

    const session = await account.createEmailPasswordSession(email, password);

    const cookieStore = await cookies();
    cookieStore.set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(session);
  } catch (error) {
    if (error instanceof AppwriteException) {
      if (error.message === "Invalid credentials. Please check the email and password.") {
        throw new Error("Invalid email or password. Please try agains.");
      } else {
        throw new Error(`Appwrite error: ${error.message}`);
      }
    } else {
      throw new Error("An unexpected error occurred. Please try again later.");
    }
  }
};

export const signUp = async ({password, ...userData}: SignUpParams) => {
    const { email, firstName, lastName } = userData;

    let newUserAccount;

    try {
        const { account, database } = await createAdminClient();

        const newUserAccount = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);

        if(!newUserAccount) throw new Error("Failed to create user account");

        const newUser = await database.createDocument(
            DATABASE_ID!,
            USER_COLLECTION_ID!,
            ID.unique(),
            {
                ...userData,
                userId: newUserAccount.$id,
            }
        );


        const session = await account.createEmailPasswordSession(email, password);

        const cookieStore = await cookies();
        cookieStore.set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify(newUser);

    } catch (error) {
        console.error(error);
        
    }
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    return null;
  }
}

export const signOut = async () => {
    try {
        const { account } = await createSessionClient();

        const cookieStore = await cookies();
        cookieStore.delete("appwrite-session");
        await account.deleteSession("current");
    } catch (error) {
        console.error(error);
        return null;
    }
}