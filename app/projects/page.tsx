import projectsData from '@/data/projectsData'
import talksData from '@/data/talksData'
import Card from '@/components/Card'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Some of the things I've worked on
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
        <div className="py-12">
          <h2 className="text-2xl leading-8 font-bold tracking-tight md:text-3xl">
            Talks & Events
          </h2>
          <p className="mt-2 mb-8 text-base leading-7 text-gray-500 dark:text-gray-400">
            A few public talks.{' '}
            <Link
              href="/speaking"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              See the full archive →
            </Link>
          </p>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {talksData.map((talk) => (
              <li key={talk.title} className="flex flex-wrap items-baseline gap-x-3 py-3">
                <span className="text-sm font-medium tabular-nums text-gray-500 dark:text-gray-400">
                  {talk.year}
                </span>
                <Link
                  href={talk.href}
                  className="hover:text-primary-700 dark:hover:text-primary-300 text-base font-medium text-gray-900 dark:text-gray-100"
                >
                  {talk.title}
                </Link>
                <span className="text-sm text-gray-500 dark:text-gray-400">— {talk.venue}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
