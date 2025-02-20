import Logo from "@/assets/logo.svg";
import { IconButton } from "@/components/icon-button";
import { InputBox, InputContent, InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";
import Image from "next/image";

const Ranking = () => {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-10 md:gap-16">
      <Image
        alt="Logo devstage"
        className="mr-0 md:mr-auto"
        src={Logo}
        width={108.5}
        height={30}
      />
      <div className="flex w-full flex-col gap-10 md:flex-row md:gap-32">
        <div className="w-full space-y-7 md:space-y-10">
          <div className="space-y-2">
            <h1 className="font-heading text-2xl text-gray-100 md:text-4xl">
              Inscrição confirmada!
            </h1>
            <p className="text-sm text-gray-300 md:text-base">
              Para entrar no evento, acesse o link enviado para seu e-mail.
            </p>
          </div>
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-3">
              <h2 className="font-heading text-xl">Indique e Ganhe</h2>
              <p className="text-sm text-gray-300 md:text-base">
                Convide mais pessoas para o evento e concorra a prêmios
                exclusivos! É só compartilhar o link abaixo e acompanhar as
                inscrições:
              </p>
            </div>
            <InputRoot>
              <InputContent className="pr-2">
                <Link />
                <InputBox />
                <IconButton>
                  <Copy />
                </IconButton>
              </InputContent>
            </InputRoot>
            <div className="flex flex-col gap-2 sm:flex-row md:gap-3">
              <div className="relative w-full rounded-xl bg-gray-700 p-6 text-center ring-1 ring-gray-600">
                <h3 className="font-heading text-2xl font-semibold text-gray-200">
                  111
                </h3>
                <span className="text-sm text-gray-300">111</span>
              </div>
              <div className="relative w-full rounded-xl bg-gray-700 p-6 text-center ring-1 ring-gray-600">
                <h3 className="font-heading text-2xl font-semibold text-gray-200">
                  111
                </h3>
                <span className="text-sm text-gray-300">111</span>
              </div>
              <div className="relative w-full rounded-xl bg-gray-700 p-6 text-center ring-1 ring-gray-600">
                <h3 className="font-heading text-2xl font-semibold text-gray-200">
                  111
                </h3>
                <span className="text-sm text-gray-300">111</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full space-y-5 md:max-w-[440px]">
          <h2 className="font-heading text-xl">Ranking de indicações</h2>
          <div className="space-y-2 md:space-y-4">
            <div className="w-full rounded-xl bg-gray-700 p-6 pr-32 ring-1 ring-gray-600">
              <div>
                <p className="text-base text-gray-300">
                  <span className="font-bold">11</span> | Andre Souza
                </p>
                <div className="flex items-center gap-3">
                  <h4 className="font-heading text-2xl text-gray-200">1.123</h4>
                  <span className="rounded-md bg-gray-500 px-3 py-1 text-xs text-gray-300">
                    Voce
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
