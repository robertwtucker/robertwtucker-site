// layouts/PostLayout.tsx
import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import SectionContainer from '@/components/SectionContainer'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import PostHeader from '@/components/post/PostHeader'
import PostFooter from '@/components/post/PostFooter'

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { slug, path, date, title, tags, draft, readingTime, images } = content
  const bannerImage =
    images && Array.isArray(images) && images.length > 0
      ? (images[0] as string)
      : typeof images === 'string'
        ? (images as string)
        : undefined
  const authorName = authorDetails[0]?.name ?? 'Robert Tucker'

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <PostHeader
          title={title}
          date={date}
          tags={tags}
          readingTime={readingTime.text}
          authorName={authorName}
          image={bannerImage}
          draft={draft}
        />
        <div className="prose dark:prose-invert max-w-none pt-2 pb-8">{children}</div>
        <PostFooter slug={slug} path={path} title={title} prev={prev} next={next} />
      </article>
    </SectionContainer>
  )
}
