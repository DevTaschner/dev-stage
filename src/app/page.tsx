import Logo from "@/assets/logo.svg";
import { Button } from "@/components/button";
import {
  InputBox,
  InputContent,
  InputMessage,
  InputRoot,
} from "@/components/input";
import { ArrowRight, Mail, Radio, User } from "lucide-react";
import Image from "next/image";
const Home = () => {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-16">
      <div className="w-full space-y-5 text-center md:text-start">
        <Image
          alt="Logo devstage"
          src={Logo}
          width={108.5}
          height={30}
          className="mx-auto h-[24px] w-[86.8px] md:mx-0 md:h-auto md:w-auto"
        />
        <h1 className="font-heading flex flex-col text-4xl leading-none font-medium text-gray-100 md:text-7xl">
          <span className="text-blue">CodeCraft</span> Summit 2025
        </h1>
      </div>
      <div className="flex w-full flex-col items-stretch gap-4 md:gap-8 lg:flex-row">
        <section className="flex-1 space-y-6 rounded-2xl bg-gray-700 p-8 ring-1 ring-gray-600">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl font-semibold">
              Sobre o evento
            </h2>
            <span className="text-purple flex items-center gap-2 text-xs font-bold">
              <Radio size={20} /> AO VIVO
            </span>
          </div>
          <p className="text-sm leading-relaxed font-medium text-gray-300 md:text-base">
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
            <br />
            <br />
            Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
          </p>
        </section>
        <form
          action=""
          className="w-full space-y-6 rounded-2xl bg-gray-700 p-8 ring-1 ring-gray-600 lg:max-w-[440px]"
        >
          <h2 className="font-heading text-xl font-semibold text-gray-200">
            Inscrição
          </h2>
          <div className="space-y-3">
            <InputRoot>
              <InputContent>
                <User />
                <InputBox type="text" placeholder="Nome completo" />
              </InputContent>
              <InputMessage>teste</InputMessage>
            </InputRoot>
            <InputRoot>
              <InputContent>
                <Mail />
                <InputBox type="email" placeholder="E-mail" />
              </InputContent>
            </InputRoot>
          </div>
          <Button>
            Confirmar
            <ArrowRight size={24} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
