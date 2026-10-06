import { cn } from '@/lib/utils'
import { PhoneMockup } from './phone-mockup'

type TagColor = 'yellow' | 'green' | 'pink' | 'cyan' | 'lilac'

type Project = {
  name: string
  description: string
  tags: { label: string; color: TagColor }[]
  image: string
  imageAlt: string
  href: string
  reversed?: boolean
}

const tagStyles: Record<TagColor, string> = {
  yellow: 'bg-tag-yellow',
  green: 'bg-tag-green',
  pink: 'bg-tag-pink',
  cyan: 'bg-tag-cyan',
  lilac: 'bg-tag-lilac',
}

const projects: Project[] = [
  {
    name: 'Pulse',
    description:
      'An emergency response mobile app designed for natural disasters. It features real-time safety alerts, interactive crisis maps, and a quick-access SOS button to instantly request help.',
    tags: [
      { label: 'UI/UX', color: 'yellow' },
      { label: 'MobileApp', color: 'green' },
      { label: 'ProductDesign', color: 'pink' },
      { label: 'EmergencyApp', color: 'cyan' },
      { label: 'SafetyApp', color: 'lilac' },
    ],
    image: '/images/pulse-mockup.png',
    imageAlt: 'Pulse app on an iPhone: "Ready for help" sign-in screen with Google and Apple buttons and a red SOS button',
    href: 'https://www.behance.net/gallery/255468353/Pulse-App-UX',
  },
  {
    name: 'Prytuluk',
    description:
      'A comprehensive platform uniting animal shelters across Ukraine. It allows users to easily find nearby shelters, browse and compare pets, connect directly with volunteers, and coordinate support.',
    tags: [
      { label: 'UI/UX', color: 'yellow' },
      { label: 'ProductDesign', color: 'pink' },
      { label: 'MobileApp', color: 'green' },
      { label: 'SocialImpact', color: 'cyan' },
      { label: 'PetApp', color: 'lilac' },
    ],
    image: '/images/prytuluk-mockup.png',
    imageAlt: 'Prytuluk app on an iPhone: Ukrainian onboarding screen with a winking golden retriever and sign-up buttons',
    href: 'https://www.behance.net/gallery/247498011/Prytulok-Pet-Adoption-App',
    reversed: true,
  },
]

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-32 px-4 sm:px-8 xl:px-20">
      <h2 id="projects-heading" className="text-center text-3xl text-foreground">
        Projects
      </h2>
      <div className="mx-auto mt-8 flex max-w-[1280px] flex-col gap-8 sm:gap-12 lg:mt-20 lg:gap-40">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const { reversed } = project

  return (
    <article
      aria-labelledby={`${project.name}-title`}
      className="flex flex-col items-center gap-6 rounded-[2rem] bg-card px-6 pt-8 pb-8 text-center sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:rounded-[4.5rem] lg:px-14 lg:py-0 lg:text-left xl:px-20"
    >
      <h3
        id={`${project.name}-title`}
        className={cn(
          'text-4xl font-normal text-foreground xl:text-5xl',
          reversed ? 'lg:order-3 lg:text-right' : 'lg:order-1',
        )}
      >
        {project.name}
      </h3>

      <div
        className={cn(
          'flex flex-col gap-10 lg:order-2 lg:items-center lg:gap-6 xl:gap-8',
          reversed ? 'lg:flex-row-reverse' : 'lg:flex-row',
        )}
      >
        <div className="flex flex-col gap-8 lg:w-[300px] lg:gap-6 xl:w-[370px] xl:gap-8">
          <p className="text-pretty text-lg leading-snug text-foreground xl:text-xl">{project.description}</p>
          <ul
            className="flex flex-wrap justify-center gap-x-3 gap-y-3.5 lg:justify-start"
            aria-label={`${project.name} tags`}
          >
            {project.tags.map((tag) => (
              <li
                key={tag.label}
                className={cn(
                  'rounded-full px-3.5 py-1.5 text-base text-foreground',
                  tagStyles[tag.color],
                )}
              >
                {tag.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:-my-8">
          <PhoneMockup src={project.image} alt={project.imageAlt} />
        </div>
      </div>

      <div className={cn('pt-4 lg:pt-0', reversed ? 'lg:order-1' : 'lg:order-3')}>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-b whitespace-nowrap border-foreground pb-0.5 text-2xl lg:text-lg text-foreground transition-colors hover:border-primary hover:text-primary xl:text-2xl"
        >
          View {project.name}
        </a>
      </div>
    </article>
  )
}
