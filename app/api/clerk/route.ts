import sql from '@/app/lib/utils/db/db'
import { verifyWebhook } from '@clerk/backend/webhooks'


export async function POST(request: Request) {
    const evt = await verifyWebhook(request, {
        signingSecret: process.env.CLERK_WEBHOOK_SIGNING_SECRET!
    })
    if (evt.type !== 'user.created') return Response.json("")
    console.log(evt)
    const clerkUserId = evt.data.id!
    const data = {
        clerk_user_id: clerkUserId,
        user_type: "owner",
        onboarding_done: false
    }
    const res = await sql`
        INSERT INTO "app"."user_data" ${sql(data)} ON CONFLICT DO NOTHING;
        `
    console.log(res)
    return Response.json("")
}