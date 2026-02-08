import { auth } from '@clerk/nextjs/server'
import { VERSION_DATA } from '../lib/data/general'
import { PageTitle } from '../lib/components/settings/VersionDisplay'
import sql from '../lib/utils/db/db'

export default async function Page() {
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


    return <main>
        <PageTitle page="Settings" />
        <VersionDisplay />
    </main>
}

export function VersionDisplay() {
    return <section>
        <h2>Version information</h2>
        <p>{VERSION_DATA.appName}</p>
        <p>v{VERSION_DATA.versionNumber}</p>
    </section>
}

