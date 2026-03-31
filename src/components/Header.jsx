import { useNavigate } from 'react-router-dom'

export default function Header({ onBack }) {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col shrink-0">
      <div
        style={{ height: '55px', backgroundColor: '#353535' }}
        className="flex items-center px-4"
      >
        <button onClick={() => navigate('/categories')} className="text-white">
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <rect width="22" height="2" rx="1" fill="white" />
            <rect y="7" width="22" height="2" rx="1" fill="white" />
            <rect y="14" width="22" height="2" rx="1" fill="white" />
          </svg>
        </button>
      </div>

      {onBack && (
        <button
          onClick={onBack}
          style={{ backgroundColor: '#FF6060', height: '30px' }}
          className="w-full flex items-center px-4 gap-2 text-white text-sm font-medium"
        >
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white">
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M7 1L2 6L7 11" stroke="#FF6060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          Назад
        </button>
      )}
    </div>
  )
}