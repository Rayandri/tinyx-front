"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Types pour les données fictives
type User = {
  id: string
  name: string
  username: string
  avatar: string
}

type Tweet = {
  id: string
  content: string
  user: User
  likes: number
  retweets: number
  comments: number
  time: string
  image?: string
}

type Trend = {
  id: string
  name: string
  tweets: number
  category: string
}

type Suggestion = {
  id: string
  user: User
}

export default function DashboardPage() {
  const router = useRouter()
  const [tweetContent, setTweetContent] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("for-you")

  // Utilisateur actuel (fictif)
  const currentUser: User = {
    id: "1",
    name: "Jean Dupont",
    username: "jeandupont",
    avatar: "/placeholder.svg?height=48&width=48",
  }

  // Données fictives pour les tweets
  const tweets: Tweet[] = [
    {
      id: "1",
      content:
        "Bonjour à tous ! Voici mon premier tweet sur cette plateforme. J'espère que vous allez bien aujourd'hui. #PremierTweet",
      user: {
        id: "2",
        name: "Marie Martin",
        username: "mariemartin",
        avatar: "/placeholder.svg?height=48&width=48&text=MM",
      },
      likes: 15,
      retweets: 3,
      comments: 2,
      time: "2h",
      image: "/placeholder.svg?height=300&width=500&text=Image",
    },
    {
      id: "2",
      content: "Je viens de terminer un nouveau projet ! Très fier du résultat. #Développement #WebDev",
      user: {
        id: "3",
        name: "Pierre Dubois",
        username: "pierredubois",
        avatar: "/placeholder.svg?height=48&width=48&text=PD",
      },
      likes: 42,
      retweets: 7,
      comments: 5,
      time: "5h",
    },
    {
      id: "3",
      content:
        "Quelqu'un a des recommandations de livres sur le développement web ? Je cherche à approfondir mes connaissances en JavaScript.",
      user: {
        id: "4",
        name: "Sophie Leroy",
        username: "sophieleroy",
        avatar: "/placeholder.svg?height=48&width=48&text=SL",
      },
      likes: 8,
      retweets: 1,
      comments: 12,
      time: "8h",
    },
    {
      id: "4",
      content:
        "Je viens de voir une conférence incroyable sur l'avenir de l'IA. Les possibilités sont infinies ! #IA #Technologie",
      user: currentUser,
      likes: 27,
      retweets: 5,
      comments: 3,
      time: "1j",
    },
    {
      id: "5",
      content:
        "Nouveau tutoriel disponible sur mon site ! Apprenez à créer une application avec Next.js et Tailwind CSS. Lien dans ma bio. #NextJS #TailwindCSS",
      user: {
        id: "5",
        name: "Thomas Bernard",
        username: "thomasbernard",
        avatar: "/placeholder.svg?height=48&width=48&text=TB",
      },
      likes: 56,
      retweets: 14,
      comments: 8,
      time: "1j",
      image: "/placeholder.svg?height=300&width=500&text=Tutoriel",
    },
  ]

  // Données fictives pour les tendances
  const trends: Trend[] = [
    { id: "1", name: "Développement Web", tweets: 5240, category: "Technologie" },
    { id: "2", name: "JavaScript", tweets: 3120, category: "Programmation" },
    { id: "3", name: "React", tweets: 2890, category: "Programmation" },
    { id: "4", name: "Next.js", tweets: 1560, category: "Technologie" },
    { id: "5", name: "Tailwind CSS", tweets: 980, category: "Design" },
  ]

  // Données fictives pour les suggestions
  const suggestions: Suggestion[] = [
    {
      id: "1",
      user: {
        id: "6",
        name: "Emma Petit",
        username: "emmapetit",
        avatar: "/placeholder.svg?height=48&width=48&text=EP",
      },
    },
    {
      id: "2",
      user: {
        id: "7",
        name: "Lucas Moreau",
        username: "lucasmoreau",
        avatar: "/placeholder.svg?height=48&width=48&text=LM",
      },
    },
    {
      id: "3",
      user: {
        id: "8",
        name: "Camille Roux",
        username: "camilleroux",
        avatar: "/placeholder.svg?height=48&width=48&text=CR",
      },
    },
  ]

  const handleTweet = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!tweetContent.trim()) return

    setIsLoading(true)

    try {
      // Simulation d'envoi de tweet
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Réinitialiser le formulaire
      setTweetContent("")

      // Dans une vraie application, on ajouterait le tweet à la liste
      console.log("Tweet publié:", tweetContent)
    } catch (error) {
      console.error("Erreur lors de la publication:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Barre de navigation mobile */}
      <div className="md:hidden flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <img src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} className="h-8 w-8 rounded-full" />
        </div>
        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white">
          <span className="text-sm font-bold">S</span>
        </div>
        <button className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="flex">
        {/* Barre latérale de navigation */}
        <div className="hidden md:flex md:w-64 lg:w-72 flex-col h-screen p-4 border-r sticky top-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mb-6">
            <span className="text-xl font-bold">S</span>
          </div>

          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center px-4 py-2 text-lg font-semibold text-blue-500 rounded-full hover:bg-blue-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Accueil
            </Link>
            <Link
              href="#"
              className="flex items-center px-4 py-2 text-lg font-medium text-gray-700 rounded-full hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                />
              </svg>
              Explorer
            </Link>
            <Link
              href="#"
              className="flex items-center px-4 py-2 text-lg font-medium text-gray-700 rounded-full hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              Notifications
            </Link>
            <Link
              href="#"
              className="flex items-center px-4 py-2 text-lg font-medium text-gray-700 rounded-full hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Messages
            </Link>
            <Link
              href="#"
              className="flex items-center px-4 py-2 text-lg font-medium text-gray-700 rounded-full hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
              Signets
            </Link>
            <Link
              href="profil"
              className="flex items-center px-4 py-2 text-lg font-medium text-gray-700 rounded-full hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Profil
            </Link>
            <Link
              href="#"
              className="flex items-center px-4 py-2 text-lg font-medium text-gray-700 rounded-full hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Plus
            </Link>
          </nav>

          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full w-full">
            Publier
          </button>

          <div className="mt-auto flex items-center p-4 rounded-full hover:bg-gray-100 cursor-pointer">
            <img
              src={currentUser.avatar || "/placeholder.svg"}
              alt={currentUser.name}
              className="h-10 w-10 rounded-full mr-3"
            />
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm truncate">{currentUser.name}</p>
              <p className="text-gray-500 text-sm truncate">@{currentUser.username}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="flex-1 border-r min-h-screen">
          {/* En-tête */}
          <div className="hidden md:flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10 text-black">
            <h1 className="text-xl font-bold">Accueil</h1>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
              </svg>
            </button>
          </div>

          {/* Onglets */}
          <div className="flex border-b text-black">
            <button
              className={`flex-1 py-4 text-center font-medium relative ${activeTab === "for-you" ? "font-bold" : "text-gray-500 hover:bg-gray-50"}`}
              onClick={() => setActiveTab("for-you")}
            >
              Pour vous
              {activeTab === "for-you" && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
              )}
            </button>
            <button
              className={`flex-1 py-4 text-center font-medium relative ${activeTab === "following" ? "font-bold" : "text-gray-500 hover:bg-gray-50"}`}
              onClick={() => setActiveTab("following")}
            >
              Abonnements
              {activeTab === "following" && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
              )}
            </button>
          </div>

          {/* Formulaire de tweet */}
          <div className="p-4 border-b text-black">
            <div className="flex">
              <img
                src={currentUser.avatar || "/placeholder.svg"}
                alt={currentUser.name}
                className="h-12 w-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <form onSubmit={handleTweet}>
                  <textarea
                    placeholder="Quoi de neuf ?"
                    className="w-full border-0 focus:ring-0 text-lg resize-none mb-4 h-24"
                    value={tweetContent}
                    onChange={(e) => setTweetContent(e.target.value)}
                  ></textarea>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2 text-blue-500">
                      <button type="button" className="p-2 rounded-full hover:bg-blue-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button type="button" className="p-2 rounded-full hover:bg-blue-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button type="button" className="p-2 rounded-full hover:bg-blue-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <button
                      type="submit"
                      disabled={!tweetContent.trim() || isLoading}
                      className={`px-4 py-2 bg-blue-500 text-white font-bold rounded-full ${
                        !tweetContent.trim() || isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                      }`}
                    >
                      {isLoading ? "Publication..." : "Publier"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Liste des tweets */}
          <div>
            {activeTab === "for-you" ? (
              tweets.map((tweet) => (
                <div key={tweet.id} className="p-4 border-b text-black hover:bg-gray-50">
                  <div className="flex">
                    <img
                      src={tweet.user.avatar || "/placeholder.svg"}
                      alt={tweet.user.name}
                      className="h-12 w-12 rounded-full mr-3"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center">
                        <span className="font-bold mr-1">{tweet.user.name}</span>
                        <span className="text-gray-500">@{tweet.user.username}</span>
                        <span className="mx-1 text-gray-500">·</span>
                        <span className="text-gray-500">{tweet.time}</span>
                      </div>
                      <p className="mt-1 mb-2">{tweet.content}</p>

                      {tweet.image && (
                        <div className="mt-3 mb-3 rounded-xl overflow-hidden">
                          <img
                            src={tweet.image || "/placeholder.svg"}
                            alt="Tweet image"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      )}

                      <div className="flex justify-between mt-3 max-w-md">
                        <button className="flex items-center text-gray-500 hover:text-blue-500 group">
                          <div className="p-2 rounded-full group-hover:bg-blue-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                            </svg>
                          </div>
                          <span className="ml-1 text-sm">{tweet.comments}</span>
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-green-500 group">
                          <div className="p-2 rounded-full group-hover:bg-green-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                              />
                            </svg>
                          </div>
                          <span className="ml-1 text-sm">{tweet.retweets}</span>
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-red-500 group">
                          <div className="p-2 rounded-full group-hover:bg-red-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          </div>
                          <span className="ml-1 text-sm">{tweet.likes}</span>
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-blue-500 group">
                          <div className="p-2 rounded-full group-hover:bg-blue-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                <h2 className="text-2xl font-bold mb-2">Suivez des comptes</h2>
                <p className="text-gray-500 mb-6 max-w-md">
                  Lorsque vous suivez quelqu'un, vous verrez ses publications ici.
                </p>
                <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600">
                  Découvrir des comptes à suivre
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Barre latérale droite */}
        <div className="hidden lg:block lg:w-80 xl:w-96 p-4 sticky text-black top-0 h-screen overflow-y-auto">
          {/* Barre de recherche */}
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Rechercher"
              className="bg-gray-100 h-10 py-2 pl-10 pr-4 rounded-full w-full border-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tendances */}
          <div className="bg-gray-50 rounded-2xl  mb-4">
            <div className="px-4 py-3 border-b border-gray-200">
              <h2 className="text-xl font-bold">Tendances pour vous</h2>
            </div>

            {trends.map((trend) => (
              <div key={trend.id} className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs text-gray-500">{trend.category} · Tendance</p>
                    <p className="font-bold">{trend.name}</p>
                    <p className="text-xs text-gray-500">{trend.tweets.toLocaleString()} tweets</p>
                  </div>
                  <button className="p-2 rounded-full hover:bg-blue-100 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            <div className="px-4 py-3 text-blue-500 hover:bg-gray-100 cursor-pointer rounded-b-2xl">
              <span>Voir plus</span>
            </div>
          </div>

          {/* Suggestions */}
          <div className="bg-gray-50 rounded-2xl mb-4">
            <div className="px-4 py-3 border-b border-gray-200">
              <h2 className="text-xl font-bold">Suggestions de comptes</h2>
            </div>

            {suggestions.map((suggestion) => (
              <div key={suggestion.id} className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center">
                  <img
                    src={suggestion.user.avatar || "/placeholder.svg"}
                    alt={suggestion.user.name}
                    className="h-12 w-12 rounded-full mr-3"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold truncate">{suggestion.user.name}</p>
                        <p className="text-gray-500 truncate">@{suggestion.user.username}</p>
                      </div>
                      <button className="ml-2 px-4 py-1.5 bg-black text-white font-bold rounded-full hover:bg-gray-800">
                        Suivre
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="px-4 py-3 text-blue-500 hover:bg-gray-100 cursor-pointer rounded-b-2xl">
              <span>Voir plus</span>
            </div>
          </div>

          {/* Pied de page */}
          <div className="text-xs text-gray-500">
            <div className="flex flex-wrap gap-2 mb-3">
              <a href="#" className="hover:underline">
                Conditions d'utilisation
              </a>
              <a href="#" className="hover:underline">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:underline">
                Politique relative aux cookies
              </a>
              <a href="#" className="hover:underline">
                Accessibilité
              </a>
              <a href="#" className="hover:underline">
                Informations sur les publicités
              </a>
              <a href="#" className="hover:underline">
                Plus
              </a>
            </div>
            <p>© 2025 SocialApp, Inc.</p>
          </div>
        </div>
      </div>

      {/* Navigation mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3">
        <Link href="/dashboard" className="p-2 text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>
        <Link href="#" className="p-2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
            />
          </svg>
        </Link>
        <Link href="#" className="p-2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </Link>
        <Link href="#" className="p-2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </Link>
      </div>

      {/* Bouton de tweet mobile */}
      <div className="md:hidden fixed right-4  text-black bottom-20">
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  )
}

