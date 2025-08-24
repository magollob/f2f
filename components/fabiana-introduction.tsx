"use client"

import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

interface FabianaIntroductionProps {
  onComplete: () => void
}

export default function FabianaIntroduction({ onComplete }: FabianaIntroductionProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-pink-100 p-6">
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        {/* Logo */}
        <div className="text-center mb-6">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logopng.jpg-WlfURQ7V6GpoFrRr0iZJASoMyXw2lq.jpeg"
            alt="Confeitaria da Fabi"
            className="w-16 h-16 mx-auto rounded-full shadow-lg mb-4"
          />
        </div>

        {/* Title with Icon */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2">
            Prazer, meu nome é Fabiana Reis
            <User className="w-5 h-5 text-pink-500" />
          </h1>
        </div>

        {/* Fabiana's Photo */}
        <div className="text-center mb-6">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabiana-Reis.jpg-ePfAPxr4TbCOvAhjqmrT7CmkLnSrUX.jpeg"
            alt="Fabiana Reis"
            className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* First Text Block */}
        <div className="text-center mb-6 space-y-3">
          <p className="text-gray-700 leading-relaxed">
            <span className="font-medium">Prazer, meu nome é Fabiana Reis 🙏🏻</span>
          </p>
          <p className="text-gray-700 leading-relaxed">
            Em 2022, eu estava desempregada e{" "}
            <span className="text-red-600 font-medium">sem saber como ia pagar as contas do mês.</span>
          </p>
          <p className="text-gray-700 leading-relaxed">Assim como você, eu também não sabia por onde começar.</p>
          <p className="text-gray-700 leading-relaxed">Foi então que tive uma ideia simples:</p>
          <p className="text-gray-700 leading-relaxed">
            Transformar copinhos de doces em verdadeiras{" "}
            <span className="text-pink-600 font-medium">sobremesas gourmet</span>,{" "}
            <span className="text-orange-500 font-medium">lindas</span>,{" "}
            <span className="text-orange-500 font-medium">irresistíveis</span> e{" "}
            <span className="text-orange-500 font-medium">viciantes</span>.
          </p>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed mb-3">
            Na minha <span className="font-bold">primeira semana</span>{" "}
            <span className="font-bold underline">lucrei R$1.052</span>, vendendo só no grupo da cidade.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Hoje, faço mais de <span className="font-bold">R$12.750 por mês</span>, trabalhando da cozinha da minha{" "}
            <span className="font-bold">casa!</span>
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            E agora, eu quero te mostrar exatamente como você pode fazer o mesmo. Esse pode ser o seu ponto de virada.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            <span className="font-bold">Não é só sobre doces…</span>
          </p>
          <p className="text-gray-700 leading-relaxed">
            É sobre liberdade. <span className="text-pink-600 font-medium">Sobre cuidar da sua família</span>, realizar
            sonhos e nunca mais depender de ninguém.
          </p>
        </div>

        {/* CTA Button */}
        <Button
          onClick={onComplete}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 text-lg"
        >
          QUERO APRENDER O MÉTODO
        </Button>
      </div>
    </div>
  )
}
