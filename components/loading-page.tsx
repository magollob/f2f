"use client"

import { useEffect, useState } from "react"

interface LoadingPageProps {
  onComplete: () => void
}

export default function LoadingPage({ onComplete }: LoadingPageProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 100)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-pink-100 p-6">
      <div className="text-center max-w-sm mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logopng.jpg-WlfURQ7V6GpoFrRr0iZJASoMyXw2lq.jpeg"
            alt="Confeitaria da Fabi"
            className="w-24 h-24 mx-auto rounded-full shadow-lg"
          />
        </div>

        {/* Loading Text */}
        <h2 className="text-xl font-bold text-gray-800 mb-8">Preparando sua jornada doce...</h2>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div
            className="bg-gradient-to-r from-pink-400 to-pink-600 h-3 rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-sm text-gray-600">{progress}% concluído</p>
      </div>
    </div>
  )
}
