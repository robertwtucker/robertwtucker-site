type DraftPillProps = {
  variant?: 'text' | 'banner'
}

export default function DraftPill({ variant = 'text' }: DraftPillProps) {
  if (variant === 'banner') {
    return <span className="rounded border border-amber-300 px-2 py-0.5 text-amber-200">Draft</span>
  }
  return (
    <span className="rounded border border-amber-500 px-2 py-0.5 text-amber-700 dark:border-amber-400 dark:text-amber-300">
      Draft
    </span>
  )
}
