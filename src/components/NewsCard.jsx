import { useNavigate } from 'react-router-dom'
import { categories } from '../data/articles'

export default function NewsCard({ article }) {
  const navigate = useNavigate()
  const cat = categories.find(c => c.id === article.category)

  return (
    <div
      className="px-4 py-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={() => navigate(`/detail/${article.id}`)}
    >
      <p className="text-gray-900 text-sm font-medium leading-snug">{article.title}</p>
      <p className="text-gray-400 text-xs mt-1">{article.date}</p>
      <p className="text-gray-400 text-xs">{cat?.label}</p>
    </div>
  )
}