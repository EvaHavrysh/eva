import Image from 'next/image'

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-32 px-4 pt-20 pb-20 sm:px-8 lg:pt-56 lg:pb-32 xl:px-20"
    >
      <h2 id="about-heading" className="text-center text-3xl text-foreground">
        About
      </h2>
      <div className="mx-auto mt-8 flex max-w-[1280px] flex-col items-center gap-8 rounded-[2rem] bg-card px-6 pt-8 pb-10 text-center sm:p-10 md:flex-row md:items-start md:text-left md:gap-10 lg:mt-20 lg:rounded-[4.5rem] lg:gap-16 lg:pt-12 lg:pr-12 lg:pb-28 lg:pl-12 xl:gap-[4.5rem]">
        <Image
          src="/images/eva-avatar-real.png"
          alt="Portrait of Eva"
          width={462}
          height={462}
          sizes="208px"
          className="size-[48vw] max-w-52 max-h-52 shrink-0 rounded-full sm:size-44 xl:size-52"
        />

        <div className="max-w-[720px] md:pt-10 xl:pt-20">
          <p className="text-3xl text-foreground sm:text-4xl xl:text-[2.75rem] xl:leading-tight">
            {"Hi, I'm Eva - Product Designer"}
          </p>
          <p className="mt-5 text-pretty text-lg leading-snug text-foreground xl:text-xl">
            I focus on creating clean, functional, and user-centered digital products that actually work. My approach
            goes beyond just visual design: I care deeply about logic, structure, and real-world usefulness from the
            first wireframe in Figma to a fully responsive layout. As the founder of{' '}
            <strong className="font-semibold text-primary">AZO</strong>, I bring a holistic, business-driven
            perspective to every project I build.
          </p>

          <h3 className="mt-10 text-2xl font-normal text-foreground xl:text-3xl">My Toolbox &amp; Skills:</h3>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 sm:gap-14">
            <p className="text-lg leading-snug text-foreground xl:text-xl">
              <span className="block font-semibold text-primary sm:inline">Tech &amp; Tools:</span> Experienced with Storybook for
              design systems, GitHub for version control and deployment, and integrating AI workflows to speed up
              development and problem-solving.
            </p>
            <p className="text-lg leading-snug text-foreground xl:text-xl">
              <span className="block font-semibold text-primary sm:inline">Design &amp; Layout:</span> Advanced Figma, Auto Layout,
              responsive design, wireframing, and user flows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
