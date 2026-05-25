import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'
import PostListLayout from '@/layouts/PostListLayout'

export const metadata = genPageMetadata({ title: 'Blog' })

export default async function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs))
  const [featured, ...rest] = posts
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / siteMetadata.postsPerPage)
  const initialDisplayPosts = rest.slice(0, siteMetadata.postsPerPage - 1)

  return (
    <PostListLayout
      posts={initialDisplayPosts}
      pagination={{ currentPage: pageNumber, totalPages }}
      title="Blog"
      featured={featured}
      showFeatured={true}
    />
  )
}
