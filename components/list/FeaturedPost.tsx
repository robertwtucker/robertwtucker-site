import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'
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
    return (
      <article className="relative overflow-hidden rounded-lg">
        <div className="relative h-[220px] w-full sm:h-[260px] md:h-[300px]">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/75" />
          <div className="absolute inset-x-0 bottom-0 space-y-3 p-6 text-white sm:p-8">
            <div className="flex flex-wrap items-center gap-x-2 text-xs font-medium tracking-wide text-white/85 uppercase">
              {draft && <DraftPill variant="banner" />}
              <time dateTime={date}>{formattedDate}</time>
              <span aria-hidden="true">·</span>
              <span>{readingTime}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              <Link
                href={`/${path}`}
                className="text-white after:absolute after:inset-0 after:content-[''] hover:underline hover:underline-offset-[6px]"
              >
                {title}
              </Link>
            </h2>
            <p className="line-clamp-2 text-sm text-white/90 sm:text-base">{summary}</p>
          </div>
        </div>
      </article>
    )
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
