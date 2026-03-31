import { useParams, useNavigate } from 'react-router-dom'
import { articles, categories } from '../data/articles'
import Header from '../components/Header'
import CategoryPill from '../components/CategoryPill'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const article = articles.find(a => a.id === Number(id))
  const cat = categories.find(c => c.id === article?.category)

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-gray-800">
        Статья не найдена
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onBack={() => navigate(-1)} />
      <div className="px-4 pt-4 pb-8">
        <h1 className="text-gray-900 text-lg font-bold leading-snug">{article.title}</h1>
        <p className="text-gray-400 text-xs mt-1">{article.date}</p>
        <p className="text-gray-700 text-sm mt-4 leading-relaxed">{article.body}</p>
        <img
          src={article.image}
          alt={article.title}
          className="w-full rounded-xl mt-5 object-cover max-h-64"
        />
        <p className="text-gray-400 text-xs mt-2">
          Источник:{' '}
          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF7F24] underline"
          >
            {article.source}
          </a>
        </p>
        <div className="mt-4">
          <CategoryPill label={cat?.label} />
        </div>
      </div>
    </div>
  )
}