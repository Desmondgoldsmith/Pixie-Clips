"use client";
import { db } from "@/config/db";
import { usersTable, InsertUser } from "@/config/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useEffect } from "react";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      isNewUser();
    }
  }, [user]);

  const isNewUser = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) {
      console.error("User email is undefined");
      return;
    }

    const userResult = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, user.primaryEmailAddress.emailAddress));

    if (userResult.length === 0) {
      const newUser: InsertUser = {
        name: user.fullName ?? "",
        email: user.primaryEmailAddress.emailAddress,
        imageURL: user.imageUrl ?? undefined,
      };

      await db.insert(usersTable).values(newUser);
    }
  };

  return <>{children}</>;
};
