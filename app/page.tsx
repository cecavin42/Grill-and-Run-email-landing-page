import { sql } from '@/app/lib/db'
import EmailForm from '@/app/components/EmailForm'

async function getEmailCount(): Promise<number> {
  const rows = await sql`SELECT COUNT(*)::int AS count FROM email_signups`
  return rows[0].count
}

export default async function Home() {
  const count = await getEmailCount()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-20">
      <div className="flex flex-col items-center gap-10 text-center max-w-2xl">

        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🔥🏃</span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Grill &amp; Run
            </h1>
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 bg-orange-50 border border-orange-200 rounded-full px-3 py-1">
            Coming Soon
          </span>
        </div>

        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          We&apos;re building something that combines the love of great food with the thrill
          of an active lifestyle. Be the first to know when we launch.
        </p>

        <EmailForm initialCount={count} />

        <p className="text-xs text-gray-400">
          No spam. Just one email when we&apos;re live.
        </p>
      </div>
    </main>
  )
}
