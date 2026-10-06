import Image from 'next/image'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contacts', label: 'Contacts', desktopOnly: true },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-8 xl:px-20 xl:pt-12">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between rounded-full bg-surface/95 py-5 pr-8 pl-8 backdrop-blur-md sm:py-5 sm:pr-10 sm:pl-10 xl:py-7 xl:pr-11">
        <a href="#top" aria-label="Eva — home" className="shrink-0">
          <Image src="/images/logo-eva.png" alt="Eva" width={131} height={60} priority className="h-6 w-auto sm:h-9" />
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-8 sm:gap-14 lg:gap-24 xl:gap-[10.5rem]">
            {links.map((link) => (
              <li key={link.href} className={link.desktopOnly ? 'hidden sm:block' : undefined}>
                <a
                  href={link.href}
                  className="text-base text-foreground transition-colors hover:text-primary sm:text-lg xl:text-2xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
