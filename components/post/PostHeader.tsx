// components/post/PostHeader.tsx
import Link from 'next/link'
import { slug } from 'github-slugger'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'
import Tag from '@/components/Tag'

type PostHeaderProps = {
  title: string
  date: string
  tags?: string[]
  readingTime: string
  authorName: string
  image?: string
  draft?: boolean
}

const postDateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export default function PostHeader({
  title,
  date,
  tags,
  readingTime,
  authorName,
  image,
  draft,
}: PostHeaderProps) {
  const formattedDate = new Date(date).toLocaleDateString(siteMetadata.locale, postDateOptions)

  if (image) {
    return (
      <header className="relative -mx-4 mb-8 overflow-hidden sm:-mx-6 md:-mx-8 xl:-mx-0 xl:rounded-lg">
        <div className="relative aspect-[16/9] w-full sm:aspect-[2/1]">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/75" />
          <div className="absolute inset-x-0 bottom-0 space-y-4 p-6 text-white sm:p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-x-2 text-xs font-medium tracking-wide text-white/85 uppercase">
              {draft && (
                <span className="rounded border border-amber-300 px-2 py-0.5 text-amber-200">
                  Draft
                </span>
              )}
              <time dateTime={date}>{formattedDate}</time>
            </div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">{title}</h1>
            <hr className="border-white/30" />
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-sm text-white/85">
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {tags?.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${slug(tag)}`}
                    className="text-sm font-medium text-white/90 uppercase hover:text-white hover:underline hover:underline-offset-[6px]"
                  >
                    {tag.split(' ').join('-')}
                  </Link>
                ))}
              </div>
              <div>
                {readingTime} · {authorName}
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="space-y-5 pt-6 pb-8 md:pt-10 md:pb-10">
      <div className="flex flex-wrap items-center gap-x-2 text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
        {draft && (
          <span className="rounded border border-amber-500 px-2 py-0.5 text-amber-700 dark:border-amber-400 dark:text-amber-300">
            Draft
          </span>
        )}
        <time dateTime={date}>{formattedDate}</time>
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
        {title}
      </h1>
      <hr className="border-gray-200 dark:border-gray-700" />
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex flex-wrap gap-x-1">
          {tags?.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
        <div>
          {readingTime} · {authorName}
        </div>
      </div>
    </header>
  )
}
