import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import DraftPill from '@/components/post/DraftPill'

type PostListCardProps = {
  title: string
  date: string
  summary: string
  tags?: string[]
  readingTime: string
  path: string
  draft?: boolean
}

const postDateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export default function PostListCard({
  title,
  date,
  summary,
  tags,
  readingTime,
  path,
  draft,
}: PostListCardProps) {
  const formattedDate = new Date(date).toLocaleDateString(siteMetadata.locale, postDateOptions)

  return (
    <article className="relative py-6">
      <div className="flex flex-wrap items-center gap-x-2 text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
        {draft && <DraftPill variant="text" />}
        <time dateTime={date}>{formattedDate}</time>
        <span aria-hidden="true">·</span>
        <span>{readingTime}</span>
      </div>
      <h2 className="mt-2 text-2xl font-bold tracking-tight">
        <Link
          href={`/${path}`}
          className="hover:text-primary-700 dark:hover:text-primary-300 text-gray-900 after:absolute after:inset-0 after:content-[''] dark:text-gray-100"
        >
          {title}
        </Link>
      </h2>
      <p className="mt-2 line-clamp-2 text-base text-gray-700 dark:text-gray-300">{summary}</p>
      {tags && tags.length > 0 && (
        <div className="relative z-10 mt-3 flex flex-wrap">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      )}
    </article>
  )
}
