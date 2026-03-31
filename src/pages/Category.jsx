import { useParams } from 'react-router-dom'
import { articles, categories } from '../data/articles'
import Header from '../components/Header'
import NewsCard from '../components/NewsCard'

export default function Category() {
  const { id } = useParams()
  const cat = categories.find(c => c.id === id)
  const filtered = id === 'all' ? articles : articles.filter(a => a.category === id)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div
        style={{ backgroundColor: '#19B886', height: '30px' }}
        className="w-full flex items-center justify-center text-white text-sm font-medium"
      >
        {cat?.label ?? 'Категория'}
      </div>
      <div className="flex-1">
        {filtered.length === 0 ? (
          <p className="text-gray-400 text-sm text-center mt-8">Нет новостей в этой категории</p>
        ) : (
          filtered.map(article => (
            <NewsCard key={article.id} article={article} />
          ))
        )}
      </div>
    </div>
  )
}