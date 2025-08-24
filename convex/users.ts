import { mutation } from "./_generated/server";
import { v } from "convex/values";
export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    imageUrl: v.string(),
  },
  handler: async (ctx, args) => {
    //if user is already exists, return the user
    const user = await ctx.db
      .query("UserTable")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();
    //if user does not exist, create a new user

    if (user.length === 0) {
      const data = {
        name: args.name,
        email: args.email,
        imageUrl: args.imageUrl,
      };

      const result = await ctx.db.insert("UserTable", {
        ...data,
      });
      console.log(result);
      return {
        ...data,
        result,
      };
    }
    return user[0]; // Return the exiting user if found
  },
});
