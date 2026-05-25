type YouTubeProps = {
  id: string
  title?: string
}

const YouTube = ({ id, title }: YouTubeProps) => (
  <div className="my-6 aspect-video w-full overflow-hidden rounded-lg">
    <iframe
      className="h-full w-full"
      src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
      title={title ?? 'YouTube video player'}
      loading="lazy"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
)

export default YouTube
