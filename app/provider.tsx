"use-client";
import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useEffect } from "react";

export const Provider = ({ children }: any) => {
  const { user } = useUser();

  useEffect(() => {
    user && isNewUser;
  }, [user]);

  const isNewUser = async () => {
    const userResult = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));

    if (!userResult[0]) {
      await db.insert(usersTable).Values({
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl,
      });
    }
  };
  return <div>{children}</div>;
};
