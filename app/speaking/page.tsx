import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Speaking' })

interface Talk {
  title: string
  venue: string
  year: string
  href: string
  description: string
}

const talks: Talk[] = [
  {
    title: 'Go the Distance with Inspire Scaler',
    venue: "Inspire Days (Quadient's user conference)",
    year: '2021',
    href: 'https://www.quadient.com/resources/go-distance-inspire-scaler',
    description:
      'Follow-up session on operating Inspire Scaler at scale — what production lessons looked like a year in.',
  },
  {
    title: "Inspire Scaler — What's in it for me?",
    venue: "Inspire Days (Quadient's virtual user conference)",
    year: '2020',
    href: 'https://www.quadient.com/resources/inspire-scaler-whats-it-me',
    description:
      'Introduction to Inspire Scaler for the existing Inspire customer base — positioning, capabilities, and adoption path.',
  },
  {
    title: 'FinovateFall 2017 — main-stage demo',
    venue: 'FinovateFall, New York City',
    year: '2017',
    href: '/blog/finovate-2017',
    description:
      'Seven-minute live demo on the Finovate main stage representing Quadient. The format is unforgiving — when the bell rings, the mic cuts.',
  },
]

export default function Speaking() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Speaking
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Past talks below. I'm interested in doing more — conference sessions, podcast
            appearances, internal tech talks. If something here resonates, find me on{' '}
            <Link
              href="https://www.linkedin.com/in/robert-w-tucker"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              LinkedIn
            </Link>
            .
          </p>
        </div>
        <div className="container py-12">
          <ul className="space-y-10">
            {talks.map((talk) => (
              <li key={talk.title} className="space-y-2">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {talk.year}
                  </span>
                  <h2 className="text-2xl leading-8 font-bold tracking-tight">
                    <Link
                      href={talk.href}
                      className="hover:text-primary-500 dark:hover:text-primary-400 text-gray-900 dark:text-gray-100"
                    >
                      {talk.title}
                    </Link>
                  </h2>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{talk.venue}</p>
                <p className="prose max-w-none text-gray-500 dark:text-gray-400">
                  {talk.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
