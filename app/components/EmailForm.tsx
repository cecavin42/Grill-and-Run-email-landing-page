'use client'

import { useActionState } from 'react'
import { subscribeEmail } from '@/app/actions'

type SubscribeResult =
  | { success: true; count: number }
  | { success: false; error: string }

export default function EmailForm({ initialCount }: { initialCount: number }) {
  const [state, action, pending] = useActionState<SubscribeResult | null, FormData>(
    subscribeEmail,
    null
  )

  const count = state?.success ? state.count : initialCount
  const succeeded = state?.success === true

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-lg">
      <div className="text-center">
        <p className="text-5xl font-bold text-orange-500">{count.toLocaleString()}</p>
        <p className="mt-1 text-gray-500 text-sm uppercase tracking-widest">
          {count === 1 ? 'person interested' : 'people interested'}
        </p>
      </div>

      {succeeded ? (
        <div className="w-full rounded-2xl bg-green-50 border border-green-200 px-6 py-5 text-center">
          <p className="text-green-700 font-semibold text-lg">You&apos;re on the list!</p>
          <p className="text-green-600 text-sm mt-1">
            We&apos;ll reach out as soon as Grill &amp; Run is ready.
          </p>
        </div>
      ) : (
        <form action={action} className="flex flex-col sm:flex-row gap-3 w-full">
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
          />
          <button
            type="submit"
            disabled={pending}
            className="rounded-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold px-7 py-3 text-sm transition"
          >
            {pending ? 'Joining…' : 'Notify Me'}
          </button>
        </form>
      )}

      {state?.success === false && (
        <p className="text-red-500 text-sm -mt-4">{state.error}</p>
      )}
    </div>
  )
}
