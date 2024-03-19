import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <section id='projects' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="font-leaguespartan text-center font-bold text-5xl text-text mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          Projetos
        </motion.h1>
        <ul className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <ProjectCard
            url="https://unkn0wbr.eu.org"
            title="Unkn0wbr.eu.org"
            description="Unkn0wbr.eu.org e um gerador de senhas aleatorias e segura.. crie quandas senhas quiser sem custos algum."
            image="strong.png"
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://hex034.github.io/projeto/"
            title="My Social Links"
            description="My Social Links e um projeto da aula Discover da RocketSeat utilizando Figma, HTML, CSS e JavaScript. (Fiz algumas coisas a mais do que o necessario)"
            image="Cover.png"
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
          <ProjectCard
            url="https://habits.spgunk.eu.org/"
            title="Meta Diaria"
            description="Meta Diaria e um registro de habitos criando com front-end e back-end, fazendo um cadastro de seus habitos e colocando a data do que fez no dia, registrando no servidor  (Projeto não disponivel no momento)."
            image="meta.png"
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
          <ProjectCard
            url="https://painelunknowbr.eu.org"
            title="Painelunknowbr.eu.org"
            description="Painelunknowbr.eu.org e um site que criei que tem todos os meus links ativos no momento, caso tenha algum inativo colocarei la."
            image="painel.png"
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <ProjectCard
            url="https://spgubr.eu.org"
            title="Spgubr.eu.org"
            description="Spgubr.eu.org foi criado com nodejs, react, tailwindcss e webpack para aprendizado. (estava començando a programar nas novas liguagens)."
            image="819274jaskd.png"
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
          
          <ProjectCard
            url="https://adminpainelunknowbr.eu.org"
            title="Spotify-Clone"
            description="Spotify-Clone foi meu primeiro site com alguns novos frameworks. (Aula feita pela RocketSeat no YouTube)"
            image="admin.png"
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
          <ProjectCard
            url="https://unkn0w404br.eu.org/"
            title="unkn0w404br.eu.org"
            description="Em Breve..."
            image="error.png"
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://unkn0wbr404.eu.org/"
            title="unkn0wbr404.eu.org"
            description="Em Breve..."
            image="error.png"
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
        </ul>
      </section>
    </>
  );
}
