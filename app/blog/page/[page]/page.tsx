import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import PostListLayout from '@/layouts/PostListLayout'

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allBlogs.length / siteMetadata.postsPerPage)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))
  return paths
}

export default async function Page(props: { params: Promise<{ page: string }> }) {
  const params = await props.params
  const pageNumber = parseInt(params.page as string)
  const posts = allCoreContent(sortPosts(allBlogs))
  const totalPages = Math.ceil(posts.length / siteMetadata.postsPerPage)

  if (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber)) {
    return notFound()
  }

  const initialDisplayPosts = posts.slice(
    siteMetadata.postsPerPage * (pageNumber - 1),
    siteMetadata.postsPerPage * pageNumber
  )

  return (
    <PostListLayout
      posts={initialDisplayPosts}
      pagination={{ currentPage: pageNumber, totalPages }}
      title="Blog"
      showFeatured={false}
    />
  )
}
