'use server'

import { revalidatePath } from 'next/cache'
import { getSql } from '@/app/lib/db'

type SubscribeResult =
  | { success: true; count: number }
  | { success: false; error: string }

export async function subscribeEmail(
  _prev: SubscribeResult | null,
  formData: FormData
): Promise<SubscribeResult> {
  const email = (formData.get('email') as string)?.trim().toLowerCase()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  const sql = getSql()

  try {
    await sql`INSERT INTO email_signups (email) VALUES (${email})`
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    if (msg.includes('unique') || msg.includes('duplicate')) {
      return { success: false, error: 'This email is already registered.' }
    }
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  const rows = await sql`SELECT COUNT(*)::int AS count FROM email_signups`
  revalidatePath('/')
  return { success: true, count: rows[0].count }
}
