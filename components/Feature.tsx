import { FeatureProps } from '@/types'
import { cn } from '@/utils/theme'
import { useThemeStore } from '@/store/themeStore'

export const Feature: React.FC<FeatureProps> = ({ 
  icon, 
  title = '', 
  description = '',
  className 
}) => {
  const { theme } = useThemeStore()
  
  if (!title) return null

  return (
    <div className={cn(
      "flex flex-col items-center text-center",
      theme === 'dark' ? 'text-white' : 'text-gray-900',
      className
    )}>
      {icon}
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className={cn(
        "mt-2",
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      )}>{description}</p>
    </div>
  )
}
