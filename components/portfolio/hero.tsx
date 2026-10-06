import Image from 'next/image'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1280px] px-4 pt-14 pb-24 sm:px-8 sm:pt-20 xl:box-content xl:px-20 xl:pb-40">
      <div className="relative pt-12 sm:pt-16 xl:pt-20">
        <Image
          src="/images/quote-open.png"
          alt=""
          width={143}
          height={162}
          priority
          className="absolute top-0 left-1 h-auto w-[clamp(2.25rem,4.4vw,4rem)] sm:left-5"
        />
        <h1 className="text-center text-[6.9vw] sm:text-[clamp(1.875rem,5.8vw,5.25rem)] leading-[1.12] font-normal tracking-[-0.01em] text-foreground uppercase">
          Beyond just UX &amp; UI.
          <br className="hidden sm:block" /> Crafting interfaces that
          <br className="hidden sm:block" />{' '}
          <Image
            src="/images/work.png"
            alt="Work"
            width={618}
            height={141}
            priority
            className="inline-block h-[0.82em] w-auto align-[-0.1em]"
          />{' '}
          inside and out
          <Image
            src="/images/quote-close.png"
            alt=""
            width={168}
            height={138}
            priority
            className="ml-[0.2em] hidden h-[0.66em] w-auto align-[-0.3em] sm:inline-block"
          />
        </h1>
        <div className="-mt-1 flex justify-end sm:hidden" aria-hidden="true">
          <Image src="/images/quote-close.png" alt="" width={168} height={138} priority className="h-auto w-9" />
        </div>
      </div>
      <p className="text-base text-foreground sm:mt-14 sm:text-lg">Product Designer</p>
    </section>
  )
}
