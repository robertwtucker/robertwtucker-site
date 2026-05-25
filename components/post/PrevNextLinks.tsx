// components/post/PrevNextLinks.tsx
import Link from '@/components/Link'

type PrevNextLinksProps = {
  prev?: { path: string; title: string }
  next?: { path: string; title: string }
}

export default function PrevNextLinks({ prev, next }: PrevNextLinksProps) {
  if (!prev?.path && !next?.path) return null

  return (
    <nav
      aria-label="Post navigation"
      className="flex flex-col gap-4 pt-8 text-sm font-medium sm:flex-row sm:justify-between sm:gap-8"
    >
      {prev?.path ? (
        <Link
          href={`/${prev.path}`}
          aria-label={`Previous post: ${prev.title}`}
          className="hover:text-primary-700 dark:hover:text-primary-300 text-gray-700 hover:underline hover:decoration-1 hover:underline-offset-[6px] dark:text-gray-300"
        >
          ← {prev.title}
        </Link>
      ) : (
        <span />
      )}
      {next?.path ? (
        <Link
          href={`/${next.path}`}
          aria-label={`Next post: ${next.title}`}
          className="hover:text-primary-700 dark:hover:text-primary-300 text-gray-700 hover:underline hover:decoration-1 hover:underline-offset-[6px] sm:text-right dark:text-gray-300"
        >
          {next.title} →
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}
