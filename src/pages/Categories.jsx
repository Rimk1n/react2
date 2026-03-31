import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { categories } from '../data/articles'
import Header from '../components/Header'

export default function Categories() {
  const navigate = useNavigate()
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div
        style={{ backgroundColor: '#FF7F24', height: '30px' }}
        className="w-full flex items-center justify-center text-white text-sm font-medium"
      >
        Категории
      </div>
      <div className="grid grid-cols-2 gap-4 px-4 mt-4 justify-items-center">
        {categories.map(cat => (
          <div
            key={cat.id}
            onClick={() => navigate(`/category/${cat.id}`)}
            onMouseEnter={() => setHoveredId(cat.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              width: '140px',
              height: '140px',
              backgroundColor: hoveredId === cat.id ? '#ECECEC' : '#ffffff',
              border: '1px solid #ECECEC',
              borderRadius: '16px',
              transition: 'background-color 0.2s',
              cursor: 'pointer',
            }}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-4xl">{cat.icon}</span>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#111111',
                marginTop: '8px',
              }}
            >
              {cat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}