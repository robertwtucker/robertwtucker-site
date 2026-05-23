import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Hero from '@/components/Hero'
import FeaturedPost from '@/components/FeaturedPost'

const MAX_DISPLAY = 5
const HERO_TAGLINE =
  'Twenty years building customer-communications integration. Writing in public about AI-native work for the technical middle.'

export default function Home({ posts }) {
  const featured = posts[0]
  const rest = posts.slice(1, MAX_DISPLAY)

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <Hero name={siteMetadata.author} tagline={HERO_TAGLINE} />
        {!posts.length ? (
          <div className="text-muted-foreground py-12">No posts found.</div>
        ) : (
          <>
            <FeaturedPost post={featured} />
            {rest.length > 0 && (
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {rest.map((post) => {
                  const { slug, date, title, summary, tags } = post
                  return (
                    <li key={slug} className="py-12">
                      <article>
                        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                          <dl>
                            <dt className="sr-only">Published on</dt>
                            <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                            </dd>
                          </dl>
                          <div className="space-y-5 xl:col-span-3">
                            <div className="space-y-6">
                              <div>
                                <h2 className="text-2xl leading-8 font-bold tracking-tight">
                                  <Link
                                    href={`/blog/${slug}`}
                                    className="text-gray-900 dark:text-gray-100"
                                  >
                                    {title}
                                  </Link>
                                </h2>
                                <div className="flex flex-wrap">
                                  {tags.map((tag) => (
                                    <Tag key={tag} text={tag} />
                                  ))}
                                </div>
                              </div>
                              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                {summary}
                              </div>
                            </div>
                            <div className="text-base leading-6 font-medium">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                aria-label={`Read more: "${title}"`}
                              >
                                Read more &rarr;
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    </li>
                  )
                })}
              </ul>
            )}
          </>
        )}
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
