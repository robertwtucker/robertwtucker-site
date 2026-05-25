import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import DraftPill from '@/components/post/DraftPill'

type FeaturedPostProps = {
  title: string
  date: string
  summary: string
  tags?: string[]
  readingTime: string
  path: string
  image?: string
  draft?: boolean
}

const postDateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export default function FeaturedPost({
  title,
  date,
  summary,
  tags,
  readingTime,
  path,
  image,
  draft,
}: FeaturedPostProps) {
  const formattedDate = new Date(date).toLocaleDateString(siteMetadata.locale, postDateOptions)

  if (image) {
    // Banner-overlay variant — added in Task 7.
    return null
  }

  return (
    <article className="border-primary-700 dark:border-primary-300 relative border-l-4 py-6 pl-7">
      <div className="flex flex-wrap items-center gap-x-2 text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
        {draft && <DraftPill variant="text" />}
        <time dateTime={date}>{formattedDate}</time>
        <span aria-hidden="true">·</span>
        <span>{readingTime}</span>
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight">
        <Link
          href={`/${path}`}
          className="hover:text-primary-700 dark:hover:text-primary-300 text-gray-900 after:absolute after:inset-0 after:content-[''] dark:text-gray-100"
        >
          {title}
        </Link>
      </h2>
      <p className="mt-3 text-base text-gray-700 dark:text-gray-300">{summary}</p>
      {tags && tags.length > 0 && (
        <div className="relative z-10 mt-4 flex flex-wrap">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      )}
    </article>
  )
}
