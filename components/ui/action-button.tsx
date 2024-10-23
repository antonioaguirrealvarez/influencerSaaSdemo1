import React from 'react';
import { cn } from 'classnames';
import { useThemeStore } from '../store/theme';
import Button from './button';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, onClick, className, ...props }) => {
  const { theme } = useThemeStore()
  
  return (
    <Button 
      variant="outline" 
      onClick={onClick}
      className={cn(
        "transition-colors",
        theme === 'dark' ? 
          "border-gray-600 text-white hover:bg-gray-700" : 
          "border-gray-300 hover:bg-gray-100",
        className
      )}
      {...props}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </Button>
  )
}
