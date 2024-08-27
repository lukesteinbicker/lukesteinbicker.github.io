export default function Proficiency() {

  const libraries = [
    { src: "/lucia.svg", alt: 'Lucia', link: "https://lucia-auth.com"},
    { src: "/keras.svg", alt: 'Keras', link: "https://keras.io/" },
    { src: "/react.svg", alt: 'React', link: "https://react.dev/" },
    { src: "/pandas.svg", alt: 'pandas', link: "https://pandas.pydata.org/" },
    { src: "/selenium.svg", alt: 'Selenium', link: "https://selenium.dev/" },
    { src: "/motion.svg", alt: 'Framer Motion', link: "https://www.framer.com/motion/" },
    { src: "/tailwind.svg", alt: 'TailwindCSS', link: "https://tailwindcss.com/"}
  ]

  const frameworks = [
    { src: "/next.svg", alt: 'NextJS', link: "https://nextjs.org/" },
    { src: "/astro.svg", alt: 'Astro', link: "https://astro.build/" }
  ]

  const languages = [
    { src: "/typescript.svg", alt: 'TypeScript', link: "https://typescriptlang.org/" },
    { src: "/python.svg", alt: 'Python', link: "https://www.python.org/" }
  ]

  return (
    <div className="pt-14 px-4">
    <h2 className="text-foreground text-center p-2">Libraries</h2>
    <div className="w-full overflow-hidden relative">
    <div className="inline-flex flex-nowrap animate-infinite-scroll hover:animate-paused">
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
      {libraries.map((library, index) => (
        <li key={index}>
          <a href={library.link}>
            <img src={library.src} alt={library.alt} className="h-12"/>
          </a>
        </li>
      ))}
      {libraries.map((library, index) => (
        <li key={index}>
          <a href={library.link}>
            <img src={library.src} alt={library.alt} className="h-12"/>
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>
    <h2 className="text-foreground text-center p-2">Frameworks</h2>
    <div className="w-full overflow-hidden relative">
    <div className="inline-flex flex-nowrap animate-infinite-scroll animate-paused">
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
  {frameworks.map((framework, index) => (
    <li key={index}>
    <a href={framework.link}>
      <img src={framework.src} alt={framework.alt} className="h-12"/>
      </a>
    </li>
  ))}
</ul>
</div>
</div>
<h2 className="text-foreground text-center p-2">Languages</h2>
<div className="w-full overflow-hidden relative">
    <div className="inline-flex flex-nowrap animate-infinite-scroll animate-paused">
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
        {languages.map((language, index) => (
          <li key={index}>
            <a href={language.link}>
            <img src={language.src} alt={language.alt} className="h-12"/>
            </a>
          </li>
        ))}
      </ul>
      </div>
</div>
</div>
  )
}