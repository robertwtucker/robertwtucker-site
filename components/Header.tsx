'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  const pathname = usePathname()
  const normalizedPath = pathname.replace(/\/$/, '') || '/'

  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-6'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <Image
          src="/static/images/avatar.jpg"
          alt=""
          width={36}
          height={36}
          priority
          className="rounded-full border border-gray-200 dark:border-gray-700"
        />
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks.map((link) => {
            const isActive =
              normalizedPath === link.href || normalizedPath.startsWith(link.href + '/')
            return (
              <Link
                key={link.title}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`hover:text-primary-700 dark:hover:text-primary-300 m-1 font-medium hover:underline hover:decoration-1 hover:underline-offset-[6px] ${
                  isActive
                    ? 'text-primary-700 dark:text-primary-300 underline decoration-1 underline-offset-[6px]'
                    : 'text-gray-900 dark:text-gray-100'
                }`}
              >
                {link.title}
              </Link>
            )
          })}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
