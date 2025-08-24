"use client"

import { useState } from "react"
import QuizCover from "@/components/quiz-cover"
import Quiz from "@/components/quiz"
import LoadingPage from "@/components/loading-page"
import SalesPage from "@/components/sales-page"

export default function Home() {
  // <CHANGE> Removendo página de introdução separada, agora faz parte do quiz
  const [currentPage, setCurrentPage] = useState<"cover" | "quiz" | "loading" | "sales">("cover")

  const handleCoverComplete = () => {
    setCurrentPage("quiz")
  }

  const handleQuizComplete = () => {
    setCurrentPage("loading")
  }

  const handleLoadingComplete = () => {
    setCurrentPage("sales")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      {currentPage === "cover" && <QuizCover onComplete={handleCoverComplete} />}
      {currentPage === "quiz" && <Quiz onComplete={handleQuizComplete} />}
      {currentPage === "loading" && <LoadingPage onComplete={handleLoadingComplete} />}
      {currentPage === "sales" && <SalesPage />}
    </div>
  )
}
