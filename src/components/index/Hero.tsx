import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

import SocialIcon from "@/components/SocialIcon";

export default function Hero({ inView, descRef }: { inView: boolean, descRef: any }) {
  return (
    <>
      <section className="max-w-4xl w-full flex flex-col mx-auto pt-44">
        <motion.div
          className="relative sm:p-12 p-6 w-full flex flex-col bg-gradient-to-br from-primary to to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background"
          initial={{ transform: 'translateY(30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
          ref={descRef}
        >
          <h1 className="font-leaguespartan font-bold lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-text">
            Olá, Eu sou Lucas<span className="sm:hidden inline-block animate-wave ml-2">👋</span><span className="font-leaguespartan font-bold text-xl text-text brightness-50 italic sm:inline flex"> aka devinio</span><span className="sm:inline-block hidden animate-wave ml-2">👋</span>
          </h1>
          <p className="font-leaguespartan font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg text-text">
            {inView &&
              <Typewriter
                options={{
                  delay: 30,
                  strings: ["Sou um entusiasta da programação de 20 anos morando no Brasil, trabalho como ajudante de vidraceiro e o tempo que sobra que e sábado e domingo estou me aperfeiçoando cada dia mais na programação das novas frameworks do mercado."],
                  loop: false,
                  autoStart: true,
                  deleteSpeed: 604800000,
                }}
              />}
          </p>
          <ul className="flex flex-row flex-wrap gap-2 mt-2">
            <SocialIcon
              url="https://painelunknowbr.eu.org"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 14 14"><path fill="white" fill-rule="evenodd" d="m7.671 2.743l-.964.964a1 1 0 0 1-1.414-1.414l.964-.965a4.536 4.536 0 0 1 6.415 6.415l-.965.964a1 1 0 1 1-1.414-1.414l.964-.965a2.536 2.536 0 0 0-3.585-3.585Zm-3.964 2.55a1 1 0 0 1 0 1.414l-.964.965a2.536 2.536 0 0 0 3.585 3.585l.965-.964a1 1 0 0 1 1.414 1.414l-.964.964a4.536 4.536 0 0 1-6.415-6.414l.965-.964a1 1 0 0 1 1.414 0m5.5.914a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414z" clip-rule="evenodd"/></svg>}
              delay={0.3}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/lucas-enio-dev/"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#0a66c2" rx="60"/><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"/></g></svg>}
              delay={0.4}
            />
            <SocialIcon
              url="https://github.com/hex034"
              icon={<svg role="img" className="h-7 w-7 fill-[#ffffff]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>}
              delay={0.5}
            />
            
            <SocialIcon
              url="mailto:contato@spgunk.eu.org"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 fill-white' viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" /><path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" /></svg>}
              delay={0.7}
            />
            <SocialIcon
              url="https://t.me/hex034"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 14 14"><path fill="#00bfff" fill-rule="evenodd" d="M.25 7a6.75 6.75 0 1 1 13.5 0A6.75 6.75 0 0 1 .25 7m9.002 4.064l1.045-7.932l-8.165 3.935l2.417.876l2.686-2.076a.5.5 0 1 1 .611.792L5.618 8.38v2.726l1.685-1.604z" clip-rule="evenodd"/></svg>}
              delay={0.7}
            />
            <SocialIcon
              url="https://steamcommunity.com/id/hex_034"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><path fill="#c5c3c0" d="M15.974 0C7.573 0 .682 6.479.031 14.714l8.573 3.547a4.521 4.521 0 0 1 2.552-.786c.083 0 .167.005.25.005l3.813-5.521v-.078c0-3.328 2.703-6.031 6.031-6.031s6.036 2.708 6.036 6.036a6.039 6.039 0 0 1-6.036 6.031h-.135l-5.438 3.88c0 .073.005.141.005.214c0 2.5-2.021 4.526-4.521 4.526c-2.177 0-4.021-1.563-4.443-3.635L.583 20.36c1.901 6.719 8.063 11.641 15.391 11.641c8.833 0 15.995-7.161 15.995-16s-7.161-16-15.995-16zm-5.922 24.281l-1.964-.813a3.413 3.413 0 0 0 1.755 1.667a3.404 3.404 0 0 0 4.443-1.833a3.38 3.38 0 0 0 .005-2.599a3.36 3.36 0 0 0-1.839-1.844a3.38 3.38 0 0 0-2.5-.042l2.026.839c1.276.536 1.88 2 1.349 3.276s-2 1.88-3.276 1.349zm15.219-12.406a4.025 4.025 0 0 0-4.016-4.021a4.02 4.02 0 1 0 0 8.042a4.022 4.022 0 0 0 4.016-4.021m-7.026-.005c0-1.672 1.349-3.021 3.016-3.021s3.026 1.349 3.026 3.021c0 1.667-1.359 3.021-3.026 3.021s-3.016-1.354-3.016-3.021"/></svg>}
              delay={0.7}
            />
            <SocialIcon
              url="https://hex034.mysellix.io/pay/830483-4cd7751842-73a511"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><path fill="white" d="M2 22h28v2H2zm0 4h28v2H2zm22-16a2 2 0 1 0 2 2a2 2 0 0 0-2-2m-8 6a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2m-8 0a2 2 0 1 0 2 2a2 2 0 0 0-2-2"/><path fill="white" d="M28 20H4a2.005 2.005 0 0 1-2-2V6a2.005 2.005 0 0 1 2-2h24a2.005 2.005 0 0 1 2 2v12a2.003 2.003 0 0 1-2 2m0-14H4v12h24Z"/></svg>}
              delay={0.7}
            />
          </ul>
        </motion.div>
      </section>
    </>
  );
}
