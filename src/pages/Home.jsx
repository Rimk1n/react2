import { articles } from '../data/articles'
import Header from '../components/Header'
import NewsCard from '../components/NewsCard'

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div
        style={{ backgroundColor: '#808080', height: '30px' }}
        className="w-full flex items-center justify-center text-white text-sm font-medium"
      >
        Все новости
      </div>
      <div className="flex-1">
        {articles.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}