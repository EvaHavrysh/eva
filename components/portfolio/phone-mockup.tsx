import Image from 'next/image'

type PhoneMockupProps = {
  src: string
  alt: string
}

export function PhoneMockup({ src, alt }: PhoneMockupProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={666}
      height={1398}
      sizes="(min-width: 1280px) 300px, 260px"
      className="h-auto w-[56vw] max-w-[230px] shrink-0 sm:w-[260px] sm:max-w-none drop-shadow-[0_18px_30px_rgba(10,43,84,0.18)] sm:w-[260px] xl:w-[300px]"
    />
  )
}
