import { auth } from '@clerk/nextjs/server'
import { VERSION_DATA } from '../lib/data/general'
import { PageTitle } from '../lib/components/settings/VersionDisplay'

export default async function Page() {
    const { isAuthenticated, redirectToSignIn, userId } = await auth()

    if (!isAuthenticated) return redirectToSignIn()

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

