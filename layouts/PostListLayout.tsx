import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import FeaturedPost from '@/components/list/FeaturedPost'
import PostListCard from '@/components/list/PostListCard'
import ListPagination from '@/components/list/ListPagination'

type PaginationProps = {
  totalPages: number
  currentPage: number
}

type PostListLayoutProps = {
  posts: CoreContent<Blog>[]
  pagination: PaginationProps
  title: string
  featured?: CoreContent<Blog>
  showFeatured?: boolean
}

export default function PostListLayout({
  posts,
  pagination,
  title,
  featured,
  showFeatured = false,
}: PostListLayoutProps) {
  return (
    <div className="pt-6 pb-8">
      {/* Page header — full content-column width */}
      <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
        {title}
      </h1>
      <hr className="my-6 border-gray-200 dark:border-gray-700" />

      {/* Featured slot — full content-column width */}
      {showFeatured && featured && (
        <>
          <FeaturedPost
            title={featured.title}
            date={featured.date}
            summary={featured.summary ?? ''}
            tags={featured.tags}
            readingTime={featured.readingTime.text}
            path={featured.path}
            image={Array.isArray(featured.images) ? featured.images[0] : featured.images}
            draft={featured.draft}
          />
          <hr className="my-6 border-gray-200 dark:border-gray-700" />
        </>
      )}

      {/* List cards — constrained to PR 5 body measure (~720px / max-w-3xl) */}
      <div className="max-w-3xl">
        {posts.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No posts yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {posts.map((post) => (
              <li key={post.path}>
                <PostListCard
                  title={post.title}
                  date={post.date}
                  summary={post.summary ?? ''}
                  tags={post.tags}
                  readingTime={post.readingTime.text}
                  path={post.path}
                  draft={post.draft}
                />
              </li>
            ))}
          </ul>
        )}
        {pagination && pagination.totalPages > 1 && (
          <ListPagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
        )}
      </div>
    </div>
  )
}
