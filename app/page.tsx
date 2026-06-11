export const dynamic = 'force-dynamic'

import { getSql } from '@/app/lib/db'
import EmailForm from '@/app/components/EmailForm'

async function getEmailCount(): Promise<number> {
  const rows = await getSql()`SELECT COUNT(*)::int AS count FROM email_signups`
  return rows[0].count
}

export default async function Home() {
  const count = await getEmailCount()

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BBQ background SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 680 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Sky */}
        <rect x="0" y="0" width="680" height="900" fill="#87CEEB"/>

        {/* Sun */}
        <circle cx="580" cy="80" r="52" fill="#FFD700"/>
        <line x1="580" y1="14" x2="580" y2="4" stroke="#FFD700" strokeWidth="4" strokeLinecap="round"/>
        <line x1="580" y1="146" x2="580" y2="156" stroke="#FFD700" strokeWidth="4" strokeLinecap="round"/>
        <line x1="514" y1="80" x2="504" y2="80" stroke="#FFD700" strokeWidth="4" strokeLinecap="round"/>
        <line x1="646" y1="80" x2="656" y2="80" stroke="#FFD700" strokeWidth="4" strokeLinecap="round"/>
        <line x1="533" y1="33" x2="526" y2="26" stroke="#FFD700" strokeWidth="4" strokeLinecap="round"/>
        <line x1="627" y1="127" x2="634" y2="134" stroke="#FFD700" strokeWidth="4" strokeLinecap="round"/>
        <line x1="533" y1="127" x2="526" y2="134" stroke="#FFD700" strokeWidth="4" strokeLinecap="round"/>
        <line x1="627" y1="33" x2="634" y2="26" stroke="#FFD700" strokeWidth="4" strokeLinecap="round"/>

        {/* Clouds */}
        <ellipse cx="120" cy="90" rx="60" ry="28" fill="white" opacity="0.9"/>
        <ellipse cx="160" cy="78" rx="44" ry="30" fill="white" opacity="0.9"/>
        <ellipse cx="80" cy="86" rx="36" ry="22" fill="white" opacity="0.9"/>
        <ellipse cx="420" cy="60" rx="50" ry="22" fill="white" opacity="0.85"/>
        <ellipse cx="455" cy="50" rx="36" ry="24" fill="white" opacity="0.85"/>
        <ellipse cx="388" cy="58" rx="30" ry="18" fill="white" opacity="0.85"/>

        {/* Grass */}
        <ellipse cx="340" cy="820" rx="500" ry="220" fill="#5DBB5D"/>
        <rect x="0" y="680" width="680" height="220" fill="#5DBB5D"/>
        <ellipse cx="340" cy="720" rx="480" ry="60" fill="#4CAF4C" opacity="0.5"/>

        {/* Flowers */}
        <circle cx="60" cy="690" r="6" fill="#FF6B6B"/><circle cx="60" cy="690" r="3" fill="#FFD700"/>
        <circle cx="100" cy="700" r="5" fill="#FF9FF3"/><circle cx="100" cy="700" r="2.5" fill="#FFD700"/>
        <circle cx="600" cy="695" r="6" fill="#FFD700"/><circle cx="600" cy="695" r="3" fill="#FF6B6B"/>
        <circle cx="630" cy="710" r="5" fill="#FF9FF3"/><circle cx="630" cy="710" r="2.5" fill="#FFD700"/>
        <circle cx="160" cy="710" r="4" fill="#FFD700"/><circle cx="160" cy="710" r="2" fill="#FF6B6B"/>

        {/* Grill */}
        <ellipse cx="340" cy="598" rx="90" ry="22" fill="#555"/>
        <rect x="252" y="598" width="176" height="72" rx="8" fill="#444"/>
        <ellipse cx="340" cy="670" rx="88" ry="16" fill="#3a3a3a"/>
        <line x1="300" y1="680" x2="276" y2="760" stroke="#555" strokeWidth="7" strokeLinecap="round"/>
        <line x1="380" y1="680" x2="404" y2="760" stroke="#555" strokeWidth="7" strokeLinecap="round"/>
        <line x1="340" y1="686" x2="340" y2="760" stroke="#555" strokeWidth="7" strokeLinecap="round"/>
        <line x1="282" y1="730" x2="398" y2="730" stroke="#555" strokeWidth="5" strokeLinecap="round"/>

        {/* Grill grates */}
        <line x1="265" y1="615" x2="415" y2="615" stroke="#777" strokeWidth="3"/>
        <line x1="265" y1="627" x2="415" y2="627" stroke="#777" strokeWidth="3"/>
        <line x1="265" y1="639" x2="415" y2="639" stroke="#777" strokeWidth="3"/>
        <line x1="265" y1="651" x2="415" y2="651" stroke="#777" strokeWidth="3"/>
        <line x1="285" y1="600" x2="285" y2="668" stroke="#777" strokeWidth="2"/>
        <line x1="310" y1="600" x2="310" y2="668" stroke="#777" strokeWidth="2"/>
        <line x1="340" y1="600" x2="340" y2="668" stroke="#777" strokeWidth="2"/>
        <line x1="370" y1="600" x2="370" y2="668" stroke="#777" strokeWidth="2"/>
        <line x1="395" y1="600" x2="395" y2="668" stroke="#777" strokeWidth="2"/>

        {/* Burger patties */}
        <ellipse cx="302" cy="606" rx="28" ry="10" fill="#8B4513"/>
        <ellipse cx="302" cy="604" rx="28" ry="10" fill="#A0522D"/>
        <ellipse cx="370" cy="606" rx="28" ry="10" fill="#8B4513"/>
        <ellipse cx="370" cy="604" rx="28" ry="10" fill="#A0522D"/>

        {/* Smoke */}
        <path d="M300 590 Q295 570 302 555 Q309 540 304 525" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.6"/>
        <path d="M340 586 Q333 566 340 550 Q347 534 341 518" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.5"/>
        <path d="M375 590 Q382 570 376 555 Q370 540 376 524" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.55"/>

        {/* Flames */}
        <path d="M280 598 Q290 575 300 598" fill="#FF6600" opacity="0.85"/>
        <path d="M295 598 Q307 568 318 598" fill="#FF4400" opacity="0.75"/>
        <path d="M315 598 Q328 572 340 598" fill="#FF6600" opacity="0.8"/>
        <path d="M340 598 Q352 572 362 598" fill="#FF4400" opacity="0.75"/>
        <path d="M360 598 Q372 575 382 598" fill="#FF6600" opacity="0.85"/>

        {/* Left tree */}
        <rect x="88" y="580" width="16" height="120" rx="4" fill="#8B6914"/>
        <ellipse cx="96" cy="548" rx="48" ry="56" fill="#3A8F3A"/>
        <ellipse cx="74" cy="570" rx="32" ry="38" fill="#4CAF4C"/>
        <ellipse cx="118" cy="572" rx="30" ry="36" fill="#4CAF4C"/>

        {/* Right tree */}
        <rect x="576" y="600" width="14" height="100" rx="4" fill="#8B6914"/>
        <ellipse cx="583" cy="572" rx="42" ry="50" fill="#3A8F3A"/>
        <ellipse cx="563" cy="590" rx="28" ry="34" fill="#4CAF4C"/>
        <ellipse cx="604" cy="592" rx="26" ry="32" fill="#4CAF4C"/>

        {/* Folding table */}
        <rect x="460" y="660" width="140" height="12" rx="4" fill="#D2A679"/>
        <rect x="462" y="648" width="136" height="14" rx="3" fill="#E8C49A"/>
        <line x1="470" y1="672" x2="462" y2="740" stroke="#B8864E" strokeWidth="5" strokeLinecap="round"/>
        <line x1="590" y1="672" x2="598" y2="740" stroke="#B8864E" strokeWidth="5" strokeLinecap="round"/>
        <line x1="530" y1="672" x2="530" y2="740" stroke="#B8864E" strokeWidth="5" strokeLinecap="round"/>
        <ellipse cx="490" cy="646" rx="18" ry="8" fill="#F4C467"/>
        <ellipse cx="490" cy="641" rx="16" ry="6" fill="#C8A84B"/>
        <ellipse cx="534" cy="646" rx="14" ry="5" fill="#E8E8D0"/>
        <ellipse cx="558" cy="645" rx="12" ry="5" fill="#E8E8D0"/>
        <rect x="574" y="626" width="10" height="22" rx="3" fill="#CC2200"/>
        <rect x="576" y="622" width="6" height="6" rx="1" fill="#CC2200"/>

        {/* Lawn chair */}
        <rect x="98" y="680" width="60" height="40" rx="6" fill="#FF6B35" opacity="0.9"/>
        <line x1="98" y1="720" x2="86" y2="760" stroke="#CC4400" strokeWidth="5" strokeLinecap="round"/>
        <line x1="158" y1="720" x2="168" y2="760" stroke="#CC4400" strokeWidth="5" strokeLinecap="round"/>
        <line x1="104" y1="680" x2="96" y2="648" stroke="#CC4400" strokeWidth="5" strokeLinecap="round"/>
        <line x1="152" y1="680" x2="162" y2="648" stroke="#CC4400" strokeWidth="5" strokeLinecap="round"/>
        <line x1="108" y1="682" x2="108" y2="718" stroke="#FF8C5A" strokeWidth="3"/>
        <line x1="118" y1="682" x2="118" y2="718" stroke="#FF8C5A" strokeWidth="3"/>
        <line x1="128" y1="682" x2="128" y2="718" stroke="#FF8C5A" strokeWidth="3"/>
        <line x1="138" y1="682" x2="138" y2="718" stroke="#FF8C5A" strokeWidth="3"/>
        <line x1="148" y1="682" x2="148" y2="718" stroke="#FF8C5A" strokeWidth="3"/>
      </svg>

      {/* Content card */}
      <div className="relative z-10 bg-white/88 backdrop-blur-sm rounded-3xl shadow-lg px-10 py-12 mx-6 flex flex-col items-center gap-8 text-center max-w-lg w-full">

        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🔥🏃</span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Grill &amp; Run
            </h1>
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-3 py-1">
            Coming Soon
          </span>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed">
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
