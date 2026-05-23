import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import type { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

type FeaturedPostProps = {
  post: CoreContent<Blog>
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const { slug, date, title, summary, tags } = post

  return (
    <article className="space-y-4 py-8 md:space-y-6 md:py-12">
      <div className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
        Latest
      </div>
      <div className="space-y-3">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-muted-foreground text-base leading-6 font-medium">
            <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
          </dd>
        </dl>
        <h2 className="text-2xl leading-8 font-bold tracking-tight md:text-3xl md:leading-9">
          <Link href={`/blog/${slug}`} className="text-foreground">
            {title}
          </Link>
        </h2>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        )}
        <p className="text-muted-foreground prose max-w-none">{summary}</p>
      </div>
    </article>
  )
}
