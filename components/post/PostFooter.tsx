// components/post/PostFooter.tsx
import Comments from '@/components/Comments'
import ShareButtons from './ShareButtons'
import PrevNextLinks from './PrevNextLinks'
import siteMetadata from '@/data/siteMetadata'

type PostFooterProps = {
  slug: string
  path: string
  title: string
  prev?: { path: string; title: string }
  next?: { path: string; title: string }
}

export default function PostFooter({ slug, path, title, prev, next }: PostFooterProps) {
  const canonicalUrl = `${siteMetadata.siteUrl}/${path}`

  return (
    <footer className="mt-12 space-y-10">
      <hr className="border-gray-200 dark:border-gray-700" />
      <ShareButtons url={canonicalUrl} title={title} />
      {siteMetadata.comments && (
        <>
          <hr className="border-gray-200 dark:border-gray-700" />
          <div id="comment">
            <Comments slug={slug} />
          </div>
        </>
      )}
      {(prev?.path || next?.path) && (
        <>
          <hr className="border-gray-200 dark:border-gray-700" />
          <PrevNextLinks prev={prev} next={next} />
        </>
      )}
    </footer>
  )
}
