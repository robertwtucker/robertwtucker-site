'use client'

import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Toggle Menu"
        className="hover:text-primary-500 dark:hover:text-primary-400 sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-8 w-8 text-gray-900 dark:text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="bg-white/95 data-[side=right]:w-full data-[side=right]:max-w-full data-[side=right]:sm:max-w-full dark:bg-gray-950/98"
      >
        <nav className="mt-8 flex flex-1 flex-col items-start overflow-y-auto pt-2 pl-12 text-left">
          {headerNavLinks.map((link) => (
            <SheetClose
              key={link.title}
              nativeButton={false}
              render={
                <Link
                  href={link.href}
                  className="hover:text-primary-500 dark:hover:text-primary-400 mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              }
            />
          ))}
        </nav>

        <SheetClose
          className="hover:text-primary-500 dark:hover:text-primary-400 fixed top-7 right-4 z-80 h-16 w-16 p-4 text-gray-900 dark:text-gray-100"
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </SheetClose>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
