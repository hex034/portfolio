import AboutCard from "@/components/AboutCard";
import { Tech } from "../../../typings";
import { motion } from "framer-motion";

export default function About() {

  let frontendTech: Tech[] = [
    { title: "HTML", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /> },
    { title: "CSS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /> },
    { title: "TailwindCSS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" /> },
    { title: "React", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /> },
    { title: "NextJS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" /> },
  ]

  let backendTech: Tech[] = [
    { title: "JavaScript", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /> },
    { title: "TypeScript", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /> },
    { title: "NodeJS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /> },
    { title: "MongoDB", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" /> },
    { title: "DiscordJS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg" /> },
    { title: "Fastify", icon: <img draggable={false} loading="lazy" className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/g9j04tdrsj5wwzw76d.png" /> },
  ]

  let otherTech: Tech[] = [
    { title: "Git", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /> },
    { title: "Github", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /> },
    { title: "NPM", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" /> },
    { title: "Visual Studio Code", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" /> },
    { title: "Insomnia", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/qr3zqlfckx6hkdj0nl.png" /> },
    { title: "Cloudflare", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/me2uv8xk95n010sdwz.png" /> },
    { title: "Hetzner", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/q4dzhs1beprvugs13m.png" /> },
    { title: "Porkbun", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/z3xmhz3k1rc24l433c.png" /> },
    { title: "Vercel", icon: <svg className="h-6 w-6 fill-[#000000]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 22.525H0l12-21.05 12 21.05z" /></svg> },
    { title: "Linux", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" /> },
    { title: "Netlify", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" /> },
  ]

  return (
    <>
      <section id='about' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="font-leaguespartan text-center font-bold text-5xl text-text mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        > Sobre
        </motion.h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          <AboutCard
            title="Geral"
            description="Tenho interesse em programação desde os meus 13 anos no ano de 2016 e aos 14 fiz uma participação de um pequeno curso em minha escola municipal que  ensinava logica de programação, assim finalizando o mini curso e recebendo o certificado e um prémio que foi um notebook por ficar em primeiro, e dai pra frente comecei a pesquisar sobre programação e me aprofundei ainda mais sobre, quando foi no final do ano de 2017 o notebook estragou e assim sem condições para arrumar fiquei sem notebook por bastante tempo, quando entrei em um curso de administração que durou 2 anos e finalizei o curso em 2019 e depois que sai do curso fui trabalhar como menor aprendiz e ficando 1 anos porem veio a pandemia em 2020 e diveram que desligarem todos os menores aprendizes daquele ano, e assim fiquei sem serviço e comecei trabalhar capinando lotes e catando entulho para comprar um notebook e assim fiz, comprei um notebook de um amigo por 250 reais e esta me servindo ate hoje só coloquei 8GB de memória RAM (já que o de antes era de 2GB) e coloquei um sdd já que era HD, ate que esta bom porem se eu abrir mais de 3 abas o notebook já crasha. Depois que comprei o notebook entrei pro exercito em 2023 e assim ficando 6 meses la porem acabei deslocando o joelho e sendo desencorporado e indo trabalhar, não fichado, como ajudante de vidraceiro hoje em dia sigo firme e forte na programação e não pretendo parar... (No mundo não existe limite você cria ela. by devinio)."
            direction="top"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="Front-End"
            description="Tenho nenhum curso ou formação em front-end porem tenho estudado bastante essas ferramentas pela internet e como ela funciona, e foi dai que saiu algumas sites criados com essas ferramentas."
            tech={frontendTech}
            direction="left"
            span={1}
            delay={0.15}
            gradient="bg-gradient-to-br"
          />
          <AboutCard
            title="Back-End"
            description="Outra ferramenta que gosto bastante de mexer porem e meio complicada mais estou aprendendo a mexer com api e outras coisas com elas. ja estou estudando mais sobre back-end e ja estou tendo resultado."
            tech={backendTech}
            direction="right"
            span={1}
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="Outras tecnologias"
            description="Quando se trata do processo de desenvolvimento, utilizo algumas dessas ferramentas, serviços e de tecnologias."
            tech={otherTech}
            direction="bottom"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-t"
          />
        </ul>
      </section>
    </>
  );
}
