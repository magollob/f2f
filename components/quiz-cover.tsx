"use client"

import { Button } from "@/components/ui/button"

interface QuizCoverProps {
  onComplete: () => void
}

export default function QuizCover({ onComplete }: QuizCoverProps) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fd7ab1 0%, #ffffff 50%, #fd7ab1 100%)' }}>
      {/* <CHANGE> Adicionando balões flutuantes decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-32 right-16 w-12 h-12 bg-white/15 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-60 left-20 w-8 h-8 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '2.5s' }}></div>
        <div className="absolute bottom-40 right-8 w-20 h-20 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
        <div className="absolute bottom-60 left-12 w-14 h-14 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}></div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center max-w-md mx-auto w-full p-6 relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logopng.jpg-WlfURQ7V6GpoFrRr0iZJASoMyXw2lq.jpeg"
            alt="Confeitaria da Fabi"
            className="w-28 h-28 mx-auto rounded-full shadow-2xl border-4 border-white/50"
          />
        </div>

        {/* <CHANGE> Novo texto conforme solicitado */}
        <div className="text-center mb-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-2" style={{ color: '#4e2f1e' }}>
              ✨ Viver de Doces ✨
            </h1>
            <h2 className="text-lg font-semibold" style={{ color: '#fd7ab1' }}>
              Confeitaria Lucrativa 💕
            </h2>
          </div>

          <h3 className="text-xl font-bold mb-6 leading-tight" style={{ color: '#4e2f1e' }}>
            VOCÊ ESTÁ PRONTA PARA DESCOBRIR COMO VIVER DA SUA PAIXÃO PELA CONFEITARIA?
          </h3>

          <p className="text-sm mb-4" style={{ color: '#4e2f1e' }}>
            Aprenda a fazer os doces que as confeiteiras mais vendem em 2025.
          </p>

          <p className="text-sm mb-6" style={{ color: '#4e2f1e' }}>
            🍰 Clique no botão abaixo e descubra se esse mesmo método também pode mudar a sua vida:
          </p>
        </div>

        {/* CTA Button */}
        <Button
          onClick={onComplete}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 text-lg border-2 border-white/30 h-16"
        >
          QUERO DESCOBRIR AGORA!
        </Button>
      </div>
    </div>
  )
}
