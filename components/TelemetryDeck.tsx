'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

// Mirrors the payload of TelemetryDeck's Web SDK (cdn.telemetrydeck.com/websdk), which only
// fires once per full page load. Re-sending on pathname change counts App Router client-side
// navigations too, so pageviews stay comparable with Umami while both run in parallel.
const appID = process.env.NEXT_PUBLIC_TELEMETRYDECK_APP_ID
const isTestMode = process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'

export default function TelemetryDeck() {
  const pathname = usePathname()
  const previousUrl = useRef<string | null>(null)

  useEffect(() => {
    if (!appID) return
    const url = window.location.href
    fetch('https://nom.telemetrydeck.com/v2/w/', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        appID,
        url,
        referrer: previousUrl.current ?? document.referrer,
        locale: navigator.language,
        telemetryClientVersion: 'WebSDK 1.1.0',
        ...(isTestMode && { isTestMode: true }),
      }),
    }).catch(() => {})
    previousUrl.current = url
  }, [pathname])

  return null
}
