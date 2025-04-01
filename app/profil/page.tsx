"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Types pour les données fictives
type User = {
  id: string
  name: string
  username: string
  avatar: string
  banner?: string
  bio?: string
  location?: string
  website?: string
  joinDate: string
  following: number
  followers: number
  isVerified?: boolean
  isFollowing?: boolean
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
  isRetweet?: boolean
  retweetedBy?: string
  isPinned?: boolean
}

export default function ProfilePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("tweets")
  const [showEditProfileModal, setShowEditProfileModal] = useState(false)

  // Utilisateur du profil (fictif)
  const profileUser: User = {
    id: "1",
    name: "Jean Dupont",
    username: "jeandupont",
    avatar: "/placeholder.svg?height=150&width=150",
    banner: "/placeholder.svg?height=300&width=1500&text=Banner",
    bio: "Développeur web passionné | Créateur de contenu tech | Fan de Next.js et React",
    location: "Paris, France",
    website: "https://jeandupont.fr",
    joinDate: "Septembre 2020",
    following: 542,
    followers: 1287,
    isVerified: true,
    isFollowing: false,
  }

  // Données fictives pour les tweets
  const tweets: Tweet[] = [
    {
      id: "1",
      content:
        "Je viens de terminer mon nouveau projet avec Next.js et Tailwind CSS ! C'est incroyable comme ces technologies permettent de développer rapidement. #NextJS #TailwindCSS #WebDev",
      user: profileUser,
      likes: 42,
      retweets: 12,
      comments: 5,
      time: "2h",
      isPinned: true,
    },
    {
      id: "2",
      content:
        "Voici une capture d'écran de mon dernier projet. J'ai utilisé Next.js pour le frontend et une API REST pour le backend. Qu'en pensez-vous ?",
      user: profileUser,
      likes: 89,
      retweets: 24,
      comments: 15,
      time: "1j",
      image: "/placeholder.svg?height=300&width=500&text=Project+Screenshot",
    },
    {
      id: "3",
      content:
        "Les Server Components de React sont vraiment une révolution pour le développement web. Ils permettent de réduire considérablement la taille du bundle JavaScript envoyé au client. #React #ServerComponents",
      user: profileUser,
      likes: 56,
      retweets: 18,
      comments: 7,
      time: "2j",
    },
    {
      id: "4",
      content:
        "Je viens de publier un nouvel article sur mon blog à propos de l'optimisation des performances dans Next.js. N'hésitez pas à le lire et à me donner votre avis !",
      user: profileUser,
      likes: 73,
      retweets: 21,
      comments: 9,
      time: "3j",
      image: "/placeholder.svg?height=300&width=500&text=Blog+Article",
    },
    {
      id: "5",
      content:
        "Tailwind CSS est devenu mon framework CSS préféré. La productivité qu'il offre est incroyable ! #TailwindCSS #CSS #WebDev",
      user: profileUser,
      likes: 35,
      retweets: 8,
      comments: 4,
      time: "5j",
    },
  ]

  // Données fictives pour les tweets avec médias
  const mediaTweets = tweets.filter((tweet) => tweet.image)

  // Données fictives pour les tweets aimés
  const likedTweets: Tweet[] = [
    {
      id: "6",
      content:
        "Next.js 15 vient de sortir avec des améliorations significatives de performances et de nouvelles fonctionnalités !",
      user: {
        id: "2",
        name: "Marie Martin",
        username: "mariemartin",
        avatar: "/placeholder.svg?height=48&width=48&text=MM",
        joinDate: "Janvier 2019",
        following: 320,
        followers: 450,
      },
      likes: 215,
      retweets: 87,
      comments: 32,
      time: "1j",
    },
    {
      id: "7",
      content:
        "Voici un tutoriel complet sur comment utiliser les Server Actions dans Next.js. C'est une fonctionnalité qui change vraiment la donne !",
      user: {
        id: "3",
        name: "Pierre Dubois",
        username: "pierredubois",
        avatar: "/placeholder.svg?height=48&width=48&text=PD",
        joinDate: "Mars 2021",
        following: 156,
        followers: 289,
      },
      likes: 124,
      retweets: 45,
      comments: 18,
      time: "2j",
      image: "/placeholder.svg?height=300&width=500&text=Tutorial",
    },
  ]

  // Fonction pour afficher les tweets en fonction de l'onglet actif
  const renderTweets = () => {
    switch (activeTab) {
      case "tweets":
        return tweets.map((tweet) => (
          <div key={tweet.id} className="p-4 border-b hover:bg-gray-50">
            {tweet.isPinned && (
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
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
                Tweet épinglé
              </div>
            )}
            <div className="flex">
              <img
                src={tweet.user.avatar || "/placeholder.svg"}
                alt={tweet.user.name}
                className="h-12 w-12 rounded-full mr-3"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center">
                  <span className="font-bold mr-1">{tweet.user.name}</span>
                  {tweet.user.isVerified && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  <span className="text-gray-500 ml-1">@{tweet.user.username}</span>
                  <span className="mx-1 text-gray-500">·</span>
                  <span className="text-gray-500">{tweet.time}</span>
                </div>
                <p className="mt-1 mb-2">{tweet.content}</p>

                {tweet.image && (
                  <div className="mt-3 mb-3 rounded-xl overflow-hidden border border-gray-200">
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
      case "replies":
        return (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <p className="text-gray-500 mb-6 max-w-md">
              Lorsque {profileUser.name} répond à quelqu'un, ces réponses apparaîtront ici.
            </p>
          </div>
        )
      case "media":
        return mediaTweets.length > 0 ? (
          mediaTweets.map((tweet) => (
            <div key={tweet.id} className="p-4 border-b hover:bg-gray-50">
              <div className="flex">
                <img
                  src={tweet.user.avatar || "/placeholder.svg"}
                  alt={tweet.user.name}
                  className="h-12 w-12 rounded-full mr-3"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center">
                    <span className="font-bold mr-1">{tweet.user.name}</span>
                    {tweet.user.isVerified && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <span className="text-gray-500 ml-1">@{tweet.user.username}</span>
                    <span className="mx-1 text-gray-500">·</span>
                    <span className="text-gray-500">{tweet.time}</span>
                  </div>
                  <p className="mt-1 mb-2">{tweet.content}</p>

                  {tweet.image && (
                    <div className="mt-3 mb-3 rounded-xl overflow-hidden border border-gray-200">
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
            <p className="text-gray-500 mb-6 max-w-md">
              Lorsque {profileUser.name} partage des photos et des vidéos, elles apparaîtront ici.
            </p>
          </div>
        )
      case "likes":
        return likedTweets.map((tweet) => (
          <div key={tweet.id} className="p-4 border-b hover:bg-gray-50">
            <div className="flex">
              <img
                src={tweet.user.avatar || "/placeholder.svg"}
                alt={tweet.user.name}
                className="h-12 w-12 rounded-full mr-3"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center">
                  <span className="font-bold mr-1">{tweet.user.name}</span>
                  <span className="text-gray-500 ml-1">@{tweet.user.username}</span>
                  <span className="mx-1 text-gray-500">·</span>
                  <span className="text-gray-500">{tweet.time}</span>
                </div>
                <p className="mt-1 mb-2">{tweet.content}</p>

                {tweet.image && (
                  <div className="mt-3 mb-3 rounded-xl overflow-hidden border border-gray-200">
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
                  <button className="flex items-center text-red-500 group">
                    <div className="p-2 rounded-full group-hover:bg-red-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
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
      default:
        return null
    }
  }

  // Fonction pour basculer l'état de suivi
  const toggleFollow = () => {
    // Dans une vraie application, on ferait un appel API ici
    profileUser.isFollowing = !profileUser.isFollowing
    // Forcer une mise à jour de l'interface
    // setProfileUser({...profileUser}); // Dans une vraie application
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Barre de navigation mobile */}
      <div className="md:hidden flex items-center justify-between p-4 border-b">
        <Link href="/dashboard" className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <div className="text-lg font-bold">{profileUser.name}</div>
        <div className="w-5"></div> {/* Espace vide pour équilibrer */}
      </div>

      <div className="flex">
        {/* Barre latérale de navigation (visible uniquement sur desktop) */}
        <div className="hidden md:flex md:w-64 lg:w-72 flex-col h-screen p-4 border-r sticky top-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mb-6">
            <span className="text-xl font-bold">S</span>
          </div>

          <nav className="space-y-2">
            <Link
              href="/dashboard"
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
              href="/profile"
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
              src={profileUser.avatar || "/placeholder.svg"}
              alt={profileUser.name}
              className="h-10 w-10 rounded-full mr-3"
            />
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm truncate">{profileUser.name}</p>
              <p className="text-gray-500 text-sm truncate">@{profileUser.username}</p>
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
        <div className="flex-1 min-h-screen text-black">
          {/* En-tête de profil (visible uniquement sur desktop) */}
          <div className="hidden md:flex items-center p-4 border-b sticky top-0 bg-white z-10">
            <Link href="/dashboard" className="p-2 rounded-full hover:bg-gray-100 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <div>
              <h1 className="text-xl font-bold">{profileUser.name}</h1>
              <p className="text-sm text-gray-500">{tweets.length} tweets</p>
            </div>
          </div>

          {/* Bannière et informations de profil */}
          <div>
            {/* Bannière */}
            <div className="h-48 bg-gray-700 relative">
              {profileUser.banner && (
                <img
                  src={profileUser.banner || "/placeholder.svg"}
                  alt=""
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Photo de profil et boutons */}
            <div className="px-4 pb-4 relative">
              <div className="flex justify-between items-start">
                <div className="relative -mt-16">
                  <img
                    src={profileUser.avatar || "/placeholder.svg"}
                    alt=""
                    className="h-32 w-32 rounded-full border-4 border-white"
                  />
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => setShowEditProfileModal(true)}
                    className="px-4 py-2 border border-gray-300 font-bold rounded-full hover:bg-gray-100"
                  >
                    Éditer le profil
                  </button>
                </div>
              </div>

              {/* Informations de profil */}
              <div className="mt-4">
                <div className="flex items-center">
                  <h2 className="text-xl font-bold">{profileUser.name}</h2>
                  {profileUser.isVerified && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <p className="text-gray-500">@{profileUser.username}</p>

                {profileUser.bio && <p className="mt-3">{profileUser.bio}</p>}

                <div className="flex flex-wrap mt-3 text-gray-500">
                  {profileUser.location && (
                    <div className="flex items-center mr-4 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{profileUser.location}</span>
                    </div>
                  )}

                  {profileUser.website && (
                    <div className="flex items-center mr-4 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                      <a
                        href={profileUser.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {profileUser.website.replace(/(^\w+:|^)\/\//, "")}
                      </a>
                    </div>
                  )}

                  <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>A rejoint Twitter en {profileUser.joinDate}</span>
                  </div>
                </div>

                <div className="flex mt-3">
                  <div className="mr-5">
                    <span className="font-bold">{profileUser.following}</span>
                    <span className="text-gray-500 ml-1">Abonnements</span>
                  </div>
                  <div>
                    <span className="font-bold">{profileUser.followers}</span>
                    <span className="text-gray-500 ml-1">Abonnés</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Onglets */}
            <div className="flex border-b text-black">
              <button
                className={`flex-1 py-4 text-center font-medium relative ${activeTab === "tweets" ? "font-bold" : "text-gray-500 hover:bg-gray-50"}`}
                onClick={() => setActiveTab("tweets")}
              >
                Tweets
                {activeTab === "tweets" && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
                )}
              </button>
              <button
                className={`flex-1 py-4 text-center font-medium relative ${activeTab === "replies" ? "font-bold" : "text-gray-500 hover:bg-gray-50"}`}
                onClick={() => setActiveTab("replies")}
              >
                Réponses
                {activeTab === "replies" && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
                )}
              </button>
              <button
                className={`flex-1 py-4 text-center font-medium relative ${activeTab === "media" ? "font-bold" : "text-gray-500 hover:bg-gray-50"}`}
                onClick={() => setActiveTab("media")}
              >
                Médias
                {activeTab === "media" && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
                )}
              </button>
              <button
                className={`flex-1 py-4 text-center font-medium relative ${activeTab === "likes" ? "font-bold" : "text-gray-500 hover:bg-gray-50"}`}
                onClick={() => setActiveTab("likes")}
              >
                J'aime
                {activeTab === "likes" && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
                )}
              </button>
            </div>

            {/* Contenu des onglets */}
            <div>{renderTweets()}</div>
          </div>
        </div>

        {/* Barre latérale droite (visible uniquement sur desktop) */}
        <div className="hidden lg:block lg:w-80 xl:w-96 p-4 sticky top-0 h-screen overflow-y-auto">
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

          {/* Suggestions de personnes à suivre */}
          <div className="bg-gray-50 rounded-2xl mb-4">
            <div className="px-4 py-3 border-b border-gray-200">
              <h2 className="text-xl font-bold">Vous pourriez aimer</h2>
            </div>

            {[1, 2, 3].map((i) => (
              <div key={i} className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center">
                  <img
                    src={`/placeholder.svg?height=48&width=48&text=U${i}`}
                    alt={`User ${i}`}
                    className="h-12 w-12 rounded-full mr-3"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold truncate">Utilisateur {i}</p>
                        <p className="text-gray-500 truncate">@utilisateur{i}</p>
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

          {/* Sujets tendances */}
          <div className="bg-gray-50 rounded-2xl mb-4">
            <div className="px-4 py-3 border-b border-gray-200">
              <h2 className="text-xl font-bold">Tendances pour vous</h2>
            </div>

            {[
              { name: "Développement Web", category: "Technologie", tweets: 5240 },
              { name: "JavaScript", category: "Programmation", tweets: 3120 },
              { name: "React", category: "Programmation", tweets: 2890 },
            ].map((trend, i) => (
              <div key={i} className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
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
        <Link href="/dashboard" className="p-2 text-gray-500">
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
        <Link href="#" className="p-2 text-blue-500">
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </Link>
      </div>

      {/* Modal d'édition de profil (affiché conditionnellement) */}
      {showEditProfileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <button
                  onClick={() => setShowEditProfileModal(false)}
                  className="p-2 rounded-full hover:bg-gray-100 mr-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <h2 className="text-xl font-bold">Éditer le profil</h2>
              </div>
              <button
                onClick={() => setShowEditProfileModal(false)}
                className="px-4 py-1.5 bg-black text-white font-bold rounded-full hover:bg-gray-800"
              >
                Enregistrer
              </button>
            </div>

            <div className="p-4">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Bannière</label>
                <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  {profileUser.banner ? (
                    <img
                      src={profileUser.banner || "/placeholder.svg"}
                      alt="Banner"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Photo de profil</label>
                <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center">
                  <img
                    src={profileUser.avatar || "/placeholder.svg"}
                    alt={profileUser.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  defaultValue={profileUser.name}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  defaultValue={profileUser.bio}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Localisation
                </label>
                <input
                  type="text"
                  id="location"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  defaultValue={profileUser.location}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Site web
                </label>
                <input
                  type="url"
                  id="website"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  defaultValue={profileUser.website}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

