import { ProjectCard, Shot, TelderiCollage, PhoneCollage, FurnishCollage } from "@/components/ProjectCard";
import { projects, projectImages } from "@/data/content";

const p = Object.fromEntries(projects.map((p) => [p.slug, p]));

export function Projects() {
  return (
    <section id="projects" className="container-content scroll-mt-24 py-8 md:py-12">
      <div className="flex flex-col gap-6">
        {/* Telderi — collage of 3 screens */}
        <ProjectCard
          variant="wide"
          href={p.telderi.href}
          title={p.telderi.title}
          subtitle={p.telderi.subtitle}
          visual={<TelderiCollage images={projectImages.telderi} />}
        />

        {/* EventPanel — single wide dashboard shot */}
        <ProjectCard
          variant="wide"
          href={p["event-panel"].href}
          title={p["event-panel"].title}
          subtitle={p["event-panel"].subtitle}
          visual={
            <Shot
              src={projectImages["event-panel"][0]}
              alt="EventPanel — дашборд аналитики"
              fit="cover"
              position="top"
            />
          }
        />

        {/* Fleep.bot + Furnish — two stacked (mobile) cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            variant="stack"
            href={p["fleep-bot"].href}
            title={p["fleep-bot"].title}
            subtitle={p["fleep-bot"].subtitle}
            visual={
              <PhoneCollage
                images={projectImages["fleep-bot"].slice(0, 3)}
                alts={["Fleep.bot — настройки", "Fleep.bot — главный экран", "Fleep.bot — темы"]}
              />
            }
          />
          <ProjectCard
            variant="stack"
            href={p.furnish.href}
            title={p.furnish.title}
            subtitle={p.furnish.subtitle}
            visual={
              <FurnishCollage
                images={projectImages.furnish}
                alts={["Furnish — онбординг", "Furnish — каталог"]}
              />
            }
          />
        </div>

        {/* Geonode — wide screenshot */}
        <ProjectCard
          variant="wide"
          href={p.geonode.href}
          title={p.geonode.title}
          subtitle={p.geonode.subtitle}
          visual={
            <Shot
              src={projectImages.geonode[0]}
              alt="Geonode — B2B SaaS платформа"
              fit="cover"
              position="top"
            />
          }
        />
      </div>
    </section>
  );
}
