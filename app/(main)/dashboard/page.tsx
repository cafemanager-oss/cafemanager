import sql from "@/app/lib/utils/db/db"
import { auth } from "@clerk/nextjs/server"

export default async function dashboard() {
    const { isAuthenticated, redirectToSignIn, userId: clerkUserId } = await auth()

    if (!isAuthenticated) return redirectToSignIn()

    const userData = await sql`
        SELECT * FROM "app"."user_data" WHERE clerk_user_id = ${clerkUserId};
    `
    console.log(userData)

    const serverSideAuthData = {
        clerkUserId,
        userType: userData[0].user_type,
    }
    return <div></div>
}